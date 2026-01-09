import type { LayoutProps } from '@/.next/types/app/layout'

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
