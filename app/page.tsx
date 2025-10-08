"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ValuesSection from "@/components/values-section"
import FourPillarsSection from "@/components/four-pillars-section"
import JoinMovementSection from "@/components/join-movement-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <ValuesSection />
        <FourPillarsSection />
        <JoinMovementSection />
        {/* <ContactSection /> */}
      </main>

      <Footer />
    </div>
  )
}
