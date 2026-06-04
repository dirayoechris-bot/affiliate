export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, consent } = req.body
  if (!email) return res.status(400).json({ error: 'Email required' })
  if (!consent) return res.status(400).json({ error: 'Consent required' })

  // Basic email format validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [2],
        updateEnabled: false,
        attributes: {
          SIGNUP_DATE: new Date().toISOString().split('T')[0],
          CONSENT: true,
          CONSENT_DATE: new Date().toISOString(),
        },
      }),
    })

    if (!response.ok && response.status !== 204) {
      const data = await response.json()
      if (data.code === 'duplicate_parameter') {
        // Returning user: do not re-send Day-0, do not reset SIGNUP_DATE
        return res.status(200).json({ success: true, returning: true })
      }
      return res.status(500).json({ error: 'Subscription failed' })
    }

    // New subscriber only: send welcome email (Day 0)
    const EMAILS = (await import('@/lib/emails')).default
    const welcome = EMAILS[0]

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Yoga Path Guide', email: 'hello@yogapathguide.com' },
        to: [{ email }],
        subject: welcome.subject,
        htmlContent: welcome.html,
      }),
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
