import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Products from '@/components/Products'
import About from '@/components/About'
import Waitlist from '@/components/Waitlist'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Products />
      <About />
      <Waitlist />
      <Contact />
      <Footer />
    </main>
  )
}