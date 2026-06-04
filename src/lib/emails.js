const BRAND = {
  bg: '#faf8f5',
  card: '#ffffff',
  text: '#6b6259',
  heading: '#2c2825',
  sage: '#6b8f5e',
  sageDeep: '#4a6b3f',
  border: '#e8e2da',
  muted: '#9c9488',
}

function template(content) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:-apple-system,system-ui,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:40px 20px;">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:${BRAND.card};border-radius:12px;border:1px solid ${BRAND.border};padding:40px 36px;">
<tr><td>
<!-- Logo -->
<p style="margin:0 0 32px;font-size:15px;color:${BRAND.heading};font-weight:600;">🪷 Yoga Path Guide</p>
<!-- Content -->
${content}
<!-- Footer -->
<p style="margin:40px 0 0;padding-top:24px;border-top:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};line-height:1.6;">
You're receiving this because you downloaded our yoga teaching guide.<br>
<a href="https://yogapathguide.com" style="color:${BRAND.muted};">yogapathguide.com</a> · <a href="%unsubscribe_url%" style="color:${BRAND.muted};">Unsubscribe</a>
</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

function btn(text, url) {
  return `<a href="${url}" style="display:inline-block;background:${BRAND.sageDeep};color:#ffffff;padding:12px 24px;border-radius:999px;text-decoration:none;font-size:13px;font-weight:500;margin:8px 0;">${text}</a>`
}

function p(text) {
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:${BRAND.text};">${text}</p>`
}

function h(text) {
  return `<p style="margin:0 0 12px;font-size:20px;line-height:1.3;color:${BRAND.heading};font-weight:600;">${text}</p>`
}

function spacer() {
  return `<div style="height:20px;"></div>`
}

const EMAILS = [
  {
    day: 0,
    subject: "Your yoga teaching guide is here 🪷",
    html: template(`
${h("Your guide is ready")}
${p("Hi there — thanks for downloading. Here's your guide:")}
${btn("Download the PDF →", "https://yogapathguide.com/api/generate-pdf")}
${p("<a href='https://yogapathguide.com/guide' style='color:${BRAND.sage};font-size:13px;'>Or read it online →</a>")}
${spacer()}
${p("Inside you'll find:")}
<ul style="margin:0 0 16px;padding-left:20px;color:${BRAND.text};font-size:14px;line-height:2;">
<li>How to choose between yoga styles</li>
<li>Online vs in-person — honest comparison</li>
<li>Realistic cost breakdown</li>
<li>What to look for (and avoid)</li>
<li>What happens after certification</li>
</ul>
${p("Take your time with it. No rush.")}
${p("Over the next few days, I'll share a few things I wish someone told me before starting. Short emails, no fluff.")}
${spacer()}
${p("<em style='font-size:12px;color:${BRAND.muted}'>Disclosure: Some links in this email and in our guides are affiliate links. If you purchase through them, we may earn a commission at no extra cost to you. We only recommend programs we genuinely believe in.</em>")}
${p("Talk soon,<br><strong style='color:${BRAND.heading}'>Yoga Path Guide</strong>")}
${p("<em style='font-size:13px;color:${BRAND.muted}'>P.S. — Just reply if you have questions. I read everything.</em>")}
`),
  },
  {
    day: 2,
    subject: "The #1 mistake people make choosing a YTT",
    html: template(`
${h("The biggest mistake?")}
${p("Picking based on price alone.")}
${p("Here's what usually happens:")}
<ul style="margin:0 0 16px;padding-left:20px;color:${BRAND.text};font-size:14px;line-height:2;">
<li>Enroll in a $99 program</li>
<li>It's just pre-recorded videos, zero support</li>
<li>Never finish — or finish but don't feel ready</li>
<li>Spend <em>more</em> money on a second training</li>
</ul>
${p("The sweet spot? A program that's <strong>affordable AND has real support</strong> — live calls, mentorship, community.")}
${p("A $290 program with daily live Zoom calls and 4.9-star reviews will serve you better than a $2,500 program with no community.")}
${spacer()}
${p("Tomorrow: what makes a great online YTT (based on reviewing 15+ programs).")}
${spacer()}
${p("— Yoga Path Guide")}
`),
  },
  {
    day: 4,
    subject: "5 things every good YTT has ✓",
    html: template(`
${h("My checklist after reviewing 15+ programs")}
${spacer()}
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
<tr><td style="padding:8px 0;font-size:14px;color:${BRAND.text};border-bottom:1px solid ${BRAND.border};">✓ &nbsp; Yoga Alliance registered (RYS 200/300)</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:${BRAND.text};border-bottom:1px solid ${BRAND.border};">✓ &nbsp; Live calls or mentorship (not just videos)</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:${BRAND.text};border-bottom:1px solid ${BRAND.border};">✓ &nbsp; Active student community</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:${BRAND.text};border-bottom:1px solid ${BRAND.border};">✓ &nbsp; Money-back guarantee</td></tr>
<tr><td style="padding:8px 0;font-size:14px;color:${BRAND.text};">✓ &nbsp; Real testimonials with names & outcomes</td></tr>
</table>
${p("<strong>Red flags:</strong> Under $100, no Yoga Alliance registration, \"limited spots!\" pressure, no refund policy.")}
${p("I wrote a detailed comparison of 7 programs that pass this checklist:")}
${btn("See the Full Comparison →", "https://yogapathguide.com/blog/best-online-yoga-teacher-training-2026")}
${spacer()}
${p("— Yoga Path Guide")}
`),
  },
  {
    day: 6,
    subject: "She quit her corporate job at 38",
    html: template(`
${h("A story you might relate to")}
${p("Sarah was 38, burned out from marketing, practicing yoga for 3 years. She kept thinking: <em>\"Can I actually do this?\"</em>")}
${p("She enrolled in an online YTT. Self-paced, around her job.")}
<table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;background:${BRAND.bg};border-radius:8px;padding:20px 24px;">
<tr><td style="font-size:14px;line-height:1.8;color:${BRAND.text};">
6 months → certified<br>
9 months → first class<br>
12 months → left corporate<br><br>
<em>"I wake up excited. I haven't felt that in a decade."</em>
</td></tr>
</table>
${p("The program she chose had authentic teachers, a supportive community, breath-based approach, and affordable pricing.")}
${p("That's exactly what <strong>Akasha Yoga Academy</strong> offers — 1,100+ graduates, 4.9/5 reviews, starting from $290.")}
${btn("Read My Full Review →", "https://yogapathguide.com/blog/akasha-yoga-academy-review-2026")}
${spacer()}
${p("No pressure. Just sharing in case you're at that \"should I?\" stage.")}
${spacer()}
${p("— Yoga Path Guide")}
`),
  },
  {
    day: 9,
    subject: "A question for you",
    html: template(`
${h("If not now, when?")}
${p("I've seen people sit on this idea for months — waiting for the \"right time,\" waiting until they're \"good enough.\"")}
${p("There's never a perfect time. But there is a good-enough time.")}
${spacer()}
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:12px 0;font-size:14px;color:${BRAND.text};border-bottom:1px solid ${BRAND.border};"><strong style="color:${BRAND.heading}">Budget?</strong> &nbsp; Starts from $290, payment plans available</td></tr>
<tr><td style="padding:12px 0;font-size:14px;color:${BRAND.text};border-bottom:1px solid ${BRAND.border};"><strong style="color:${BRAND.heading}">Time?</strong> &nbsp; Self-paced. No deadlines. 30 min/day works</td></tr>
<tr><td style="padding:12px 0;font-size:14px;color:${BRAND.text};"><strong style="color:${BRAND.heading}">Confidence?</strong> &nbsp; 6 months of practice is enough. You'll learn the rest</td></tr>
</table>
${btn("See Current Pricing →", "https://yogapathguide.com/go/akasha")}
${spacer()}
${p("Whatever you decide — your yoga journey is yours, on your timeline.")}
${spacer()}
${p("Namaste 🙏<br><strong style='color:${BRAND.heading}'>Yoga Path Guide</strong>")}
`),
  },
]

export default EMAILS
