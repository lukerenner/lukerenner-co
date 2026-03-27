# Case Studies Section Specification

## Overview
- **Target file:** `src/components/CaseStudiesSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> (white bg)
  <div.header> (centered)
    <svg icon /> (bar chart / growth icon)
    <h4>Clients and Case Studies</h4>
    <hr />
  </div>
  <div.grid> (3-col × 2-row = 6 clients)
    <!-- Row 1 -->
    [MANCEPS] [JCC BOWERS] [STEELHOUSE]
    <!-- Row 2 -->
    [PROPEL(X)] [DHERBS] [GARY GERMER & ASSOCIATES]
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255,255,255); padding: 60px 0

### Header H4
- fontSize: 24.87px; fontFamily: "Open Sans"; fontWeight: 300
- color: rgb(53,53,53); textAlign: center

### Client card
- textAlign: center; padding: 20px 30px

### Client logo image
- width: ~60px; height: auto; marginBottom: 15px
- filter: grayscale(100%) — all logos appear in gray

### Client name
- fontSize: 14px; fontWeight: 700; textTransform: uppercase
- letterSpacing: 2px; color: rgb(53,53,53); marginBottom: 10px

### Client description
- fontSize: 14px; color: rgb(100,100,100); lineHeight: 22px; textAlign: center

### Arrow icon (→)
- Lucide ArrowRight or ChevronRight, gray (~#999), 24px, below description

## Text Content (verbatim)

**MANCEPS** (logo: 432-manceps.png)
Sole marketing hire, responsible for everything, including owning the go-to-market strategy, establishing the brand identity, and building a content-focused demand generation engine from scratch.

**JCC BOWERS** (logo: 431-jcc-bowers.png)
First marketing hire that built the marketing team, owned the go-to-market blueprint, established the brand identity, and built the demand generation engine.

**STEELHOUSE** (logo: 430-steelhouse.png)
Content creator who helped launch Steelhouse University, a brand initiative to teach entry-level marketers how to settle into their roles and hit the ground running.

**PROPEL(X)** (logo: 433-propelx.png)
Developed and executed their inbound content strategy by writing on a variety of science-related topics.

**DHERBS** (logo: 434-deherbs-15884826158034.png)
Build out a lot of unique content, including a user-generated content initiative and a documentary youtube series called The 180.

**GARY GERMER & ASSOCIATES** (logo: 435-gary-germer.png)
Help the organization relaunch their website and deploy several marketing campaigns.

## Assets
- 6 client logo images in `public/images/`:
  - 432-manceps.png
  - 431-jcc-bowers.png
  - 430-steelhouse.png
  - 433-propelx.png
  - 434-deherbs-15884826158034.png
  - 435-gary-germer.png

## Responsive Behavior
- **Desktop:** 3-column grid, 2 rows
- **Mobile:** Single column
- **Breakpoint:** ~768px
