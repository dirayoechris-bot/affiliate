# Yoga Path Guide — Style Reference
> Warm parchment sanctuary — a serene, editorial space that feels like opening a journal in a sunlit yoga studio. **Theme:** light

## Design Philosophy

The design serves one goal: build trust and desire in aspiring yoga teachers. Every element creates calm. No visual noise. No aggressive CTAs. The reader should feel like they're receiving guidance from a wise friend, not being sold to.

**Mode:** Brand (design IS the product — editorial, trust-building)
**Audience:** Women 25-45, career changers, yoga practitioners considering teacher training
**Anti-references:** Purple gradients. Glassmorphism. "LIMITED TIME!" urgency. Nested cards. Gradient text. Generic stock photos.

## Tokens — Colors

| Name | Value | Role |
|------|-------|------|
| Linen | `#faf8f5` | Page background — warm, never stark white |
| Parchment | `#f3efe9` | Card backgrounds, elevated surfaces |
| Driftwood | `#e8e2da` | Borders, dividers — barely there |
| Stone | `#9c9488` | Secondary text, captions, metadata |
| Bark | `#6b6259` | Body text — warm gray, never cold |
| Ink | `#2c2825` | Headlines, primary text — deep warm black |
| Sage | `#6b8f5e` | Primary accent — links, CTAs, trust signals |
| Sage Light | `#e8f0e4` | Accent backgrounds, hover states |
| Sage Deep | `#4a6b3f` | CTA buttons, strong accent |
| Terracotta | `#c4785a` | Warm secondary accent — sparingly |

## Tokens — Typography

| Role | Font | Weight | Size | Line Height | Letter Spacing |
|------|------|--------|------|-------------|----------------|
| Display | Cormorant Garamond | 500 | 48-64px | 1.1 | -0.02em |
| Heading | Cormorant Garamond | 500 | 28-36px | 1.2 | -0.01em |
| Subheading | Cormorant Garamond | 500 | 22-24px | 1.3 | 0 |
| Body | Nunito Sans | 300 | 16px | 1.85 | 0.01em |
| Body emphasis | Nunito Sans | 500 | 16px | 1.85 | 0.01em |
| Caption | Nunito Sans | 400 | 13px | 1.5 | 0.02em |
| Label | Nunito Sans | 500 | 11px | 1 | 0.08em |

## Tokens — Spacing

Base unit: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

| Context | Value |
|---------|-------|
| Section padding (vertical) | 96-128px |
| Card padding | 32-48px |
| Element gap (related) | 12-16px |
| Element gap (sections) | 48-64px |

## Tokens — Radii & Shadows

| Element | Radius |
|---------|--------|
| Cards | 16px |
| Buttons | 999px (pill) |
| Inputs | 999px (pill) |
| Tags | 999px |

| Shadow | Value |
|--------|-------|
| Card rest | none (border only) |
| Card hover | 0 4px 24px rgba(44, 40, 37, 0.04) |

## Tokens — Motion

| Property | Duration | Easing |
|----------|----------|--------|
| Color transitions | 300ms | ease |
| Transform (hover) | 500ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Page enter | 800ms | ease-out |

## Component Rules

### Buttons
- Primary: Sage Deep bg, white text, pill shape, no shadow
- Secondary: transparent bg, Sage border, Sage text, pill shape
- Hover: darken 10%, no scale transform

### Cards
- Parchment bg, Driftwood 1px border, 16px radius
- Hover: border → Sage Light, subtle shadow
- No nested cards ever

### Links
- Sage color, no underline, bottom border Sage Light
- Hover: border darkens to Sage

### Blockquotes
- Left border 2px Sage, Parchment bg, serif italic

## Do
- Use generous whitespace between sections (96px+)
- Let content breathe — max-width 640px for prose
- Use serif (Cormorant) for emotional/aspirational headings
- Use sans (Nunito) for practical/informational body
- Keep CTA copy soft: "Explore", "Begin", "Continue"
- One accent color (Sage) for all interactive elements

## Don't
- No purple gradients
- No gradient text
- No nested cards
- No aggressive urgency ("LIMITED!", "ONLY 3 LEFT!")
- No cold grays — always warm-tinted
- No shadows heavier than the defined card-hover
- No more than one CTA per viewport
- No Inter font
- No generic stock imagery descriptions
