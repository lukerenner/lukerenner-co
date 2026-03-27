# Copywriting Section Specification

## Overview
- **Target file:** `src/components/CopywritingSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> (white bg)
  <div.header> (centered)
    <svg icon /> (pen/writing icon)
    <h4>Unforgettable Copywriting</h4>
    <hr />
    <p>subtitle text</p>
  </div>
  <div.articles-grid> (2-column, 3 rows = 6 articles)
    [article-card × 6]
  </div>
  <div.cta>
    <a>FEATURED ARTICLES ▸</a>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255,255,255); padding: 60px 0

### Header H4
- fontSize: 24.87px; fontFamily: "Open Sans"; fontWeight: 300
- color: rgb(53,53,53); textAlign: center

### Article card
- display: flex; alignItems: flex-start; gap: 15px; marginBottom: 30px; padding: 0 20px

### Article icon (SVG)
- width: ~24px; height: ~24px; fill: rgb(0,0,0); flexShrink: 0; marginTop: 4px

### Article title
- fontSize: 14px; fontFamily: "Open Sans"; fontWeight: 700
- color: rgb(53,53,53); textTransform: uppercase; letterSpacing: 1px
- marginBottom: 8px

### Article excerpt
- fontSize: 14px; color: rgb(100,100,100); lineHeight: 22px

### CTA button
- backgroundColor: rgb(53,53,53); color: rgb(255,255,255)
- padding: 12px 35px; fontSize: 12px; letterSpacing: 2px
- display: block; margin: 30px auto 0

## Text Content (verbatim)

**Section heading:** Unforgettable Copywriting
**Subtitle:** [text about copywriting being carefully crafted to drive conversions and conversations]

**Article 1:**
HOW AI IS REVOLUTIONIZING SANTA'S WORKSHOP THIS HOLIDAY SEASON
When North Pole Founder and CEO Santa Claus was looking to optimize his global manufacturing and package delivery organization, the founder turned to Artificial Intelligence to deliver a variety of wins across the supply chain.

**Article 2:**
BET YOU DIDN'T KNOW BLOCKCHAIN COULD DO THIS
Though early adopters had been investing in bitcoin for years, 2017 will be remembered as the year the technology finally went mainstream.

**Article 3:**
THE RISE OF CARBON FIBER
Regardless of when the industry hits that so-far-mythological five-dollars-per-pound price point, global demand for carbon fiber continues to rise. In the last decade, demand has risen from 33,000 metric tons in 2010 to 70,000 metric tons.

**Article 4:**
CAN AN ADVERSARIAL BOT MANIPULATE THE STOCK MARKET?
Today, 60% of all trades, globally, are conducted by AI-powered systems. We wondered whether these systems could be exploited to manipulate the stock market.

**Article 5:**
HOW TO BUILD A MARKETING FUNNEL
Marketing is the process by which you establish trust with a complete stranger and develop that trust until they hire you to solve their problems for them.

**Article 6:**
40 STRATEGIES FOR FINDING, SCREENING, AND HIRING THE WORLD'S BEST TALENT
Have you felt the frustration? Logging into your Indeed candidate pool, only to be let down? Mediocre cover letters. Mediocre work experience. Mediocre candidates. If it sounds familiar, you aren't alone.

**CTA:** FEATURED ARTICLES ▸

## Assets
- 6 small SVG icons (one per article) — use Lucide React:
  - AI/Santa: Snowflake
  - Blockchain: Link2
  - Carbon Fiber: Hexagon
  - Bot/Stock: Bot
  - Funnel: Filter
  - Talent/Star: Star

## Responsive Behavior
- **Desktop:** 2-column article grid
- **Mobile:** Single column
- **Breakpoint:** ~768px
