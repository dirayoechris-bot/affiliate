import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title || 'Yoga Path Guide — Find Your Perfect Yoga Teacher Training'}</title>
        <meta name="description" content={description || 'Honest reviews and guides to help you choose the best online yoga teacher training program.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧘</text></svg>" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Floating pill navbar — 2026 trend */}
        <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4 sm:px-6">
          <nav className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl">🧘</span>
              <span className="font-bold text-gray-900 group-hover:text-sage-600 transition-colors text-sm sm:text-base">
                Yoga Path Guide
              </span>
            </Link>
            <div className="flex items-center gap-1 sm:gap-2">
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-1.5 rounded-full text-sm hover:bg-gray-100">
                Blog
              </Link>
              <Link href="/reviews" className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-1.5 rounded-full text-sm hover:bg-gray-100 hidden sm:block">
                Reviews
              </Link>
              <Link href="/free-guide" className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition-colors">
                Free Guide
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-16 w-full">
          {children}
        </main>

        <footer className="border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span>🧘</span>
                  <span className="font-bold text-gray-900">Yoga Path Guide</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Independent reviews for aspiring yoga teachers. Not affiliated with any school.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-3">Explore</h4>
                <div className="space-y-2 text-sm">
                  <Link href="/blog" className="block text-gray-500 hover:text-gray-900 transition-colors">All Articles</Link>
                  <Link href="/reviews" className="block text-gray-500 hover:text-gray-900 transition-colors">School Reviews</Link>
                  <Link href="/free-guide" className="block text-gray-500 hover:text-gray-900 transition-colors">Free Guide</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-3">Popular</h4>
                <div className="space-y-2 text-sm">
                  <Link href="/blog/best-online-yoga-teacher-training-2026" className="block text-gray-500 hover:text-gray-900 transition-colors">Best Online YTT 2026</Link>
                  <Link href="/blog/akasha-yoga-academy-review-2026" className="block text-gray-500 hover:text-gray-900 transition-colors">Akasha Review</Link>
                  <Link href="/blog/is-online-yoga-teacher-training-worth-it" className="block text-gray-500 hover:text-gray-900 transition-colors">Is Online YTT Worth It?</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
              <p>© 2026 Yoga Path Guide</p>
              <p>We may earn a commission from links on this site at no extra cost to you.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
