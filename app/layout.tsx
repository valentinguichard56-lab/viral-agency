import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Viral Agency Valencia | TikTok & Instagram Content Creation',
  description:
    "Valencia's #1 social media content agency. We create TikTok videos, Instagram Reels, and premium content for restaurants, cafés, gyms, and businesses. Turn your business into Valencia's next viral spot.",
  keywords:
    'TikTok agency Valencia, Instagram Reels Valencia, content creation Spain, social media agency Valencia, viral marketing Valencia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} font-dm antialiased bg-[#0d0d0d] text-[#f0f0ea]`}
      >
        {children}
      </body>
    </html>
  )
}
