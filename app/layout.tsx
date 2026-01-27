import GoogleTagManager from '@/components/GoogleTagManager'
import { SWRProvider } from '@/components/providers/swr-provider'
import { Toaster } from '@/components/ui/sonner'

import type { LayoutProps } from '@/.next/types/app/layout'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Ai+Di - Ai that reflects. Not replaces.',
  generator: 'Ai+Di Company',
  keywords: [
    'AI',
    'Artificial Intelligence',
    'Divine Intelligence',
    'Consciousness',
    'Technology',
    'Innovation',
  ],
  authors: [{ name: 'Ai+Di Team' }],
  creator: 'Ai+Di',
  publisher: 'Ai+Di',
  robots: 'index, follow',
  icons: {
    icon: '/aidi-logo-meta.svg',
    shortcut: '/aidi-logo-meta.svg',
    apple: '/aidi-logo-meta.svg',
  },
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="vi">
      <head>
        {/* Additional meta tags for better social sharing */}
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="630"
        />
        <meta
          property="og:image:type"
          content="image/png"
        />
        <meta
          name="theme-color"
          content="#0f172a"
        />
        <meta
          name="msapplication-TileColor"
          content="#0f172a"
        />
        <meta
          name="msapplication-TileImage"
          content="https://www.aidi.world/og-image-fallback.png"
        />
        <meta
          name="application-name"
          content="Ai+Di"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Ai+Di"
        />
        <meta
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/aidi-logo-meta.svg"
        />
        <link
          rel="apple-touch-icon"
          href="/aidi-logo-meta.svg"
        />

        {/* Additional meta tags for better Teams compatibility */}
        <meta
          name="msapplication-config"
          content="/browserconfig.xml"
        />
        <meta
          name="msapplication-TileColor"
          content="#0f172a"
        />
        <meta
          name="msapplication-TileImage"
          content="/aidi-logo-meta.svg"
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="630"
        />
        <meta
          property="og:image:type"
          content="image/png"
        />
        <meta
          property="og:site_name"
          content="Ai+Di Academy"
        />
        <meta
          property="og:locale"
          content="vi_VN"
        />
        <meta
          property="og:type"
          content="website"
        />
      </head>
      <body>
        <GoogleTagManager />
        <SWRProvider>{children}</SWRProvider>
        <Toaster />
      </body>
    </html>
  )
}
