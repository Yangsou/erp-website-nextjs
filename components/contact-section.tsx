'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon, LinkedInIcon } from './social-icons'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'contact@aidi.world',
    description: '',
    href: 'mailto:contact@aidi.world',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    content: '2 Ton Duc Thang, Saigon Ward, Ho Chi Minh City',
    description: '',
    href: '#',
  },
  {
    icon: MapPin,
    title: 'Business Office',
    content: '1st and 4th Floors, 46 Bach Dang, Tan Son Hoa Ward, Ho Chi Minh City',
    description: '',
    href: '#',
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/aidi',
    icon: FacebookIcon,
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-500 hover:to-blue-600',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/ai+di_world',
    icon: InstagramIcon,
    color: 'from-pink-600 to-purple-600',
    hoverColor: 'hover:from-pink-500 hover:to-purple-500',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@AIplusDIJSC',
    icon: YouTubeIcon,
    color: 'from-red-600 to-red-700',
    hoverColor: 'hover:from-red-500 hover:to-red-600',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@aidiworld',
    icon: TikTokIcon,
    color: 'from-slate-800 to-black',
    hoverColor: 'hover:from-slate-700 hover:to-slate-900',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aidiworld',
    icon: LinkedInIcon,
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-500 hover:to-blue-600',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { success?: boolean; error?: string }

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone_number: '',
          subject: '',
          message: '',
        })
      } else {
        console.error('Contact form error:', result.error)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Floating background elements */}
      <div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
            Ready to join the conscious AI revolution? We'd love to hear from you and explore how we
            can work together.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40">
              <CardContent className="p-8">
                <div className="mb-8 flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send us a message</h3>
                    <p className="text-gray-400">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstname"
                        className="text-sm font-medium text-gray-300"
                      >
                        First Name *
                      </label>
                      <Input
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                        className="h-12 border-cyan-500/30 bg-slate-800/50 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastname"
                        className="text-sm font-medium text-gray-300"
                      >
                        Last Name *
                      </label>
                      <Input
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                        className="h-12 border-cyan-500/30 bg-slate-800/50 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-300"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="h-12 border-cyan-500/30 bg-slate-800/50 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone_number"
                      className="text-sm font-medium text-gray-300"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone_number"
                      name="phone_number"
                      type="tel"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="h-12 border-cyan-500/30 bg-slate-800/50 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-300"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      required
                      className="h-12 border-cyan-500/30 bg-slate-800/50 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-300"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your project, questions, or how we can collaborate..."
                      required
                      className="min-h-[140px] resize-none border-cyan-500/30 bg-slate-800/50 text-white placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus:ring-cyan-400/20"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="rounded-lg border border-green-500/30 bg-green-500/20 p-4">
                      <p className="text-sm text-green-400">
                        Thank you! Your message has been sent successfully.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="rounded-lg border border-red-500/30 bg-red-500/20 p-4">
                      <p className="text-sm text-red-400">
                        Sorry, there was an error sending your message. Please try again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden border-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-600 hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <Send className="relative z-10 mr-2 h-5 w-5" />
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">Let's Connect</h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                Whether you're interested in our products, want to join our community, or explore
                partnership opportunities, we're here to help you on your journey toward conscious
                living with AI.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 rounded-xl border border-cyan-500/20 bg-gradient-to-r from-slate-800 to-slate-700 p-4 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <info.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-white">{info.title}</h4>
                    <p className="mb-1 font-medium text-cyan-400">{info.content}</p>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="border-t border-cyan-500/20 pt-8">
              <h4 className="mb-6 text-lg font-semibold text-white">Follow Our Journey</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`flex flex-col items-center bg-gradient-to-br p-4 ${social.color} ${social.hoverColor} group rounded-xl border border-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}
                  >
                    <social.icon className="mb-2 h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm font-medium text-white">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
