import type { SVGAttributes } from 'react'

type Props = SVGAttributes<SVGElement> & {
  //
}
export default function BlankCheckCircle({ width, height }: Props) {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2719_2851)">
        <circle
          cx="10"
          cy="10"
          r="9.5"
          stroke="white"
        />
        <path
          d="M14.9996 6.42969L7.85672 13.5797L5.71387 11.4368"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2719_2851">
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
