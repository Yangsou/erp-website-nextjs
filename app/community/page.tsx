'use client'

import AnimatedBackground from '@/components/animated-background'
import CommunitySection from '@/components/community-section'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

export default function CommunityPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        <CommunitySection />
      </main>

      <Footer />
    </div>
  )
}
