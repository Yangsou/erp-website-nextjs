'use client'

import { motion } from 'framer-motion'
import { Heart, Brain, Zap, Users } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

const pillars = [
  {
    icon: Heart,
    title: 'Live',
    subtitle: 'Mindful existence in harmony with AI',
    description:
      'Embrace conscious living where technology enhances rather than overwhelms your daily experience.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Brain,
    title: 'Learn',
    subtitle: 'Continuous growth at your own rhythm',
    description:
      'Personalized learning journeys that adapt to your natural patterns and optimal growth moments.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Zap,
    title: 'Work',
    subtitle: 'Productive collaboration with AI',
    description:
      'Seamless integration of AI tools that amplify your capabilities while maintaining human creativity.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Community',
    subtitle: 'Collective consciousness and support',
    description:
      'Connect with like-minded individuals on a shared journey of conscious AI integration.',
    gradient: 'from-blue-500 to-purple-600',
  },
]

export default function FourPillarsSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-white">Four Pillars of </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Conscious AI
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-400">
            Our approach to integrating artificial intelligence into human life with intention and
            awareness.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="group h-full overflow-hidden border border-purple-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`h-16 w-16 bg-gradient-to-br ${pillar.gradient} mx-auto mb-6 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                  >
                    <pillar.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mb-4 text-sm font-medium text-purple-400">{pillar.subtitle}</p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-400">{pillar.description}</p>
                </CardContent>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
