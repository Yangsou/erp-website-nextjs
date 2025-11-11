'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/homepage-cover.jpeg"
          alt="AI and human connection"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-3 backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="font-medium text-cyan-400">Introducing Ai+Di</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl filter">
              Ai that reflects.
            </span>
            <br />
            <span className="text-gray-300 drop-shadow-lg">Not replaces.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-gray-300 drop-shadow-lg md:text-2xl"
          >
            An operating system for conscious living in the age of AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="font-spaceGrotesk group border-0 bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-cyan-500/25"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="font-spaceGrotesk border-cyan-500/30 bg-transparent px-10 py-4 text-lg font-medium text-cyan-400 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10"
            >
              Join Community
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                value: 'Live',
                description: 'Mindful existence in harmony with AI',
              },
              {
                value: 'Learn',
                description: 'Continuous growth at your own rhythm',
              },
              {
                value: 'Work',
                description: 'Productive collaboration with AI',
              },
              {
                value: 'Community',
                description: 'Collective consciousness and support',
              },
            ].map((item, _index) => (
              <motion.div
                key={item.value}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-800 to-slate-700 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <h3 className="mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-xl font-semibold text-transparent">
                  {item.value}
                </h3>
                <p className="text-sm font-medium text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-cyan-400/30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
