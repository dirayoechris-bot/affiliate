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
      <div className="max-w-2xl mx-auto py-12">
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">📖</span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Your Yoga Teaching Journey</h1>
          <p className="text-lg text-gray-600">The Complete Beginner's Guide to Becoming a Yoga Teacher</p>
          <p className="text-sm text-gray-400 mt-2">Free · 7 chapters · No fluff · Honest info</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
          <h3 className="font-semibold text-lg mb-5">What's inside:</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Do you actually need certification?',
              'Choosing between yoga styles',
              'Online vs in-person (honest pros & cons)',
              'What to look for in a program',
              'Realistic cost breakdown',
              'What happens after certification',
              'How to land your first teaching gig',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-sage-500 mt-0.5">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="bg-sage-50 border border-sage-200 rounded-xl p-8 text-center">
            <span className="text-3xl block mb-3">🎉</span>
            <p className="text-sage-800 font-semibold text-lg">Check your email!</p>
            <p className="text-sage-700 mt-2">Your guide is on its way. Check spam if you don't see it in 2 minutes.</p>
          </div>
        ) : (
          <div className="bg-sage-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white"
                aria-label="Email address"
              />
              <button type="submit" className="bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors font-medium whitespace-nowrap shadow-sm">
                Send Me the Guide →
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">No spam, ever. Unsubscribe anytime. We'll also send 5 helpful emails over 9 days.</p>
          </div>
        )}

        <div className="mt-10 text-center text-sm text-gray-400">
          <p>Or just browse our <a href="/blog" className="text-sage-600 underline">blog articles</a> — no email required.</p>
        </div>
      </div>
    </Layout>
  )
}
