# Web Design Slider Specification

## Overview
- **Target file:** `src/components/WebDesignSlider.tsx`
- **Interaction model:** click-driven (prev/next arrows)

## DOM Structure
```
<section> (dark bg, 1041px tall)
  <div.header> (centered)
    <h4>Stunning Web Design</h4>
    <hr />
    <p>subtitle</p>
  </div>
  <div.slider-container> (relative, centered)
    <button.prev-arrow> ‹ </button>
    <div.slide> (one visible at a time)
      <img src="391-smartmockupsk9qf*.png" />  ← laptop mockup with website screenshot inside
    </div>
    <button.next-arrow> › </button>
  </div>
  <div.cta>
    <a>WEB DESIGN SERVICES ▸</a>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(36,36,36); minHeight: 1041px; padding: 60px 0

### Header H4
- fontSize: 24.87px; fontFamily: "Open Sans"; fontWeight: 300
- color: rgb(255,255,255); textAlign: center

### Header subtitle p
- color: rgb(200,200,200); textAlign: center; fontSize: 16px; maxWidth: 700px; margin: 0 auto

### Slider container
- position: relative; display: flex; alignItems: center; justifyContent: center
- maxWidth: 800px; margin: 40px auto

### Slide image
- maxWidth: 700px; width: 100%; display: block; margin: 0 auto

### Arrow buttons (‹ ›)
- position: absolute; left: 0 / right: 0
- backgroundColor: transparent; color: rgb(255,255,255)
- fontSize: 40px; border: none; cursor: pointer
- padding: 20px

### CTA button
- backgroundColor: transparent; color: rgb(255,255,255)
- border: 3px solid rgb(255,255,255); padding: 12px 35px
- fontSize: 12px; letterSpacing: 2px; display: block; margin: 30px auto 0

## States & Behaviors

### Carousel interaction (CLICK-DRIVEN)
- **Trigger:** Click left (‹) or right (›) arrow button
- **State A:** Shows slide image N
- **State B:** Shows slide image N+1 (or N-1)
- **Transition:** Instant swap OR simple fade (opacity 0→1, ~300ms)
- **Implementation:** useState for currentIndex, map slides array, show only active slide

## Slide Images (7 total, all laptop mockup frames)
1. `public/images/391-smartmockupsk9qfry83.png`
2. `public/images/391-smartmockupsk9qfqw3q.png`
3. `public/images/391-smartmockupsk9qfksu3.png`
4. `public/images/391-smartmockupsk9qfnfbj.png`
5. `public/images/391-smartmockupsk9qfjdb1.png`
6. `public/images/391-smartmockupsk9qfm3hh.png`
7. `public/images/391-smartmockupsk9qfkdal.png`

## Text Content (verbatim)
**H4:** Stunning Web Design
**Subtitle:** The websites I create unify a breathtaking visual style with the best in digital marketing. Design, messaging, landing pages, tracking tags, and analytics all come together to deliver a memorable online presence that transforms businesses.
**CTA:** WEB DESIGN SERVICES ▸

## Responsive Behavior
- **Desktop:** Slider centered, ~700px wide, arrows on sides
- **Mobile:** Full-width image, arrows overlay or below
- **Breakpoint:** ~768px
