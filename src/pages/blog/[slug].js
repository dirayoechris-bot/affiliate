import Layout from '@/components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return { paths: [], fallback: false }
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  return { paths: files.map(f => ({ params: { slug: f.replace('.md', '') } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const file = path.join(process.cwd(), 'content/blog', `${params.slug}.md`)
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  const result = await remark().use(html).process(content)
  return { props: { meta: data, content: result.toString() } }
}

export default function Post({ meta, content }) {
  return (
    <Layout title={`${meta.title} — Yoga Path Guide`} description={meta.excerpt}>
      <article>
        <nav className="text-[11px] text-stone tracking-wide mb-12">
          <Link href="/" className="hover:text-ink transition-colors duration-300">Home</Link>
          <span className="mx-2 text-driftwood">·</span>
          <Link href="/blog" className="hover:text-ink transition-colors duration-300">Articles</Link>
        </nav>

        <header className="mb-14">
          <h1 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] text-ink leading-[1.15] tracking-[-0.01em] mb-4">{meta.title}</h1>
          <p className="text-[13px] text-stone">
            {meta.date}<span className="mx-2 text-driftwood">·</span>{meta.readTime || '8 min read'}
          </p>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />

        {/* Gentle CTA */}
        <div className="mt-20 bg-parchment rounded-card p-8 sm:p-10">
          <p className="font-serif text-xl text-ink mb-2">Continue your journey</p>
          <p className="text-bark text-[14px] leading-relaxed mb-6 max-w-[340px]">
            Our free guide covers everything before you choose a program.
          </p>
          <Link href="/free-guide" className="inline-block bg-sage-deep text-white px-6 py-3 rounded-pill text-[13px] font-medium hover:opacity-90 transition-opacity duration-300">
            Get the free guide
          </Link>
        </div>

        {/* Related */}
        <div className="mt-16 pt-10 border-t border-driftwood">
          <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-6">Keep reading</p>
          <div className="space-y-4">
            <Link href="/blog/best-online-yoga-teacher-training-2026" className="group block">
              <p className="text-bark group-hover:text-sage-deep transition-colors duration-300">7 Best Online Yoga Teacher Training Programs 2026</p>
            </Link>
            <Link href="/blog/is-online-yoga-teacher-training-worth-it" className="group block">
              <p className="text-bark group-hover:text-sage-deep transition-colors duration-300">Is Online Yoga Teacher Training Worth It?</p>
            </Link>
            <Link href="/blog/akasha-yoga-academy-review-2026" className="group block">
              <p className="text-bark group-hover:text-sage-deep transition-colors duration-300">Akasha Yoga Academy Review 2026</p>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}
