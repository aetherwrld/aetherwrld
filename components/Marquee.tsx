export default function Marquee() {
  const items = ['AETHERWRLD', 'BEYOND THE ORDINARY', 'SS 2025', 'STREETWEAR REIMAGINED', 'FOR THE IN-BETWEEN']
  const repeated = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-white/10 py-4 bg-[#111010]">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="font-display text-lg tracking-[0.3em] text-[#a09a8e] mx-8 flex-shrink-0">{item}</span>
        ))}
      </div>
    </div>
  )
}