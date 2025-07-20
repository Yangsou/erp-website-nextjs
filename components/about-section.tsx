"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Users, Lightbulb, Target, Compass, Zap, Eye, RotateCcw, Moon, Scale, Network, Leaf, Sparkles, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import Image from "next/image"

const principles = [
  {
    icon: Eye,
    title: "Conscious Grounding",
    description:
      "The Foundation of All Operation. Without conscious awareness, any tool, even AI, can be misused. Consciousness means observing yourself in real time and choosing with intention, not reacting blindly. This is the foundation of all true creativity, evolution, and clarity.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: RotateCcw,
    title: "Constant Change",
    description:
      "Everything is always in motion. Nothing is fixed. Growth begins when we accept and adapt to change.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: Moon,
    title: "Cyclical Nature",
    description: 
      "Nature works in rhythms — day/night, seasons, life/death. Living in tune with these cycles helps us act at the right time and with less energy waste.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Scale,
    title: "Dynamic Balance",
    description: 
      "Balance isn't about standing still. It's the ability to adjust in motion, to know when to advance or retreat, open or close, without extremes.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Network,
    title: "Interdependence",
    description: 
      "Opposites need each other to exist, light/dark, action/rest. Respecting difference creates wholeness. Nothing stands alone.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Leaf,
    title: "Aligning with Nature",
    description: 
      "Instead of forcing, we listen. Instead of controlling, we attune. This is the path of least resistance, but deepest impact.",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    icon: Sparkles,
    title: "Essence Insight",
    description: 
      "Wisdom begins when we see the essence, not just surface appearances. We act not from emotion or bias, but from clarity and truth.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description: 
      "Nature never stops creating, but always with direction. We grow not at any cost, but with purpose, meaning, and care for the whole.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: MessageSquare,
    title: "Generative Feedback",
    description: 
      "The Living Loop of Community. There is no true community without real feedback. We grow not by avoiding conflict, but by turning it into mirrors. AI+DI evolves through empathy, courage, and shared reflection, not just logic.",
    gradient: "from-cyan-500 to-teal-600",
  },
]

// Team member interface based on Strapi response
interface TeamMember {
  id: number
  documentId: string
  name: string
  job_title: string
  description: Array<{
    type: string
    children: Array<{
      text: string
      type: string
    }>
  }>
  createdAt: string
  updatedAt: string
  publishedAt: string
  avatar_url?: string
}

export default function AboutSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('/api/team-members')
        const result = await response.json()

        if (response.ok) {
          setTeamMembers(result.data.data || [])
        } else {
          console.error('Failed to fetch team members:', result.error)
          setError('Failed to load team members')
        }
      } catch (error) {
        console.error('Error fetching team members:', error)
        setError('Failed to load team members')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  // Helper function to extract text from Strapi rich text
  const extractTextFromDescription = (description: TeamMember['description']): string => {
    if (!description || !Array.isArray(description)) return ''
    return description
      .map(block => 
        block.children
          ?.map(child => child.text)
          .join('') || ''
      )
      .join(' ')
  }

  return (
    <>
      {/* Vision & Mission - Full Width Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/mission-vision-cover.png"
            alt="Vision & Mission Background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Vision & Mission
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4"></div>
                      <h3 className="text-2xl font-bold text-cyan-400">Our Vision</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      We believe the future of intelligence lies not in replicating human abilities, but in unlocking the deeper potential within each person — where Divine Intelligence and Artificial Intelligence coexist, complement, and evolve together.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg mt-4">
                      AI+DI envisions a world where every individual is supported to become a more balanced, wise, and empowered version of themselves, by living in alignment with the natural laws. It is a future where technology does not enslave or diminish humanity, but instead serves and enlightens it.
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
                <Card className="bg-transparent backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></div>
                      <h3 className="text-2xl font-bold text-blue-400">Our Mission</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                    Our mission is to build products and platforms that combine Artificial Intelligence with Divine Intelligence, enabling people to make decisions in harmony with natural laws — fostering deep inner transformation and sustainable external development.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg mt-4">
                    We are not just creating technology; we are designing a journey — where individuals, organizations, and communities can grow stronger without losing their inner peace.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* AI+DI Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="-mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI+DI Philosophy
              </span>
            </h3>
            <p className="text-center text-gray-400 mb-12 text-lg">These Principles Guiding Our Work</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full group overflow-hidden">
                    <CardContent className="p-6">
                      {/* Centered icon and title */}
                      <div className="text-center mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${principle.gradient} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <principle.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>

                      {/* Subtle glow effect on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-lg`}
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
