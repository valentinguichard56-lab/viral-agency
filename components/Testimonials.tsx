'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, InstagramLogo, ArrowLeft, ArrowRight } from '@phosphor-icons/react'

function TikTokIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.54V6.8a4.84 4.84 0 01-1.07-.11z" />
    </svg>
  )
}

const testimonials = [
  {
    name: 'María G.',
    role: 'Restaurante La Marina',
    text: 'Our restaurant got more bookings after just one month. The TikTok videos they created brought hundreds of new customers through our door. Incredible results.',
    rating: 5,
    platform: 'tiktok',
    initials: 'MG',
    bg: 'from-amber-950/25 to-stone-950',
  },
  {
    name: 'Carlos M.',
    role: 'FitZone Gym Valencia',
    text: 'Best content agency in Valencia, hands down. They understand social media and know exactly how to capture attention. Our membership sign-ups doubled in two months.',
    rating: 5,
    platform: 'instagram',
    initials: 'CM',
    bg: 'from-zinc-800/25 to-neutral-950',
  },
  {
    name: 'Sofía R.',
    role: 'Café Ruzafa',
    text: 'Professional, fast, and incredibly creative. The aesthetic they built for our café is exactly what we imagined. Our Instagram grew from 800 to 15K followers in 3 months.',
    rating: 5,
    platform: 'instagram',
    initials: 'SR',
    bg: 'from-stone-800/25 to-amber-950/20',
  },
  {
    name: 'Javi L.',
    role: 'El Cóctel Bar',
    text: 'They really understand Valencia. The content feels authentic and local, not like generic agency work. Our bar is now fully booked on weekends thanks to the viral videos.',
    rating: 5,
    platform: 'tiktok',
    initials: 'JL',
    bg: 'from-slate-800/25 to-zinc-950',
  },
  {
    name: 'Ana P.',
    role: 'Hotel Vincci Mar',
    text: 'Exceptional quality and turnaround time. Every piece of content they deliver exceeds expectations. Our social media presence has never been stronger.',
    rating: 5,
    platform: 'instagram',
    initials: 'AP',
    bg: 'from-stone-800/20 to-neutral-950',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-[#d4a857] text-xs uppercase tracking-[0.25em] mb-4">
              Testimonials
            </p>
            <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={16} />
            </motion.button>
            <motion.button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          key={active}
          className={`relative bg-gradient-to-br ${testimonials[active].bg} bg-[#141414] border border-white/[0.06] rounded-[2.5rem] p-8 lg:p-12 mb-4 overflow-hidden`}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(212,168,87,0.04) 0%, transparent 60%)' }}
          />
          <div className="relative z-10 lg:flex lg:items-start lg:gap-12">
            <div className="flex-1">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[active].rating }).map((_, j) => (
                  <Star key={j} size={16} weight="fill" className="text-[#d4a857]" />
                ))}
              </div>
              <p className="text-white/75 text-xl lg:text-2xl leading-relaxed font-dm mb-8 max-w-3xl">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a857]/25 to-[#d4a857]/5 border border-[#d4a857]/20 flex items-center justify-center">
                    <span className="text-[#d4a857] text-sm font-syne font-bold">
                      {testimonials[active].initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-syne font-semibold">
                      {testimonials[active].name}
                    </p>
                    <p className="text-white/35 text-sm">{testimonials[active].role}</p>
                  </div>
                </div>
                {testimonials[active].platform === 'tiktok' ? (
                  <TikTokIcon size={20} className="text-white/15" />
                ) : (
                  <InstagramLogo size={20} className="text-white/15" />
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thumbnails row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials
            .filter((_, i) => i !== active)
            .slice(0, 4)
            .map((t, i) => (
              <motion.button
                key={t.name}
                onClick={() => {
                  const realIndex = testimonials.findIndex((tt) => tt.name === t.name)
                  setActive(realIndex)
                }}
                className={`text-left bg-gradient-to-br ${t.bg} bg-[#141414] border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.12] transition-colors`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={10} weight="fill" className="text-[#d4a857]" />
                  ))}
                </div>
                <p className="text-white/55 text-xs leading-relaxed line-clamp-2 mb-3">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#d4a857]/15 border border-[#d4a857]/20 flex items-center justify-center">
                    <span className="text-[#d4a857] text-[9px] font-syne font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <span className="text-white/40 text-xs">{t.name}</span>
                </div>
              </motion.button>
            ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 h-1.5 bg-[#d4a857]'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
