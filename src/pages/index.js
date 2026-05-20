import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero — bold type, generous whitespace */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sage-600 font-medium text-sm tracking-wide mb-4">Independent · Honest · No Sponsored Rankings</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Your guide to becoming a yoga teacher.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
            We reviewed 15+ online programs so you can skip the research and start your journey with confidence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/best-online-yoga-teacher-training-2026" className="bg-gray-900 text-white px-6 py-3.5 rounded-full hover:bg-gray-800 transition-all font-medium text-sm">
              See Top Programs 2026 →
            </Link>
            <Link href="/free-guide" className="bg-sage-50 text-sage-700 px-6 py-3.5 rounded-full hover:bg-sage-100 transition-all font-medium text-sm border border-sage-200">
              Free Guide (PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid — trending layout 2026 */}
      <section className="pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large featured card */}
          <Link href="/blog/akasha-yoga-academy-review-2026" className="sm:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage-50 to-sage-100 p-8 hover:shadow-lg transition-all border border-sage-100">
            <span className="text-xs font-medium text-sage-600 bg-white/80 px-2.5 py-1 rounded-full">⭐ Top Pick</span>
            <h2 className="text-2xl font-bold mt-4 mb-2 group-hover:text-sage-700 transition-colors">Akasha Yoga Academy Review 2026</h2>
            <p className="text-gray-600 leading-relaxed">4.9/5 rating · 1,100+ graduates · From $290. An honest deep-dive into the most talked-about online YTT.</p>
            <span className="inline-block mt-4 text-sm font-medium text-sage-600 group-hover:translate-x-1 transition-transform">Read review →</span>
          </Link>

          {/* Stats card */}
          <div className="rounded-2xl bg-gray-900 text-white p-8 flex flex-col justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Programs compared</p>
              <p className="text-4xl font-bold">15+</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-1">Cheapest certified YTT</p>
              <p className="text-4xl font-bold">$290</p>
            </div>
          </div>

          {/* Comparison card */}
          <Link href="/blog/best-online-yoga-teacher-training-2026" className="group rounded-2xl bg-warm-50 p-8 hover:shadow-lg transition-all border border-warm-100">
            <span className="text-xs font-medium text-warm-600 bg-white/80 px-2.5 py-1 rounded-full">Comparison</span>
            <h3 className="text-lg font-bold mt-4 mb-2 group-hover:text-warm-700 transition-colors">7 Best Online YTT Programs</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Side-by-side pricing, reviews, and who each program is best for.</p>
            <span className="inline-block mt-3 text-sm font-medium text-warm-600 group-hover:translate-x-1 transition-transform">Compare →</span>
          </Link>

          {/* Guide card */}
          <Link href="/blog/is-online-yoga-teacher-training-worth-it" className="group rounded-2xl bg-white p-8 hover:shadow-lg transition-all border border-gray-200">
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">Guide</span>
            <h3 className="text-lg font-bold mt-4 mb-2 group-hover:text-sage-600 transition-colors">Is Online YTT Worth It?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Honest pros, cons, costs, and what real graduates say.</p>
            <span className="inline-block mt-3 text-sm font-medium text-gray-500 group-hover:translate-x-1 transition-transform">Read →</span>
          </Link>

          {/* CTA card */}
          <Link href="/free-guide" className="group rounded-2xl bg-gradient-to-br from-sage-600 to-sage-700 text-white p-8 hover:shadow-lg transition-all">
            <span className="text-3xl">📖</span>
            <h3 className="text-lg font-bold mt-4 mb-2">Free: Yoga Teaching Guide</h3>
            <p className="text-sage-100 text-sm leading-relaxed">7 chapters. Everything before you enroll. No fluff.</p>
            <span className="inline-block mt-3 text-sm font-medium text-white/80 group-hover:translate-x-1 transition-transform">Download free →</span>
          </Link>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-12 border-t border-gray-100">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <span>✓ Verified pricing (May 2026)</span>
          <span>✓ No paid placements</span>
          <span>✓ Real graduate testimonials</span>
          <span>✓ Updated monthly</span>
        </div>
      </section>
    </Layout>
  )
}
