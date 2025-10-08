"use client"

import Navigation from "@/components/navigation"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10 pt-16">
        <BlogSection />
        {/* <ContactSection /> */}
      </main>

      <Footer />
    </div>
  )
}
