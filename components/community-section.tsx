'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Lightbulb, UserPlus, Award, Users, Heart, Compass } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const communityFeatures = [
  {
    icon: MessageCircle,
    title: 'Meaningful Conversations',
    description:
      'Connect with like-minded individuals exploring conscious living and AI integration.',
  },
  {
    icon: Lightbulb,
    title: 'Shared Learning',
    description: "Learn from others' experiences and share your own insights on the journey.",
  },
  {
    icon: Award,
    title: 'Mentorship Program',
    description: 'Become a mentor or find guidance from experienced community members.',
  },
]

const onboardingSteps = [
  {
    step: '01',
    title: 'Join the Community',
    description: 'Sign up and complete your profile to connect with others on similar journeys.',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    step: '02',
    title: 'Discover Your Rhythm',
    description:
      'Take our assessment to understand your unique patterns and connect with compatible members.',
    icon: Heart,
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    step: '03',
    title: 'Engage & Learn',
    description:
      'Participate in discussions, attend events, and share experiences with the community.',
    icon: MessageCircle,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    step: '04',
    title: 'Guide Others',
    description:
      'Share your insights and become a mentor to help others on their conscious living journey.',
    icon: Compass,
    gradient: 'from-pink-500 to-rose-600',
  },
]

export default function CommunitySection() {
  return (
    <section
      id="community"
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
              Community
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
            Join a community of conscious individuals navigating the intersection of AI and human
            potential.
          </p>
        </motion.div>

        {/* Why AI Companion Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Image
              src="/community-why-an-ai.png"
              alt="Why an AI Companion Matters"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-slate-800/20" />
          </div>

          <Card className="relative overflow-hidden border border-cyan-500/20 bg-transparent backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="mb-12 text-center">
                <h3 className="mb-6 text-3xl font-bold text-white drop-shadow-2xl md:text-4xl">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Why an AI Companion Matters
                  </span>
                </h3>
                <p className="mx-auto max-w-4xl text-lg font-medium leading-relaxed text-white drop-shadow-lg">
                  In an age where artificial intelligence is reshaping every aspect of our lives,
                  human connection becomes more precious than ever. An AI companion isn't about
                  replacing human relationships—it's about creating a bridge between technology and
                  consciousness. Our community provides a space for authentic relationships, shared
                  learning, and mutual support as we navigate this transformative landscape
                  together. Here, you'll find others who believe that the future of AI lies not in
                  replacing human connection, but in creating tools that help us connect more
                  meaningfully with ourselves and each other.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {communityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/40 to-blue-500/40 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-cyan-400 drop-shadow-md" />
                    </div>
                    <h4 className="mb-2 font-bold text-white drop-shadow-lg">{feature.title}</h4>
                    <p className="text-sm font-medium leading-relaxed text-white drop-shadow-md">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Onboarding Steps Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Your Journey Starts Here
            </span>
          </h3>
          <p className="mb-12 text-center text-lg text-gray-400">
            Four simple steps to join our conscious community
          </p>

          {/* Timeline for larger screens */}
          <div className="relative hidden lg:block">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gradient-to-r from-cyan-500/20 via-blue-500/40 to-purple-500/20" />

            <div className="relative grid gap-8 lg:grid-cols-4">
              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Glowing marker */}
                  <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/50" />

                  <Card className="group mt-8 border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`h-12 w-12 bg-gradient-to-br ${step.gradient} mx-auto mb-4 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="mb-2 text-2xl font-bold text-cyan-400">{step.step}</div>
                      <h4 className="mb-2 text-lg font-semibold text-white">{step.title}</h4>
                      <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cards for smaller screens */}
          <div className="grid gap-6 lg:hidden">
            {onboardingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`h-12 w-12 bg-gradient-to-br ${step.gradient} flex flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center space-x-3">
                          <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                          <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ambassador/Mentor Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background with abstract shapes */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl" />

          <Card className="relative overflow-hidden border border-cyan-500/30 bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Become an Ai+Di Ambassador
                  </span>
                </h3>
                <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
                  Ready to help others on their journey toward conscious living with AI? Join our
                  ambassador program and become a guide for those exploring the intersection of
                  technology and human potential.
                </p>
                <div className="mx-auto mb-8 max-w-2xl space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                    <span className="text-gray-300">
                      Share your expertise and insights with the community
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    <span className="text-gray-300">
                      Connect with like-minded individuals worldwide
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                    <span className="text-gray-300">
                      Help shape the future of conscious AI development
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="group relative overflow-hidden border-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 hover:shadow-cyan-500/25"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <UserPlus className="relative z-10 mr-2 h-5 w-5" />
                  <span className="font-spaceGrotesk relative z-10">
                    Join Our Ambassador Network
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
