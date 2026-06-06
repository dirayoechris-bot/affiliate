import Layout from '@/components/Layout'

export default function Terms() {
  return (
    <Layout title="Terms of Use — Yoga Path Guide" description="Terms governing your use of Yoga Path Guide.">
      <div className="py-12 sm:py-16">
        <p className="text-[11px] uppercase tracking-[0.08em] text-stone mb-6">Last updated June 2026</p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] text-ink leading-[1.15] mb-8">
          Terms of Use
        </h1>

        <div className="prose">
          <h2>1. Acceptance</h2>
          <p>By using Yoga Path Guide (yogapathguide.com), you agree to these terms. If you don't agree, please don't use the site.</p>

          <h2>2. Content</h2>
          <p>All guides, articles, and recommendations are for informational purposes only. We are not a yoga school and do not provide yoga instruction or certification. Your decision to enroll in any teacher training program is your own.</p>

          <h2>3. Affiliate disclosure</h2>
          <p>Some links on this site are affiliate links. If you click one and purchase, we may earn a commission at no extra cost to you. We only recommend programs we have researched and believe offer real value. Our editorial recommendations are not influenced by affiliate partnerships.</p>

          <h2>4. No professional advice</h2>
          <p>Nothing on this site constitutes medical, legal, financial, or career advice. Always consult a qualified professional before making decisions that affect your health, finances, or career.</p>

          <h2>5. Intellectual property</h2>
          <p>All content on this site is owned by Yoga Path Guide or used with permission. You may not reproduce, distribute, or create derivative works without written permission.</p>

          <h2>6. Limitation of liability</h2>
          <p>Yoga Path Guide is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the site or reliance on its content.</p>

          <h2>7. Changes</h2>
          <p>We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the new terms.</p>

          <h2>8. Contact</h2>
          <p>Questions? Email <strong>hello@yogapathguide.com</strong>.</p>
        </div>
      </div>
    </Layout>
  )
}
