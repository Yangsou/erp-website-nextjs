import axios, { isAxiosError } from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

import { requireEnv, trimTrailingSlash } from '@/lib/env'

import type { AxiosRequestConfig } from 'axios'
import type { NextRequest } from 'next/server'

const subscribeSchema = z.object({
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const rawBody = (await request.json()) as Record<string, unknown>

    const parsedBody = subscribeSchema.safeParse({
      email: rawBody.email,
    })

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: 'Invalid email format', details: parsedBody.error.flatten() },
        { status: 400 }
      )
    }

    const { email } = parsedBody.data

    const data = JSON.stringify({
      data: {
        email,
      },
    })

    const baseUrl = trimTrailingSlash(requireEnv('STRAPI_API_URL'))
    const apiKey = requireEnv('STRAPI_API_KEY')

    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/subscribers`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      data,
    }

    const response = await axios.request<Record<string, unknown>>(config)

    return NextResponse.json({ success: true, data: response.data }, { status: 200 })
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Newsletter subscription error:', error.response?.data ?? error.message)
    } else {
      console.error('Newsletter subscription error:', error)
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    )
  }
}
