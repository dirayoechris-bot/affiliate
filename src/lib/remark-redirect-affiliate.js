// Remark plugin: rewrite outbound affiliate links to first-party /go/ slug
// redirects so we get per-source click attribution via Vercel Analytics.
//
// Owner can keep writing markdown with full Akasha URLs; this plugin
// transparently wraps them at build time. To add a new affiliate
// destination, add to the AFFILIATE_HOSTS map below.

import { visit } from 'unist-util-visit'

const AFFILIATE_HOSTS = {
  'akashayogaacademy.com': 'akasha',
  'www.akashayogaacademy.com': 'akasha',
}

function rewriteUrl(url) {
  try {
    const u = new URL(url)
    const slug = AFFILIATE_HOSTS[u.hostname.toLowerCase()]
    if (!slug) return null
    // Preserve tracking fragment (#christianimm) by appending to /go/...
    const fragment = u.hash || ''
    return `/go/${slug}${fragment}`
  } catch {
    return null
  }
}

export default function remarkRedirectAffiliate() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      const rewritten = rewriteUrl(node.url)
      if (rewritten) node.url = rewritten
    })
  }
}
