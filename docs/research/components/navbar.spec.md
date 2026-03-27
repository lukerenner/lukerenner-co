# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** static

## DOM Structure
```
<header> (position: absolute, overlays hero)
  <nav> (full-width, flex, space-between)
    <img logo />        ← left, 60×60px
    <ul nav-links />    ← center
    <a.contact-btn />   ← right, burnt orange button
```

## Computed Styles

### Header container
- position: absolute; top: 0; left: 0; right: 0
- height: 96px
- backgroundColor: transparent (rgba(0,0,0,0))
- zIndex: 100

### Nav links
- fontFamily: Lato; fontSize: 14px; fontWeight: 400
- color: rgb(255,255,255); textTransform: uppercase

### CONTACT button
- backgroundColor: rgb(196,85,67); color: rgb(255,255,255)
- border: 3px solid rgb(255,255,255)
- padding: 0px 50px; fontSize: 12px; letterSpacing: 1px
- height: ~40px

## Nav Links (verbatim text + hrefs)
- HOME → /
- COACHING PROGRAM → /coaching
- FILM AND VIDEO → /film-and-video
- COPYWRITING → /copywriting
- SALES ENABLEMENT → /sales-enablement
- WEB DESIGN → /web-design
- SUCCESS STORIES → /success-stories
- CONTACT → /coaching (button, right side)

## Assets
- Logo: `public/images/481-luke-renner-logo-15885549844261.png` (60×60px)

## Responsive Behavior
- **Desktop:** Horizontal, all links visible
- **Mobile (390px):** Hamburger icon, links in dropdown
- **Breakpoint:** ~768px
