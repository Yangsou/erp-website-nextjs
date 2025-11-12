'use client'

import * as React from 'react'
import { ResponsiveContainer, Tooltip as RechartsTooltip, Legend as RechartsLegend } from 'recharts'

import { cn } from '@/lib/utils'

type ChartTooltipDatum = {
  value?: number | string
  name?: string
  color?: string
  fill?: string
  dataKey?: string
  payload?: Record<string, unknown>
}

type ChartTooltipFormatter = (
  ...args: [
    value: ChartTooltipDatum['value'],
    name: string,
    item: ChartTooltipDatum,
    index: number,
    payload?: ChartTooltipDatum['payload'],
  ]
) => React.ReactNode

type ChartTooltipContentProps = React.ComponentProps<'div'> & {
  active?: boolean
  payload?: ChartTooltipDatum[]
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: 'line' | 'dot' | 'dashed'
  label?: React.ReactNode
  labelFormatter?: (label: React.ReactNode, payload: ChartTooltipDatum[]) => React.ReactNode
  labelClassName?: string
  formatter?: ChartTooltipFormatter
  color?: string
  nameKey?: string
  labelKey?: string
}

type ChartLegendDatum = {
  value?: string
  color?: string
  dataKey?: string
  icon?: React.ComponentType
}

type ChartLegendContentProps = React.ComponentProps<'div'> & {
  payload?: ChartLegendDatum[]
  verticalAlign?: 'top' | 'bottom'
  hideIcon?: boolean
  nameKey?: string
}

type ResolveTooltipKeyParams = {
  nameKey?: string
  item: ChartTooltipDatum
  index: number
}

type ResolveTooltipValueParams = {
  item: ChartTooltipDatum
  index: number
  key: string
  formatter?: ChartTooltipFormatter
}

function resolveTooltipKey({ nameKey, item, index }: ResolveTooltipKeyParams): string {
  if (typeof nameKey === 'string' && nameKey.trim().length > 0) {
    return nameKey
  }

  if (typeof item.name === 'string' && item.name.trim().length > 0) {
    return item.name
  }

  if (typeof item.dataKey === 'string' && item.dataKey.trim().length > 0) {
    return item.dataKey
  }

  return `value-${index}`
}

function resolveIndicatorColor(
  item: ChartTooltipDatum,
  fallbackColor?: string
): string | undefined {
  if (fallbackColor) {
    return fallbackColor
  }

  if (typeof item.color === 'string' && item.color.trim().length > 0) {
    return item.color
  }

  if (typeof item.fill === 'string' && item.fill.trim().length > 0) {
    return item.fill
  }

  return undefined
}

function resolveTooltipValue({
  item,
  index,
  key,
  formatter,
}: ResolveTooltipValueParams): React.ReactNode {
  if (formatter && item.value !== undefined) {
    const name = typeof item.name === 'string' && item.name.trim().length > 0 ? item.name : key
    const formatted = formatter(item.value, name, item, index, item.payload)

    if (formatted !== undefined && formatted !== null) {
      return formatted
    }
  }

  if (item.value === undefined) {
    return '—'
  }

  return typeof item.value === 'number' ? item.value.toLocaleString() : String(item.value)
}

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
  }
>

const ChartContext = React.createContext<ChartConfig | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }

  return context
}

type ChartContainerProps = {
  config: ChartConfig
  children: React.ComponentProps<typeof ResponsiveContainer>['children']
} & React.ComponentProps<'div'>

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ config, className, children, ...props }, ref) => {
    return (
      <ChartContext.Provider value={config}>
        <div
          ref={ref}
          data-chart-theme
          className={cn(
            'flex aspect-video justify-center text-xs [&_.recharts-layer]:outline-none',
            className
          )}
          {...props}
        >
          <ChartStyle config={config} />
          <ResponsiveContainer>{children}</ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    )
  }
)
ChartContainer.displayName = 'ChartContainer'

const ChartStyle = ({ config }: { config: ChartConfig }) => {
  const colorVars = Object.entries(config)
    .map(([key, item]) =>
      typeof item.color === 'string' ? `  --color-${key}: ${item.color};` : null
    )
    .filter((value): value is string => value !== null)

  if (colorVars.length === 0) {
    return null
  }

  return (
    <style>
      {`[data-chart-theme] {
${colorVars.join('\n')}
}`}
    </style>
  )
}

const ChartTooltip = RechartsTooltip

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  (
    {
      active,
      payload,
      className,
      indicator = 'dot',
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
      ...divProps
    },
    ref
  ) => {
    const config = useChart()
    const tooltipPayload = React.useMemo(() => (Array.isArray(payload) ? payload : []), [payload])

    const resolvedLabel = React.useMemo(() => {
      if (hideLabel || tooltipPayload.length === 0) {
        return null
      }

      const targetKey = labelKey ?? (typeof label === 'string' ? label : undefined)

      if (!targetKey) {
        return null
      }

      const baseLabel = config[targetKey]?.label ?? label

      if (!baseLabel) {
        return null
      }

      if (labelFormatter) {
        return (
          <div className={cn('font-medium', labelClassName)}>
            {labelFormatter(baseLabel, tooltipPayload)}
          </div>
        )
      }

      return <div className={cn('font-medium', labelClassName)}>{baseLabel}</div>
    }, [config, hideLabel, label, labelClassName, labelFormatter, labelKey, tooltipPayload])

    if (!active || tooltipPayload.length === 0) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
          className
        )}
        {...divProps}
      >
        {resolvedLabel}
        <div className="grid gap-1.5">
          {tooltipPayload.map((item, index) => {
            const key = resolveTooltipKey({
              ...(typeof nameKey === 'string' ? { nameKey } : {}),
              item,
              index,
            })
            const itemConfig = config[key]
            const indicatorColor = resolveIndicatorColor(item, color)
            const displayValue = resolveTooltipValue({
              item,
              index,
              key,
              ...(formatter ? { formatter } : {}),
            })

            return (
              <div
                key={key}
                className={cn('flex w-full items-center justify-between gap-2')}
              >
                {!hideIndicator && (
                  <span
                    className={cn(
                      'h-2.5 w-2.5 shrink-0 rounded-sm',
                      indicator === 'line' && 'h-2 w-1 rounded-none',
                      indicator === 'dashed' &&
                        'h-2 w-0 border-[1.5px] border-dashed bg-transparent'
                    )}
                    style={{ backgroundColor: indicatorColor }}
                  />
                )}
                <div className="flex flex-1 items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    {itemConfig?.icon ? <itemConfig.icon /> : null}
                    {itemConfig?.label ?? item.name ?? key}
                  </span>
                  <span className="font-mono font-medium tabular-nums text-foreground">
                    {displayValue}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = 'ChartTooltipContent'

const ChartLegend = RechartsLegend

const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
  (
    { className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey, ...divProps },
    ref
  ) => {
    const config = useChart()
    const legendPayload = Array.isArray(payload) ? payload : []

    if (legendPayload.length === 0) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-4',
          verticalAlign === 'top' ? 'pb-3' : 'pt-3',
          className
        )}
        {...divProps}
      >
        {legendPayload.map((item, index) => {
          const key =
            (typeof nameKey === 'string' ? nameKey : undefined) ??
            (typeof item.dataKey === 'string' ? item.dataKey : undefined) ??
            `legend-${index}`
          const itemConfig = config[key]
          const indicatorColor = resolveIndicatorColor(item, itemConfig?.color)

          return (
            <div
              key={key}
              className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <span
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={indicatorColor ? { backgroundColor: indicatorColor } : undefined}
                />
              )}
              {itemConfig?.label ?? item.value ?? key}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = 'ChartLegendContent'

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent }
