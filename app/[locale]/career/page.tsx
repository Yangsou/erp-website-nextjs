import CareerBanner from '@/components/career-banner'
import { ErrorBoundary } from '@/components/error-boundary'
import WeAreSeeking from '@/components/we-are-seeking'

export default function ProductsPage() {
  return (
    <div className="relative z-0 pt-16">
      <ErrorBoundary>
        <CareerBanner />
        <WeAreSeeking />
      </ErrorBoundary>
    </div>
  )
}
