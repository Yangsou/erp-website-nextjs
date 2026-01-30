import type { SVGAttributes } from 'react'

type Props = SVGAttributes<SVGElement> & {
  //
}
export default function CloseCicle({ width, height }: Props) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2719_2884)">
        <circle
          cx="10"
          cy="10"
          r="9.5"
          stroke="#202222"
        />
        <path
          d="M14 6L6 14"
          stroke="#202222"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 6L14 14"
          stroke="#202222"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2719_2884">
          <rect
            width="20"
            height="20"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
