import EMAILS from '@/lib/emails'

// Vercel Cron: runs daily, checks which subscribers need their next email
// Schedule: every day at 8 AM UTC

export default async function handler(req, res) {
  // Verify cron secret (Vercel sends this header)
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).end()
  }

  const API_KEY = process.env.BREVO_API_KEY
  const SENDER = { name: 'Yoga Path Guide', email: 'hello@yogapathguide.com' }

  try {
    // Paginate through all contacts (Brevo default limit=50, max=50 per request)
    const allContacts = []
    let offset = 0
    const pageSize = 50
    while (true) {
      const contactsRes = await fetch(
        `https://api.brevo.com/v3/contacts?limit=${pageSize}&offset=${offset}&sort=desc`,
        { headers: { 'api-key': API_KEY, 'accept': 'application/json' } }
      )
      const data = await contactsRes.json()
      const batch = data.contacts || []
      allContacts.push(...batch)
      if (batch.length < pageSize) break
      offset += pageSize
    }

    const now = new Date()
    let sent = 0

    for (const contact of allContacts) {
      const signupDate = new Date(contact.attributes?.SIGNUP_DATE || contact.createdAt)
      const daysSinceSignup = Math.floor((now - signupDate) / (1000 * 60 * 60 * 24))

      // Find the email that should be sent today
      const emailToSend = EMAILS.find(e => e.day === daysSinceSignup)
      if (!emailToSend) continue

      // Send via Brevo transactional
      const sendRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': API_KEY,
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({
          sender: SENDER,
          to: [{ email: contact.email, name: contact.attributes?.FIRSTNAME || '' }],
          subject: emailToSend.subject,
          htmlContent: emailToSend.html,
        }),
      })

      if (sendRes.ok) sent++
    }

    return res.status(200).json({ success: true, sent })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
