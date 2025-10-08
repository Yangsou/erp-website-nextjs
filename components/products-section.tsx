"use client"

import { motion } from "framer-motion"
import {
  Clock,
  Building2,
  GraduationCap,
  Heart,
  ArrowRight,
  Play,
  CheckCircle,
  Zap,
  Users,
  BookOpen,
  Briefcase,
  Target,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    icon: Clock,
    name: "Life Rhythm",
    tagline: "Your AI companion for conscious living",
    description:
      "Sync your daily activities with your natural rhythms. Life Rhythm learns your patterns and helps optimize your energy, focus, and well-being throughout the day.",
    features: ["Personalized rhythm analysis", "Energy optimization", "Mindful scheduling", "Wellness tracking"],
    useCases: ["Students", "Employees", "Founders"],
    gradient: "from-cyan-500 to-blue-600",
    demo: true,
    image: "/life-rhythm-cover.png",
  },
  {
    icon: Building2,
    name: "Work Rhythm",
    tagline: "Enterprise resource planning that breathes",
    description:
      "Revolutionary ERP system that synchronizes organizational workflows with human rhythms, creating more productive and sustainable work environments.",
    features: ["Rhythm-based scheduling", "Team energy mapping", "Workflow optimization", "Well-being analytics"],
    useCases: ["Organizations", "Teams", "Managers"],
    gradient: "from-blue-500 to-purple-600",
    image: "/work-rhythm-cover.png",
  },
  {
    icon: GraduationCap,
    name: "Learning Rhythm​",
    tagline: "Learning that adapts to you",
    description:
      "Not just an app, but a complete learning journey. Personalized education that respects your learning rhythms and cognitive patterns.",
    features: ["Adaptive curriculum", "Rhythm-based learning", "Personalized pace", "Community learning"],
    useCases: ["Lifelong learners", "Professionals", "Students"],
    gradient: "from-purple-500 to-pink-600",
    image: "/learning-rhythm-cover.png",
  },
  {
    icon: Heart,
    name: "Wellbeing Partners (AI EAP)​",
    tagline: "Emotional wellness in the AI age",
    description:
      "Employee Assistance Program focused on managing emotions and energy. Balance your mindset and maintain mental wellness in our fast-paced world.",
    features: ["Emotion tracking", "Energy balancing", "Stress management", "Mindfulness tools"],
    useCases: ["Employees", "HR teams", "Wellness coaches"],
    gradient: "from-pink-500 to-red-600",
    image: "/wellbeing-cover.png",
  },
]

const lifeRhythmFeatures = [
  {
    icon: Zap,
    title: "Energy Optimization",
    description: "AI-powered analysis of your natural energy patterns to maximize productivity during peak hours.",
  },
  {
    icon: Clock,
    title: "Rhythm Tracking",
    description: "Continuous monitoring of your biological rhythms, sleep patterns, and activity cycles.",
  },
  {
    icon: Target,
    title: "Mindful Scheduling",
    description: "Intelligent calendar integration that respects your natural rhythms and well-being needs.",
  },
  {
    icon: Heart,
    title: "Wellness Integration",
    description: "Holistic approach combining physical, mental, and emotional well-being metrics.",
  },
  {
    icon: CheckCircle,
    title: "Personalized Insights",
    description: "Custom recommendations based on your unique patterns and lifestyle preferences.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with others on similar journeys and share rhythm-based living experiences.",
  },
]

const useCases = [
  {
    icon: BookOpen,
    title: "For Students",
    description:
      "Optimize study schedules around your natural focus patterns. Life Rhythm helps students identify their peak learning hours, manage academic stress, and maintain healthy study-life balance through personalized rhythm analysis.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Briefcase,
    title: "For Employees",
    description:
      "Transform your work experience by aligning tasks with your energy cycles. Reduce burnout, increase productivity, and achieve better work-life integration through conscious scheduling and rhythm-aware planning.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Target,
    title: "For Founders",
    description:
      "Lead with intention and sustainable energy. Life Rhythm helps entrepreneurs make better decisions, manage stress, and maintain peak performance while building their vision without sacrificing personal well-being.",
    gradient: "from-purple-500 to-pink-600",
  },
]

export default function ProductsSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our suite of AI-powered tools designed to enhance human potential and create more conscious,
            rhythmic ways of living and working.
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
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="p-8 lg:p-12 text-center border-b border-cyan-500/20">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Life Rhythm</h3>
                    <p className="text-cyan-400 font-medium text-lg">Your AI companion for conscious living</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                  Life Rhythm is more than just a productivity app—it's your personal AI companion that learns your
                  unique biological and energy patterns. By understanding when you naturally focus best, rest most
                  deeply, and feel most creative, Life Rhythm helps you design a life that works with your body's wisdom
                  rather than against it.
                </p>
              </div>

              {/* Two-column layout */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Product Image */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <div className="w-full h-full">
                    <div className="w-full h-full relative">
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
                  <h4 className="text-2xl font-bold text-white mb-8">Key Features & Benefits</h4>
                  <div className="space-y-6">
                    {lifeRhythmFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                            {feature.title}
                          </h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 lg:p-12 text-center border-t border-cyan-500/20">
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg font-medium group font-spaceGrotesk"
                >
                  Explore Life Rhythm
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Who Benefits?
            </span>
          </h3>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Life Rhythm adapts to your unique lifestyle and goals
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full group overflow-hidden">
                  <CardContent className="p-8 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <useCase.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {useCase.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm">{useCase.description}</p>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* Glowing border effect */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-xl -z-10`}
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
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 0 ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 0 ? "lg:col-start-2" : ""}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                          <p className="text-cyan-400 font-medium">{product.tagline}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{product.description}</p>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                              <span className="text-gray-400 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-white font-semibold mb-3">Perfect for:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.useCases.map((useCase) => (
                            <span
                              key={useCase}
                              className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm border border-cyan-500/20 rounded-full px-3 py-1 text-sm text-cyan-400"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={scrollToContact}
                          className={`bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white border-0 group font-spaceGrotesk`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    {/* Visual */}
                    <div
                      className={`bg-gradient-to-br ${product.gradient} flex items-center justify-center ${index % 2 === 0 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="w-full h-full relative">
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
