import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import BtnScrollTop from '@/components/btn-scroll-top'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { routing } from '@/i18n/routing'

import type { Metadata } from 'next'

import './globals.css'

type Props = Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>

export async function generateMetadata(
  { params }: Props
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'HomePage' })

  const title = `${t('HeroSection.title')} ${t('HeroSection.sub_title')}`
  const description = t('HeroSection.description')
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  }
}
// export const metadata: Metadata = {
//   title: 'Ai+Di - Ai that reflects. Not replaces.',
//   description:
//     'Building Ai that reflects human consciousness and enhances our potential for conscious living in the digital age.',
//   generator: 'Ai+Di Company',
//   keywords: [
//     'AI',
//     'Artificial Intelligence',
//     'Divine Intelligence',
//     'Consciousness',
//     'Technology',
//     'Innovation',
//   ],
//   authors: [{ name: 'Ai+Di Team' }],
//   creator: 'Ai+Di',
//   publisher: 'Ai+Di',
//   robots: 'index, follow',
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://www.aidi.world',
//     siteName: 'Ai+Di',
//     title: 'Ai+Di - Ai that reflects. Not replaces.',
//     description:
//       'Building Ai that reflects human consciousness and enhances our potential for conscious living in the digital age.',
//     images: [
//       {
//         url: 'https://www.aidi.world/og-image-fallback.png',
//         width: 1200,
//         height: 630,
//         alt: 'Ai+Di - Ai that reflects. Not replaces.',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@aidi_world',
//     creator: '@aidi_world',
//     title: 'Ai+Di - Ai that reflects. Not replaces.',
//     description:
//       'Building Ai that reflects human consciousness and enhances our potential for conscious living in the digital age.',
//     images: ['https://www.aidi.world/og-image-fallback.png'],
//   },
//   icons: {
//     icon: '/aidi-logo-meta.svg',
//     shortcut: '/aidi-logo-meta.svg',
//     apple: '/aidi-logo-meta.svg',
//   },
// }

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
