'use client'

import { motion } from 'framer-motion'
import {
  Calendar,
  User,
  ArrowLeft,
  Clock,
  Quote,
  ChevronLeft,
  ChevronRight,
  Brain,
  Heart,
  HelpCircle,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

import AnimatedBackground from '@/components/animated-background'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Block interfaces based on Strapi response
type RichTextBlock = {
  __component: 'shared.rich-text'
  id: number
  body: string
}

type QuoteBlock = {
  __component: 'shared.quote'
  id: number
  title: string
  body: string
}

type ImageFormats = {
  large?: { url: string }
  medium?: { url: string }
  small?: { url: string }
  thumbnail?: { url: string }
}

type MediaFile = {
  id?: number
  url: string
  processed_url?: string
  alternativeText?: string | null
  caption?: string | null
  formats?: ImageFormats | null
}

type MediaBlock = {
  __component: 'shared.media'
  id: number
  desc?: string | null
  file?: MediaFile | null
}

type SliderBlock = {
  __component: 'shared.slider'
  id: number
  files?: Array<MediaFile | null | undefined> | null
}

type Block = RichTextBlock | QuoteBlock | MediaBlock | SliderBlock

// Article detail interface based on Strapi response
type ArticleDetail = {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  short_description: string | null
  cover?: {
    url: string
    formats?: {
      large?: { url: string }
      medium?: { url: string }
      small?: { url: string }
      thumbnail?: { url: string }
    }
  }
  cover_url?: string
  category?: {
    id: number
    documentId: string
    name: string
    slug: string
    description: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
  } | null
  author?: {
    id: number
    documentId: string
    name: string
    email: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  } | null
  blocks?: Block[] | null
}

type ArticleSummary = {
  id: number
  documentId: string
  slug: string
  title: string
}

type ArticlesApiResponse = {
  success: boolean
  data?: {
    data?: ArticleSummary[]
  }
  error?: string
}

type ArticleDetailApiResponse = {
  success: boolean
  data?: {
    data?: ArticleDetail | null
  }
  error?: string
}

type NormalizedArticleDetail = ArticleDetail & {
  category: NonNullable<ArticleDetail['category']>
  author: NonNullable<ArticleDetail['author']>
  blocks: Block[]
}

const getStrapiBaseUrl = (): string =>
  process.env.NODE_ENV === 'development' ? (process.env.NEXT_PUBLIC_STRAPI_API_URL ?? '') : ''

const resolveMediaUrl = (file: MediaFile | null | undefined): string => {
  if (!file) {
    return ''
  }

  if (file.processed_url) {
    return file.processed_url
  }

  const baseUrl = getStrapiBaseUrl()
  const candidate =
    file.formats?.large?.url ??
    file.formats?.medium?.url ??
    file.formats?.small?.url ??
    file.formats?.thumbnail?.url ??
    file.url

  if (!candidate) {
    return ''
  }

  return candidate.startsWith('http') ? candidate : `${baseUrl}${candidate}`
}

const getMediaAltText = (file: MediaFile | null | undefined, fallback: string): string => {
  if (!file) {
    return fallback
  }

  return file.alternativeText ?? file.caption ?? fallback
}

const isBlock = (block: Block | null | undefined): block is Block =>
  Boolean(block && typeof block === 'object' && '__component' in block)

const FALLBACK_CATEGORY: NonNullable<ArticleDetail['category']> = {
  id: 0,
  documentId: 'fallback-category',
  name: 'Uncategorized',
  slug: 'default',
  description: null,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
}

const FALLBACK_AUTHOR: NonNullable<ArticleDetail['author']> = {
  id: 0,
  documentId: 'fallback-author',
  name: 'Unknown Author',
  email: 'unknown@example.com',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
}

// Component to render markdown-like content
const RichTextRenderer = ({ content }: { content: string }) => {
  // Function to parse and render links within text
  const parseLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }

      // Add the link
      parts.push(
        <a
          key={`link-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline transition-colors hover:text-cyan-300"
        >
          {match[1]}
        </a>
      )

      lastIndex = match.index + match[0].length
    }

    // Add remaining text after the last link
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  // Function to parse and render italic text
  const parseItalic = (text: string | React.ReactNode) => {
    if (typeof text !== 'string') return text

    const italicRegex = /\*([^*]+)\*/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = italicRegex.exec(text)) !== null) {
      // Add text before the italic
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }

      // Add the italic text
      parts.push(
        <em
          key={`italic-${match.index}`}
          className="italic"
        >
          {match[1]}
        </em>
      )

      lastIndex = match.index + match[0].length
    }

    // Add remaining text after the last italic
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  // Main rendering function
  const renderContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        const headingText = line.replace('## ', '')
        return (
          <h2
            key={index}
            className="mb-4 mt-8 text-2xl font-bold text-white"
          >
            {parseItalic(headingText)}
          </h2>
        )
      }
      if (line.startsWith('### ')) {
        const headingText = line.replace('### ', '')
        return (
          <h3
            key={index}
            className="mb-3 mt-6 text-xl font-semibold text-white"
          >
            {parseItalic(headingText)}
          </h3>
        )
      }
      if (line.startsWith('- ')) {
        const listText = line.replace('- ', '')
        return (
          <li
            key={index}
            className="font-spaceGrotesk ml-4 text-gray-300"
          >
            {parseItalic(parseLinks(listText))}
          </li>
        )
      }
      if (line.trim() === '') {
        return <br key={index} />
      }
      return (
        <p
          key={index}
          className="font-spaceGrotesk mb-4 leading-relaxed text-gray-300"
        >
          {parseItalic(parseLinks(line))}
        </p>
      )
    })
  }

  return <div className="prose prose-invert max-w-none">{renderContent(content)}</div>
}

// Component to render quote blocks
const QuoteRenderer = ({ block }: { block: QuoteBlock }) => {
  return (
    <div className="my-8 rounded-r-lg border-l-4 border-cyan-400 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6">
      <div className="flex items-start space-x-3">
        <Quote className="mt-1 h-6 w-6 flex-shrink-0 text-cyan-400" />
        <div>
          <blockquote className="mb-2 text-lg italic text-gray-200">"{block.body}"</blockquote>
          <cite className="font-medium text-cyan-400">— {block.title}</cite>
        </div>
      </div>
    </div>
  )
}

// Component to render media blocks
const MediaRenderer = ({ block }: { block: MediaBlock }) => {
  const { file } = block
  if (!file?.url) {
    return null
  }

  const imageUrl = resolveMediaUrl(file)
  if (!imageUrl) {
    return null
  }

  return (
    <div className="my-8">
      <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src={imageUrl}
          alt={block.desc ?? getMediaAltText(file, 'Article media')}
          className="h-full w-full object-cover"
        />
      </div>
      {block.desc && <p className="mt-2 text-center text-sm italic text-gray-400">{block.desc}</p>}
    </div>
  )
}

// Component to render slider blocks
const SliderRenderer = ({ block }: { block: SliderBlock }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const files = block.files ?? []
  if (files.length === 0) {
    return null
  }

  const normalizedFiles = files.filter((file): file is MediaFile => Boolean(file?.url))
  if (normalizedFiles.length === 0) {
    return null
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % normalizedFiles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + normalizedFiles.length) % normalizedFiles.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const activeIndex =
    ((currentSlide % normalizedFiles.length) + normalizedFiles.length) % normalizedFiles.length
  const activeFile = normalizedFiles[activeIndex] ?? null
  const activeImageUrl = resolveMediaUrl(activeFile)

  if (!activeFile || !activeImageUrl) {
    return null
  }

  return (
    <div className="my-8">
      <div className="group relative">
        {/* Main Slider Container */}
        <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800">
          <motion.img
            key={activeIndex}
            src={activeImageUrl}
            alt={getMediaAltText(activeFile, `Slider image ${activeIndex + 1}`)}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Navigation Arrows */}
          {normalizedFiles.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-300 hover:bg-black/70 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Slide Counter */}
          {normalizedFiles.length > 1 && (
            <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
              {activeIndex + 1} / {normalizedFiles.length}
            </div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {normalizedFiles.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {normalizedFiles.map((file, index) => {
              const thumbnailUrl = resolveMediaUrl(file)
              if (!thumbnailUrl) {
                return null
              }

              return (
                <button
                  key={file.id ?? index}
                  onClick={() => goToSlide(index)}
                  className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    index === activeIndex
                      ? 'scale-105 border-cyan-400'
                      : 'border-slate-600 hover:border-slate-400'
                  }`}
                >
                  <img
                    src={thumbnailUrl}
                    alt={getMediaAltText(file, `Thumbnail ${index + 1}`)}
                    className="h-full w-full object-cover"
                  />
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

// Component to render blocks
const BlockRenderer = ({ block }: { block: Block }) => {
  switch (block.__component) {
    case 'shared.rich-text':
      return <RichTextRenderer content={block.body} />
    case 'shared.quote':
      return <QuoteRenderer block={block} />
    case 'shared.media':
      return <MediaRenderer block={block} />
    case 'shared.slider':
      return <SliderRenderer block={block} />
    default:
      return null
  }
}

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [article, setArticle] = useState<NormalizedArticleDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const slugParam = params.slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : (slugParam ?? '')

  useEffect(() => {
    if (!slug) {
      setError('Invalid article identifier')
      setIsLoading(false)
      return
    }

    const fetchArticleDetail = async () => {
      try {
        const articlesResponse = await fetch('/api/articles')
        const articlesResult = (await articlesResponse.json()) as ArticlesApiResponse

        if (!articlesResponse.ok) {
          throw new Error('Failed to fetch articles')
        }

        const articleSummaries = articlesResult.data?.data ?? []
        const targetArticle = articleSummaries.find(
          (item) => item.slug === slug || item.documentId === slug
        )

        if (!targetArticle?.documentId) {
          setError('Article not found')
          setIsLoading(false)
          return
        }

        const detailResponse = await fetch(`/api/articles/${targetArticle.documentId}`)
        const detailResult = (await detailResponse.json()) as ArticleDetailApiResponse

        if (detailResponse.ok) {
          const detailArticle = detailResult.data?.data ?? null
          if (!detailArticle) {
            setError('Article not found')
          } else {
            const normalizedArticle: NormalizedArticleDetail = {
              ...detailArticle,
              category: detailArticle.category ?? FALLBACK_CATEGORY,
              author: detailArticle.author ?? FALLBACK_AUTHOR,
              blocks: (detailArticle.blocks ?? []).filter(isBlock),
            }
            setArticle(normalizedArticle)
            setError(null)
          }
        } else {
          console.error('Failed to fetch article:', detailResult.error)
          setError('Failed to load article')
        }
      } catch (fetchError) {
        console.error('Error fetching article:', fetchError)
        setError('Failed to load article')
      } finally {
        setIsLoading(false)
      }
    }

    void fetchArticleDetail()
  }, [slug])

  const handleBackToBlog = () => {
    router.push('/blog')
  }

  // Helper function to get gradient color based on category
  const getCategoryGradient = (categoryName: string | null | undefined): string => {
    const gradients: Record<string, string> = {
      'ai-humanity': 'from-cyan-500 to-blue-600',
      'inner-balance': 'from-blue-500 to-purple-600',
      'right-questions': 'from-purple-500 to-pink-600',
      'real-stories': 'from-pink-500 to-rose-600',
      'ai & humanity': 'from-cyan-500 to-blue-600',
      'inner balance': 'from-blue-500 to-purple-600',
      'right questions in a chaotic world': 'from-purple-500 to-pink-600',
      'real stories from ai+di users': 'from-pink-500 to-rose-600',
      default: 'from-slate-500 to-gray-600',
    }
    const normalized = categoryName?.toLowerCase() ?? 'default'
    if (Object.prototype.hasOwnProperty.call(gradients, normalized)) {
      const gradient = gradients[normalized]
      if (gradient !== undefined) {
        return gradient
      }
    }

    const fallbackGradient = gradients.default
    if (fallbackGradient !== undefined) {
      return fallbackGradient
    }

    return 'from-slate-500 to-gray-600'
  }

  // Helper function to get icon based on category
  const getCategoryIcon = (categoryName: string | null | undefined): LucideIcon => {
    const icons: Record<string, LucideIcon> = {
      'ai-humanity': Brain,
      'inner-balance': Heart,
      'right-questions': HelpCircle,
      'real-stories': Users,
      'ai & humanity': Brain,
      'inner balance': Heart,
      'right questions in a chaotic world': HelpCircle,
      'real stories from ai+di users': Users,
      default: Zap,
    }
    const normalized = categoryName?.toLowerCase() ?? 'default'
    if (Object.prototype.hasOwnProperty.call(icons, normalized)) {
      const icon = icons[normalized]
      if (icon !== undefined) {
        return icon
      }
    }

    const fallbackIcon = icons.default
    if (fallbackIcon !== undefined) {
      return fallbackIcon
    }

    return Zap
  }

  // Helper function to get read time based on category
  const getCategoryReadTime = (categoryName: string | null | undefined): string => {
    const readTimes: Record<string, string> = {
      'ai-humanity': '8 min read',
      'inner-balance': '6 min read',
      'right-questions': '7 min read',
      'real-stories': '5 min read',
      'ai & humanity': '8 min read',
      'inner balance': '6 min read',
      'right questions in a chaotic world': '7 min read',
      'real stories from ai+di users': '5 min read',
      default: '6 min read',
    }
    const normalized = categoryName?.toLowerCase() ?? 'default'
    if (Object.prototype.hasOwnProperty.call(readTimes, normalized)) {
      const readTime = readTimes[normalized]
      if (readTime !== undefined) {
        return readTime
      }
    }

    const fallbackReadTime = readTimes.default
    if (fallbackReadTime !== undefined) {
      return fallbackReadTime
    }

    return '6 min read'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10 pt-16">
          <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="mb-4 h-8 rounded bg-slate-800" />
              <div className="mb-8 h-12 rounded bg-slate-800" />
              <div className="mb-8 aspect-video rounded bg-slate-800" />
              <div className="space-y-4">
                <div className="h-4 rounded bg-slate-800" />
                <div className="h-4 rounded bg-slate-800" />
                <div className="h-4 w-3/4 rounded bg-slate-800" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10 pt-16">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-2xl font-bold text-red-400">Article Not Found</h1>
            <p className="mb-8 text-gray-400">
              {error ?? 'The article you are looking for does not exist.'}
            </p>
            <Button
              onClick={handleBackToBlog}
              className="font-spaceGrotesk bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Handle missing fields gracefully
  const { category, author, blocks } = article

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              onClick={handleBackToBlog}
              variant="ghost"
              className="font-spaceGrotesk text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="mb-6">
              {(() => {
                const CategoryIcon = getCategoryIcon(category.name)
                const gradient = getCategoryGradient(category.name)
                return (
                  <span
                    className={`inline-flex items-center rounded-full bg-gradient-to-r px-3 py-1 text-sm font-medium ${gradient} text-white`}
                  >
                    <CategoryIcon className="mr-2 h-3 w-3" />
                    {category.name}
                  </span>
                )
              })()}
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {article.title}
              </span>
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{getCategoryReadTime(category.name)}</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          {article.cover_url && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800">
                <img
                  src={article.cover_url}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Description */}
                <div className="prose prose-invert mb-8 max-w-none">
                  <p className="text-xl leading-relaxed text-gray-300">
                    {article.short_description ?? article.description}
                  </p>
                </div>

                {/* Blocks Content */}
                {blocks.length > 0 ? (
                  <div className="space-y-6">
                    {blocks.map((block, index) => (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                      >
                        <BlockRenderer block={block} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 leading-relaxed text-gray-400">
                    <p>{article.description}</p>
                    <p>
                      This is a placeholder for the full article content. In a real implementation,
                      you would have rich text content from Strapi that could include headings,
                      paragraphs, lists, images, and other formatted content.
                    </p>
                  </div>
                )}

                {/* Article Footer */}
                <div className="mt-12 border-t border-cyan-500/20 pt-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                        <User className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{author.name}</p>
                        <p className="text-sm text-gray-400">{author.email}</p>
                      </div>
                    </div>
                    <Button
                      onClick={handleBackToBlog}
                      variant="outline"
                      className="font-spaceGrotesk border-cyan-500/30 text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <ContactSection />

      <Footer />
    </div>
  )
}
