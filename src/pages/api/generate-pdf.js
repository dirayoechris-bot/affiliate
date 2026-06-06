import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { generateGuidePdf } from '@/lib/pdf-doc.jsx'

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  try {
    const file = path.join(process.cwd(), 'content/lead-magnet/yoga-teaching-guide.md')
    const { content } = matter(fs.readFileSync(file, 'utf8'))
    const pdfBuffer = await generateGuidePdf(content)

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'inline; filename="yoga-teaching-guide.pdf"')
    res.setHeader('Cache-Control', 'public, max-age=3600')
    return res.status(200).send(pdfBuffer)
  } catch (err) {
    console.error('PDF generation failed:', err)
    return res.status(500).json({ error: 'Failed to generate PDF' })
  }
}
