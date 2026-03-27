# Services Section Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section id="services"> (white bg)
  <div.header> (centered)
    <svg decorative-icon />
    <h4>CMO Strategy.</h4>
    <h4>Compelling Creative.</h4>
    <hr />
  </div>
  <div.grid> (3-col × 2-row = 6 cards)
    [GROWTH] [BRAND] [VIDEO]
    [WEB DESIGN] [ANALYTICS] [PAID MARKETING]
  </div>
  <div.cta>
    <a>EXPLORE CLIENTS & CASE STUDIES ▸</a>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255,255,255); padding: 60px 0

### Header H4 lines
- fontSize: 24.87px; fontFamily: "Open Sans"; fontWeight: 300
- color: rgb(53,53,53); textAlign: center

### Divider HR
- width: 60px; borderTop: 1px solid rgb(180,180,180); margin: 10px auto

### Service card
- textAlign: center; padding: 20px 30px; width: calc(33.33%)

### Card SVG icon
- width: 40px; height: 40px; fill: rgb(153,153,153); marginBottom: 15px

### Card title
- textTransform: uppercase; fontSize: 14px; fontWeight: 700
- color: rgb(53,53,53); letterSpacing: 2px; marginBottom: 15px

### Card body text
- fontSize: 14px; color: rgb(100,100,100); lineHeight: 22px; textAlign: center

### Card arrow (→)
- SVG right-arrow icon, fill: rgb(153,153,153), ~24px, below description

### CTA button
- backgroundColor: rgb(53,53,53); color: rgb(255,255,255)
- padding: 15px 40px; fontSize: 12px; letterSpacing: 2px; textTransform: uppercase; display: block; margin: 40px auto 0

## Text Content (verbatim)

**Header:** CMO Strategy. / Compelling Creative.

**GROWTH:** At Cyngn, I generated $7m worth of pipeline and achieved a 20x ROMS, using a process that I can repeat for your business. Let me help you identify, nurture, and convert highly qualified marketing leads by using the very best omni-channel and time-tested strategies.

**BRAND:** I help early-stage companies establish their brand identities by not only choosing design elements like logos and colors but also by helping them discover their brand's unique voice and personality. A strong brand creates instant recognition and differentiation.

**VIDEO:** My videos have won awards, appeared in Times Square and racked up millions of views. Cyngn CEO, Lior Tal, describes them as "nothing short of masterful." In an era of micro-attention spans, video is the most impactful medium.

**WEB DESIGN:** I build custom websites that can unify your design, messaging, branding, and growth strategies into a memorable online presence (like this one).

**ANALYTICS:** Every creative or strategic decision I make is informed by digging deep into the data. My three favorite tools (and certifications) are Google Analytics, Hotjar, and Hubspot.

**PAID MARKETING:** Companies cannot accelerate growth without a paid marketing component. I am certified across Google, Facebook, and Linkedin and build all of the ad assets myself.

**CTA:** EXPLORE CLIENTS & CASE STUDIES ▸

## Assets
- 6 inline SVG icons (one per service) — use Lucide React equivalents:
  - GROWTH: BarChart2 or TrendingUp
  - BRAND: Award or Layers
  - VIDEO: Play or Video
  - WEB DESIGN: Monitor or Layout
  - ANALYTICS: LineChart
  - PAID MARKETING: Filter or Megaphone
- Arrow icon (→): ChevronRight or ArrowRight from Lucide

## Responsive Behavior
- **Desktop:** 3-column grid, 2 rows
- **Mobile:** Single column stack
- **Breakpoint:** ~768px
