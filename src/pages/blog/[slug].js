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
      <article className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-gray-500 truncate">{meta.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-[2.5rem] font-bold leading-[1.15] tracking-tight mb-4">{meta.title}</h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <time>{meta.date}</time>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{meta.readTime || '8 min read'}</span>
          </div>
          {meta.excerpt && (
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              {meta.excerpt}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-sage-50 to-warm-50 p-8 sm:p-10 text-center border border-sage-100/50">
          <p className="text-3xl mb-3">📖</p>
          <h3 className="text-xl font-bold mb-2">Not sure which program is right for you?</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">Our free guide covers choosing a style, realistic costs, red flags, and what to expect after certification.</p>
          <Link href="/free-guide" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">
            Get the Free Guide →
          </Link>
        </div>

        {/* Related */}
        <div className="mt-12 pt-10 border-t border-gray-100">
          <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wide mb-4">Keep Reading</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/blog/best-online-yoga-teacher-training-2026" className="p-4 rounded-xl border border-gray-100 hover:border-sage-200 hover:bg-sage-50/30 transition-all group">
              <p className="font-medium text-sm group-hover:text-sage-700 transition-colors">7 Best Online YTT Programs 2026</p>
              <p className="text-xs text-gray-400 mt-1">Comparison</p>
            </Link>
            <Link href="/blog/is-online-yoga-teacher-training-worth-it" className="p-4 rounded-xl border border-gray-100 hover:border-sage-200 hover:bg-sage-50/30 transition-all group">
              <p className="font-medium text-sm group-hover:text-sage-700 transition-colors">Is Online YTT Worth It?</p>
              <p className="text-xs text-gray-400 mt-1">Guide</p>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}
