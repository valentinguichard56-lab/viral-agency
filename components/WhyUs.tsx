'use client'

import { motion } from 'framer-motion'
import { Flame, Lightning, MapPin } from '@phosphor-icons/react'

const reasons = [
  {
    number: '01',
    icon: Flame,
    title: 'Viral-First Content',
    desc: "We create content designed for attention and engagement. Every frame, every hook, and every caption is engineered for maximum reach on TikTok and Instagram's algorithm.",
  },
  {
    number: '02',
    icon: Lightning,
    title: 'Fast Delivery',
    desc: 'Receive optimized, ready-to-post content quickly and consistently. No delays, no excuses — professional results delivered on time, every single time.',
  },
  {
    number: '03',
    icon: MapPin,
    title: 'Local Valencia Expertise',
    desc: "We understand Valencia's lifestyle, food culture, tourism, and social media trends. We know exactly what resonates with local and visiting audiences.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#d4a857] text-xs uppercase tracking-[0.25em] mb-4">
            Why Choose Us
          </p>
          <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white max-w-lg leading-tight">
            The Viral Difference
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                className="relative bg-[#141414] border border-white/[0.06] rounded-[2rem] p-8 lg:p-10 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ borderColor: 'rgba(212,168,87,0.14)' }}
              >
                {/* Large number watermark */}
                <div className="absolute -right-3 -top-3 font-syne font-bold text-[100px] leading-none text-white/[0.025] select-none pointer-events-none">
                  {reason.number}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#d4a857]/10 border border-[#d4a857]/20 flex items-center justify-center mb-8 group-hover:bg-[#d4a857]/15 group-hover:border-[#d4a857]/30 transition-all duration-300">
                    <Icon size={22} className="text-[#d4a857]" />
                  </div>
                  <h3 className="font-syne font-bold text-xl text-white mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-white/38 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
