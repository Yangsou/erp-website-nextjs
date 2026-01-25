import { getTranslations } from 'next-intl/server'

import PdtAcademyView from '@/components/pdt-academy/pdt-academy-view'

import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'AcademyPage.Hero' })
  const title = `${t('title')} ${t('highlight')}`
  const description = t('description')

  return {
    title,
    description,
  }
}
export default function PdtAcademyPage() {
  return <PdtAcademyView />
}
