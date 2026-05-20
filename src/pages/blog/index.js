import Layout from '@/components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content/blog')
  if (!fs.existsSync(dir)) return { props: { posts: [] } }
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  const posts = files.map(file => {
    const { data } = matter(fs.readFileSync(path.join(dir, file), 'utf8'))
    return { slug: file.replace('.md', ''), ...data }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <Layout title="Blog — Yoga Path Guide" description="Guides, reviews, and tips for aspiring yoga teachers.">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-6 border border-sage-100 rounded-lg hover:border-sage-400">
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
