import axios, { isAxiosError } from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

import { requireEnv, trimTrailingSlash } from '@/lib/env'

import type { AxiosRequestConfig } from 'axios'
import type { NextRequest } from 'next/server'

const contactSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const rawBody = (await request.json()) as Record<string, unknown>

    const parsedBody = contactSchema.safeParse({
      firstname: rawBody.firstname,
      lastname: rawBody.lastname,
      email: rawBody.email,
      phoneNumber: rawBody.phone_number ?? rawBody.phoneNumber,
      subject: rawBody.subject,
      message: rawBody.message,
    })

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: 'Invalid form submission', details: parsedBody.error.flatten() },
        { status: 400 }
      )
    }

    const { firstname, lastname, email, phoneNumber, subject, message } = parsedBody.data

    const data = JSON.stringify({
      data: {
        firstname,
        lastname,
        email,
        phone_number: phoneNumber,
        subject,
        message,
      },
    })

    const baseUrl = trimTrailingSlash(requireEnv('STRAPI_API_URL'))
    const apiKey = requireEnv('STRAPI_API_KEY')

    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseUrl}/api/contact-submissions`,
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
      console.error('Contact form submission error:', error.response?.data ?? error.message)
    } else {
      console.error('Contact form submission error:', error)
    }

    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    )
  }
}
