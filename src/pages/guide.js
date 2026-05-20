import Layout from '@/components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import gfm from 'remark-gfm'
import html from 'remark-html'

export async function getStaticProps() {
  const file = path.join(process.cwd(), 'content/lead-magnet/yoga-teaching-guide.md')
  const { content } = matter(fs.readFileSync(file, 'utf8'))
  const result = await remark().use(gfm).use(html).process(content)
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
        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="mt-20 bg-parchment rounded-card p-8 sm:p-10 text-center">
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
