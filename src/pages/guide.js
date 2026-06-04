import Layout from '@/components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import gfm from 'remark-gfm'
import html from 'remark-html'
import remarkRedirectAffiliate from '@/lib/remark-redirect-affiliate'

export async function getStaticProps() {
  const file = path.join(process.cwd(), 'content/lead-magnet/yoga-teaching-guide.md')
  const { content } = matter(fs.readFileSync(file, 'utf8'))
  const result = await remark().use(gfm).use(remarkRedirectAffiliate).use(html).process(content)
  return { props: { content: result.toString() } }
}

export default function Guide({ content }) {
  return (
    <Layout title="Your Yoga Teaching Journey — Free Guide" description="The complete beginner's guide to becoming a yoga teacher in 2026.">
      <article className="max-w-2xl mx-auto">
        <nav className="text-[11px] text-stone tracking-wide mb-12">
          <Link href="/" className="hover:text-ink transition-colors duration-300">Home</Link>
          <span className="mx-2 text-driftwood">·</span>
          <span>Free Guide</span>
        </nav>
        <div className="mb-10 flex items-center justify-between gap-4 bg-parchment rounded-card px-5 py-3">
          <p className="text-[13px] text-bark">Prefer a PDF? Download to read offline.</p>
          <a
            href="/api/generate-pdf"
            target="_blank"
            rel="noopener"
            className="shrink-0 bg-sage-deep text-white px-5 py-2 rounded-pill text-[12px] font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Download PDF
          </a>
        </div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
        <p className="text-[12px] text-stone italic mt-8">
          Disclosure: Some links on this page are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. See our <Link href="/terms" className="text-sage hover:text-sage-deep underline">Terms</Link>.
        </p>
        <div className="mt-12 bg-parchment rounded-card p-8 sm:p-10 text-center">
          <p className="font-serif text-xl text-ink mb-2">Ready to take the next step?</p>
          <p className="text-bark text-[14px] leading-relaxed mb-6">See our top-rated program recommendation.</p>
          <Link href="/blog/akasha-yoga-academy-review-2026" className="inline-block bg-sage-deep text-white px-6 py-3 rounded-pill text-[13px] font-medium hover:opacity-90 transition-opacity duration-300">
            Read Akasha Review
          </Link>
        </div>
      </article>
    </Layout>
  )
}
