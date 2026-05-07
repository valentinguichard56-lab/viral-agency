'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { InstagramLogo } from '@phosphor-icons/react'

function TikTokIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.54V6.8a4.84 4.84 0 01-1.07-.11z" />
    </svg>
  )
}

function Counter({
  end,
  suffix = '',
  prefix = '',
}: {
  end: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2200
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

const metrics = [
  {
    value: 120,
    suffix: 'K',
    label: 'Views on a single video',
    platform: 'tiktok',
    sub: 'Restaurant client',
  },
  {
    value: 300,
    prefix: '+',
    suffix: '%',
    label: 'Engagement increase',
    platform: 'instagram',
    sub: 'Avg. after 30 days',
  },
  {
    value: 40,
    suffix: 'K',
    label: 'Reel views in 48h',
    platform: 'instagram',
    sub: 'Café client, Valencia',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Local businesses served',
    platform: 'both',
    sub: 'Across Valencia',
  },
]

const categories = ['Restaurants', 'Cafés', 'Gyms', 'Hotels', 'Bars', 'Boutiques', 'Hotels']

export default function SocialProof() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#d4a857] text-xs uppercase tracking-[0.25em] mb-4">
            Real Results
          </p>
          <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 lg:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: 'rgba(212,168,87,0.18)', scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-5">
                {(m.platform === 'tiktok' || m.platform === 'both') && (
                  <TikTokIcon size={15} className="text-white/30" />
                )}
                {(m.platform === 'instagram' || m.platform === 'both') && (
                  <InstagramLogo size={15} className="text-white/30" />
                )}
              </div>
              <div className="font-syne font-bold text-4xl lg:text-5xl text-[#d4a857] mb-2">
                <Counter end={m.value} suffix={m.suffix} prefix={m.prefix} />
              </div>
              <p className="text-white/60 text-sm font-medium mb-1">{m.label}</p>
              <p className="text-white/25 text-xs">{m.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 pt-10 border-t border-white/[0.04] flex flex-wrap justify-center gap-3 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white/25 text-sm mr-2">Content for</span>
          {categories.map((cat, i) => (
            <span
              key={`${cat}-${i}`}
              className="text-white/45 text-sm border border-white/[0.08] px-4 py-1.5 rounded-full"
            >
              {cat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
