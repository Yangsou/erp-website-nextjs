import { redirect } from 'next/navigation'

import { routing } from '@/i18n/routing'

export default function IndexPage() {
  const { defaultLocale } = routing

  redirect(`/${defaultLocale}`)
}
