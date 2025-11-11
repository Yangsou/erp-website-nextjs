'use client'

import AnimatedBackground from '@/components/animated-background'
import Footer from '@/components/footer'
import FourPillarsSection from '@/components/four-pillars-section'
import HeroSection from '@/components/hero-section'
import JoinMovementSection from '@/components/join-movement-section'
import Navigation from '@/components/navigation'
import ValuesSection from '@/components/values-section'

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <ValuesSection />
        <FourPillarsSection />
        <JoinMovementSection />
      </main>

      <Footer />
    </div>
  )
}
