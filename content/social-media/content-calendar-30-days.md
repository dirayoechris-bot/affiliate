# 30-Day Social Media Content Calendar
# Platform: Instagram + Pinterest (primary), TikTok (optional)
# Niche: Yoga Teacher Training / Aspiring Yoga Teachers
# Goal: Drive traffic to blog → email signup → affiliate conversion

---

## Content Pillars (rotate daily)

1. **INSPIRE** — Yoga quotes, transformation stories, lifestyle
2. **EDUCATE** — Tips, how-tos, myths debunked
3. **PROMOTE** — Blog links, free guide CTA, soft affiliate mentions
4. **ENGAGE** — Questions, polls, "this or that"

---

## Week 1: Foundation

| Day | Type | Caption Idea | CTA |
|-----|------|-------------|-----|
| 1 | INSPIRE | "The best time to start your yoga teaching journey was a year ago. The second best time is today." | Follow for daily yoga teacher tips |
| 2 | EDUCATE | "5 things I wish I knew before starting yoga teacher training" (carousel) | Save this for later 📌 |
| 3 | ENGAGE | "What's holding you back from YTT? A) Money B) Time C) Confidence D) Not sure where to start" | Vote in comments! |
| 4 | EDUCATE | "Online vs In-Person YTT — which is better?" (comparison graphic) | Full breakdown → link in bio |
| 5 | INSPIRE | Graduate success story: "She quit her 9-5 at 38 and now teaches 12 classes/week" | Your story could be next |
| 6 | PROMOTE | "Free guide: Everything you need to know before starting YTT" | Link in bio 📖 |
| 7 | EDUCATE | "How much does yoga teacher training actually cost? (2026 breakdown)" | Save this 💰 |

## Week 2: Build Trust

| Day | Type | Caption Idea | CTA |
|-----|------|-------------|-----|
| 8 | ENGAGE | "What yoga style resonates with you most? Hatha / Vinyasa / Yin / Kundalini" | Comment below 👇 |
| 9 | EDUCATE | "Red flags when choosing a YTT program 🚩" (carousel: 5 red flags) | Share with a friend considering YTT |
| 10 | INSPIRE | "You don't need to be flexible to teach yoga. You need to be authentic." | Double tap if you agree ❤️ |
| 11 | EDUCATE | "What does Yoga Alliance certification actually mean?" (explainer) | Full article → link in bio |
| 12 | PROMOTE | "I reviewed 15+ online YTT programs. Here are the top 7 for 2026." | Read the full comparison → bio |
| 13 | ENGAGE | "This or that: Self-paced YTT vs Cohort-based YTT?" | Which would you choose? |
| 14 | INSPIRE | "1,100+ people started just like you and are now teaching worldwide." | It's possible for you too |

## Week 3: Deepen Connection

| Day | Type | Caption Idea | CTA |
|-----|------|-------------|-----|
| 15 | EDUCATE | "What you actually learn in a 200-hour YTT (it's not just poses)" (carousel) | Save for reference 📌 |
| 16 | ENGAGE | "Biggest fear about becoming a yoga teacher? Be honest 👇" | Let's talk about it |
| 17 | INSPIRE | "Yoga changed my life. Teaching it changed it again." | Tag someone who should teach yoga |
| 18 | EDUCATE | "Can you actually make a living teaching yoga? (realistic numbers)" | Full breakdown → link in bio |
| 19 | PROMOTE | "The one program I recommend most for aspiring teachers (and why)" | Honest review → link in bio |
| 20 | ENGAGE | "If money wasn't an issue, would you do YTT in Bali or online from home?" | A or B? |
| 21 | INSPIRE | "The world doesn't need more perfect yogis. It needs more authentic teachers." | Share if you agree 🙏 |

## Week 4: Convert

| Day | Type | Caption Idea | CTA |
|-----|------|-------------|-----|
| 22 | EDUCATE | "How to choose between 200-hour and 300-hour YTT" | Guide in bio 📖 |
| 23 | INSPIRE | "One year from now, you'll wish you started today." | What's stopping you? |
| 24 | PROMOTE | "Free PDF: Your complete guide to becoming a yoga teacher (no fluff)" | DM 'GUIDE' or link in bio |
| 25 | EDUCATE | "5 ways to land your first yoga teaching gig after certification" (carousel) | Save this for when you're ready |
| 26 | ENGAGE | "What would your dream yoga class look like? Describe it in 3 words 👇" | Most creative wins a shoutout |
| 27 | INSPIRE | Testimonial graphic: real quote from Akasha graduate | Their journey started with one decision |
| 28 | EDUCATE | "Payment plans make YTT accessible — some programs start under $300" | Details → link in bio |
| 29 | PROMOTE | "I put together everything I learned reviewing 15+ programs into one free guide" | Link in bio — no email required to browse the blog |
| 30 | ENGAGE | "30 days ago I started this page. What content do you want more of?" | Comment your vote! |

---

## Pinterest Pin Ideas (Evergreen — post 3-5/day)

These drive long-term SEO traffic:

1. "Best Online Yoga Teacher Training 2026 — Compared"
2. "How Much Does Yoga Teacher Training Cost? (Complete Breakdown)"
3. "Online vs In-Person YTT: Pros & Cons"
4. "Is Online Yoga Teacher Training Worth It?"
5. "5 Red Flags When Choosing a YTT Program"
6. "What You Actually Learn in 200-Hour YTT"
7. "How to Become a Yoga Teacher (Step by Step)"
8. "Yoga Teacher Salary: Realistic Income Expectations"
9. "Akasha Yoga Academy Review 2026"
10. "Free Guide: Your Yoga Teaching Journey"
11. "Hatha vs Vinyasa vs Yin: Which Style to Teach?"
12. "Yoga Alliance Certification Explained"
13. "Can You Teach Yoga with Online Certification?"
14. "Best Affordable Yoga Teacher Training Programs"
15. "Yoga Teacher Training Checklist (What to Look For)"

---

## Hashtag Sets (rotate)

### Set A (General)
#yogateachertraining #ytt #yogateacher #becomeyogateacher #yogacertification #yogaalliance #ryt200 #yogalife

### Set B (Online specific)
#onlineytt #onlineyogateachertraining #yogafromhome #onlineyoga #selfdevelopment #yogajourney #yogastudent

### Set C (Lifestyle)
#yogalifestyle #yogainspiration #yogacommunity #mindfulness #wellness #selfcare #spiritualgrowth #breathwork

---

## Posting Schedule

- **Instagram**: 1 post/day (feed or carousel) + 2-3 stories
- **Pinterest**: 3-5 pins/day (auto-schedule via Tailwind or Buffer)
- **Best times**: 7-9 AM, 12-1 PM, 7-9 PM (audience timezone)

---

## Automation Notes (for Hermes Agent)

```yaml
# Hermes cron jobs
social_media:
  instagram:
    schedule: "0 8 * * *"  # Daily at 8 AM
    action: generate_caption → post via Buffer API
  pinterest:
    schedule: "0 7,12,17 * * *"  # 3x daily
    action: generate_pin_description → post via Tailwind API
  content_generation:
    schedule: "0 6 * * 1"  # Every Monday 6 AM
    action: generate_week_content → save to drafts
```
