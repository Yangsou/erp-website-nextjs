import axios, { isAxiosError } from 'axios'
import { NextResponse } from 'next/server'

import { requireEnv, trimTrailingSlash } from '@/lib/env'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { NextRequest } from 'next/server'

type ArticleListItem = {
  cover?: {
    url?: string | null
  } | null
  cover_url?: string | null
} & Record<string, unknown>

type ArticleListMeta = {
  pagination?: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

type ArticleListResponse = {
  data: ArticleListItem[]
  meta?: ArticleListMeta
} & Record<string, unknown>

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') ?? '1'
    const pageSize = searchParams.get('pageSize') ?? '10'
    const baseUrl = trimTrailingSlash(requireEnv('STRAPI_API_URL'))
    const apiKey = requireEnv('STRAPI_API_KEY')
    const config: AxiosRequestConfig<ArticleListResponse> = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/articles?populate=category&populate=author&populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }

    const response: AxiosResponse<ArticleListResponse> =
      await axios.request<ArticleListResponse>(config)

    const transformedArticles = response.data.data.map((article) => {
      const sourceUrl = article.cover?.url ?? null
      const isAbsolute = typeof sourceUrl === 'string' && /^https?:\/\//.test(sourceUrl)
      let normalizedCoverUrl: string | null = null

      if (typeof sourceUrl === 'string' && sourceUrl.trim().length > 0) {
        normalizedCoverUrl = isAbsolute ? sourceUrl : `${baseUrl}${sourceUrl}`
      }

      return { ...article, cover_url: normalizedCoverUrl }
    })

    return NextResponse.json(
      {
        success: true,
        data: transformedArticles,
        ...(response.data.meta ? { meta: response.data.meta } : {}),
      },
      { status: 200 }
    )
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Articles fetch error:', error.response?.data ?? error.message)
    } else {
      console.error('Articles fetch error:', error)
    }

    return NextResponse.json(
      { error: 'Failed to fetch articles. Please try again later.' },
      { status: 500 }
    )
  }
}
