'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PdtAcademyAiAssistant() {
  const aiAssistants = [
    {
      title: 'Trợ lý AI Phòng Kho',
      description:
        'Tối ưu hóa năng lực quản lý kho bãi với khả năng truy quét hàng tồn kho thông minh theo thời gian thực. AI tự động hóa việc kiểm kê, đối soát nhập - xuất và đưa ra cảnh báo tức thì về mức tồn kho tối thiểu. Giải pháp giúp loại bỏ sai sót thủ công, đảm bảo dòng chảy nguyên vật liệu cho sản xuất luôn sẵn sàng và minh bạch.',
      image: '/product/ai-assistant-1.png',
    },
    {
      title: 'Trợ lý AI Phòng Sales',
      description:
        'Tăng tốc quy trình bán hàng bằng khả năng phản hồi khách hàng và xử lý yêu cầu báo giá ngay lập tức. Trợ lý AI giúp phân tích lịch sử đơn hàng, dự báo xu hướng nhu cầu và hỗ trợ đội ngũ kinh doanh quản lý danh mục sản phẩm phức tạp. Giảm áp lực giấy tờ để nhân viên Sales tập trung vào việc xây dựng mối quan hệ và chốt đơn hiệu quả.',
      image: '/product/ai-assistant-2.png',
    },
    {
      title: 'Trợ lý AI Phòng Kỹ Thuật (IE)',
      description:
        'Hỗ trợ phân tích dữ liệu chuyên sâu, tự động tính toán thời gian chuẩn (SAM) và đề xuất phương án cân bằng chuyền tối ưu. AI giúp thiết kế sơ đồ máy hiệu quả, cải tiến thao tác công nhân và phát hiện sớm các điểm nghẽn trong quy trình cắt – may – hoàn thiện. Công cụ đắc lực giúp giảm thiểu lãng phí, rút ngắn thời gian sản xuất và đảm bảo dòng chảy vận hành đạt năng suất cao nhất.',
      image: '/product/ai-assistant-3.png',
    },
  ]

  return (
    <div className="bg-[#EEF4FF] pb-[40px] pt-[24px] md:pb-[60px] md:pt-[32px] lg:pb-[76px] lg:pt-10">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-[24px] text-center md:mb-[30px] lg:mb-[36px]"
        >
          <h2 className="text-2xl font-normal text-[#202222] md:text-3xl lg:text-3xl">Trợ lý AI</h2>
        </motion.div>

        {/* AI Assistant Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {aiAssistants.map((assistant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col gap-[12px] overflow-hidden rounded-xl border border-[#E5E5E5] bg-white p-[14px] shadow-sm transition-shadow hover:shadow-md md:gap-[14px] md:rounded-2xl md:p-[16px] lg:p-[18px]"
            >
              {/* Image Section */}
              <div className="relative w-full">
                <Image
                  src={assistant.image}
                  width={369}
                  height={369}
                  alt={assistant.title}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col">
                <h3 className="mb-[4px] text-lg font-bold text-[#0036AF] md:mb-[5px] md:text-xl">
                  {assistant.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#525757] md:text-sm">
                  {assistant.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
