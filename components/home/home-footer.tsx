import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'

import BgWithMask from '../bg-with-mask'
import { Button } from '../ui/button'

export default function HomeFooter() {
  const t = useTranslations('AcademyPage')

  return (
    <>
      <div className="relative min-h-[276px] bg-[#DAF3F4] py-14 text-center">
        <Image
          src="/product/pdt-aca-footer-bg.png"
          alt="AI and human connection"
          fill
          className="z-10 object-cover object-center opacity-60"
          priority
        />
        <BgWithMask />
        <div className="relative z-20 space-y-8">
          <p className="px-4 text-2xl font-normal text-[#202222] lg:text-[32px]">
            Khám phá cách AI tối ưu hóa vận hành nhà máy của bạn
          </p>
          <Button
            size="lg"
            asChild
            className="font-spaceGrotesk group h-[64px] rounded-[20px] border-0 bg-[#6DC9CB] px-[30px] align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] tracking-[0%] text-white transition-all duration-300 hover:bg-[#A0DCDD] hover:shadow-cyan-500/25 [&_svg]:size-6"
          >
            <Link href="/contact">
              {t('contact_us')}
              <ArrowRight className="ml-[10px] h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
