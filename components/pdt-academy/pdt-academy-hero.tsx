'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import CheckCicle from '../icons/check-circle'

export default function PdtAcademyHero() {
  const t = useTranslations('AcademyPage.Hero')

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/bg-hero.png"
          alt="AI and human connection"
          fill
          className="z-10 object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        {/* <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0036AF 0%, #001749 100%)',
          }}
        /> */}
      </div>

      <div className="container relative p-[120px]">
        <div className="flex w-[50%] flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold leading-[1.2] text-white lg:text-[42px]"
          >
            {t('title')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 lg:mt-4"
          >
            <span className="text-sm font-normal text-white lg:text-base">{t('subtitle')}</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="max-w-[640px] space-y-4 pt-4 text-white">
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6">
                  <CheckCicle />
                </div>
                <p className="text-sm font-normal text-white lg:text-base">
                  AI Vision & AI Planning: Kiểm soát chất lượng và điều phối thông minh.
                </p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6">
                  <CheckCicle />
                </div>
                <p className="text-sm font-normal text-white lg:text-base">
                  AI Agent & AI ERP: Tự động hóa quy trình và minh bạch hóa dữ liệu.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 lg:mt-4"
          >
            <span className="text-sm font-normal text-white lg:text-base">{t('description')}</span>
          </motion.p>
          <div className="mt-[60px] h-px w-full bg-[#6DC9CB]" />
        </div>

        {/* Stats section */}
        <div className="z-10 grid h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-[50px]"
          >
            <h2 className="text-[32px] font-normal text-white">
              Hiệu quả thực tế của Giải pháp AI Vision trong Sản xuất
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Stat card 1 */}
              <div className="max-w-[80%] border-l-4 border-[#6DC9CB] pl-6">
                <div className="text-4xl font-normal text-white">40-60%</div>
                <p className="mt-3 text-sm leading-[1.5] text-white">
                  Cắt giảm chi phí vận hành nhờ tự động hóa
                </p>
              </div>

              {/* Stat card 2 */}
              <div className="max-w-[80%] border-l-4 border-[#6DC9CB] pl-6">
                <div className="text-4xl font-normal text-white">50-70%</div>
                <p className="mt-3 text-sm leading-[1.5] text-white">
                  Phát hiện lỗi & cảnh báo sớm
                </p>
              </div>

              {/* Stat card 3 */}
              <div className="max-w-[80%] border-l-4 border-[#6DC9CB] pl-6">
                <div className="text-4xl font-normal text-white">90-95%</div>
                <p className="mt-3 text-sm leading-[1.5] text-white">
                  Phát hiện mất cân bằng chuyền, theo dõi nhịp độ sản xuất và cảnh báo điểm nghẽn
                </p>
              </div>

              {/* Stat card 4 */}
              <div className="max-w-[80%] border-l-4 border-[#6DC9CB] pl-6">
                <div className="text-4xl font-normal text-white">30-50%</div>
                <p className="mt-3 text-sm leading-[1.5] text-white">
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
