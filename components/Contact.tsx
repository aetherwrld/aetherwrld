'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    const subject = encodeURIComponent('Message from ' + form.name)
    const body = encodeURIComponent('Name: ' + form.name + '\nEmail: ' + form.email + '\n\n' + form.message)
    window.location.href = 'mailto:aetherwrldco@gmail.com?subject=' + subject + '&body=' + body
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0909] relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-7xl md:text-9xl leading-none text-[#e8e0d0] mb-6">
            TALK TO<br />US.
          </h2>
          <p className="text-[#a09a8e] text-sm tracking-wide">
            Email us: <a href="mailto:aetherwrldco@gmail.com" className="text-[#c8ff00] hover:text-[#e8e0d0] transition-colors">aetherwrldco@gmail.com</a>
          </p>
        </div>
        {status === 'sent' ? (
          <div className="text-center py-20 border border-white/10">
            <p className="text-[#a09a8e] tracking-wide text-sm">Message sent. We will be in touch.</p>
          </div>
        ) : (
          <div className="border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b md:border-r border-white/10">
                <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-transparent px-8 py-6 text-sm text-[#e8e0d0] focus:outline-none" />
              </div>
              <div className="border-b border-white/10">
                <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-transparent px-8 py-6 text-sm text-[#e8e0d0] focus:outline-none" />
              </div>
            </div>
            <div className="border-b border-white/10">
              <textarea placeholder="Your message..." rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-transparent px-8 py-6 text-sm text-[#e8e0d0] focus:outline-none resize-none" />
            </div>
            <div>
              <button onClick={handleSubmit} className="w-full py-6 font-display text-2xl tracking-[0.3em] text-[#0a0909] bg-[#c8ff00] hover:bg-[#e8e0d0] transition-colors duration-300">
                SEND MESSAGE
              </button>
            </div>
          </div>
        )}
        <div className="mt-12 flex justify-center gap-10">
          {['Instagram', 'TikTok', 'Twitter'].map((platform) => (
            <a key={platform} href="#" className="text-[10px] tracking-[0.3em] uppercase text-[#a09a8e] hover:text-[#c8ff00] transition-colors">{platform}</a>
          ))}
        </div>
      </div>
    </section>
  )
}