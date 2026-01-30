'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import CheckCicle from '../icons/check-circle'

export default function PdtAcademyDevmnt() {
  const data = {
    hero: {
      title: 'Giải pháp "Hệ Thần Kinh Số" AI Cho Ngành May',
      subtitle:
        'Kiểm soát chất lượng tức thì, tối ưu hóa điều phối và thúc đẩy năng suất vượt giới hạn tự nhiên.',
    },
    mainContent: {
      title: 'Sản xuất Thông minh, Hiệu suất Vượt ngưỡng',
      paragraphs: [
        'Ai+Di mang đến sự kết hợp giữa AI Vision và AI Planning. Chúng tôi không chỉ cung cấp một chatbot đơn thuần, mà kiến tạo sự tích hợp AI chuyên sâu vào hệ thống vận hành. Để ứng dụng thành công, doanh nghiệp cần thời gian xây dựng nền tảng dữ liệu và sự đồng bộ. Bắt đầu ngay hôm nay là chìa khóa để chiếm lĩnh lợi thế cạnh tranh trước khi quá muộn.',
        'Thay vì thụ động chờ đợi báo cáo cuối ngày, các nhà quản lý giờ đây có thể điều hành dựa trên dữ liệu thời gian thực. Với sự hỗ trợ của AI Warning và Dashboard tương tác, mọi điểm nghẽn được cảnh báo ngay lập tức, giúp dòng chảy sản xuất luôn nhịp nhàng. Quy trình khép kín: Lập kế hoạch (Plan) →Thực thi (Execute) →Giám sát (Monitor) → Điều chỉnh (Adjust) đảm bảo xưởng may luôn đạt hiệu suất mục tiêu cao nhất.',
      ],
      image: '/product/garment-factory.jpg',
    },
    features: {
      image: '/product/dashboard-analytics.jpg',
      items: [
        {
          icon: '/product/solution-icon-1.png',
          description:
            '"Mắt thần AI": Tự động hóa hoàn toàn việc ghi nhận sản lượng trên từng công đoạn thay thế nhập liệu thủ công. Giám sát chất lượng từng mili-giây, phát hiện và cảnh báo sớm lỗi để ngăn chặn sai sót lan rộng.',
        },
        {
          icon: '/product/solution-icon-4.png',
          description:
            'AI tích hợp sâu để tối ưu kế hoạch sản xuất, dự báo nhu cầu và tự động gợi ý phân bổ bán thành phẩm (BTP) khoa học.',
        },
        {
          icon: '/product/solution-icon-2.png',
          description:
            'Xây dựng lộ trình sản xuất thông minh, dự đoán năng suất và tự động xếp chuyền đạt mục tiêu 85-90%.',
        },
        {
          icon: '/product/solution-icon-5.png',
          description:
            'Dashboard Portal & AI Chatbot: Giao diện quản trị hiện đại, hỗ trợ các cấp quản lý tương tác và ra quyết định nhanh chóng.',
        },
        {
          icon: '/product/solution-icon-3.png',
          description:
            'Tự động phát hiện mất cân bằng chuyền và điểm nghẽn, giúp nhận câu trả lời tức thì mà không cần chờ báo cáo.',
        },
      ],
    },
    objectives: {
      title: 'Mục tiêu chiến lược',
      items: [
        {
          title: 'Tối ưu nhân sự',
          description: 'Tăng tỷ lệ lao động trực tiếp, giảm tối đa chi phí lao động gián tiếp.',
        },
        {
          title: 'Giảm tối đa lãng phí',
          description: 'Tối ưu kế hoạch sản xuất, giảm tồn kho.',
        },
        {
          title: 'Đột phá năng suất',
          description: 'Thúc đẩy hiệu suất vượt ngưỡng thông qua tự động hóa thực thi.',
        },
      ],
      image: '/product/objective-section.png',
    },
  }

  return (
    <div className="mb-[60px] bg-white md:mb-[80px] lg:mb-[110px]">
      {/* Hero Section */}
      <div className="container pb-[24px] md:pb-[32px] lg:pb-[43px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-[8px] text-2xl font-normal text-[#202222] md:mb-[10px] md:text-3xl lg:mb-[11px] lg:text-4xl">
            {data.hero.title}
          </h1>
          <p className="mx-auto max-w-[900px] px-4 text-base text-[#6DC9CB] md:px-0 md:text-lg lg:text-xl">
            {data.hero.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <div className="container pb-[20px] md:pb-[25px] lg:pb-[30px]">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[40%_60%] lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-start"
          >
            <h2 className="mb-[10px] text-xl font-normal text-[#202222] md:mb-[12px] md:text-2xl lg:mb-[14px]">
              {data.mainContent.title}
            </h2>
            <div className="space-y-[8px] md:space-y-[10px]">
              {data.mainContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-[#525757]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl md:rounded-2xl"
          >
            <Image
              src="/product/solution-section-main.png"
              width={733}
              height={370}
              alt="solution illustration"
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container pb-[20px] md:pb-[25px] lg:pb-[30px]">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[36%_64%] lg:gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative h-[250px] overflow-hidden rounded-xl md:h-[350px] md:rounded-2xl lg:h-auto"
          >
            <Image
              src="/product/solution-section-image.png"
              fill
              alt="Dashboard Analytics"
              className="object-cover"
            />
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-2 lg:gap-6">
              {data.features.items.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 md:gap-4 lg:gap-5"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={feature.icon}
                      width={32}
                      height={32}
                      alt="solution illustration"
                      className="object-cover md:h-[36px] md:w-[36px] lg:h-[40px] lg:w-[40px]"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs leading-relaxed text-[#525757] md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Strategic Objectives Section */}
      <div className="container grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[67%_33%] lg:gap-12">
        <div className="flex flex-col items-start justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-[12px] w-full text-left text-xl font-normal text-[#202222] md:mb-[14px] md:text-2xl lg:mb-[15px] lg:text-[32px]"
          >
            {data.objectives.title}
          </motion.h2>

          <div className="grid w-full grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Objective Cards */}
            {data.objectives.items.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-start"
              >
                <div className="mb-3 flex items-center gap-[8px] md:mb-4 md:gap-[10px]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6DC9CB] md:h-12 md:w-12">
                    <CheckCicle
                      width={24}
                      height={24}
                      className="md:h-[30px] md:w-[30px]"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-[#202222] md:text-xl">
                    {objective.title}
                  </h3>
                </div>
                <p className="text-xs text-[#525757] md:text-sm">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-6 h-[180px] overflow-hidden rounded-xl md:mt-8 md:h-[220px] md:rounded-2xl lg:mt-12 lg:h-[262px]"
        >
          <Image
            src={data.objectives.image}
            fill
            alt="AI Strategy"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}
