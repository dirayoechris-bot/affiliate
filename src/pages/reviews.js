import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Reviews() {
  return (
    <Layout title="Yoga School Reviews — Yoga Path Guide">
      <h1 className="text-3xl font-bold mb-8">Yoga School Reviews</h1>
      <div className="space-y-6">
        <Link href="/blog/akasha-yoga-academy-review-2026" className="block p-6 border border-sage-100 rounded-lg hover:border-sage-400">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold mb-1">Akasha Yoga Academy</h2>
              <p className="text-gray-600">Breath-based Hatha Yoga · Online & Bali · Yoga Alliance Certified</p>
            </div>
            <span className="bg-sage-100 text-sage-800 px-3 py-1 rounded text-sm font-semibold">4.9/5</span>
          </div>
        </Link>
      </div>
    </Layout>
  )
}
