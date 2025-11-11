import axios, { isAxiosError } from 'axios'
import { NextResponse } from 'next/server'

import { requireEnv, trimTrailingSlash } from '@/lib/env'

import type { AxiosRequestConfig } from 'axios'
import type { NextRequest } from 'next/server'

type StrapiMedia = {
  url?: string | null
  processed_url?: string | null
} & Record<string, unknown>

const isStrapiMedia = (value: unknown): value is StrapiMedia =>
  Boolean(value && typeof value === 'object')

type SharedMediaBlock = {
  __component: 'shared.media'
  file?: StrapiMedia | null
} & Record<string, unknown>

type SharedSliderBlock = {
  __component: 'shared.slider'
  files?: Array<StrapiMedia | null | undefined> | null
} & Record<string, unknown>

type ArticleBlock = (SharedMediaBlock | SharedSliderBlock | Record<string, unknown>) & {
  __component?: string | null
}

type ArticleData = {
  cover?: StrapiMedia | null
  cover_url?: string | null
  blocks?: Array<ArticleBlock | null | undefined> | null
} & Record<string, unknown>

type ArticleResponse = {
  data: ArticleData | null
} & Record<string, unknown>

export async function GET(_request: NextRequest, { params }: { params: { documentId: string } }) {
  try {
    const { documentId } = params
    const baseUrl = trimTrailingSlash(requireEnv('STRAPI_API_URL'))
    const apiKey = requireEnv('STRAPI_API_KEY')
    const environment = process.env.ENVIRONMENT ?? 'production'

    const requestConfig: AxiosRequestConfig<ArticleResponse> = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/articles/${documentId}?populate[blocks][populate]=*&populate[cover]=true&populate[category]=true&populate[author]=true`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }

    const response = await axios.request<ArticleResponse>(requestConfig)
    const article = response.data.data ?? null

    if (!article) {
      return NextResponse.json({ success: true, data: response.data }, { status: 200 })
    }

    if (article.cover?.url) {
      const coverUrl =
        environment === 'development' ? `${baseUrl}${article.cover.url}` : article.cover.url

      article.cover_url = coverUrl
    }

    const normalizedBlocks = (article.blocks ?? []).filter((block): block is ArticleBlock =>
      Boolean(block && typeof block === 'object')
    )

    normalizedBlocks.forEach((block) => {
      if (!block.__component) {
        return
      }

      if (block.__component === 'shared.media') {
        const mediaFile = (block as SharedMediaBlock).file
        if (mediaFile?.url) {
          mediaFile.processed_url =
            environment === 'development' ? `${baseUrl}${mediaFile.url}` : mediaFile.url
        }
        return
      }

      if (block.__component === 'shared.slider') {
        const sliderFiles = (block as SharedSliderBlock).files?.filter(isStrapiMedia) ?? []

        sliderFiles.forEach((file) => {
          const sourceUrl = file.url
          if (!sourceUrl) {
            return
          }

          file.processed_url = environment === 'development' ? `${baseUrl}${sourceUrl}` : sourceUrl
        })
      }
    })

    article.blocks = normalizedBlocks
    response.data.data = article

    return NextResponse.json({ success: true, data: response.data }, { status: 200 })
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Article detail fetch error:', error.response?.data ?? error.message)
    } else {
      console.error('Article detail fetch error:', error)
    }

    return NextResponse.json(
      { error: 'Failed to fetch article details. Please try again later.' },
      { status: 500 }
    )
  }
}
