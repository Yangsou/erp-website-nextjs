'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { ArrowRight, Loader } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as zod from 'zod'

import { useContactRegisterForm } from '@/lib/hooks/use-contact-register'

import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

import type { ContactFormData } from '@/lib/hooks/use-contact-register'

const contactSchema = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  phoneNumber: zod.string(),
  company: zod.string(),
  sectoral: zod.string(),
  message: zod.string(),
  email: zod.string().email({ message: 'invalid_email_address' }),
})

export default function AcademyContatctForm() {
  const t = useTranslations('AcademyPage.ContactForm')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { isMutating, trigger, error } = useContactRegisterForm()

  const { handleSubmit, register, reset } = useForm<zod.infer<typeof contactSchema>>({
    defaultValues: {
      firstname: '',
      email: '',
      lastname: '',
      company: '',
      sectoral: '',
      phoneNumber: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  })
  const onSubmit = (data: ContactFormData) => {
    trigger(data)
      .then(() => {
        toast.success(t('message_success'))
        reset()
      })
      .catch(() => {
        console.error('Subscription failed')
      })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card className="transition-all duration-300">
        <CardContent className="p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="firstname"
                  className="text-sm font-medium text-[#525757]"
                >
                  {t('firstname')}
                </label>
                <Input
                  placeholder={t('firstname_placeholder')}
                  required
                  id="firstname"
                  className="h-12 border-[#CCCCCC] text-[#202222] placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus-visible:ring-transparent"
                  {...register('firstname')}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastname"
                  className="text-sm font-medium text-[#525757]"
                >
                  {t('lastname')}
                </label>
                <Input
                  id="lastname"
                  placeholder={t('lastname_placeholder')}
                  required
                  className="focus:ring-cyan-transparent h-12 border-[#CCCCCC] text-[#202222] placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus-visible:ring-transparent"
                  {...register('lastname')}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#525757]"
                >
                  {t('email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('email_placeholder')}
                  required
                  className="focus:ring-cyan-transparent h-12 border-[#CCCCCC] text-[#202222] placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus-visible:ring-transparent"
                  {...register('email')}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone_number"
                  className="text-sm font-medium text-[#525757]"
                >
                  {t('phone_number')}
                </label>
                <Input
                  id="phone_number"
                  type="tel"
                  placeholder={t('phone_number_placeholder')}
                  required
                  className="focus:ring-cyan-transparent h-12 border-[#CCCCCC] text-[#202222] placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus-visible:ring-transparent"
                  {...register('phoneNumber')}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-[#525757]"
                >
                  {t('company')}
                </label>
                <Input
                  id="company"
                  placeholder={t('company_placeholder')}
                  className="focus:ring-cyan-transparent h-12 border-[#CCCCCC] text-[#202222] placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus-visible:ring-transparent"
                  {...register('company')}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="expectedTime"
                  className="text-sm font-medium text-[#525757]"
                >
                  {t('sectoral')}
                </label>
                <Input
                  id="sectoral"
                  placeholder={t('sectoral_placeholder')}
                  required
                  className="focus:ring-cyan-transparent h-12 border-[#CCCCCC] text-[#202222] placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus-visible:ring-transparent"
                  {...register('sectoral')}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#525757]"
                >
                  {t('sectoral')}
                </label>
                <Textarea
                  id="message"
                  placeholder={t('message_placeholder')}
                  rows={5}
                  className="focus:ring-cyan-transparent h-12 min-h-[120px] resize-none border-[#CCCCCC] text-[#202222] placeholder-gray-400 transition-all duration-300 focus:border-cyan-400 focus-visible:ring-transparent"
                  {...register('message')}
                />
              </div>
            </div>

            {/* Status Messages */}
            {/* {submitStatus === 'success' && (
                    <div className="rounded-lg border border-green-500/30 bg-green-500/20 p-4">
                      <p className="text-sm text-green-400">
                        Thank you! Your message has been sent successfully.
                      </p>
                    </div>
                  )} */}

            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/20 p-4">
                <p className="text-sm text-red-400">{t('error')}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isMutating}
              className="group relative h-14 w-full overflow-hidden border-0 bg-[#6DC9CB] py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#A0DCDD] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t('register')}
              {isMutating ? <Loader /> : <ArrowRight className="relative z-10 mr-2 h-6 w-6" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
