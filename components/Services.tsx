'use client'

import { motion } from 'framer-motion'
import {
  InstagramLogo,
  Camera,
  ChartLineUp,
  DeviceMobileCamera,
  Lightning,
  MapPin,
  Compass,
  Sparkle,
} from '@phosphor-icons/react'

function TikTokIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.54V6.8a4.84 4.84 0 01-1.07-.11z" />
    </svg>
  )
}

type Service = {
  icon: React.ElementType | ((props: { size?: number; className?: string }) => JSX.Element)
  title: string
  desc: string
  span?: string
}

const services: Service[] = [
  {
    icon: TikTokIcon,
    title: 'TikTok Content Creation',
    desc: 'Viral-optimized short-form videos designed for maximum reach and engagement. Every hook, transition, and sound engineered for the algorithm.',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    icon: InstagramLogo,
    title: 'Instagram Reels',
    desc: 'Premium Reels that drive followers, saves, and bookings.',
    span: '',
  },
  {
    icon: Camera,
    title: 'Food & Lifestyle Photography',
    desc: 'Premium photos that make your products irresistible.',
    span: '',
  },
  {
    icon: DeviceMobileCamera,
    title: 'Story Creation',
    desc: 'Engaging Stories that keep your audience coming back daily.',
    span: '',
  },
  {
    icon: ChartLineUp,
    title: 'Social Media Management',
    desc: 'Full management of your Instagram and TikTok presence.',
    span: '',
  },
  {
    icon: Lightning,
    title: 'Viral Short-Form Videos',
    desc: 'Content engineered to go viral and reach thousands of potential customers fast.',
    span: 'lg:col-span-2',
  },
  {
    icon: MapPin,
    title: 'Local Brand Promotion',
    desc: 'Hyper-local content strategy for Valencia businesses.',
    span: '',
  },
  {
    icon: Compass,
    title: 'Content Strategy',
    desc: 'Data-driven strategy to grow your presence consistently.',
    span: '',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#d4a857] text-xs uppercase tracking-[0.25em] mb-4">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white max-w-xl leading-tight">
              Premium Content Services
            </h2>
            <p className="text-white/35 max-w-xs text-sm leading-relaxed">
              Everything you need to dominate social media in Valencia and beyond.
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[170px]">
          {services.map((service, i) => {
            const Icon = service.icon
            const isLarge = i === 0
            const isWide = i === 5

            return (
              <motion.div
                key={service.title}
                className={`relative bg-[#141414] border border-white/[0.06] rounded-2xl p-6 overflow-hidden group cursor-default ${service.span ?? ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ borderColor: 'rgba(212,168,87,0.14)' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a857]/0 to-transparent group-hover:from-[#d4a857]/[0.035] transition-all duration-500 rounded-2xl" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div
                    className={`p-2.5 w-fit rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:bg-[#d4a857]/10 group-hover:border-[#d4a857]/20 transition-all duration-300`}
                  >
                    <Icon
                      size={isLarge ? 26 : 20}
                      className="text-white/55 group-hover:text-[#d4a857] transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <h3
                      className={`font-syne font-bold text-white mb-1.5 leading-tight ${
                        isLarge ? 'text-xl lg:text-2xl' : 'text-base'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-white/35 leading-relaxed ${
                        isLarge ? 'text-sm' : 'text-xs'
                      } ${isWide ? 'max-w-sm' : ''}`}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
