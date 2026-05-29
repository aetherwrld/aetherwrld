const fs = require('fs');

const products = `const products = [
  { id: 1, name: 'VOID OVERSIZED TEE', price: '$68', tag: 'Bestseller', color: '#c8ff00', bg: 'from-[#1a1a0e] to-[#0f0f0a]', emoji: 'O' },
  { id: 2, name: 'WRLD CARGO PANTS', price: '$145', tag: 'New Drop', color: '#d94f2b', bg: 'from-[#1a0e0a] to-[#0f0a08]', emoji: 'O' },
  { id: 3, name: 'AETHER HOODIE', price: '$120', tag: 'Limited', color: '#c8ff00', bg: 'from-[#0e0e1a] to-[#0a0a0f]', emoji: 'O' },
  { id: 4, name: 'PHANTOM JACKET', price: '$220', tag: 'Coming Soon', color: '#a09a8e', bg: 'from-[#111110] to-[#0a0909]', emoji: 'O' },
]

export default function Products() {
  return (
    <section id="products" className="py-32 px-6 bg-[#0a0909]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#c8ff00] block mb-4">The Collection</span>
            <h2 className="font-display text-7xl md:text-9xl leading-none text-[#e8e0d0]">PIECES</h2>
          </div>
          <p className="text-[#a09a8e] text-sm max-w-xs leading-relaxed tracking-wide md:text-right">Every piece is built to blur the line between where you are and where you are going.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="product-card group relative overflow-hidden cursor-pointer">
              <div className={\`relative h-80 md:h-96 bg-gradient-to-br \${product.bg} flex items-center justify-center overflow-hidden border border-white/5\`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl md:text-7xl tracking-tight text-[#e8e0d0] opacity-90 text-center px-4 leading-tight">{product.name}</span>
                </div>
                <div className="product-overlay absolute inset-0 bg-[#0a0909]/80 opacity-0 transition-opacity duration-500 flex flex-col items-center justify-center gap-4">
                  <span className="font-display text-5xl text-[#e8e0d0]">{product.price}</span>
                  <button className="text-xs tracking-[0.3em] uppercase px-8 py-3 border border-[#e8e0d0] text-[#e8e0d0] hover:bg-[#e8e0d0] hover:text-[#0a0909] transition-all duration-300">View Piece</button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 font-bold" style={{ background: product.color, color: '#0a0909' }}>{product.tag}</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-1 border-b border-white/5">
                <span className="text-xs tracking-[0.15em] uppercase text-[#a09a8e]">{product.name}</span>
                <span className="font-display text-xl text-[#e8e0d0]">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase text-[#a09a8e] hover:text-[#c8ff00] transition-colors group">
            <span className="w-12 h-px bg-current group-hover:w-20 transition-all duration-500" />
            View Full Collection
            <span className="w-12 h-px bg-current group-hover:w-20 transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  )
}`;

const about = `export default function About() {
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
}`;

fs.writeFileSync('components/Products.tsx', products, 'utf8');
fs.writeFileSync('components/About.tsx', about, 'utf8');
console.log('Products and About done!');