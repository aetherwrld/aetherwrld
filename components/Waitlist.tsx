export default function Waitlist() {
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
}