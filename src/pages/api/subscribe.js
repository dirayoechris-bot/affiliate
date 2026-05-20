export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email required' })

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
        updateEnabled: true,
        attributes: {
          SIGNUP_DATE: new Date().toISOString().split('T')[0],
        },
      }),
    })

    if (!response.ok && response.status !== 204) {
      const data = await response.json()
      if (data.code === 'duplicate_parameter') {
        return res.status(200).json({ success: true })
      }
    }

    // Send welcome email immediately (Day 0)
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
