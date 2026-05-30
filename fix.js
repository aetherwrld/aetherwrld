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
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c8ff00] fade-up fade-up-delay-1">New Collection Dropping</span>
        </div>
        <h1 className="font-display text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight mb-10 fade-up fade-up-delay-2">
          <span className="glitch block text-[#e8e0d0]" data-text="BEYOND">BEYOND</span>
          <span className="block text-[#e8e0d0]">THE</span>
          <span className="block text-[#c8ff00]">ORDINARY.</span>
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 fade-up fade-up-delay-3">
          <p className="text-[#a09a8e] text-base leading-relaxed max-w-xs">Clothing for those who exist between worlds. Forged in the space between street and spirit.</p>
          <div className="flex gap-4 items-center">
            <a href="#products" className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase px-8 py-4 bg-[#c8ff00] text-[#0a0909] font-bold hover:bg-[#e8e0d0] transition-all duration-300">
              Explore Collection
              <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
            </a>
            <a href="#about" className="text-xs tracking-[0.2em] uppercase text-[#a09a8e] hover:text-[#e8e0d0] transition-colors">Our Story</a>
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
              <p>AETHERWRLD is not a brand. It is a frequency. We exist in the space between street and spirit, between what you wear and who you are.</p>
              <p>Every drop is a statement. Every stitch carries intention. We build for the ones who do not fit the mold.</p>
              <p>This is not fast fashion. This is not hype. This is armour for the in-between.</p>
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

fs.writeFileSync('components/Hero.tsx', hero, 'utf8');
fs.writeFileSync('components/About.tsx', about, 'utf8');
console.log('Done!');