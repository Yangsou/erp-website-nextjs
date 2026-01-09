import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ai+Di - Ai that reflects. Not replaces.',
  description:
    'Building Ai that reflects human consciousness and enhances our potential for conscious living in the digital age.',
  openGraph: {
    title: 'Ai+Di - Ai that reflects. Not replaces.',
    description:
      'Building Ai that reflects human consciousness and enhances our potential for conscious living in the digital age.',
    url: 'https://www.aidi.world',
    siteName: 'Ai+Di',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Ai+Di - Ai that reflects. Not replaces.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ai+Di - Ai that reflects. Not replaces.',
    description:
      'Building Ai that reflects human consciousness and enhances our potential for conscious living in the digital age.',
    images: ['/og-image.svg'],
  },
}
