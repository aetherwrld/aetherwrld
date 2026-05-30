const fs = require('fs');

const nav = `'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Products', 'About', 'Contact']

  return (
    <nav className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-500 \${scrolled ? 'bg-[#0a0909]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}\`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image src="/logo.png" alt="AETHERWRLD" width={140} height={50} className="object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link} href={\`#\${link.toLowerCase()}\`} className="text-xs tracking-[0.2em] uppercase text-[#a09a8e] hover:text-[#e8e0d0] transition-colors">{link}</a>
          ))}
          <a href="#contact" className="text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-[#c8ff00] text-[#c8ff00] hover:bg-[#c8ff00] hover:text-[#0a0909] transition-all duration-300">Shop Now</a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={\`block w-6 h-px bg-[#e8e0d0] transition-all duration-300 \${menuOpen ? 'rotate-45 translate-y-2' : ''}\`} />
          <span className={\`block w-6 h-px bg-[#e8e0d0] transition-all duration-300 \${menuOpen ? 'opacity-0' : ''}\`} />
          <span className={\`block w-6 h-px bg-[#e8e0d0] transition-all duration-300 \${menuOpen ? '-rotate-45 -translate-y-2' : ''}\`} />
        </button>
      </div>
      <div className={\`md:hidden transition-all duration-500 overflow-hidden \${menuOpen ? 'max-h-60' : 'max-h-0'}\`}>
        <div className="px-6 pb-6 flex flex-col gap-6 border-t border-white/5">
          {links.map((link) => (
            <a key={link} href={\`#\${link.toLowerCase()}\`} onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-[#a09a8e] hover:text-[#c8ff00] transition-colors pt-4">{link}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}`;

fs.writeFileSync('components/Nav.tsx', nav, 'utf8');
console.log('Nav updated!');