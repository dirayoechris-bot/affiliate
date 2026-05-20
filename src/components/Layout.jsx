import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title || 'Yoga Path Guide — Find Your Perfect Yoga Teacher Training'}</title>
        <meta name="description" content={description || 'Honest reviews and guides to help you choose the best online yoga teacher training program.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪷</text></svg>" />
      </Head>
      <div className="min-h-screen flex flex-col bg-sand-50">
        {/* Minimal, airy navbar */}
        <header className="py-6 px-4 sm:px-6">
          <nav className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="text-xl opacity-80">🪷</span>
              <span className="font-serif text-xl text-gray-800 group-hover:text-sage-600 transition-colors duration-300">
                Yoga Path Guide
              </span>
            </Link>
            <div className="flex items-center gap-4 sm:gap-8 text-sm">
              <Link href="/blog" className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                Articles
              </Link>
              <Link href="/reviews" className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
                Reviews
              </Link>
              <Link href="/free-guide" className="text-sage-700 hover:text-sage-800 transition-colors duration-300 font-medium">
                Free Guide
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
          {children}
        </main>

        <footer className="mt-20 border-t border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mb-10">
              <div>
                <p className="font-serif text-lg text-gray-800 mb-2">Yoga Path Guide</p>
                <p className="text-sm text-gray-400 leading-relaxed">Helping you find the right path to teaching yoga. Independent & honest.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">Explore</p>
                <div className="space-y-2.5 text-sm">
                  <Link href="/blog" className="block text-gray-500 hover:text-sage-600 transition-colors duration-300">All Articles</Link>
                  <Link href="/reviews" className="block text-gray-500 hover:text-sage-600 transition-colors duration-300">School Reviews</Link>
                  <Link href="/free-guide" className="block text-gray-500 hover:text-sage-600 transition-colors duration-300">Free Guide</Link>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">Popular</p>
                <div className="space-y-2.5 text-sm">
                  <Link href="/blog/best-online-yoga-teacher-training-2026" className="block text-gray-500 hover:text-sage-600 transition-colors duration-300">Best Online YTT 2026</Link>
                  <Link href="/blog/akasha-yoga-academy-review-2026" className="block text-gray-500 hover:text-sage-600 transition-colors duration-300">Akasha Yoga Review</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-earth-200 pt-6 text-center text-xs text-gray-400">
              <p>© 2026 Yoga Path Guide · We may earn a commission from links at no extra cost to you.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
