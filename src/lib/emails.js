// Nurture email sequence - sent via Brevo Transactional API
// Triggered by cron or Vercel Cron

const EMAILS = [
  {
    day: 0,
    subject: "Your Yoga Teaching Guide is here 🧘",
    body: `Hi {{name}},

Your guide is ready — here's the download link:

→ Download "Your Yoga Teaching Journey" (PDF)
https://yogapathguide.com/free-guide

Inside you'll find:
- How to choose between yoga styles
- Online vs in-person training (honest comparison)
- Realistic cost breakdown
- What to look for (and avoid) in a program
- What happens after certification

Take your time with it. There's no rush.

Over the next few days, I'll share a few things I wish someone had told me before I started my yoga teaching journey. Short emails, no fluff.

Talk soon,
Yoga Path Guide

P.S. — If you have questions about anything in the guide, just reply to this email. I read everything.`
  },
  {
    day: 2,
    subject: "The #1 mistake people make choosing a YTT",
    body: `Hi {{name}},

Want to know the biggest mistake people make when choosing a yoga teacher training?

They pick based on price alone.

I get it — budget matters. But here's what happens:

- They enroll in a $99 program
- It's just pre-recorded videos with zero support
- They never finish (or finish but don't feel ready to teach)
- They spend MORE money on a second training

The sweet spot? A program that's affordable AND has real support — live calls, mentorship, community.

That's why reviews matter more than price tags. A $290 program with daily live Zoom calls and 4.9-star reviews will serve you better than a $2,500 program with no community.

Tomorrow I'll share what I think makes a great online YTT (based on reviewing 15+ programs).

— Yoga Path Guide`
  },
  {
    day: 4,
    subject: "5 things every good YTT has (checklist)",
    body: `Hi {{name}},

After reviewing 15+ online yoga teacher training programs, here's my checklist for a great one:

Must-haves:

1. Yoga Alliance registered (RYS 200/300) — non-negotiable
2. Live interaction — Zoom calls, Q&A, or mentorship (not just videos)
3. Active community — WhatsApp group, forum, or cohort
4. Money-back guarantee — shows they're confident in their product
5. Real testimonials — with names, photos, and specific outcomes

Red flags:

- No Yoga Alliance registration
- Under $100 (too cheap = no support)
- "Limited spots!" pressure tactics
- No refund policy
- Can't find real graduate reviews

If you want to see how specific programs stack up, I wrote a detailed comparison:

→ 7 Best Online Yoga Teacher Training Programs 2026
https://yogapathguide.com/blog/best-online-yoga-teacher-training-2026

It covers pricing, pros/cons, and who each program is best for.

— Yoga Path Guide`
  },
  {
    day: 6,
    subject: "She quit her corporate job at 38. Here's what happened.",
    body: `Hi {{name}},

Quick story about someone who was probably in your shoes.

Sarah was 38, burned out from her marketing job, and had been practicing yoga for 3 years. She kept thinking: "I want to teach this. But is it too late? Can I actually make a living?"

She enrolled in an online yoga teacher training. Self-paced, so she could study around her job.

6 months later, she was certified.
3 months after that, she taught her first class.
1 year later, she left her corporate job.

Today she teaches 12 classes a week — a mix of studio, private clients, and online. She makes less than her corporate salary, but she says: "I wake up excited. I haven't felt that in a decade."

The program she chose had:
- Authentic, heart-centered teachers
- A supportive community (even online)
- Breath-based approach that went beyond just poses
- Affordable pricing with payment plans

That's exactly what Akasha Yoga Academy offers. 1,100+ graduates teaching on 6 continents, 4.9/5 star reviews, starting from $290 with a 14-day money-back guarantee.

→ Read my full review of Akasha Yoga Academy
https://yogapathguide.com/blog/akasha-yoga-academy-review-2026

No pressure. Just wanted to share in case you're at that "should I do this?" stage.

— Yoga Path Guide`
  },
  {
    day: 9,
    subject: "A question for you",
    body: `Hi {{name}},

I have one question:

If not now, when?

I've seen so many people sit on the idea of yoga teacher training for months — even years. Waiting for the "right time." Waiting until they're "good enough." Waiting until they have more money saved.

Here's the truth: there's never a perfect time. But there IS a good-enough time. And if you're reading this email, you're probably closer than you think.

A few things that might help:

If budget is the concern:
Akasha Yoga Academy starts from $290 (with their current promo), with payment plans available for the Premium tier.

If time is the concern:
It's self-paced. No deadlines. Study 30 minutes a day, or binge on weekends.

If confidence is the concern:
You don't need to be "advanced." You need 6 months of regular practice and a genuine desire to learn.

→ Check Akasha's current pricing
https://www.akashayogaacademy.com/200hr-yoga-teacher-training-online#christianimm

Whatever you decide, I'm glad you downloaded the guide. Your yoga journey is yours — on your timeline.

Namaste 🙏
Yoga Path Guide`
  },
]

export default EMAILS
