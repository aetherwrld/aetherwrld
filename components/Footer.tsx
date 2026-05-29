export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 bg-[#0a0909]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl tracking-widest text-[#e8e0d0]/30">
          AETHERWRLD
        </span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#a09a8e]/40">
          2025 AETHERWRLD. All rights reserved.
        </span>
        <a href="mailto:aetherwrldco@gmail.com" className="text-[10px] tracking-[0.2em] text-[#a09a8e]/40 hover:text-[#c8ff00] transition-colors">
          aetherwrldco@gmail.com
        </a>
      </div>
    </footer>
  )
}