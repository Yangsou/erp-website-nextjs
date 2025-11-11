'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ theme: themeProp, ...props }: ToasterProps) => {
  const { theme: themeFromContext } = useTheme()

  const resolvedTheme: NonNullable<ToasterProps['theme']> = (() => {
    if (themeProp && ['light', 'dark', 'system'].includes(themeProp)) {
      return themeProp as NonNullable<ToasterProps['theme']>
    }

    if (themeFromContext && ['light', 'dark', 'system'].includes(themeFromContext)) {
      return themeFromContext as NonNullable<ToasterProps['theme']>
    }

    return 'system'
  })()

  return (
    <Sonner
      theme={resolvedTheme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
