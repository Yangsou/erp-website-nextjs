'use client'

import BlankCheckCircle from '../icons/blank-check-circle'
import CloseCicle from '../icons/close-circle'

export default function PdtAcademyStatistic() {
  const data = {
    title: `AI của Ai+Di giải quyết thách thức trong ngành may của Việt Nam như thế nào`,
    challenges: [
      {
        id: 1,
        title: 'Nghịch lý cốt lõi của ngành may: Nâng suất & Chất lượng',
        descriptions: ['Tăng năng suất → Chất lượng giảm.', 'Siết chất lượng → Năng suất chậm.'],
      },
      {
        id: 2,
        title: 'Thất bại cũ - bắt con người làm việc của máy',
        descriptions: [
          'Việc nhập liệu thủ công trọng xuống vừa chậm, thiếu, vừa sai, khiến dữ liệu không đáng tin cậy.',
        ],
      },
      {
        id: 3,
        title: 'Phản ứng chậm trễ - biết vấn đề khi đã quá muộn',
        descriptions: [
          'Các lỗi chất lượng và tình trạng mất cân bằng chuyền thường chỉ được phát hiện vào cuối ca.',
        ],
      },
    ],
    solutions: [
      {
        id: 1,
        title: 'Giải pháp AI biến Nâng suất & Chất lượng song hành',
        description:
          'Đây là bài toán dành đối Doanh nghiệp may mặc tại Việt Nam đã đối mặt trong nhiều thập kỷ. Giải pháp AI lần đầu tiên cho phép giải quyết đồng thời, không phải đánh đổi.',
      },
      {
        id: 2,
        title: 'AI Vision tự động thu thập dữ liệu chính xác',
        description:
          'AI tự nhận diện, số sánh và ghi nhận sản lượng tại các công đoạn theo chốt, không cần con người.',
      },
      {
        id: 3,
        title: 'Quản lý theo sự kiện, không theo báo cáo',
        description:
          'Hệ thống cảnh báo ngay lập tức khi phát sinh ùn ứ hoặc lỗi, giúp xử lý vấn đề trong ca.',
      },
    ],
  }
  return (
    <>
      <div className="container pb-[50px] pt-10">
        <div>
          <p className="mb-[50px] text-center text-2xl font-normal text-[#202222] lg:text-[32px]">
            {data.title}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Challenges */}
          <div className="space-y-7 rounded-2xl bg-[#F7F9FD] px-10 py-8 lg:px-[76px] lg:py-14">
            <h3 className="text-2xl font-normal text-[#202222] lg:text-[25px]">
              Thách thức cũ và thất bại chuyển đổi số
            </h3>

            <div className="space-y-4">
              {data.challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="space-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CloseCicle
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-base font-medium text-[#202222]">{challenge.title}</p>
                  </div>
                  <div className="space-y-1 pl-8 text-sm text-[#525757]">
                    {challenge.descriptions.map((desc, index) => (
                      <p key={index}>{desc}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Solutions */}
          <div className="space-y-7 rounded-2xl bg-[#0A53BF] px-10 py-8 lg:px-[76px] lg:py-14">
            <h3 className="text-center text-2xl font-normal text-white lg:text-[25px]">
              Giải pháp của chúng tôi
            </h3>

            <div className="space-y-4">
              {data.solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="space-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <BlankCheckCircle
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-base font-medium text-white">{solution.title}</p>
                  </div>
                  <div className="pl-8 text-sm text-white/90">
                    <p>{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#EEF4FF] py-14">
        <div className="container">
          <div className="gap-12 lg:flex">
            <div className="w-full max-w-[516px]">
              <AspectRatio ratio={2 / 1}>
                <Image
                  src="/product/pdt-aca-ai-image-01.png"
                  fill
                  alt=""
                />
              </AspectRatio>
            </div>
            <div className="max-w-[640px] space-y-4 pt-4">
              <p className="lgtext-[32px] text-2xl text-[#202222]">
                Công nghệ phụng sự giáo dục vì con người
              </p>
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6">
                  <CheckCicle />
                </div>
                <p className="text-base text-[#525757]">
                  AI là một công cụ mạnh mẽ không nhằm thay thế con người, mà là trợ lực để giải
                  phóng tiềm năng sáng tạo của giảng viên và học viên
                </p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6">
                  <CheckCicle />
                </div>
                <p className="text-[#525757]">
                  AI nâng tầm giá trị nhân văn, giúp con người phát triển toàn diện và giữ vững thấu
                  cảm cùng tư duy phản biện trong học tập
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
