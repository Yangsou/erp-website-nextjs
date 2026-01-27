import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import BtnScrollTop from '@/components/btn-scroll-top'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { routing } from '@/i18n/routing'

import './globals.css'

type Props = Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  return (
    <NextIntlClientProvider locale={locale}>
      <main className="min-h-screen overflow-x-hidden text-white">
        <Navigation />

        <div className="relative z-10">{children}</div>
        <Footer />
        <BtnScrollTop />
      </main>
    </NextIntlClientProvider>
  )
}
