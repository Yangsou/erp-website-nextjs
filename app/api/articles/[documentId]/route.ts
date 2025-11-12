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
  meta?: Record<string, unknown>
} & Record<string, unknown>

export async function GET(_request: NextRequest, { params }: { params: { documentId: string } }) {
  try {
    const { documentId } = params
    const baseUrl = trimTrailingSlash(requireEnv('STRAPI_API_URL'))
    const apiKey = requireEnv('STRAPI_API_KEY')

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
      return NextResponse.json(
        {
          success: true,
          data: null,
          ...(response.data.meta ? { meta: response.data.meta } : {}),
        },
        { status: 200 }
      )
    }

    const resolveUrl = (value: string | null | undefined): string | null => {
      if (!value) {
        return null
      }
      return /^https?:\/\//.test(value) ? value : `${baseUrl}${value}`
    }

    const normalizedBlocks = (article.blocks ?? [])
      .filter((block): block is ArticleBlock => Boolean(block && typeof block === 'object'))
      .map((block) => {
        if (!block.__component) {
          return block
        }

        if (block.__component === 'shared.media') {
          const mediaBlock = block as SharedMediaBlock
          const mediaFile = mediaBlock.file

          if (mediaFile?.url) {
            mediaBlock.file = {
              ...mediaFile,
              processed_url: resolveUrl(mediaFile.url),
            }
          }

          return mediaBlock
        }

        if (block.__component === 'shared.slider') {
          const sliderBlock = block as SharedSliderBlock
          const sliderFiles = sliderBlock.files?.filter(isStrapiMedia) ?? []

          sliderBlock.files = sliderFiles.map((file) => ({
            ...file,
            processed_url: resolveUrl(file.url),
          }))

          return sliderBlock
        }

        return block
      })

    const normalizedArticle: ArticleData = {
      ...article,
      cover_url: resolveUrl(article.cover?.url),
      blocks: normalizedBlocks,
    }

    return NextResponse.json(
      {
        success: true,
        data: normalizedArticle,
        ...(response.data.meta ? { meta: response.data.meta } : {}),
      },
      { status: 200 }
    )
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
