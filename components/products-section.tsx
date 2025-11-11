'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Building2,
  GraduationCap,
  Heart,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  BookOpen,
  Briefcase,
  Target,
} from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const products = [
  {
    icon: Clock,
    name: 'Life Rhythm',
    tagline: 'Your AI companion for conscious living',
    description:
      'Sync your daily activities with your natural rhythms. Life Rhythm learns your patterns and helps optimize your energy, focus, and well-being throughout the day.',
    features: [
      'Personalized rhythm analysis',
      'Energy optimization',
      'Mindful scheduling',
      'Wellness tracking',
    ],
    useCases: ['Students', 'Employees', 'Founders'],
    gradient: 'from-cyan-500 to-blue-600',
    demo: true,
    image: '/life-rhythm-cover.png',
  },
  {
    icon: Building2,
    name: 'Work Rhythm',
    tagline: 'Enterprise resource planning that breathes',
    description:
      'Revolutionary ERP system that synchronizes organizational workflows with human rhythms, creating more productive and sustainable work environments.',
    features: [
      'Rhythm-based scheduling',
      'Team energy mapping',
      'Workflow optimization',
      'Well-being analytics',
    ],
    useCases: ['Organizations', 'Teams', 'Managers'],
    gradient: 'from-blue-500 to-purple-600',
    image: '/work-rhythm-cover.png',
  },
  {
    icon: GraduationCap,
    name: 'Learning Rhythm​',
    tagline: 'Learning that adapts to you',
    description:
      'Not just an app, but a complete learning journey. Personalized education that respects your learning rhythms and cognitive patterns.',
    features: [
      'Adaptive curriculum',
      'Rhythm-based learning',
      'Personalized pace',
      'Community learning',
    ],
    useCases: ['Lifelong learners', 'Professionals', 'Students'],
    gradient: 'from-purple-500 to-pink-600',
    image: '/learning-rhythm-cover.png',
  },
  {
    icon: Heart,
    name: 'Wellbeing Partners (AI EAP)​',
    tagline: 'Emotional wellness in the AI age',
    description:
      'Employee Assistance Program focused on managing emotions and energy. Balance your mindset and maintain mental wellness in our fast-paced world.',
    features: ['Emotion tracking', 'Energy balancing', 'Stress management', 'Mindfulness tools'],
    useCases: ['Employees', 'HR teams', 'Wellness coaches'],
    gradient: 'from-pink-500 to-red-600',
    image: '/wellbeing-cover.png',
  },
]

const lifeRhythmFeatures = [
  {
    icon: Zap,
    title: 'Energy Optimization',
    description:
      'AI-powered analysis of your natural energy patterns to maximize productivity during peak hours.',
  },
  {
    icon: Clock,
    title: 'Rhythm Tracking',
    description:
      'Continuous monitoring of your biological rhythms, sleep patterns, and activity cycles.',
  },
  {
    icon: Target,
    title: 'Mindful Scheduling',
    description:
      'Intelligent calendar integration that respects your natural rhythms and well-being needs.',
  },
  {
    icon: Heart,
    title: 'Wellness Integration',
    description: 'Holistic approach combining physical, mental, and emotional well-being metrics.',
  },
  {
    icon: CheckCircle,
    title: 'Personalized Insights',
    description: 'Custom recommendations based on your unique patterns and lifestyle preferences.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description:
      'Connect with others on similar journeys and share rhythm-based living experiences.',
  },
]

const useCases = [
  {
    icon: BookOpen,
    title: 'For Students',
    description:
      'Optimize study schedules around your natural focus patterns. Life Rhythm helps students identify their peak learning hours, manage academic stress, and maintain healthy study-life balance through personalized rhythm analysis.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Briefcase,
    title: 'For Employees',
    description:
      'Transform your work experience by aligning tasks with your energy cycles. Reduce burnout, increase productivity, and achieve better work-life integration through conscious scheduling and rhythm-aware planning.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Target,
    title: 'For Founders',
    description:
      'Lead with intention and sustainable energy. Life Rhythm helps entrepreneurs make better decisions, manage stress, and maintain peak performance while building their vision without sacrificing personal well-being.',
    gradient: 'from-purple-500 to-pink-600',
  },
]

export default function ProductsSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="products"
      className="relative py-20"
    >
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
              Our Products
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
            Discover our suite of AI-powered tools designed to enhance human potential and create
            more conscious, rhythmic ways of living and working.
          </p>
        </motion.div>

        {/* Life Rhythm Product Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
            <CardContent className="p-0">
              {/* Header */}
              <div className="border-b border-cyan-500/20 p-8 text-center lg:p-12">
                <div className="mb-6 flex items-center justify-center space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-white md:text-5xl">Life Rhythm</h3>
                    <p className="text-lg font-medium text-cyan-400">
                      Your AI companion for conscious living
                    </p>
                  </div>
                </div>
                <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">
                  Life Rhythm is more than just a productivity app—it's your personal AI companion
                  that learns your unique biological and energy patterns. By understanding when you
                  naturally focus best, rest most deeply, and feel most creative, Life Rhythm helps
                  you design a life that works with your body's wisdom rather than against it.
                </p>
              </div>

              {/* Two-column layout */}
              <div className="grid gap-0 lg:grid-cols-2">
                {/* Left: Product Image */}
                <div className="flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600">
                  <div className="h-full w-full">
                    <div className="relative h-full w-full">
                      <Image
                        src="/life-rhythm-cover.png"
                        alt="Life Rhythm Product"
                        fill
                        className="object-cover object-left"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Features */}
                <div className="p-8 lg:p-12">
                  <h4 className="mb-8 text-2xl font-bold text-white">Key Features & Benefits</h4>
                  <div className="space-y-6">
                    {lifeRhythmFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex items-start space-x-4"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                          <feature.icon className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h5 className="mb-1 font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                            {feature.title}
                          </h5>
                          <p className="text-sm leading-relaxed text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-cyan-500/20 p-8 text-center lg:p-12">
                <Button
                  onClick={scrollToContact}
                  className="font-spaceGrotesk group border-0 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-lg font-medium text-white hover:from-cyan-600 hover:to-blue-700"
                >
                  Explore Life Rhythm
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Who Benefits?
            </span>
          </h3>
          <p className="mb-12 text-center text-lg text-gray-400">
            Life Rhythm adapts to your unique lifestyle and goals
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="group h-full overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50">
                  <CardContent className="p-8 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`h-16 w-16 bg-gradient-to-br ${useCase.gradient} mx-auto mb-6 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                    >
                      <useCase.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                      {useCase.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-400">{useCase.description}</p>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />

                  {/* Glowing border effect */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-br ${useCase.gradient} pointer-events-none -z-10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Products Grid */}
        <div className="space-y-12">
          {products.slice(1).map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
                <CardContent className="p-0">
                  <div
                    className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 0 ? 'lg:grid-flow-col-dense' : ''}`}
                  >
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'lg:col-start-2' : ''}`}>
                      <div className="mb-6 flex items-center space-x-4">
                        <div
                          className={`h-12 w-12 bg-gradient-to-br ${product.gradient} flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110`}
                        >
                          <product.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                          <p className="font-medium text-cyan-400">{product.tagline}</p>
                        </div>
                      </div>

                      <p className="mb-6 text-lg leading-relaxed text-gray-300">
                        {product.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="mb-3 font-semibold text-white">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center space-x-2"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                              <span className="text-sm text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="mb-3 font-semibold text-white">Perfect for:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.useCases.map((useCase) => (
                            <span
                              key={useCase}
                              className="rounded-full border border-cyan-500/20 bg-gradient-to-r from-slate-700/50 to-slate-600/50 px-3 py-1 text-sm text-cyan-400 backdrop-blur-sm"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 sm:flex-row">
                        <Button
                          onClick={scrollToContact}
                          className={`bg-gradient-to-r ${product.gradient} font-spaceGrotesk group border-0 text-white hover:opacity-90`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>

                    {/* Visual */}
                    <div
                      className={`bg-gradient-to-br ${product.gradient} flex items-center justify-center ${index % 2 === 0 ? 'lg:col-start-1' : ''}`}
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={product.image}
                          alt={`${product.name} Product`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
