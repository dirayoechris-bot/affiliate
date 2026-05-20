import Layout from '@/components/Layout'
import { useState } from 'react'

export default function FreeGuide() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout title="Free Yoga Teaching Guide — Yoga Path Guide" description="Download our free guide: everything you need to know before starting yoga teacher training.">
      <div className="max-w-xl mx-auto py-16 sm:py-24 text-center">
        <p className="text-sage-600 text-sm tracking-wide mb-6">Free Guide</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-4 leading-tight">
          Your Yoga Teaching Journey
        </h1>
        <p className="text-gray-500 mb-12 leading-relaxed">
          Everything you need to know before taking the first step. 
          7 chapters, no fluff — just honest guidance.
        </p>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-earth-200 text-left mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">What's inside</p>
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
              <div key={i} className="flex items-start gap-3">
                <span className="text-sage-400 mt-0.5 text-sm">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="bg-sage-50 rounded-2xl p-10 border border-sage-100">
            <p className="font-serif text-2xl text-gray-800 mb-2">On its way ✓</p>
            <p className="text-gray-500">Check your inbox. It'll be there in a moment.</p>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 border border-earth-200 rounded-full focus:outline-none focus:border-sage-400 bg-white text-gray-700 transition-colors duration-300"
                aria-label="Email address"
              />
              <button type="submit" className="bg-sage-600 text-white px-7 py-4 rounded-full hover:bg-sage-700 transition-all duration-300 font-medium text-sm whitespace-nowrap">
                Send it to me
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4">No spam, ever. Just the guide + 5 helpful emails.</p>
          </div>
        )}

        <div className="mt-16 pt-10 border-t border-earth-200">
          <p className="text-sm text-gray-400">
            Prefer to browse? Read our <Link href="/blog" className="text-sage-600 hover:text-sage-700 transition-colors duration-300">articles</Link> — no email needed.
          </p>
        </div>
      </div>
    </Layout>
  )
}
