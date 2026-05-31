const fs = require('fs');

const hero = `export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 overflow-hidden bg-[#0a0909]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0909] via-transparent to-[#0a0909]" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ zIndex: 0 }}>
        <span className="font-display text-[22vw] leading-none text-white/[0.025] tracking-tighter">AETHER</span>
      </div>
      <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="mb-4">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c8ff00] fade-up fade-up-delay-1">First Drop Coming</span>
        </div>
        <h1 className="font-display text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight mb-10 fade-up fade-up-delay-2">
          <span className="glitch block text-[#e8e0d0]" data-text="BEYOND">BEYOND</span>
          <span className="block text-[#e8e0d0]">THE</span>
          <span className="block text-[#c8ff00]">ORDINARY.</span>
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 fade-up fade-up-delay-3">
          <p className="text-[#a09a8e] text-base leading-relaxed max-w-xs">Clothes we actually want to wear. Built for people who are tired of wearing the same thing as everyone else.</p>
          <div className="flex gap-4 items-center">
            <a href="#products" className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase px-8 py-4 bg-[#c8ff00] text-[#0a0909] font-bold hover:bg-[#e8e0d0] transition-all duration-300">
              See the pieces
              <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
            </a>
            <a href="#about" className="text-xs tracking-[0.2em] uppercase text-[#a09a8e] hover:text-[#e8e0d0] transition-colors">Our story</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 2 }}>
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#a09a8e]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#a09a8e] to-transparent animate-pulse" />
      </div>
    </section>
  )
}`;

const about = `export default function About() {
  const stats = [
    { value: '2026', label: 'Founded' },
    { value: 'INF', label: 'Worlds' },
    { value: '01', label: 'Vision' },
  ]
  return (
    <section id="about" className="py-36 px-6 bg-[#111010] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[25vw] leading-none text-white/[0.02] tracking-tighter">WRLD</span>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#c8ff00] block mb-6">About the Brand</span>
            <h2 className="font-display text-7xl md:text-8xl leading-none text-[#e8e0d0] mb-10">
              BORN IN<br />THE<br /><span className="text-[#c8ff00]">IN-BETWEEN.</span>
            </h2>
            <div className="space-y-5 text-[#a09a8e] text-base leading-relaxed">
              <p>We started AETHERWRLD because we could not find clothes that actually felt like us. Everything out there was either too basic or trying too hard.</p>
              <p>So we made our own. Every piece is something we would wear ourselves. No hype, no gimmicks, just good clothes with a point of view.</p>
              <p>We are just getting started. The first drop is coming and we want you there from day one.</p>
            </div>
            <div className="mt-12 flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl text-[#e8e0d0] mb-1">{stat.value}</div>
                  <div className="text-[11px] tracking-[0.3em] uppercase text-[#a09a8e]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-[#0a0909] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center gap-4 p-10 text-center">
              <div className="font-display text-[100px] leading-none" style={{ background: 'linear-gradient(135deg, #c8ff00 0%, #a09a8e 50%, #d94f2b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AW</div>
              <div className="w-16 h-px bg-[#c8ff00]/30" />
              <span className="text-[11px] tracking-[0.5em] uppercase text-[#a09a8e]">Aetherwrld Co.</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#c8ff00] text-[#0a0909] px-5 py-3">
              <span className="font-display text-lg tracking-wider">EST. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}`;

const waitlist = `export default function Waitlist() {
  return (
    <section className="py-36 px-6 bg-[#111010] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] leading-none text-white/[0.02] tracking-tighter">DROP</span>
      </div>
      <div className="max-w-2xl mx-auto relative text-center">
        <span className="text-[11px] tracking-[0.4em] uppercase text-[#c8ff00] block mb-6">Be First</span>
        <h2 className="font-display text-6xl md:text-8xl leading-none text-[#e8e0d0] mb-6">
          GET THE<br />DROP DATE.
        </h2>
        <p className="text-[#a09a8e] text-base leading-relaxed mb-12 max-w-sm mx-auto">
          Leave your email and we will let you know the second the first drop goes live. That is it. No spam, no newsletters, just the drop.
        </p>
        <form action="https://app.us10.list-manage.com/subscribe/post?u=1ca3255ec5b1df13a9e990502&amp;id=998325b48b&amp;f_id=00c22ce2f0" method="post" target="_blank" className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
          <input
            type="email"
            name="EMAIL"
            placeholder="your@email.com"
            required
            className="flex-1 bg-transparent border border-white/10 px-6 py-4 text-sm text-[#e8e0d0] placeholder-[#a09a8e]/50 focus:outline-none focus:border-[#c8ff00]/50 transition-colors"
          />
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_1ca3255ec5b1df13a9e990502_998325b48b" tabIndex={-1} defaultValue="" />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-[#c8ff00] text-[#0a0909] text-xs tracking-[0.3em] uppercase font-bold hover:bg-[#e8e0d0] transition-colors duration-300"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  )
}`;

const contact = `'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    const subject = encodeURIComponent('Message from ' + form.name)
    const body = encodeURIComponent('Name: ' + form.name + '\\nEmail: ' + form.email + '\\n\\n' + form.message)
    window.location.href = 'mailto:aetherwrldco@gmail.com?subject=' + subject + '&body=' + body
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-36 px-6 bg-[#0a0909] relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c8ff00] block mb-6">Get In Touch</span>
          <h2 className="font-display text-7xl md:text-9xl leading-none text-[#e8e0d0] mb-6">
            TALK TO<br />US.
          </h2>
          <p className="text-[#a09a8e] text-base leading-relaxed">
            Got a question, a collab idea, or just want to say what's good? Drop us a message or email us directly at{' '}
            <a href="mailto:aetherwrldco@gmail.com" className="text-[#c8ff00] hover:text-[#e8e0d0] transition-colors">
              aetherwrldco@gmail.com
            </a>
          </p>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-20 border border-white/10">
            <p className="text-[#a09a8e] tracking-wide text-base">Got it. We will get back to you soon.</p>
          </div>
        ) : (
          <div className="border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b md:border-b-0 md:border-r border-white/10">
                <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-transparent px-8 py-6 text-base text-[#e8e0d0] placeholder-[#a09a8e] focus:outline-none" />
              </div>
              <div className="border-b border-white/10">
                <input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-transparent px-8 py-6 text-base text-[#e8e0d0] placeholder-[#a09a8e] focus:outline-none" />
              </div>
            </div>
            <div className="border-b border-white/10">
              <textarea placeholder="What is on your mind?" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-transparent px-8 py-6 text-base text-[#e8e0d0] placeholder-[#a09a8e] focus:outline-none resize-none" />
            </div>
            <div>
              <button onClick={handleSubmit} className="w-full py-6 font-display text-2xl tracking-[0.3em] text-[#0a0909] bg-[#c8ff00] hover:bg-[#e8e0d0] transition-colors duration-300">
                SEND IT
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-10">
          {['Instagram', 'TikTok', 'Twitter'].map((platform) => (
            <a key={platform} href="#" className="text-[11px] tracking-[0.3em] uppercase text-[#a09a8e] hover:text-[#c8ff00] transition-colors">
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}`;

fs.writeFileSync('components/Hero.tsx', hero, 'utf8');
fs.writeFileSync('components/About.tsx', about, 'utf8');
fs.writeFileSync('components/Waitlist.tsx', waitlist, 'utf8');
fs.writeFileSync('components/Contact.tsx', contact, 'utf8');
console.log('Copy updated!');