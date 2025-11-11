'use client'

import { motion } from 'framer-motion'
import { Users, Lightbulb, Target, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const movementFeatures = [
  {
    icon: Users,
    title: 'Collective Awareness',
    description:
      'Share experiences and insights with fellow travelers on the conscious AI journey.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Lightbulb,
    title: 'Shared Learning',
    description: 'Learn from real experiences and discover new ways to integrate AI mindfully.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Connect with others who share your vision of conscious technology integration.',
    gradient: 'from-pink-500 to-purple-600',
  },
]

export default function JoinMovementSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-white">Join the </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Movement
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-300">
            A community of conscious individuals exploring the intersection of AI and human
            potential.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {movementFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="group h-full overflow-hidden border border-purple-500/30 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`h-16 w-16 bg-gradient-to-br ${feature.gradient} mx-auto mb-6 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-gray-300">{feature.description}</p>
                </CardContent>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="font-spaceGrotesk group border-0 bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/25"
          >
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
