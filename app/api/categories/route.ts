import axios, { isAxiosError } from 'axios'
import { NextResponse } from 'next/server'

import { requireEnv, trimTrailingSlash } from '@/lib/env'

import type { AxiosRequestConfig } from 'axios'
import type { NextRequest } from 'next/server'

type StrapiCategory = {
  id: number
  documentId: string
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  articles?: Array<Record<string, unknown>>
}

type CategoryResponse = {
  data: StrapiCategory[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export async function GET(_request: NextRequest) {
  try {
    const baseUrl = trimTrailingSlash(requireEnv('STRAPI_API_URL'))
    const apiKey = requireEnv('STRAPI_API_KEY')

    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/categories?populate=articles`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }

    const response = await axios.request<CategoryResponse>(config)
    const categories = response.data.data

    return NextResponse.json(
      { success: true, data: categories, meta: response.data.meta },
      { status: 200 }
    )
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Categories fetch error:', error.response?.data ?? error.message)
    } else {
      console.error('Categories fetch error:', error)
    }

    return NextResponse.json(
      { error: 'Failed to fetch categories. Please try again later.' },
      { status: 500 }
    )
  }
}
