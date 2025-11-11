'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Shield, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Heart,
    title: 'Conscious Living',
    description:
      'AI that enhances human awareness and promotes mindful decision-making in daily life, helping you live with greater intention and purpose.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Zap,
    title: 'Human Rhythm',
    description:
      'Technology that syncs with your natural energy patterns and biological rhythms, optimizing productivity while respecting your well-being.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'AI for Good',
    description:
      'Ethical AI development focused on human flourishing, privacy protection, and creating positive impact for individuals and communities.',
    gradient: 'from-purple-500 to-indigo-600',
  },
]

export default function ValuesSection() {
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
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
            We create AI solutions that amplify human potential while preserving what makes us
            uniquely human.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="group h-full overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`h-16 w-16 bg-gradient-to-br ${feature.gradient} mx-auto mb-6 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {feature.description}
                  </p>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="group/btn font-spaceGrotesk h-auto p-0 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
