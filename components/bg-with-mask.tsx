import { cn } from '@/lib/utils'

import type { ClassNameValue } from 'tailwind-merge'

export default function BgWithMask({ className }: { className?: ClassNameValue }) {
  return (
    <div className={cn('absolute left-0 top-0 z-20 h-full w-full', className)}>
      <div className="relative h-full w-full">
        <svg
          className="absolute bottom-0 left-0"
          width="108"
          height="202"
          viewBox="0 0 108 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.95"
            d="M0 202V0L108 202H0Z"
            fill="#A8E4E5"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0"
          width="240"
          height="95"
          viewBox="0 0 240 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            d="M0 95V0L240 95H0Z"
            fill="#C2EEEF"
          />
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width="124"
          height="211"
          viewBox="0 0 124 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            d="M124 211V0L0 211H124Z"
            fill="#C2EEEF"
          />
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width="239"
          height="90"
          viewBox="0 0 239 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.95"
            d="M239 90V0L0 90H239Z"
            fill="#A8E4E5"
          />
        </svg>
      </div>
    </div>
  )
}
