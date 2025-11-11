'use client'

import AboutSection from '@/components/about-section'
import AnimatedBackground from '@/components/animated-background'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pb-16 pt-16">
        <AboutSection />
      </main>

      <Footer />
    </div>
  )
}
