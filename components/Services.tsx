'use client'

import { motion } from 'framer-motion'
import {
  InstagramLogo,
  Camera,
  ChartLineUp,
  DeviceMobileCamera,
  Compass,
} from '@phosphor-icons/react'
import { ShaderBackground } from './ui/shader-background'

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
    bg: UNSPLASH('photo-1612528443702-f6741f70a049', 1600),
  },
  {
    icon: InstagramLogo,
    title: 'Instagram Reels',
    desc: 'Premium Reels that drive followers, saves, and bookings.',
    span: '',
    bg: UNSPLASH('photo-1492691527719-9d1e07e534b4'),
  },
  {
    icon: Camera,
    title: 'Food & Lifestyle Photography',
    desc: 'Premium photos that make your products irresistible.',
    span: '',
    bg: UNSPLASH('photo-1556910103-1c02745aae4d'),
  },
  {
    icon: DeviceMobileCamera,
    title: 'Story Creation',
    desc: 'Engaging Stories that keep your audience coming back daily.',
    span: '',
    bg: UNSPLASH('photo-1556656793-08538906a9f8'),
  },
  {
    icon: ChartLineUp,
    title: 'Social Media Management',
    desc: 'Full management of your Instagram and TikTok presence.',
    span: '',
    bg: UNSPLASH('photo-1460925895917-afdab827c52f'),
  },
  {
    icon: Compass,
    title: 'Content Strategy',
    desc: 'Data-driven strategy to grow your presence consistently in Valencia and beyond.',
    span: 'col-span-2 lg:col-span-4',
    bg: UNSPLASH('photo-1499750310107-5fef28a66643', 1600),
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated shader background — visible behind every card */}
      <ShaderBackground
        variant="mesh"
        speed={0.28}
        colors={['#0a0a0a', '#141414', '#3a2a10', '#d4a857']}
        className="opacity-55"
      />

      {/* Soft vignette so the section blends with neighboring sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(10,10,10,0) 0%, rgba(10,10,10,0.55) 75%, rgba(10,10,10,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
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
            <p className="text-white/55 max-w-xs text-sm leading-relaxed">
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
                className={`relative rounded-2xl border border-white/[0.08] overflow-hidden group cursor-default backdrop-blur-md bg-white/[0.03] ${service.span ?? ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ borderColor: 'rgba(212,168,87,0.28)' }}
              >
                {/* Photo blended on top of the shader */}
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  style={{
                    backgroundImage: `url(${service.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: service.bgPosition ?? 'center',
                    backgroundRepeat: 'no-repeat',
                    mixBlendMode: 'overlay',
                    opacity: 0.45,
                  }}
                  aria-hidden="true"
                />

                {/* Subtle dark scrim — keeps text crisp without hiding the shader */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.7) 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Gold hover wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a857]/0 to-transparent group-hover:from-[#d4a857]/[0.08] transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="p-2.5 w-fit rounded-xl bg-white/[0.08] border border-white/[0.14] backdrop-blur-sm group-hover:bg-[#d4a857]/15 group-hover:border-[#d4a857]/35 transition-all duration-300">
                    <Icon
                      size={isLarge ? 26 : 20}
                      className="text-white/85 group-hover:text-[#d4a857] transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <h3
                      className={`font-syne font-bold text-white mb-1.5 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] ${
                        isLarge ? 'text-xl lg:text-2xl' : 'text-base'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-white/70 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] ${
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
