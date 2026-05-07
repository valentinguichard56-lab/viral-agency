'use client'

import { motion } from 'framer-motion'
import {
  InstagramLogo,
  Camera,
  ChartLineUp,
  DeviceMobileCamera,
  Compass,
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
  bg: string
  bgPosition?: string
}

const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`

const services: Service[] = [
  {
    icon: TikTokIcon,
    title: 'TikTok Content Creation',
    desc: 'Viral-optimized short-form videos designed for maximum reach and engagement. Every hook, transition, and sound engineered for the algorithm.',
    span: 'lg:col-span-2 lg:row-span-2',
    bg: UNSPLASH('photo-1611162616305-c69b3fa7fbe0', 1600),
    bgPosition: 'center',
  },
  {
    icon: InstagramLogo,
    title: 'Instagram Reels',
    desc: 'Premium Reels that drive followers, saves, and bookings.',
    span: '',
    bg: UNSPLASH('photo-1611605698323-b1e99cfd37ea'),
    bgPosition: 'center',
  },
  {
    icon: Camera,
    title: 'Food & Lifestyle Photography',
    desc: 'Premium photos that make your products irresistible.',
    span: '',
    bg: UNSPLASH('photo-1567620905732-2d1ec7ab7445'),
    bgPosition: 'center',
  },
  {
    icon: DeviceMobileCamera,
    title: 'Story Creation',
    desc: 'Engaging Stories that keep your audience coming back daily.',
    span: '',
    bg: UNSPLASH('photo-1611162616475-46b635cb6868'),
    bgPosition: 'center',
  },
  {
    icon: ChartLineUp,
    title: 'Social Media Management',
    desc: 'Full management of your Instagram and TikTok presence.',
    span: '',
    bg: UNSPLASH('photo-1551288049-bebda4e38f71'),
    bgPosition: 'center',
  },
  {
    icon: Compass,
    title: 'Content Strategy',
    desc: 'Data-driven strategy to grow your presence consistently in Valencia and beyond.',
    span: 'col-span-2 lg:col-span-4',
    bg: UNSPLASH('photo-1542626991-cbc4e32524cc', 1600),
    bgPosition: 'center',
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
            const isWide = i === services.length - 1

            return (
              <motion.div
                key={service.title}
                className={`relative bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden group cursor-default ${service.span ?? ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ borderColor: 'rgba(212,168,87,0.22)' }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url(${service.bg})`,
                    backgroundPosition: service.bgPosition ?? 'center',
                    filter: 'saturate(0.85)',
                  }}
                  aria-hidden="true"
                />

                {/* Dark overlay to keep text readable */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.86) 55%, rgba(10,10,10,0.94) 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Subtle gold hover wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a857]/0 to-transparent group-hover:from-[#d4a857]/[0.07] transition-all duration-500" />

                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div
                    className={`p-2.5 w-fit rounded-xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm group-hover:bg-[#d4a857]/15 group-hover:border-[#d4a857]/30 transition-all duration-300`}
                  >
                    <Icon
                      size={isLarge ? 26 : 20}
                      className="text-white/75 group-hover:text-[#d4a857] transition-colors duration-300"
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
                      className={`text-white/60 leading-relaxed ${
                        isLarge ? 'text-sm' : 'text-xs'
                      } ${isWide ? 'max-w-md' : ''}`}
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
