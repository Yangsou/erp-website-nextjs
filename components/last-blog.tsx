'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { useCategories, useInfiniteArticles } from '@/lib/hooks/use-blog-data'
import { cn } from '@/lib/utils'

import ArticleItem, { ArticelItemSkeleton } from './article-item'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

function CategoryItem({
  name,
  isSelected,
  onClick,
}: {
  name: string
  isSelected: boolean
  onClick?: () => void
}) {
  return (
    <Button
      variant="outline"
      className={cn(
        'h-16 rounded-none border border-[#A0DCDD] px-6 py-2 align-middle font-[Manrope] text-lg font-semibold leading-[150%] text-[#A0DCDD] hover:bg-[#A0DCDD] hover:text-[#0036AF]',
        { 'bg-[#A0DCDD] text-[#0036AF]': isSelected }
      )}
      onClick={onClick}
    >
      {name}
    </Button>
  )
}

export default function LastBlog() {
  const t = useTranslations('BlogPage')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { categories, isLoading: isCategoriesLoading } = useCategories()
  const { articles, hasMore, loadMore, isLoading } = useInfiniteArticles(
    10,
    selectedCategory ?? undefined
  )

  return (
    <section className="min-h-[calc(100vh_-_420px)] pb-8">
      <div className="container grid h-full grid-cols-12 gap-8 pb-6">
        <div className="col-span-12">
          <div className="align-middle font-[Manrope] text-[28px] font-semibold leading-[130%] text-[#202222]">
            {t('other_category')}
          </div>
          <div>
            {isCategoriesLoading && (
              <div className="flex space-x-4">
                <Skeleton className="mt-4 h-16 w-32 bg-gray-200" />
                <Skeleton className="mt-4 h-16 w-32 bg-gray-200" />
              </div>
            )}
            {!isCategoriesLoading && (
              <div className="mt-4 flex flex-wrap gap-4">
                {categories.map((category) => (
                  <CategoryItem
                    isSelected={selectedCategory === category.name}
                    name={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    key={category.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-12 mb-2 flex flex-col items-start justify-start gap-4">
          <div className="align-middle font-[Manrope] text-[28px] font-semibold leading-[130%] text-[#202222]">
            {t('last_blog')}
          </div>
        </div>

        {isLoading && <ArticelItemSkeleton count={6} />}

        {articles.map((article) => (
          <ArticleItem
            article={article}
            key={article.id}
          />
        ))}
        {hasMore && (
          <div className="col-span-12 flex justify-center pt-4">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#0036AF] hover:bg-[#A0DCDD]"
            >
              {t('view_more')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
