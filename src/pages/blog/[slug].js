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
      <article className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-sage-600 transition-colors duration-300">Home</Link>
          <span className="mx-2 text-gray-300">·</span>
          <Link href="/blog" className="hover:text-sage-600 transition-colors duration-300">Articles</Link>
        </nav>

        {/* Header — spacious, calm */}
        <header className="mb-12 text-center sm:text-center">
          <h1 className="font-serif text-2xl sm:text-4xl text-gray-800 leading-tight mb-4">{meta.title}</h1>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
            <time>{meta.date}</time>
            <span className="text-sage-300">·</span>
            <span>{meta.readTime || '8 min read'}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

        {/* Gentle CTA */}
        <div className="mt-20 rounded-3xl bg-sage-50 p-10 sm:p-12 text-center border border-sage-100">
          <p className="font-serif text-2xl text-gray-800 mb-3">Continue your journey</p>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto leading-relaxed text-sm">
            Our free guide covers everything you need before choosing a program. Take your time with it.
          </p>
          <Link href="/free-guide" className="inline-block bg-sage-600 text-white px-7 py-3.5 rounded-full hover:bg-sage-700 transition-all duration-300 text-sm font-medium">
            Get the Free Guide
          </Link>
        </div>

        {/* Related — subtle */}
        <div className="mt-14 pt-10 border-t border-earth-200">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-5">You might also enjoy</p>
          <div className="space-y-3">
            <Link href="/blog/best-online-yoga-teacher-training-2026" className="group block py-3 border-b border-earth-100 hover:border-sage-200 transition-colors duration-300">
              <p className="text-gray-700 group-hover:text-sage-700 transition-colors duration-300">7 Best Online Yoga Teacher Training Programs 2026</p>
            </Link>
            <Link href="/blog/is-online-yoga-teacher-training-worth-it" className="group block py-3 border-b border-earth-100 hover:border-sage-200 transition-colors duration-300">
              <p className="text-gray-700 group-hover:text-sage-700 transition-colors duration-300">Is Online Yoga Teacher Training Worth It?</p>
            </Link>
            <Link href="/blog/akasha-yoga-academy-review-2026" className="group block py-3">
              <p className="text-gray-700 group-hover:text-sage-700 transition-colors duration-300">Akasha Yoga Academy Review 2026</p>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}
