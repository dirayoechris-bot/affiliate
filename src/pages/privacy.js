import Layout from '@/components/Layout'

export default function Privacy() {
  return (
    <Layout title="Privacy Policy — Yoga Path Guide" description="How we collect, use, and protect your data.">
      <div className="py-12 sm:py-16">
        <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-6">Last updated June 2026</p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] text-ink leading-[1.15] mb-8">
          Privacy Policy
        </h1>

        <div className="prose">
          <h2>What we collect</h2>
          <p>When you sign up for our free yoga teaching guide, we collect your email address. We also automatically collect basic analytics (pages visited, referrer) via privacy-friendly analytics (Plausible or Vercel Analytics) — no personal identifiers, no cross-site tracking.</p>

          <h2>How we use it</h2>
          <p>Your email is used to send you the guide you requested, plus a 5-email nurture sequence over 9 days. We may also send occasional updates about new guides or articles — no more than once per month, and you can unsubscribe at any time.</p>

          <h2>Third parties</h2>
          <p>We use <strong>Brevo</strong> (email service) to store your email and send the email sequence. We do not sell, rent, or share your email with any other third party. Some pages contain affiliate links to yoga teacher training programs; clicking those links does not transmit your personal data to those programs unless you choose to sign up with them directly.</p>

          <h2>Cookies</h2>
          <p>We do not use advertising cookies, retargeting pixels, or third-party tracking cookies. Analytics cookies (if any) contain no personal identifiers.</p>

          <h2>Your rights (GDPR / CCPA)</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent and unsubscribe at any time</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>To exercise any of these rights, email <strong>hello@yogapathguide.com</strong>. We respond within 30 days.</p>

          <h2>Data retention</h2>
          <p>We retain your email until you unsubscribe. When you unsubscribe, your email is removed from our active list within 24 hours and from our backup systems within 30 days.</p>

          <h2>Contact</h2>
          <p>Questions? Email <strong>hello@yogapathguide.com</strong>.</p>
        </div>
      </div>
    </Layout>
  )
}
