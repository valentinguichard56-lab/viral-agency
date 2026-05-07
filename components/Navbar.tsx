'use client'

import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0d0d0d]/80 backdrop-blur-2xl border-b border-white/[0.06]'
          : ''
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-syne font-bold text-xl text-white tracking-tight"
        >
          viral<span className="text-[#d4a857]">.</span>agency
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm text-white/50 hover:text-white transition-colors px-4 py-2"
          >
            Book a Call
          </a>
          <motion.a
            href="#packages"
            className="text-sm bg-[#d4a857] text-black font-syne font-semibold px-5 py-2.5 rounded-full"
            whileHover={{ scale: 1.03, backgroundColor: '#e8c47a' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            View Packages
          </motion.a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      <motion.div
        className="md:hidden overflow-hidden bg-[#0d0d0d]/95 backdrop-blur-2xl"
        initial={false}
        animate={{ height: open ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="px-6 py-6 flex flex-col gap-5 border-t border-white/[0.06]">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-lg text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-[#d4a857] text-black font-syne font-semibold text-center py-3.5 rounded-full"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}
