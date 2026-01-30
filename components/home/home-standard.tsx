import Image from 'next/image'

import { cn } from '@/lib/utils'

import CheckCicle from '../icons/check-circle'

function Item({ text, className }: { text: string; className?: string }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 w-6">
        <CheckCicle />
      </div>
      <p className={cn('text-[18px] font-normal text-[#525757]', className)}>{text}</p>
    </div>
  )
}

export default function HomeStandard() {
  const dataItems = [
    `Cam kết an toàn thông tin tuyệt đối`,
    `Lập kế hoạch - Thực hiện - Kiểm tra - Cải tiến liên tục`,
    `Bảo vệ dữ liệu và nâng cao hiệu suất không ngừng`,
  ]
  return (
    <div className="bg-[#EEF4FF] py-12">
      <div className="container max-w-[1126px]">
        <div className="mx-auto w-full max-w-[906px]">
          <p className="text-center text-4xl font-normal text-[#202222]">
            Tiêu chuẩn Bảo mật và Tuân thủ Quốc Tế
          </p>
          <p className="mt-3 text-center text-xl text-[#525757]">
            Hạ tầng của Ai+Di được xây dựng dựa trên tiêu chuẩn quốc tế ISO 27001 và chu trình quản
            trị PDCA, đảm bảo dữ liệu luôn an toàn và hệ thống luôn được tối ưu hóa mỗi ngày.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {dataItems.map((item, index) => (
              <Item
                key={index}
                text={item}
              />
            ))}
          </div>
          <div className="flex justify-center gap-[74px] rounded-3xl bg-white py-8">
            <Image
              src="/home/erp-iso-27001-1.png"
              width={144}
              height={200}
              className="object-contain"
              alt=""
            />
            <Image
              src="/home/erp-pdpa.png"
              className="object-contain"
              width={144}
              height={200}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
