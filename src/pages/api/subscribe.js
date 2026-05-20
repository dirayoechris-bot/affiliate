export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email required' })

  try {
    // Add contact to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [2], // Default list — change if needed
        updateEnabled: true,
      }),
    })

    if (!response.ok && response.status !== 204) {
      const data = await response.json()
      if (data.code === 'duplicate_parameter') {
        return res.status(200).json({ success: true }) // Already subscribed, still show success
      }
      throw new Error(data.message)
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
