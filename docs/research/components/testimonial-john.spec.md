# Testimonial John Bowers Specification

## Overview
- **Target file:** `src/components/TestimonialJohn.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> (dark bg, 847px, 2-col: image left, text right)
  <div.left> (~50%)
    <img src="250589640612-startup-marketing-consultant-14-15886373848755.jpg" />
  </div>
  <div.right> (~50%, flex-col, justify-center, padding 60px)
    <blockquote>
      "Luke is one of the most creative, forward-thinking people I have ever worked with..."
    </blockquote>
    <cite>— John Bowers</cite>
    <a.cta>READ THE CASE STUDY ▸</a>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(36,36,36); minHeight: 847px; display: flex

### Left image
- Image: Man's portrait, colorful floral collage art style (face with flowers, purple/blue bg)
- objectFit: cover; height: 100%; width: ~50%

### Quote text
- fontSize: ~22px; fontFamily: "Open Sans"; fontWeight: 300
- color: rgb(255,255,255); lineHeight: 34px; marginBottom: 30px

### Attribution
- fontSize: 14px; color: rgb(255,255,255); marginBottom: 30px

### CTA button
- backgroundColor: transparent; color: rgb(255,255,255)
- border: 3px solid rgb(255,255,255); padding: 12px 30px
- fontSize: 11px; letterSpacing: 2px; textTransform: uppercase

## Text Content (verbatim)
"Luke is one of the most creative, forward-thinking people I have ever worked with. Not only does he demonstrate a deep talent for writing, design, and film production, he also has a finely tuned business acumen.

We're very glad to have found such a talented and thoughtful director to lead our marketing department."

— John Bowers

**CTA:** READ THE CASE STUDY ▸ (links to /success-stories or JCC Bowers case study)

## Assets
- Image: `public/images/250589640612-startup-marketing-consultant-14-15886373848755.jpg`

## Responsive Behavior
- **Desktop:** 2-col, image left, text right
- **Mobile:** Single col, text above image
- **Breakpoint:** ~768px
