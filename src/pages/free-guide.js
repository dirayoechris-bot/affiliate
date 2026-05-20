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
      setSubmitted(true) // Show success anyway to not block UX
    }
  }

  return (
    <Layout title="Free Yoga Teaching Guide — Yoga Path Guide" description="Everything you need to know before starting yoga teacher training.">
      <div className="py-16 sm:py-24">
        <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-6">Free guide</p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] text-ink leading-[1.15] mb-4">
          Your Yoga Teaching Journey
        </h1>
        <p className="text-bark leading-relaxed max-w-[400px] mb-14">
          Everything you need to know before taking the first step. Seven chapters, no fluff.
        </p>

        {/* Contents */}
        <div className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-6">Inside the guide</p>
          <div className="space-y-4">
            {[
              'Do you actually need certification?',
              'Finding the yoga style that fits you',
              'Online vs in-person — an honest look',
              'What to look for (and what to avoid)',
              'A realistic cost breakdown',
              'Life after certification',
              'Landing your first teaching opportunity',
            ].map((item, i) => (
              <div key={i} className="flex items-baseline gap-4 py-2 border-b border-driftwood/50">
                <span className="text-[12px] text-stone font-medium tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-bark">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="bg-parchment rounded-card p-8">
            <p className="font-serif text-xl text-ink mb-1">On its way</p>
            <p className="text-stone text-[14px]">Check your inbox — it'll be there in a moment.</p>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[420px]">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 border border-driftwood rounded-pill bg-white text-ink placeholder:text-stone focus:outline-none focus:border-sage transition-colors duration-300"
                aria-label="Email address"
              />
              <button type="submit" className="bg-sage-deep text-white px-6 py-3 rounded-pill text-[13px] font-medium hover:opacity-90 transition-opacity duration-300 whitespace-nowrap">
                Send it to me
              </button>
            </form>
            <p className="text-[12px] text-stone mt-4">No spam. Just the guide and 5 helpful emails over 9 days.</p>
          </div>
        )}

        <div className="mt-20 pt-10 border-t border-driftwood">
          <p className="text-[13px] text-stone">
            Prefer to browse? Our <Link href="/blog" className="text-sage hover:text-sage-deep transition-colors duration-300">articles</Link> are free to read — no email needed.
          </p>
        </div>
      </div>
    </Layout>
  )
}
