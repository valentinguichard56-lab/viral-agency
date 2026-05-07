'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Play, TrendUp, Eye } from '@phosphor-icons/react'
import { ShaderBackground } from './ui/shader-background'

function TikTokIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.54V6.8a4.84 4.84 0 01-1.07-.11z" />
    </svg>
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
      {/* Animated shader background */}
      <ShaderBackground
        variant="mesh"
        speed={0.3}
        colors={['#0a0a0a', '#141414', '#3a2a10', '#d4a857']}
        className="opacity-50"
      />

      {/* Vignette to keep text readable on top of the shader */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(13,13,13,0) 0%, rgba(13,13,13,0.55) 60%, rgba(13,13,13,0.85) 100%)',
        }}
      />

      {/* Decorative overlays on top of the shader */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(212,168,87,0.05) 0%, transparent 65%)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(212,168,87,0.03) 0%, transparent 65%)',
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: '300px 300px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 xl:gap-20 items-center">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] text-white/60 text-xs px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a857] animate-pulse" />
                Valencia's #1 Viral Content Agency
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] leading-[0.93] tracking-tight text-white mb-8"
            >
              Turn Your
              <br />
              Business Into
              <br />
              <span className="text-[#d4a857]">Valencia's</span>
              <br />
              Next Viral Spot
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/45 text-lg leading-relaxed max-w-xl mb-10"
            >
              We create TikTok videos, Instagram Reels, stories, and premium
              content that bring more visibility, customers, and engagement to
              your business.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#d4a857] text-black font-syne font-semibold text-sm px-7 py-4 rounded-full"
                whileHover={{ scale: 1.03, backgroundColor: '#e8c47a' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Book a Call
                <ArrowRight size={16} weight="bold" />
              </motion.a>
              <motion.a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] text-white font-syne font-medium text-sm px-7 py-4 rounded-full"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: 'rgba(255,255,255,0.07)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Play size={15} weight="fill" />
                View Our Work
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/[0.06]"
            >
              {[
                { value: '200+', label: 'Videos Created' },
                { value: '50+', label: 'Happy Clients' },
                { value: '10M+', label: 'Views Generated' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-syne font-bold text-2xl text-white">
                    {s.value}
                  </div>
                  <div className="text-white/35 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — phone mockup */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-white/25 text-[10px] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-7 bg-gradient-to-b from-white/25 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 'top' }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[270px]">
      <div
        className="absolute inset-0 -z-10 blur-3xl rounded-full scale-150"
        style={{
          background: 'radial-gradient(circle, rgba(212,168,87,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Phone */}
      <div className="relative bg-[#141414] border border-white/[0.08] rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="h-6 bg-[#0a0a0a] flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-white/10" />
        </div>

        {/* Video area */}
        <div className="relative bg-gradient-to-b from-[#1c1007] to-[#0a0a0a]" style={{ aspectRatio: '9/16' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/25 via-stone-900/20 to-black/90" />

          {/* Fake visual texture */}
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 30% 20%, rgba(212,168,87,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(180,120,50,0.1) 0%, transparent 50%)',
            }}
          />

          {/* Right side actions */}
          <div className="absolute right-3 bottom-20 flex flex-col gap-3 items-center">
            {[
              { label: 'Like', icon: '♡' },
              { label: 'Comment', icon: '◯' },
              { label: 'Share', icon: '↗' },
            ].map(({ label, icon }) => (
              <div
                key={label}
                className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center"
              >
                <span className="text-white/70 text-xs">{icon}</span>
              </div>
            ))}
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 inset-x-0 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-[#d4a857]/20 border border-[#d4a857]/30" />
              <span className="text-white text-xs font-medium">@restaurante.vlc</span>
            </div>
            <p className="text-white/70 text-xs leading-relaxed mb-3">
              Best paella in Valencia — must visit...
            </p>
            <div className="flex items-center gap-4 text-white/50 text-xs">
              <span className="flex items-center gap-1">
                <Eye size={11} /> 124.5K
              </span>
              <span>8.2K likes</span>
            </div>
          </div>

          {/* Play overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="w-14 h-14 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/15 flex items-center justify-center">
              <Play size={20} weight="fill" className="text-white ml-0.5" />
            </div>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-white/10">
          <motion.div
            className="h-full bg-[#d4a857]"
            animate={{ width: ['0%', '65%'] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="h-5 bg-[#0a0a0a]" />
      </div>

      {/* Floating metric 1 */}
      <motion.div
        className="absolute -right-14 top-24 bg-[#141414] border border-white/[0.08] rounded-2xl px-4 py-3"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2">
          <TrendUp size={15} className="text-[#d4a857]" />
          <div>
            <div className="text-white text-sm font-syne font-bold">+300%</div>
            <div className="text-white/35 text-[10px]">Engagement</div>
          </div>
        </div>
      </motion.div>

      {/* Floating metric 2 */}
      <motion.div
        className="absolute -left-14 bottom-28 bg-[#141414] border border-white/[0.08] rounded-2xl px-4 py-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="flex items-center gap-1.5">
          <TikTokIcon size={13} className="text-white/50" />
          <div>
            <div className="text-white text-sm font-syne font-bold">120K</div>
            <div className="text-white/35 text-[10px]">Views</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
