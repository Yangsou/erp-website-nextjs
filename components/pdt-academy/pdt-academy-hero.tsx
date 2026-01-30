'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import CheckCicle from '../icons/check-circle'

export default function PdtAcademyHero() {
  const t = useTranslations('AcademyPage.Hero')

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/home/bg-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      />

      <div className="container relative px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:p-[120px]">
        <div className="flex w-full flex-col justify-center lg:w-[50%]">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold leading-tight text-white sm:text-3xl sm:leading-tight lg:text-[42px] lg:leading-[1.2]"
          >
            {t('title')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-2 sm:mt-3 lg:mt-4"
          >
            <span className="text-xs font-normal leading-relaxed text-white sm:text-sm sm:leading-relaxed lg:text-base lg:leading-normal">
              {t('subtitle')}
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="max-w-[640px] space-y-3 pt-3 text-white sm:space-y-4 sm:pt-4">
              <div className="relative pl-8 sm:pl-10">
                <div className="absolute left-0 top-0 w-5 sm:w-6">
                  <CheckCicle />
                </div>
                <p className="text-xs font-normal leading-relaxed text-white sm:text-sm sm:leading-relaxed lg:text-base lg:leading-normal">
                  AI Vision & AI Planning: Kiểm soát chất lượng và điều phối thông minh.
                </p>
              </div>
              <div className="relative pl-8 sm:pl-10">
                <div className="absolute left-0 top-0 w-5 sm:w-6">
                  <CheckCicle />
                </div>
                <p className="text-xs font-normal leading-relaxed text-white sm:text-sm sm:leading-relaxed lg:text-base lg:leading-normal">
                  AI Agent & AI ERP: Tự động hóa quy trình và minh bạch hóa dữ liệu.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-2 sm:mt-3 lg:mt-4"
          >
            <span className="text-xs font-normal leading-relaxed text-white sm:text-sm sm:leading-relaxed lg:text-base lg:leading-normal">
              {t('description')}
            </span>
          </motion.p>
          <div className="mt-8 h-px w-full bg-[#6DC9CB] sm:mt-12 lg:mt-[60px]" />
        </div>

        {/* Stats section */}
        <div className="z-10 grid h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 sm:mt-10 lg:mt-[50px]"
          >
            <h2 className="text-xl font-normal leading-tight text-white sm:text-2xl sm:leading-tight lg:text-[32px] lg:leading-tight">
              Hiệu quả thực tế của Giải pháp AI Vision trong Sản xuất
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {/* Stat card 1 */}
              <div className="border-l-4 border-[#6DC9CB] pl-4 sm:pl-6 md:max-w-full lg:max-w-[80%]">
                <div className="text-3xl font-normal leading-tight text-white sm:text-4xl sm:leading-tight">
                  40-60%
                </div>
                <p className="mt-2 text-xs leading-[1.5] text-white sm:mt-3 sm:text-sm">
                  Cắt giảm chi phí vận hành nhờ tự động hóa
                </p>
              </div>

              {/* Stat card 2 */}
              <div className="border-l-4 border-[#6DC9CB] pl-4 sm:pl-6 md:max-w-full lg:max-w-[80%]">
                <div className="text-3xl font-normal leading-tight text-white sm:text-4xl sm:leading-tight">
                  50-70%
                </div>
                <p className="mt-2 text-xs leading-[1.5] text-white sm:mt-3 sm:text-sm">
                  Phát hiện lỗi & cảnh báo sớm
                </p>
              </div>

              {/* Stat card 3 */}
              <div className="border-l-4 border-[#6DC9CB] pl-4 sm:pl-6 md:max-w-full lg:max-w-[80%]">
                <div className="text-3xl font-normal leading-tight text-white sm:text-4xl sm:leading-tight">
                  90-95%
                </div>
                <p className="mt-2 text-xs leading-[1.5] text-white sm:mt-3 sm:text-sm">
                  Phát hiện mất cân bằng chuyền, theo dõi nhịp độ sản xuất và cảnh báo điểm nghẽn
                </p>
              </div>

              {/* Stat card 4 */}
              <div className="border-l-4 border-[#6DC9CB] pl-4 sm:pl-6 md:max-w-full lg:max-w-[80%]">
                <div className="text-3xl font-normal leading-tight text-white sm:text-4xl sm:leading-tight">
                  30-50%
                </div>
                <p className="mt-2 text-xs leading-[1.5] text-white sm:mt-3 sm:text-sm">
                  Dự báo nhu cầu và gợi ý điều phối thông minh
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
