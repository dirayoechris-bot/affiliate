// First-party click tracking redirect.
// /go/akasha -> logs click event -> 302 to Akasha affiliate link
// /go/akasha-200hr -> same but for 200hr-specific program link
//
// We log to Vercel Analytics via the @vercel/analytics package's `track`
// function, which fires after redirect. Source-of-truth attribution lives
// in Vercel Analytics; the URL itself encodes the source slug so we can
// also see it in server logs / Vercel function logs.

import { track } from '@vercel/analytics'

const AFFILIATE_LINKS = {
  'akasha': 'https://www.akashayogaacademy.com/200hr-yoga-teacher-training-online#christianimm',
  'akasha-200hr': 'https://www.akashayogaacademy.com/200hr-yoga-teacher-training-online#christianimm',
  'akasha-300hr': 'https://www.akashayogaacademy.com/300hr-yoga-teacher-training-online#christianimm',
}

export async function getServerSideProps({ params, req }) {
  const slug = params.slug
  const target = AFFILIATE_LINKS[slug]
  if (!target) {
    return { notFound: true }
  }
  // Log source context server-side
  const referer = req.headers.referer || 'direct'
  const ua = req.headers['user-agent'] || 'unknown'
  // eslint-disable-next-line no-console
  console.log(`[affiliate-click] slug=${slug} referer=${referer} ua=${ua.substring(0, 80)}`)
  // Fire-and-forget analytics event
  try { track('affiliate_click', { slug, referer: referer.substring(0, 200) }) } catch {}
  return {
    redirect: {
      destination: target,
      permanent: false,
    },
  }
}

// Component never renders (redirect happens server-side)
export default function Go() {
  return null
}
