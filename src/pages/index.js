import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero — generous space, serif display, calm */}
      <section className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-6">Honest guidance</p>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] text-ink leading-[1.1] tracking-[-0.02em] mb-6">
          Begin your path to<br />teaching yoga
        </h1>
        <p className="text-bark leading-relaxed max-w-[420px] mb-10">
          We reviewed 15+ programs to help you find the training that resonates — so you can teach from the heart.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog/best-online-yoga-teacher-training-2026" className="bg-sage-deep text-white px-6 py-3 rounded-pill text-[13px] font-medium hover:opacity-90 transition-opacity duration-300">
            Explore top programs
          </Link>
          <Link href="/free-guide" className="border border-driftwood text-bark px-6 py-3 rounded-pill text-[13px] font-medium hover:border-sage transition-colors duration-300">
            Free guide
          </Link>
        </div>
      </section>

      {/* Articles — clean list, no card nesting */}
      <section className="pb-24">
        <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-8">Start here</p>

        <div className="space-y-px">
          <Link href="/blog/akasha-yoga-academy-review-2026" className="group block py-6 border-t border-driftwood">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] text-sage font-medium tracking-wide mb-1.5">Top Pick</p>
                <h2 className="font-serif text-2xl sm:text-[1.75rem] text-ink group-hover:text-sage-deep transition-colors duration-300">Akasha Yoga Academy Review</h2>
                <p className="text-stone text-[14px] mt-1.5">4.9/5 · 1,100+ graduates · From $290</p>
              </div>
              <span className="text-driftwood group-hover:text-sage group-hover:translate-x-1 transition-all duration-500 mt-2 text-lg shrink-0">→</span>
            </div>
          </Link>

          <Link href="/blog/best-online-yoga-teacher-training-2026" className="group block py-6 border-t border-driftwood">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] text-stone font-medium tracking-wide mb-1.5">Comparison</p>
                <h2 className="font-serif text-2xl sm:text-[1.75rem] text-ink group-hover:text-sage-deep transition-colors duration-300">7 Best Online Programs 2026</h2>
                <p className="text-stone text-[14px] mt-1.5">Pricing, style, reviews — side by side</p>
              </div>
              <span className="text-driftwood group-hover:text-sage group-hover:translate-x-1 transition-all duration-500 mt-2 text-lg shrink-0">→</span>
            </div>
          </Link>

          <Link href="/blog/is-online-yoga-teacher-training-worth-it" className="group block py-6 border-t border-b border-driftwood">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] text-stone font-medium tracking-wide mb-1.5">Guide</p>
                <h2 className="font-serif text-2xl sm:text-[1.75rem] text-ink group-hover:text-sage-deep transition-colors duration-300">Is Online YTT Worth It?</h2>
                <p className="text-stone text-[14px] mt-1.5">Honest pros, cons, and real costs</p>
              </div>
              <span className="text-driftwood group-hover:text-sage group-hover:translate-x-1 transition-all duration-500 mt-2 text-lg shrink-0">→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA — single, calm, no pressure */}
      <section className="bg-parchment rounded-card p-8 sm:p-12 mb-24">
        <p className="font-serif text-2xl sm:text-[1.75rem] text-ink mb-3 leading-tight">Begin with clarity</p>
        <p className="text-bark text-[15px] leading-relaxed max-w-[380px] mb-8">
          Our free guide walks you through everything before you choose a program. Take your time.
        </p>
        <Link href="/free-guide" className="inline-block bg-sage-deep text-white px-6 py-3 rounded-pill text-[13px] font-medium hover:opacity-90 transition-opacity duration-300">
          Get the free guide
        </Link>
      </section>

      {/* Trust — understated */}
      <section className="pb-16 text-center">
        <p className="text-[11px] text-stone tracking-wide">
          Verified pricing · No sponsored rankings · Updated May 2026
        </p>
      </section>
    </Layout>
  )
}
