'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight, Star } from '@phosphor-icons/react'

const packages = [
  {
    name: 'ONE SHOT',
    tagline: 'Perfect for a single campaign',
    price: '300€',
    priceSub: 'starting from',
    popular: false,
    features: [
      '1 on-site shooting session',
      '1 premium short-form video',
      '10 professionally edited photos',
      'Instagram Stories package',
      'Commercial usage rights',
      'Fast delivery (48–72h)',
    ],
    cta: 'Get Started',
  },
  {
    name: 'MONTHLY GROWTH',
    tagline: 'For businesses that want to scale',
    price: '900€',
    priceSub: '/month starting from',
    popular: true,
    features: [
      'Multiple monthly shoots',
      'TikTok & Instagram Reels content',
      'Story management & creation',
      'Full content strategy',
      'Social media support',
      'Priority editing & delivery',
      'Monthly content calendar',
      'Performance analytics report',
    ],
    cta: 'Scale My Business',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#d4a857] text-xs uppercase tracking-[0.25em] mb-4">Pricing</p>
          <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/35 max-w-sm mx-auto text-sm leading-relaxed">
            No hidden fees. Choose the plan that fits your business and start
            growing today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative rounded-[2rem] p-8 lg:p-10 overflow-hidden ${
                pkg.popular
                  ? 'bg-[#d4a857]'
                  : 'bg-[#141414] border border-white/[0.06]'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.015 }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0d0d0d] text-[#d4a857] text-[11px] font-syne font-bold px-4 py-1.5 rounded-b-xl border-x border-b border-white/[0.06]">
                  <Star size={11} weight="fill" />
                  Most Popular
                </div>
              )}

              {/* Package name */}
              <p
                className={`text-[11px] font-syne font-bold tracking-[0.2em] mb-2 ${
                  pkg.popular ? 'text-black/50' : 'text-[#d4a857]'
                }`}
              >
                {pkg.name}
              </p>
              <p
                className={`text-sm mb-6 ${
                  pkg.popular ? 'text-black/55' : 'text-white/35'
                }`}
              >
                {pkg.tagline}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`font-syne font-bold text-5xl ${
                    pkg.popular ? 'text-black' : 'text-white'
                  }`}
                >
                  {pkg.price}
                </span>
                <p
                  className={`text-xs mt-1 ${
                    pkg.popular ? 'text-black/45' : 'text-white/25'
                  }`}
                >
                  {pkg.priceSub}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        pkg.popular ? 'bg-black/15' : 'bg-[#d4a857]/12'
                      }`}
                    >
                      <Check
                        size={10}
                        weight="bold"
                        className={pkg.popular ? 'text-black' : 'text-[#d4a857]'}
                      />
                    </div>
                    <span
                      className={`text-sm leading-relaxed ${
                        pkg.popular ? 'text-black/75' : 'text-white/55'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-syne font-semibold text-sm transition-colors ${
                  pkg.popular
                    ? 'bg-[#0d0d0d] text-white hover:bg-black'
                    : 'bg-white text-black hover:bg-[#d4a857]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {pkg.cta}
                <ArrowRight size={14} weight="bold" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-white/25 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Custom packages available for larger businesses.{' '}
          <a href="#contact" className="text-[#d4a857] hover:underline">
            Contact us
          </a>
        </motion.p>
      </div>
    </section>
  )
}
