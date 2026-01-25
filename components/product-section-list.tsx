import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// import { useProducts } from '@/lib/hooks/use-product-data'

import { Link } from '@/i18n/navigation'

import { AspectRatio } from './ui/aspect-ratio'
import { Skeleton } from './ui/skeleton'

export function ProductSkeleton() {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div
        className="relative z-10"
        style={{
          background: 'linear-gradient(180deg, #0036AF 0%, #001749 100%)',
        }}
      >
        <img
          src="/home/bg-hero-section.png"
          className="h-[100px] w-full object-cover opacity-20"
          alt=""
        />
      </div>
      <div className="bg-white p-8 shadow-2xl">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-3/4" />
        <Skeleton className="mt-2 h-4 w-3/4" />
        <Skeleton className="mt-2 h-4 w-3/4" />
        <Skeleton className="mt-2 h-4 w-5/6" />
        <Skeleton className="mt-2 h-4 w-3/4" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-6 h-4 w-1/2" />
      </div>
    </div>
  )
}
export default function ProductSectionList() {
  // const { products, isLoading } = useProducts()
  const t = useTranslations('ProductPage')

  const products = [
    {
      id: 13,
      documentId: 'k8bsu5e7rbrfn7ihk30vkz2j',
      slug: 'academy',
      name: 'Giải pháp AI trong Giáo dục',
      title: 'Giải pháp AI trong Giáo dục',
      description:
        'Ai+Di Academy là nền tảng tiên phong kết hợp tri thức sư phạm bền vững với công nghệ AI để xây dựng mô hình "Nhà giáo số" đồng bộ. \n\nChúng tôi không chỉ cung cấp giải pháp công nghệ mà còn kiến tạo một hệ sinh thái giáo dục khai phóng, giúp học sinh Việt Nam làm chủ lộ trình học tập và vươn tầm quốc tế.',
      contact_email: 'academy@aidi.world',
      bannerUrl: '/product/solution-academy.png',
    },
    {
      id: 14,
      slug: '#',
      documentId: 'j6i7f8qu5juclqctyufv10yn',
      name: 'Giải pháp AI cho Doanh nghiệp',
      title: 'Giải pháp AI cho Doanh nghiệp',
      description:
        'Nền tảng quản trị AI của Ai+Di không chỉ là hệ thống quản lý, mà là "trợ lý thông minh" giúp doanh nghiệp chuyển hóa dữ liệu thô thành các quyết định chính xác và kịp thời hỗ trợ hiệu quả vận hành doanh nghiệp.\n\nChúng tôi giúp bạn phát triển toàn diện – từ con người đến quy trình, từ khách hàng đến nguồn lực – để hiệu quả và hướng tới mô hình quản trị bền vững.',
      contact_email: 'contact@aierp.world',
      bannerUrl: '/product/solution-erp.png',
    },
  ]

  return (
    <div className="container grid grid-cols-12 items-stretch gap-8">
      {/* {isLoading && (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      )} */}
      {products.map(({ id, title, description, contact_email: email, bannerUrl, slug }, index) => (
        <div
          className="col-span-12 flex h-full cursor-pointer lg:col-span-6"
          key={id.toString()}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            viewport={{ once: true }}
            className="mb-2 flex h-full w-full flex-col"
          >
            {/* Header */}
            <div className="relative z-10">
              <AspectRatio ratio={624 / 350}>
                <Image
                  alt=""
                  src={bannerUrl}
                  fill
                  priority
                />
              </AspectRatio>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col justify-between bg-white px-8 py-4 shadow-2xl">
              <div>
                <Link
                  href={`/products/${slug}`}
                  className="font-[Manrope] text-[24px] font-semibold leading-[140%] text-[#000]"
                >
                  {title}
                </Link>
                <div className="mb-4 mt-2 whitespace-break-spaces font-[Manrope] text-[16px] leading-[150%] text-[#525757]">
                  {description}
                </div>
              </div>
              <a
                className="mt-4 text-[18px] text-[#007AFF] underline"
                href={`mailto:${email}`}
              >
                {t('contact')}: {email}
              </a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
