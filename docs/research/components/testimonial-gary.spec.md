# Testimonial Gary Germer Specification

## Overview
- **Target file:** `src/components/TestimonialGary.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> (dark bg, 669px tall, 2-col: text left, image right)
  <div.left> (~50% width, centered vertically)
    <blockquote>
      "Luke helped my company get its demand-generation house in order..."
    </blockquote>
    <cite>— Gary Germer</cite>
    <span>Gary Germer and Associates</span>
  </div>
  <div.right> (~50% width)
    <img src="206326401138-startup-marketing-consultant-4.jpg" />
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(36,36,36); height: 669px; display: flex

### Quote text
- fontSize: ~22px; fontFamily: "Open Sans"; fontWeight: 300
- color: rgb(255,255,255); textAlign: center; lineHeight: 32px; fontStyle: italic

### Attribution
- fontSize: 14px; color: rgb(255,255,255); textAlign: right; marginTop: 20px

### Company name
- fontSize: 12px; color: rgb(180,180,180); fontStyle: italic; textAlign: right

### Right image
- Image is a colorful portrait collage (woman's face with purple flowers on orange/peach bg)
- objectFit: cover; height: 100%; width: 100%

## Text Content (verbatim)
"Luke helped my company get its demand-generation house in order. Not only did he completely revamp our brand and relaunch our website, he also helped us deploy several marketing campaigns. The SEO work he did literally transformed my business. I tripled my business this year.

I recommend him wholeheartedly. His work is excellent."

— Gary Germer
Gary Germer and Associates

## Assets
- Image: `public/images/206326401138-startup-marketing-consultant-4.jpg`

## Responsive Behavior
- **Desktop:** 2-col, text left, image right
- **Mobile:** Single col, text above image
- **Breakpoint:** ~768px
