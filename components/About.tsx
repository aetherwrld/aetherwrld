export default function About() {
  const stats = [
    { value: '2023', label: 'Founded' },
    { value: 'INF', label: 'Worlds' },
    { value: '01', label: 'Vision' },
  ]
  return (
    <section id="about" className="py-32 px-6 bg-[#111010] relative overflow-hidden">
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
            <div className="space-y-5 text-[#a09a8e] text-sm leading-relaxed tracking-wide">
              <p>AETHERWRLD is not a brand. It is a frequency. We exist in the space between street and spirit, between what you wear and who you are.</p>
              <p>Every drop is a statement. Every stitch carries intention. We build for the ones who do not fit the mold.</p>
              <p>This is not fast fashion. This is not hype. This is armour for the in-between.</p>
            </div>
            <div className="mt-12 flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl text-[#e8e0d0] mb-1">{stat.value}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#a09a8e]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1a0e] to-[#0f0f0a] border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10 text-center">
                <div className="font-display text-[100px] leading-none" style={{ background: 'linear-gradient(135deg, #c8ff00 0%, #a09a8e 50%, #d94f2b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AW</div>
                <div className="w-16 h-px bg-[#c8ff00]/30" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#a09a8e]">Aetherwrld Co.</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#c8ff00] text-[#0a0909] px-5 py-3">
              <span className="font-display text-lg tracking-wider">SS 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}