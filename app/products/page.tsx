'use client'

import AnimatedBackground from '@/components/animated-background'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import ProductsSection from '@/components/products-section'

export default function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        <ProductsSection />
      </main>

      <Footer />
    </div>
  )
}
