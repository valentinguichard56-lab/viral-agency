'use client'

import { motion } from 'framer-motion'
import { Play, InstagramLogo } from '@phosphor-icons/react'

function TikTokIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.54V6.8a4.84 4.84 0 01-1.07-.11z" />
    </svg>
  )
}

const items = [
  {
    type: 'video',
    category: 'Restaurant',
    title: 'La Marina Valencia',
    metric: '120K views',
    gradient: 'from-amber-950/60 via-orange-950/30 to-stone-950',
    platform: 'tiktok',
    tall: true,
  },
  {
    type: 'photo',
    category: 'Coffee Shop',
    title: 'Café Central Ruzafa',
    metric: '+40K reach',
    gradient: 'from-stone-800/50 via-amber-950/20 to-neutral-950',
    platform: 'instagram',
    tall: false,
  },
  {
    type: 'video',
    category: 'Cocktail Bar',
    title: 'Mercado Cócteles',
    metric: '85K views',
    gradient: 'from-zinc-800/50 via-slate-900/40 to-zinc-950',
    platform: 'tiktok',
    tall: false,
  },
  {
    type: 'photo',
    category: 'Lifestyle',
    title: 'Valencia Summer',
    metric: '+300% engagement',
    gradient: 'from-orange-950/50 via-rose-950/20 to-stone-950',
    platform: 'instagram',
    tall: true,
  },
  {
    type: 'video',
    category: 'Gym',
    title: 'FitZone Valencia',
    metric: '60K views',
    gradient: 'from-neutral-800/40 via-zinc-900/30 to-stone-950',
    platform: 'tiktok',
    tall: false,
  },
  {
    type: 'photo',
    category: 'Food',
    title: 'Gourmet Details',
    metric: '+150% profile visits',
    gradient: 'from-amber-900/40 via-stone-800/30 to-neutral-950',
    platform: 'instagram',
    tall: false,
  },
  {
    type: 'video',
    category: 'Hotel',
    title: 'Hotel Vincci Palace',
    metric: '95K views',
    gradient: 'from-zinc-900/60 via-stone-800/20 to-neutral-950',
    platform: 'tiktok',
    tall: true,
  },
  {
    type: 'photo',
    category: 'Bar',
    title: 'Rooftop Sessions',
    metric: '55K impressions',
    gradient: 'from-slate-800/40 via-zinc-900/30 to-stone-950',
    platform: 'instagram',
    tall: false,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-[#d4a857] text-xs uppercase tracking-[0.25em] mb-4">Our Work</p>
            <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white leading-tight">
              Content That
              <br />
              Performs
            </h2>
          </div>
          <p className="text-white/35 text-sm max-w-xs leading-relaxed">
            Real content for real businesses across Valencia.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 lg:columns-3 xl:columns-4 gap-3">
          {items.map((item, i) => (
            <PortfolioCard key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] text-white px-8 py-4 rounded-full text-sm font-medium"
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.07)' }}
            whileTap={{ scale: 0.97 }}
          >
            See More Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof items)[0]
  index: number
}) {
  return (
    <motion.div
      className={`relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer mb-3 bg-gradient-to-b ${item.gradient} ${
        item.tall ? 'aspect-[9/14]' : 'aspect-[4/5]'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      {/* Texture layer */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(ellipse at 40% 30%, rgba(212,168,87,0.12) 0%, transparent 60%)`,
        }}
      />

      {/* Play button */}
      {item.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Play size={17} weight="fill" className="text-white ml-0.5" />
          </div>
        </div>
      )}

      {/* Platform */}
      <div className="absolute top-3 right-3">
        <div className="bg-black/50 backdrop-blur-sm rounded-full p-1.5 border border-white/10">
          {item.platform === 'tiktok' ? (
            <TikTokIcon size={12} className="text-white/60" />
          ) : (
            <InstagramLogo size={12} className="text-white/60" />
          )}
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 inset-x-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-[#d4a857] text-[10px] uppercase tracking-wider mb-1">
          {item.category}
        </p>
        <h4 className="text-white font-syne font-semibold text-sm">{item.title}</h4>
        <p className="text-white/50 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.metric}
        </p>
      </div>
    </motion.div>
  )
}
