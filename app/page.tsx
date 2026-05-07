import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Packages from '@/components/Packages'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Portfolio />
      <Packages />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
