'use client'

import { motion } from 'framer-motion'
import {
  Eye,
  RotateCcw,
  Moon,
  Scale,
  Network,
  Leaf,
  Sparkles,
  Target,
  MessageSquare,
} from 'lucide-react'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'

const principles = [
  {
    icon: Eye,
    title: 'Conscious Grounding',
    description:
      'The Foundation of All Operation. Without conscious awareness, any tool, even AI, can be misused. Consciousness means observing yourself in real time and choosing with intention, not reacting blindly. This is the foundation of all true creativity, evolution, and clarity.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: RotateCcw,
    title: 'Constant Change',
    description:
      'Everything is always in motion. Nothing is fixed. Growth begins when we accept and adapt to change.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Moon,
    title: 'Cyclical Nature',
    description:
      'Nature works in rhythms — day/night, seasons, life/death. Living in tune with these cycles helps us act at the right time and with less energy waste.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Scale,
    title: 'Dynamic Balance',
    description:
      "Balance isn't about standing still. It's the ability to adjust in motion, to know when to advance or retreat, open or close, without extremes.",
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Network,
    title: 'Interdependence',
    description:
      'Opposites need each other to exist, light/dark, action/rest. Respecting difference creates wholeness. Nothing stands alone.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Leaf,
    title: 'Aligning with Nature',
    description:
      'Instead of forcing, we listen. Instead of controlling, we attune. This is the path of least resistance, but deepest impact.',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Sparkles,
    title: 'Essence Insight',
    description:
      'Wisdom begins when we see the essence, not just surface appearances. We act not from emotion or bias, but from clarity and truth.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Target,
    title: 'Purpose-Driven',
    description:
      'Nature never stops creating, but always with direction. We grow not at any cost, but with purpose, meaning, and care for the whole.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: MessageSquare,
    title: 'Generative Feedback',
    description:
      'The Living Loop of Community. There is no true community without real feedback. We grow not by avoiding conflict, but by turning it into mirrors. Ai+Di evolves through empathy, courage, and shared reflection, not just logic.',
    gradient: 'from-cyan-500 to-teal-600',
  },
]

export default function AboutSection() {
  return (
    <>
      {/* Vision & Mission - Full Width Section */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-20">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/mission-vision-cover.png"
            alt="Vision & Mission Background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-16 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Vision & Mission
              </span>
            </h2>

            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-cyan-500/20 bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center">
                      <div className="mr-4 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                      <h3 className="text-2xl font-bold text-cyan-400">Our Vision</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-300">
                      We believe the future of intelligence lies not in replicating human abilities,
                      but in unlocking the deeper potential within each person — where Divine
                      Intelligence and Artificial Intelligence coexist, complement, and evolve
                      together.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-300">
                      Ai+Di envisions a world where every individual is supported to become a more
                      balanced, wise, and empowered version of themselves, by living in alignment
                      with the natural laws. It is a future where technology does not enslave or
                      diminish humanity, but instead serves and enlightens it.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-cyan-500/20 bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center">
                      <div className="mr-4 h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                      <h3 className="text-2xl font-bold text-blue-400">Our Mission</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Our mission is to build products and platforms that combine Artificial
                      Intelligence with Divine Intelligence, enabling people to make decisions in
                      harmony with natural laws — fostering deep inner transformation and
                      sustainable external development.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-300">
                      We are not just creating technology; we are designing a journey — where
                      individuals, organizations, and communities can grow stronger without losing
                      their inner peace.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of About Section */}
      <section
        id="about"
        className="relative py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Ai+Di Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="-mb-20"
          >
            <h3 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ai+Di Philosophy
              </span>
            </h3>
            <p className="mb-12 text-center text-lg text-gray-400">
              These Principles Guiding Our Work
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="group h-full overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
                    <CardContent className="p-6">
                      {/* Centered icon and title */}
                      <div className="mb-4 text-center">
                        <div
                          className={`h-12 w-12 bg-gradient-to-br ${principle.gradient} mx-auto mb-3 flex items-center justify-center rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110`}
                        >
                          <principle.icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {principle.description}
                      </p>

                      {/* Subtle glow effect on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} pointer-events-none rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
