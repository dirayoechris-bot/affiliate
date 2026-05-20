# Hermes Agent Automation Setup
# For: Yoga Path Guide Affiliate Pipeline
# Prerequisites: Hermes Agent installed, OpenRouter API key

---

## 1. Install & Configure Hermes

```bash
# Install Hermes Agent
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.zshrc

# Setup
hermes setup

# Set model (recommended: Claude Sonnet via OpenRouter for content, DeepSeek for bulk)
hermes model
# Choose: openrouter → anthropic/claude-sonnet-4.6

# Enable required tools
hermes tools
# Enable: web, terminal, file, cronjob, messaging
```

---

## 2. SOUL.md — Agent Personality

Save this as `~/.hermes/SOUL.md`:

```markdown
# Yoga Path Guide Content Agent

You are a content marketing specialist for Yoga Path Guide, an affiliate blog
promoting yoga teacher training programs (primarily Akasha Yoga Academy).

## Your Role
- Generate SEO blog articles about yoga teacher training
- Create social media captions (Instagram, Pinterest)
- Write email copy for nurture sequences
- Monitor content performance

## Brand Voice
- Honest, helpful, not salesy
- Speak like a knowledgeable friend, not a marketer
- Always disclose affiliate relationships
- Focus on helping people make informed decisions

## Key Facts
- Primary affiliate: Akasha Yoga Academy (https://www.akashayogaacademy.com/200hr-yoga-teacher-training-online#christianimm)
- Affiliate signup: akashayoga.postaffiliatepro.com/affiliates/
- Commission: 10% per enrollment (standard affiliate), 20-30% (ambassador program)
- Target audience: Aspiring yoga teachers, career changers, yoga practitioners
- Blog: yogapathguide.com
- Lead magnet: "Your Yoga Teaching Journey" free PDF guide

## Content Guidelines
- SEO-focused: always target a specific keyword
- Include affiliate links naturally (max 3 per article)
- Use real data and testimonials
- Comparison articles should be fair (Akasha as #1 pick, but honest about others)
```

---

## 3. Cron Jobs — Automated Tasks

### Blog Post Generation (Every 3 days)

Tell Hermes:
```
Schedule a cron job: Every 3 days at 6 AM, generate a new SEO blog post
about yoga teacher training. Pick a keyword from the content plan, write
1500-2000 words, save as markdown in ~/akasha-affiliate/content/blog/,
then git commit and push to trigger Vercel deploy.
```

Hermes command equivalent:
```
hermes cron create "Generate blog post" --schedule "0 6 */3 * *" --skill content-writer
```

### Social Media Caption (Daily)

```
Schedule a cron job: Every day at 7 AM, generate an Instagram caption
following the 30-day content calendar pillars (rotate: Inspire, Educate,
Promote, Engage). Include relevant hashtags. Save to
~/akasha-affiliate/content/social-media/drafts/ and post via Buffer API.
```

### Pinterest Pins (3x daily)

```
Schedule a cron job: At 7 AM, 12 PM, and 5 PM daily, generate a Pinterest
pin description for one of the evergreen topics. Include keywords and a
link to the relevant blog post.
```

### Email Monitoring (Weekly)

```
Schedule a cron job: Every Monday at 9 AM, check Brevo API for email
sequence metrics (open rates, click rates). Report results to Telegram.
If open rate drops below 20%, suggest subject line improvements.
```

### SEO Monitoring (Weekly)

```
Schedule a cron job: Every Friday at 8 AM, search Google for our target
keywords and check if our articles appear in top 20. Report rankings to
Telegram. Suggest new article topics based on gaps.
```

---

## 4. Skills to Create

### Skill: content-writer

Save as `~/.hermes/skills/affiliate/content-writer/SKILL.md`:

```markdown
---
name: content-writer
description: Generate SEO blog posts for Yoga Path Guide affiliate blog
version: 1.0.0
metadata:
  hermes:
    tags: [seo, content, affiliate]
    category: affiliate
    requires_toolsets: [terminal, web]
---

# Content Writer Skill

## When to Use
When generating new blog posts for the yoga teacher training niche.

## Procedure
1. Pick next keyword from ~/akasha-affiliate/docs/keyword-research.md
2. Research the topic (web_search for current info, competitor articles)
3. Write 1500-2000 word article in markdown with frontmatter
4. Include 2-3 natural affiliate links to Akasha (use https://www.akashayogaacademy.com/200hr-yoga-teacher-training-online#christianimm)
5. Save to ~/akasha-affiliate/content/blog/[slug].md
6. Run: cd ~/akasha-affiliate && git add . && git commit -m "New post: [title]" && git push

## Article Structure
- Frontmatter (title, date, excerpt, readTime)
- Hook/intro (address reader's pain point)
- Main content (H2 sections, practical info)
- Comparison or recommendation section
- CTA to free guide or Akasha
- Affiliate disclosure at bottom

## SEO Rules
- Target keyword in title, H1, first paragraph, 2-3 H2s
- Use related keywords naturally throughout
- Include internal links to other blog posts
- Keep paragraphs short (2-3 sentences)
- Use bullet points and tables for scannability
```

### Skill: social-poster

Save as `~/.hermes/skills/affiliate/social-poster/SKILL.md`:

```markdown
---
name: social-poster
description: Generate and schedule social media posts for Yoga Path Guide
version: 1.0.0
metadata:
  hermes:
    tags: [social-media, instagram, pinterest]
    category: affiliate
    requires_toolsets: [terminal, web]
---

# Social Poster Skill

## When to Use
When generating daily social media content.

## Procedure
1. Check today's date and determine content pillar (rotate: Inspire → Educate → Promote → Engage)
2. Generate caption (150-300 chars for IG, keyword-rich for Pinterest)
3. Select hashtag set (rotate A/B/C from content calendar)
4. Post via Buffer API: curl -X POST https://api.bufferapp.com/1/updates/create.json
5. Log post to ~/akasha-affiliate/content/social-media/posted.log

## Caption Guidelines
- Start with a hook (question, bold statement, or emoji)
- Provide value in 2-3 sentences
- End with CTA (save, share, comment, link in bio)
- Keep under 2200 chars (IG limit)
- Pinterest: keyword-rich, 200-500 chars, include blog URL
```

---

## 5. Environment Variables

Add to `~/.hermes/.env`:

```bash
# LLM
OPENROUTER_API_KEY=your_key_here

# Social Media
BUFFER_ACCESS_TOKEN=your_buffer_token

# Email
BREVO_API_KEY=your_brevo_key

# Notifications
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

---

## 6. Deployment Checklist

### Week 1: Setup
- [ ] Install Hermes Agent on VPS ($5 Hetzner or DigitalOcean)
- [ ] Configure OpenRouter API key
- [ ] Deploy blog to Vercel (connect Git repo)
- [ ] Setup Brevo account + email automation
- [ ] Register as Akasha affiliate
- [ ] Create Buffer account + connect Instagram/Pinterest
- [ ] Setup Telegram bot for notifications

### Week 2: Activate
- [ ] Create SOUL.md and skills
- [ ] Setup all cron jobs
- [ ] Test: manual blog post generation
- [ ] Test: manual social media post
- [ ] Test: email sequence trigger
- [ ] Verify Vercel auto-deploy on git push

### Week 3: Monitor & Optimize
- [ ] Check first week metrics (traffic, signups, clicks)
- [ ] Adjust content strategy based on what's working
- [ ] Add more keywords to rotation
- [ ] Scale Pinterest pinning (5-10/day)

---

## 7. Expected Results Timeline

| Week | Expected |
|------|----------|
| 1-2 | Setup complete, first posts live |
| 3-4 | 10-20 blog posts indexed, social growing |
| Month 2 | First organic traffic, first email signups |
| Month 3 | First affiliate clicks, Pinterest traffic growing |
| Month 4-6 | First commissions ($100-500/month) |
| Month 6-12 | Scaling ($500-2000/month potential) |

---

## 8. Scaling Playbook

Once pipeline is working:
1. **More content** — Increase blog frequency to daily
2. **More platforms** — Add YouTube shorts, TikTok
3. **More programs** — Add other yoga affiliate programs
4. **Paid traffic** — Retarget blog visitors with Pinterest ads ($5-10/day)
5. **Ambassador upgrade** — Apply for Akasha's 20-30% ambassador tier after first 5 referrals
