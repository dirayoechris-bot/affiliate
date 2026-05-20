import Layout from '@/components/Layout'
import Link from 'next/link'
import { useState } from 'react'

export default function FreeGuide() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) setSubmitted(true)
    } catch (err) {
      setSubmitted(true)
    }
  }

  return (
    <Layout title="Free Yoga Teaching Guide — Yoga Path Guide" description="Everything you need to know before starting yoga teacher training.">
      <div className="py-16 sm:py-24">
        <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-6">Free guide · 7 chapters</p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] text-ink leading-[1.15] mb-4">
          Your Yoga Teaching Journey
        </h1>
        <p className="text-bark leading-relaxed max-w-[440px] mb-6">
          The guide we wish existed when we started. Everything you need to know before investing your time and money into yoga teacher training — honest, practical, and free.
        </p>

        {/* Who it's for */}
        <div className="bg-parchment rounded-card p-6 sm:p-8 mb-10 max-w-[480px]">
          <p className="text-[13px] font-medium text-ink mb-3">This guide is for you if:</p>
          <div className="space-y-2.5 text-[14px] text-bark">
            <p>→ You've been thinking about YTT but don't know where to start</p>
            <p>→ You're overwhelmed by the number of programs out there</p>
            <p>→ You're not sure if online certification is "real"</p>
            <p>→ You want honest info, not a sales pitch</p>
          </div>
        </div>

        {/* Contents */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-6">Inside the guide</p>
          <div className="space-y-0">
            {[
              ['Do you actually need certification?', 'What studios require, what insurance needs, and when you can skip it.'],
              ['Finding the yoga style that fits you', 'Hatha, Vinyasa, Yin, Kundalini — what each feels like to teach.'],
              ['Online vs in-person — an honest look', 'Same certification, different experience. Real pros and cons.'],
              ['What to look for (and what to avoid)', '5 green flags and 5 red flags we found reviewing 15+ programs.'],
              ['A realistic cost breakdown', 'From $290 to $8,000+ — where the money goes and how to save.'],
              ['Life after certification', 'Teaching options, realistic income, and how long it takes to build up.'],
              ['Landing your first teaching opportunity', 'Studio auditions, online classes, private clients — how to start.'],
            ].map(([title, desc], i) => (
              <div key={i} className="py-4 border-b border-driftwood/50">
                <div className="flex items-baseline gap-4">
                  <span className="text-[12px] text-stone font-medium tabular-nums shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-bark font-medium">{title}</p>
                    <p className="text-stone text-[13px] mt-0.5">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <div className="mb-10 max-w-[480px]">
          <p className="text-[13px] text-stone italic leading-relaxed">
            "I spent weeks googling before I found this guide. It answered every question I had in 15 minutes. Wish I'd found it sooner."
          </p>
          <p className="text-[12px] text-stone mt-2">— Recent reader</p>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="bg-parchment rounded-card p-8 max-w-[480px]">
            <p className="font-serif text-xl text-ink mb-2">On its way ✓</p>
            <p className="text-bark text-[14px]">Check your inbox — you'll also get 5 helpful emails over the next 9 days.</p>
            <p className="text-stone text-[13px] mt-3">While you wait: <Link href="/guide" className="text-sage hover:text-sage-deep transition-colors duration-300">read the guide online →</Link></p>
          </div>
        ) : (
          <div className="max-w-[480px]">
            <p className="text-[13px] text-ink font-medium mb-3">Get the guide + 5 helpful emails:</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 border border-driftwood rounded-pill bg-white text-ink placeholder:text-stone focus:outline-none focus:border-sage transition-colors duration-300"
                aria-label="Email address"
              />
              <button type="submit" className="bg-sage-deep text-white px-7 py-3.5 rounded-pill text-[13px] font-medium hover:opacity-90 transition-opacity duration-300 whitespace-nowrap">
                Send it to me
              </button>
            </form>
            <p className="text-[12px] text-stone mt-3">Free forever. No spam. Unsubscribe anytime.</p>
          </div>
        )}

        {/* What happens next */}
        <div className="mt-14 pt-10 border-t border-driftwood max-w-[480px]">
          <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-4">After you sign up</p>
          <div className="space-y-3 text-[14px] text-bark">
            <p><strong className="text-ink">Immediately:</strong> Guide link in your inbox</p>
            <p><strong className="text-ink">Day 2:</strong> The #1 mistake people make choosing a YTT</p>
            <p><strong className="text-ink">Day 4:</strong> Our 5-point checklist for a good program</p>
            <p><strong className="text-ink">Day 6:</strong> A real story from someone who made the leap</p>
            <p><strong className="text-ink">Day 9:</strong> A gentle nudge (only if you're ready)</p>
          </div>
        </div>

        {/* Alternative */}
        <div className="mt-14 pt-10 border-t border-driftwood">
          <p className="text-[13px] text-stone">
            Prefer to browse without signing up? Our <Link href="/blog" className="text-sage hover:text-sage-deep transition-colors duration-300">articles</Link> and <Link href="/guide" className="text-sage hover:text-sage-deep transition-colors duration-300">full guide</Link> are free to read — no email needed.
          </p>
        </div>
      </div>
    </Layout>
  )
}
