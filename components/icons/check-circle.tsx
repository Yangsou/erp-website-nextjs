import type { SVGAttributes } from 'react'

type Props = SVGAttributes<SVGElement> & {
  //
}
export default function CheckCicle({ width, height }: Props) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2235_2387)">
        <circle
          cx="12"
          cy="12"
          r="12"
          fill="#6DC9CB"
        />
        <path
          d="M17.9998 7.71484L9.42836 16.2948L6.85693 13.7234"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2235_2387">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
