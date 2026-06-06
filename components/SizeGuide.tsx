'use client'
import { useState } from 'react'

export default function SizeGuide() {
  const [open, setOpen] = useState(false)

  const sizes = [
    { size: 'XS', chest: '31-33', length: '26', sleeve: '32' },
    { size: 'S', chest: '34-36', length: '27', sleeve: '33' },
    { size: 'M', chest: '37-39', length: '28', sleeve: '34' },
    { size: 'L', chest: '40-42', length: '29', sleeve: '35' },
    { size: 'XL', chest: '43-45', length: '30', sleeve: '36' },
    { size: '2XL', chest: '46-48', length: '31', sleeve: '37' },
    { size: '3XL', chest: '49-51', length: '32', sleeve: '38' },
  ]

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[11px] tracking-[0.2em] uppercase text-[#a09a8e] hover:text-[#c8ff00] transition-colors underline underline-offset-4"
      >
        Size Guide
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(false)} />
          <div className="relative bg-[#111010] border border-white/10 w-full max-w-lg p-8">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#a09a8e] hover:text-[#e8e0d0] transition-colors text-lg"
            >
              x
            </button>
            <h3 className="font-display text-4xl text-[#e8e0d0] mb-2">SIZE GUIDE</h3>
            <p className="text-[#a09a8e] text-sm mb-8 leading-relaxed">All measurements are in inches. If you are between sizes, size up for a more relaxed fit.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-[11px] tracking-[0.2em] uppercase text-[#c8ff00] font-normal">Size</th>
                    <th className="text-left py-3 text-[11px] tracking-[0.2em] uppercase text-[#c8ff00] font-normal">Chest</th>
                    <th className="text-left py-3 text-[11px] tracking-[0.2em] uppercase text-[#c8ff00] font-normal">Length</th>
                    <th className="text-left py-3 text-[11px] tracking-[0.2em] uppercase text-[#c8ff00] font-normal">Sleeve</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((row, i) => (
                    <tr key={row.size} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                      <td className="py-3 text-[#e8e0d0] font-display text-lg">{row.size}</td>
                      <td className="py-3 text-[#a09a8e]">{row.chest}"</td>
                      <td className="py-3 text-[#a09a8e]">{row.length}"</td>
                      <td className="py-3 text-[#a09a8e]">{row.sleeve}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#a09a8e] mb-3">How to measure</p>
              <div className="space-y-2 text-sm text-[#a09a8e] leading-relaxed">
                <p><span className="text-[#e8e0d0]">Chest</span> — Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                <p><span className="text-[#e8e0d0]">Length</span> — Measure from the top of the shoulder to the bottom hem.</p>
                <p><span className="text-[#e8e0d0]">Sleeve</span> — Measure from the center back neck to the end of the sleeve.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}