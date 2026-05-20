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
      <div className="min-h-screen flex flex-col">
        <header className="py-8 px-5 sm:px-8">
          <nav className="max-w-[640px] mx-auto flex items-center justify-between">
            <Link href="/" className="font-serif text-xl text-ink hover:text-sage transition-colors duration-300">
              Yoga Path Guide
            </Link>
            <div className="flex items-center gap-6 text-[13px] font-sans font-normal tracking-wide">
              <Link href="/blog" className="text-stone hover:text-ink transition-colors duration-300">Articles</Link>
              <Link href="/reviews" className="text-stone hover:text-ink transition-colors duration-300 hidden sm:block">Reviews</Link>
              <Link href="/free-guide" className="text-sage-deep hover:text-ink transition-colors duration-300 font-medium">Free Guide</Link>
            </div>
          </nav>
        </header>

        <main className="flex-1 max-w-[640px] mx-auto px-5 sm:px-8 py-6 w-full">
          {children}
        </main>

        <footer className="mt-24 border-t border-driftwood">
          <div className="max-w-[640px] mx-auto px-5 sm:px-8 py-16">
            <div className="flex flex-col sm:flex-row justify-between gap-10 mb-12">
              <div className="max-w-[200px]">
                <p className="font-serif text-lg text-ink mb-2">Yoga Path Guide</p>
                <p className="text-[13px] text-stone leading-relaxed">Independent guidance for aspiring yoga teachers.</p>
              </div>
              <div className="flex gap-12 text-[13px]">
                <div className="space-y-2.5">
                  <Link href="/blog" className="block text-stone hover:text-ink transition-colors duration-300">Articles</Link>
                  <Link href="/reviews" className="block text-stone hover:text-ink transition-colors duration-300">Reviews</Link>
                  <Link href="/free-guide" className="block text-stone hover:text-ink transition-colors duration-300">Free Guide</Link>
                </div>
                <div className="space-y-2.5">
                  <Link href="/blog/best-online-yoga-teacher-training-2026" className="block text-stone hover:text-ink transition-colors duration-300">Best YTT 2026</Link>
                  <Link href="/blog/akasha-yoga-academy-review-2026" className="block text-stone hover:text-ink transition-colors duration-300">Akasha Review</Link>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-stone tracking-wide">© 2026 Yoga Path Guide · We may earn a commission at no extra cost to you.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
