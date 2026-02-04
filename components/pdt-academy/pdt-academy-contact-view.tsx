import Image from 'next/image'

import BgWithMask from '../bg-with-mask'
import { Toaster } from '../ui/sonner'

import AcademyContatctForm from './pdt-academt-contact-form'

export default function AcademyContactView() {
  return (
    <div className="relative z-10 w-full overflow-hidden bg-[#E9F8F9] pt-16">
      <div className="container relative z-30 pb-32 pt-[104px]">
        <div className="relative z-10">
          <p className="text-3xl font-semibold text-[#525757] lg:text-[42px] lg:leading-[1.3]">
            Đăng ký <span className="text-blue-400">TƯ VẤN</span> cùng Ai+Di ERP
          </p>
          <p className="mt-4 text-lg text-[#525757] lg:text-[22px] lg:leading-normal">
            Hãy để Ai+Di ERP đồng hành cùng doanh nghiệp của bạn
          </p>
        </div>
        <div className="relative z-10 mt-6 w-full lg:mt-[42px] lg:max-w-[656px]">
          <AcademyContatctForm />
        </div>

        <div className="absolute top-[258px] hidden lg:right-4 lg:block lg:h-[390px] lg:w-[452px] xl:right-0 xl:h-[446px] xl:w-[548px]">
          <Image
            src="/product/pdt-erp-contact-hero.svg"
            fill
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <BgWithMask className="bottom-0 top-auto h-[256px]" />

      <Toaster />
    </div>
  )
}
