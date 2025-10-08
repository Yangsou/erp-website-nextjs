"use client"

import Navigation from "@/components/navigation"
import CommunitySection from "@/components/community-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        <CommunitySection />
        {/* <ContactSection /> */}
      </main>

      <Footer />
    </div>
  )
}
