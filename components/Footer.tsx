'use client'

import { motion } from 'framer-motion'
import { InstagramLogo, WhatsappLogo, EnvelopeSimple, MapPin } from '@phosphor-icons/react'

function TikTokIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.54V6.8a4.84 4.84 0 01-1.07-.11z" />
    </svg>
  )
}

const footerLinks = {
  Services: [
    'TikTok Content',
    'Instagram Reels',
    'Photography',
    'Social Media Management',
    'Content Strategy',
  ],
  Company: ['About Us', 'Portfolio', 'Testimonials', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service'],
}

const socials = [
  { icon: InstagramLogo, href: '#', label: 'Instagram' },
  { icon: TikTokIcon, href: '#', label: 'TikTok' },
  { icon: WhatsappLogo, href: 'https://wa.me/34600000000', label: 'WhatsApp' },
  { icon: EnvelopeSimple, href: 'mailto:hello@viral.agency', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.04] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[2fr,1fr,1fr,1fr] gap-12 mb-16">
          {/* Brand col */}
          <div>
            <a
              href="#"
              className="font-syne font-bold text-2xl text-white tracking-tight"
            >
              viral<span className="text-[#d4a857]">.</span>agency
            </a>
            <p className="text-white/35 text-sm mt-4 leading-relaxed max-w-xs">
              Valencia's premier social media content agency. We create TikTok
              videos, Instagram Reels, and premium content that make your business
              go viral.
            </p>

            <div className="flex items-center gap-2.5 mt-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-white/35 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-6 text-white/28 text-sm">
              <MapPin size={14} className="text-[#d4a857]" />
              Valencia, Spain
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-syne font-semibold text-white text-sm mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 text-sm hover:text-white/70 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-sm">
            &copy; {new Date().getFullYear()} Viral Agency Valencia. All rights reserved.
          </p>
          <p className="text-white/18 text-sm">Made with care in Valencia</p>
        </div>
      </div>
    </footer>
  )
}
