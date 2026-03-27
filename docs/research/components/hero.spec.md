# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> (full-width, 910px tall, dark bg)
  <div> (2-column: 50% image left, 50% text right)
    <div.left>
      <img src="1175-startup-marketing-consultant-17.jpg" />
    </div>
    <div.right> (flex-col, justify-center)
      <h1>Predictable Growth. Iconic Creative.</h1>
      <p>Hello, my name...</p>
      <p>On the revenue side...</p>
      <p>Throughout my career...</p>
      <div.btns>
        <a.primary>WORK WITH ME</a>
        <a.secondary>LEARN MORE</a>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(36,36,36); height: 910px; width: 100%; overflow: hidden

### H1
- fontSize: 58.9px; fontFamily: "Open Sans"; fontWeight: 200
- color: rgb(255,255,255); lineHeight: 70px; marginBottom: 30px

### Body paragraphs
- fontSize: 18.66px; fontFamily: "Open Sans"; fontWeight: 400
- color: rgb(255,255,255); lineHeight: 28px; marginBottom: 20px

### Primary button (WORK WITH ME)
- backgroundColor: rgb(196,85,67); color: rgb(255,255,255)
- border: 3px solid rgb(255,255,255); padding: 12px 50px
- fontSize: 12px; letterSpacing: 1px; textTransform: uppercase; fontWeight: 600
- href: /coaching

### Secondary button (LEARN MORE)
- backgroundColor: transparent; color: rgb(255,255,255)
- border: 3px solid rgb(255,255,255); padding: 12px 50px
- fontSize: 12px; letterSpacing: 1px; textTransform: uppercase
- href: /#services

## Text Content (verbatim)
**H1:** Predictable Growth. Iconic Creative.

**P1:** Hello, my name is Luke Renner and I'm a collaborative and entrepreneurial Marketing Executive with extensive experience turning unknown startups into revenue machines. I have more than 15 years of experience building brands, training high-performance teams, and producing vivid creative.

**P2:** On the revenue side, I bring a deep understanding of the sales pipeline, key drivers, differentiators, and personas. On the creative side, I've done extensive work building campaigns, content, and comms for multiple audiences including investors, journalists, prospects, customers, and corporate boards.

**P3:** Throughout my career I've notched multiple exits, had my commercials appear in Times Square, and even rang the bell on NASDAQ.

## Assets
- Hero image (left column): `public/images/1175-startup-marketing-consultant-17.jpg`
  - Colorful botanical/floral figure collage — person silhouette filled with tropical flowers, warm gradient background with orange sun circle behind

## Responsive Behavior
- **Desktop (1440px):** 2-col flex row, image ~50% left, text ~50% right, text vertically centered
- **Mobile (390px):** Single column, image above text
- **Breakpoint:** ~768px
