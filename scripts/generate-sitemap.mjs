// Auto-generate sitemap.xml from filesystem at build time.
// Run via: node scripts/generate-sitemap.mjs
// Output: public/sitemap.xml

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const BASE = 'https://yogapathguide.com'

const today = new Date().toISOString().split('T')[0]

const urls = [
  { loc: '/', priority: '1.0' },
  { loc: '/blog', priority: '0.8' },
  { loc: '/free-guide', priority: '0.7' },
  { loc: '/guide', priority: '0.7' },
  { loc: '/reviews', priority: '0.6' },
  { loc: '/privacy', priority: '0.3' },
  { loc: '/terms', priority: '0.3' },
]

// Discover blog posts from filesystem
const blogDir = path.join(ROOT, 'content/blog')
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'))
  for (const file of files) {
    const slug = file.replace('.md', '')
    // Read frontmatter date for lastmod
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf8')
    const m = raw.match(/^date:\s*"?(\d{4}-\d{2}-\d{2})"?/m)
    const lastmod = m ? m[1] : today
    // Pillar/commercial posts get higher priority
    const isPillar = slug === 'best-online-yoga-teacher-training-2026' || slug === 'akasha-yoga-academy-review-2026'
    const isCommercial = isPillar || slug === 'is-online-yoga-teacher-training-worth-it'
    urls.push({
      loc: `/blog/${slug}`,
      lastmod,
      priority: isPillar ? '0.9' : isCommercial ? '0.85' : '0.7',
    })
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => {
  const lastmod = u.lastmod || today
  return `  <url><loc>${BASE}${u.loc}</loc><lastmod>${lastmod}</lastmod><priority>${u.priority}</priority></url>`
}).join('\n')}
</urlset>
`

const out = path.join(ROOT, 'public/sitemap.xml')
fs.writeFileSync(out, xml)
console.log(`Wrote ${urls.length} URLs to public/sitemap.xml`)
