'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

export default function CoreValues() {
  const t = useTranslations('AboutPage.CoreValues')
  const locale = useLocale()

  return (
    <section className="bg-white">
      <div className="gap-4 pt-12">
        <div className="relative flex justify-center">
          <div className="container relative gap-4 lg:flex">
            <div className="relative z-10 flex w-full flex-col items-start justify-start gap-4 lg:w-1/2 lg:pt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="font-[Manrope] text-[56px] font-semibold leading-[110%] tracking-[0%] text-[#0036AF]">
                  {t('title')}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className="whitespace-break-spaces align-middle font-[Manrope] text-[22px] font-normal leading-[150%] tracking-[0%] text-[#626262] lg:min-w-[490px]"
                  dangerouslySetInnerHTML={{
                    __html: t.markup('description', {
                      b: (chunks) => `<b className="font-semibold">${chunks}</b>`,
                    }),
                  }}
                />
              </motion.div>
            </div>
            <div className="relative z-10 w-full lg:w-3/4">
              <div className="h-80 w-full md:h-[768px] lg:h-[928px] lg:w-[928px] lg:-translate-x-[74px]">
                {/* Background Image */}
                <Image
                  src={`/about/${locale}-core-value-images.png`}
                  alt="Core Values"
                  fill
                  className="pointer-events-none z-10 block object-cover"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-[584px] w-full bg-[url('/about/footer-core-values.svg')] bg-cover" />
        </div>
      </div>
    </section>
  )
}
