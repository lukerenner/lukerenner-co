# Target Website

## URL
https://lukerenner.co

## Scope

### Pages to Replicate
- [x] Home page (all sections: hero, services, copywriting portfolio, case studies, web design showcase, contact CTA)

### Fidelity Level
- [x] **Pixel-perfect** — exact match in colors, spacing, typography, animations

### In Scope
- Visual layout and styling
- Component structure and interactions
- Responsive design (mobile/tablet/desktop)
- Image slider/carousel
- Navigation with all links
- All real text content and images

### Out of Scope
- Ucraft-specific form backend (will replace with Formspree)
- Real-time features
- Multi-language routing (appears unused)

## Why
Migrating off Ucraft (paid platform) to a self-hosted Next.js site deployed on GitHub Pages. Goal is a pixel-perfect static clone that can be maintained in git and hosted for free.

## Customization Plans
- Replace Ucraft contact form + reCAPTCHA with Formspree form
- Add Google Analytics (GA4: G-DY3CZ00VFL) to layout.tsx
- Configure next.config.ts for static export (output: 'export') for GitHub Pages hosting
- "Schedule a Conversation" CTA links to external booking page — keep as-is

## Brand Notes
- Primary accent color: rgb(196, 85, 67) — burnt orange
- Site is a professional marketing/consulting portfolio for Luke Renner
- Services: CMO Strategy, Brand Development, Video Production, Web Design, Analytics, Paid Marketing
- Case study clients: Cyngn, Manceps, JCC Bowers, Steelhouse
