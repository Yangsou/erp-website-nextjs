"use client"

import { motion } from "framer-motion"
import { Heart, Zap, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Heart,
    title: "Conscious Living",
    description:
      "AI that enhances human awareness and promotes mindful decision-making in daily life, helping you live with greater intention and purpose.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Zap,
    title: "Human Rhythm",
    description:
      "Technology that syncs with your natural energy patterns and biological rhythms, optimizing productivity while respecting your well-being.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "AI for Good",
    description:
      "Ethical AI development focused on human flourishing, privacy protection, and creating positive impact for individuals and communities.",
    gradient: "from-purple-500 to-indigo-600",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">What We Do</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We create AI solutions that amplify human potential while preserving what makes us uniquely human.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
                              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full group overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">{feature.description}</p>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0 h-auto group/btn font-spaceGrotesk"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
