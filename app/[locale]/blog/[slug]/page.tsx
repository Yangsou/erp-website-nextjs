import { BlogDetailView, type ArticleDetail } from '@/components/blog-detail-view'
import { getCurrentDomain } from '@/lib/env'

import type { Metadata } from 'next'

function fnFetchArticleDetail(slug: string, locale: string) {
  return fetch(`${getCurrentDomain()}/api/articles/${slug}?locale=${locale}`)
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}): Promise<Metadata> {
  const { slug, locale } = await params

  const article = (await (
    await fnFetchArticleDetail(slug, locale)
  )
    .json()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    .then((res) => res.data)) as ArticleDetail

  const { title, cover_url: coverUrl } = article
  const description = title

  return {
    title,
    description,
    openGraph: {
      images: [coverUrl ?? ''],
      title,
      description,
    },
  }
}
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params

  const article = (await (
    await fnFetchArticleDetail(slug, locale)
  )
    .json()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    .then((res) => res.data)) as ArticleDetail

  return (
    <BlogDetailView
      isError={false}
      isLoading={false}
      rawArticle={article}
    />
  )
}
