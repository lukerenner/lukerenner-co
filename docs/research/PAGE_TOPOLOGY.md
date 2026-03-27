# Page Topology — lukerenner.co

## Overall Layout
- Single-page scrolling site, ~7700px tall at 1440px viewport
- Body bg: white (rgb(255,255,255))
- No smooth scroll library detected
- No scroll-snap detected
- Header is position:absolute (overlaps hero), NOT sticky/fixed
- Main font: Open Sans; Nav font: Lato

## Section Map (top to bottom)

| # | Component | y-start | height | bg | interaction |
|---|-----------|---------|--------|----|-------------|
| 1 | Navbar | 0 | 96px | transparent | static (links only) |
| 2 | Hero | 0 | 910px | rgb(36,36,36) dark | static |
| 3 | Services Header | 910 | 226px | white | static |
| 4 | Services Grid Top | 1136 | 366px | white | static (arrow icons hover) |
| 5 | Services Grid Bottom | 1502 | 425px | white | static (arrow icons hover) |
| 6 | Testimonial Gary | 2052 | 669px | rgb(36,36,36) dark | static |
| 7 | Copywriting Header | 2720 | 400px | white | static |
| 8 | Copywriting Articles | 3120 | 491px | white | static |
| 9 | Featured Articles CTA | 3727 | 45px | white | static |
| 10 | Web Design Slider | 3887 | 1041px | rgb(36,36,36) dark | click-driven carousel |
| 11 | Case Studies Header | 4928 | 293px | white | static |
| 12 | Case Studies Row 1 | 5221 | 350px | white | static (arrow icons hover) |
| 13 | Case Studies Row 2 | 5571 | 323px | white | static (arrow icons hover) |
| 14 | Testimonial John Bowers | 6010 | 847px | rgb(36,36,36) dark | static |
| 15 | Contact Form | ~6857 | ~400px | rgb(242,242,242) light gray | form submission |
| 16 | Footer | ~7250 | ~400px | rgb(36,36,36) dark | static |

## Z-index Layers
- Header: overlaps hero (position: absolute, top: 0)
- Everything else: normal document flow

## Alternating Sections
Dark sections: Hero, Testimonial Gary, Web Design Slider, Testimonial John Bowers, Footer
Light sections: Services, Copywriting, Case Studies, Contact Form

## Key Dependencies
- Navbar must be built first (imported in layout.tsx)
- Hero image is a layered collage (left side portrait with gradient sun background)
- Web Design slider has 7 slide images (laptop mockup framing)
