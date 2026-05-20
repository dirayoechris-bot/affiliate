import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero — spacious, calm, inviting */}
      <section className="py-14 sm:py-32 text-center">
        <p className="text-sage-600 text-sm tracking-wide mb-5 sm:mb-6 font-medium">Honest guidance for your yoga journey</p>
        <h1 className="font-serif text-4xl sm:text-7xl text-gray-800 mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1]">
          Begin your path<br />to teaching yoga
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto mb-10 sm:mb-12 leading-relaxed font-light px-4">
          We reviewed 15+ programs to help you find the training that truly resonates — 
          so you can teach from the heart.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link href="/blog/best-online-yoga-teacher-training-2026" className="bg-sage-600 text-white px-8 py-4 rounded-full hover:bg-sage-700 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md">
            Explore Top Programs
          </Link>
          <Link href="/free-guide" className="text-sage-700 px-8 py-4 rounded-full hover:bg-sage-50 transition-all duration-300 text-sm font-medium border border-sage-200">
            Download Free Guide
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-8">
        <span className="text-sage-300 text-2xl">✦</span>
      </div>

      {/* Featured — calm cards with breathing room */}
      <section className="py-12">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-10">Start Here</p>
        <div className="space-y-4">
          <Link href="/blog/akasha-yoga-academy-review-2026" className="group block bg-white rounded-2xl p-8 sm:p-10 border border-earth-200 hover:border-sage-300 hover:shadow-sm transition-all duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-sage-600 font-medium tracking-wide">Our Top Pick</span>
                <h2 className="font-serif text-2xl sm:text-3xl text-gray-800 mt-2 group-hover:text-sage-700 transition-colors duration-300">Akasha Yoga Academy Review</h2>
                <p className="text-gray-500 mt-2 leading-relaxed">4.9/5 rating · 1,100+ graduates · Breath-based Hatha from Bali · From $290</p>
              </div>
              <span className="text-sage-400 group-hover:translate-x-2 transition-transform duration-500 text-xl hidden sm:block">→</span>
            </div>
          </Link>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/best-online-yoga-teacher-training-2026" className="group block bg-white rounded-2xl p-8 border border-earth-200 hover:border-sage-300 hover:shadow-sm transition-all duration-500">
              <span className="text-xs text-gray-400 font-medium tracking-wide">Comparison</span>
              <h3 className="font-serif text-xl text-gray-800 mt-2 group-hover:text-sage-700 transition-colors duration-300">7 Best Online Programs 2026</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">Side-by-side: pricing, style, reviews, and who each is best for.</p>
            </Link>

            <Link href="/blog/is-online-yoga-teacher-training-worth-it" className="group block bg-white rounded-2xl p-8 border border-earth-200 hover:border-sage-300 hover:shadow-sm transition-all duration-500">
              <span className="text-xs text-gray-400 font-medium tracking-wide">Guide</span>
              <h3 className="font-serif text-xl text-gray-800 mt-2 group-hover:text-sage-700 transition-colors duration-300">Is Online YTT Worth It?</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">Honest pros, cons, real costs, and what graduates say.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Gentle CTA */}
      <section className="my-16 bg-sage-50 rounded-3xl p-10 sm:p-14 text-center border border-sage-100">
        <p className="font-serif text-3xl text-gray-800 mb-4">Begin with clarity</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
          Our free guide walks you through everything — from choosing a style to landing your first class. 
          No rush. Take your time.
        </p>
        <Link href="/free-guide" className="inline-block bg-sage-600 text-white px-8 py-4 rounded-full hover:bg-sage-700 transition-all duration-300 text-sm font-medium">
          Get the Free Guide →
        </Link>
        <p className="text-xs text-gray-400 mt-4">No spam · Unsubscribe anytime</p>
      </section>

      {/* Trust — subtle, not aggressive */}
      <section className="py-12 text-center">
        <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-400 tracking-wide">
          <span>Verified pricing</span>
          <span className="text-sage-300">·</span>
          <span>No sponsored rankings</span>
          <span className="text-sage-300">·</span>
          <span>Updated May 2026</span>
        </div>
      </section>
    </Layout>
  )
}
