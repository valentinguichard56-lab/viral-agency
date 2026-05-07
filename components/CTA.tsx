'use client'

import { motion } from 'framer-motion'
import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react'

export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="relative bg-[#141414] border border-white/[0.06] rounded-[2.5rem] px-8 py-20 lg:px-16 lg:py-28 text-center overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(212,168,87,0.1) 0%, transparent 65%)',
              }}
            />
            <div
              className="absolute bottom-0 left-1/4 translate-y-1/3 w-[400px] h-[400px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(212,168,87,0.06) 0%, transparent 65%)',
              }}
            />
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.02] rounded-[2.5rem] overflow-hidden"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.p
              className="text-[#d4a857] text-xs uppercase tracking-[0.25em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Start Today
            </motion.p>

            <motion.h2
              className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-white max-w-3xl mx-auto leading-[0.95] tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Ready To Make Your
              <br />
              Business{' '}
              <span className="text-[#d4a857]">Go Viral?</span>
            </motion.h2>

            <motion.p
              className="text-white/38 text-lg mb-12 max-w-lg mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's talk about your business and create a content strategy that
              drives real, measurable results.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <motion.a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#d4a857] text-black font-syne font-semibold px-8 py-4 rounded-full text-sm"
                whileHover={{ scale: 1.03, backgroundColor: '#e8c47a' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <WhatsappLogo size={17} weight="fill" />
                Book a Free Call
              </motion.a>
              <motion.a
                href="mailto:hello@viral.agency"
                className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] text-white px-8 py-4 rounded-full text-sm font-medium"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: 'rgba(255,255,255,0.07)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Contact Us
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-14 pt-10 border-t border-white/[0.05]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              {[
                'Free initial consultation',
                'No long-term contracts',
                'Results in 30 days',
              ].map((item) => (
                <span key={item} className="text-white/30 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#d4a857]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
