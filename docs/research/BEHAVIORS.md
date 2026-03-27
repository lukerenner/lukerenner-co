# Behavior Bible — lukerenner.co

## Scroll Sweep Findings
- No elements animate on scroll (no IntersectionObserver fade-ins detected)
- No scroll-snap containers
- No parallax layers
- No sticky sidebar
- No smooth scroll library (Lenis, Locomotive, etc.)
- Header does NOT change on scroll (it is position:absolute, not fixed)

## Click Sweep Findings
- Web Design section has a carousel: left (‹) and right (›) arrow buttons switch slide images
- No modals or dropdowns
- All nav links are standard `<a>` hrefs (no SPA routing)
- "WORK WITH ME" and "CONTACT" both link to /coaching#m571
- "LEARN MORE" links to /#r6 (internal anchor)
- Arrow icons (→) below each service/case study card are links

## Hover Sweep Findings
- Nav links: no visible hover state changes observed
- CONTACT button: burnt orange bg, no observed hover change
- Service/case study arrow icons (→): likely have opacity or color changes
- All buttons: no dramatic hover animations

## Responsive Sweep
- At 768px (tablet): layout starts collapsing columns
- At 390px (mobile): all sections stack to single column
- Nav collapses to hamburger at ~768px breakpoint
- Hero: image moves above text on mobile
- Services grid: 3-col → 1-col on mobile

## Interaction Models by Section
- Navbar: STATIC (plain anchor links)
- Hero: STATIC
- Services: STATIC (arrow links only)
- Testimonials: STATIC
- Copywriting Articles: STATIC (article links)
- Web Design: CLICK-DRIVEN carousel (prev/next buttons)
- Case Studies: STATIC (arrow links only)
- Contact Form: FORM SUBMISSION (name, email, message, send button)
- Footer: STATIC (social links)
