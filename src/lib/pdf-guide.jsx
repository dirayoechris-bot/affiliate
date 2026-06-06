// Lightweight markdown-to-structured-data parser for PDF generation.
// Converts the lead-magnet markdown into an array of {type, text} blocks
// that the PDF component can render with appropriate styling.

export function parseMarkdownToBlocks(md) {
  const lines = md.split('\n')
  const blocks = []
  let inList = null // 'ul' | 'ol' | null
  let listItems = []

  const flushList = () => {
    if (inList && listItems.length) {
      blocks.push({ type: inList, items: listItems })
    }
    inList = null
    listItems = []
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Horizontal rule
    if (trimmed === '---') {
      flushList()
      blocks.push({ type: 'hr' })
      continue
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/)
    if (headingMatch) {
      flushList()
      const level = headingMatch[1].length
      blocks.push({ type: `h${level}`, text: stripInline(headingMatch[2]) })
      continue
    }

    // Unordered list
    const ulMatch = trimmed.match(/^[-*]\s+(.+)$/)
    if (ulMatch) {
      if (inList !== 'ul') flushList()
      inList = 'ul'
      listItems.push(stripInline(ulMatch[1]))
      continue
    }

    // Ordered list
    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/)
    if (olMatch) {
      if (inList !== 'ol') flushList()
      inList = 'ol'
      listItems.push(stripInline(olMatch[1]))
      continue
    }

    // Blank line
    if (trimmed === '') {
      flushList()
      continue
    }

    // Paragraph
    flushList()
    blocks.push({ type: 'p', text: stripInline(trimmed) })
  }

  flushList()
  return blocks
}

function stripInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
}
