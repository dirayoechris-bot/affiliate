import { Document, Page, Text, View, StyleSheet, renderToBuffer } from '@react-pdf/renderer'
import { parseMarkdownToBlocks } from './pdf-guide.jsx'

const styles = StyleSheet.create({
  page: {
    padding: 60,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.6,
    color: '#2c2825',
    backgroundColor: '#ffffff',
  },
  h1: { fontSize: 24, marginBottom: 8, fontFamily: 'Helvetica-Bold', color: '#2c2825' },
  h2: { fontSize: 16, marginTop: 18, marginBottom: 8, fontFamily: 'Helvetica-Bold', color: '#2c2825' },
  h3: { fontSize: 13, marginTop: 12, marginBottom: 6, fontFamily: 'Helvetica-Bold', color: '#4a6b3f' },
  h4: { fontSize: 11.5, marginTop: 10, marginBottom: 4, fontFamily: 'Helvetica-Bold', color: '#2c2825' },
  p: { marginBottom: 8, lineHeight: 1.6 },
  ul: { marginBottom: 10, paddingLeft: 14 },
  ol: { marginBottom: 10, paddingLeft: 14 },
  li: { marginBottom: 3, lineHeight: 1.5 },
  hr: { borderBottomWidth: 1, borderBottomColor: '#e8e2da', marginVertical: 14 },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 60,
    right: 60,
    fontSize: 8,
    color: '#9c9488',
    textAlign: 'center',
  },
})

function Block({ block }) {
  switch (block.type) {
    case 'h1': return <Text style={styles.h1}>{block.text}</Text>
    case 'h2': return <Text style={styles.h2}>{block.text}</Text>
    case 'h3': return <Text style={styles.h3}>{block.text}</Text>
    case 'h4': return <Text style={styles.h4}>{block.text}</Text>
    case 'p': return <Text style={styles.p}>{block.text}</Text>
    case 'hr': return <View style={styles.hr} />
    case 'ul':
      return (
        <View style={styles.ul}>
          {block.items.map((item, i) => <Text key={i} style={styles.li}>• {item}</Text>)}
        </View>
      )
    case 'ol':
      return (
        <View style={styles.ol}>
          {block.items.map((item, i) => <Text key={i} style={styles.li}>{i + 1}. {item}</Text>)}
        </View>
      )
    default:
      return null
  }
}

export async function generateGuidePdf(markdown) {
  const blocks = parseMarkdownToBlocks(markdown)
  const doc = (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {blocks.map((block, i) => <Block key={i} block={block} />)}
        <Text style={styles.footer} fixed>
          © 2026 Yoga Path Guide · yogapathguide.com
        </Text>
      </Page>
    </Document>
  )
  return await renderToBuffer(doc)
}
