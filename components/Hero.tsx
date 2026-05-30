export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0909] via-transparent to-[#0a0909]" style={{ zIndex: 1 }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(200,255,0,0.04) 0%, transparent 60%)', zIndex: 1 }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ zIndex: 0 }}>
        <span className="font-display text-[22vw] leading-none text-white/[0.025] tracking-tighter">AETHER</span>
      </div>
      <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-3" style={{ zIndex: 2 }}>
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#a09a8e]" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#a09a8e]" style={{ writingMode: 'vertical-rl' }}>SS 2025</span>
      </div>
      <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
        <div className="mb-4">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#c8ff00] fade-up fade-up-delay-1">New Collection Dropping</span>
        </div>
        <h1 className="font-display text-[15vw] md:text-[11vw] leading-[0.85] tracking-tight mb-8 fade-up fade-up-delay-2">
          <span className="glitch block text-[#e8e0d0]" data-text="BEYOND">BEYOND</span>
          <span className="block text-[#e8e0d0]">THE</span>
          <span className="block text-[#c8ff00]">ORDINARY.</span>
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 fade-up fade-up-delay-3">
          <p className="text-[#a09a8e] text-sm leading-relaxed max-w-xs tracking-wide">Clothing for those who exist between worlds. Forged in the space between street and spirit.</p>
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
}