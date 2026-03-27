# Contact Form & Footer Specification

## Overview
- **Target file:** `src/components/ContactFooter.tsx`
- **Interaction model:** form submission (use Formspree)

## DOM Structure
```
<!-- Contact Form Section -->
<section.contact> (light gray bg)
  <div.inner> (centered, maxWidth ~600px)
    <svg icon /> (flame/match icon)
    <h4>Let's Get to Work.</h4>
    <p>Digital Marketing is one of the most powerful tools...</p>
    <p>Let's set up a conversation to discuss what I can do for you.</p>
    <form method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
      <input type="text" placeholder="Fill in your name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <textarea placeholder="Write a message" name="message" rows="5" />
      <button type="submit">Send</button>
    </form>
  </div>
</section>

<!-- Footer -->
<footer> (dark bg, with background image)
  <div.right>
    <p>FOLLOW ME</p>
    <div.social>
      <a href="https://linkedin.com/..."><svg linkedin /></a>
      <a href="https://instagram.com/..."><svg instagram /></a>
    </div>
    <a href="...">Schedule a conversation ▸</a>
  </div>
</footer>
```

## Computed Styles

### Contact section
- backgroundColor: rgb(242,242,242) — light gray
- padding: 60px 0

### Contact H4
- fontSize: 24.87px; fontWeight: 300; color: rgb(53,53,53); textAlign: center

### Contact subtitle
- fontSize: 16px; color: rgb(100,100,100); textAlign: center; maxWidth: 500px; margin: 0 auto 30px

### Form inputs
- width: 100%; padding: 15px; marginBottom: 15px
- border: 1px solid rgb(210,210,210); backgroundColor: rgb(255,255,255)
- fontSize: 14px; fontFamily: "Open Sans"

### Textarea
- Same as inputs; minHeight: 120px; resize: vertical

### Submit button
- backgroundColor: rgb(53,53,53); color: rgb(255,255,255)
- padding: 12px 40px; fontSize: 14px; border: none; cursor: pointer

### Footer
- backgroundColor: rgb(36,36,36)
- Has a large background image: `public/images/r168-startup-marketing-consultant-17.jpg` (circular crop, faded)
- minHeight: 400px; position: relative

### Footer text
- color: rgb(255,255,255); textAlign: right; padding: 40px

### "FOLLOW ME" text
- fontSize: 12px; letterSpacing: 2px; textTransform: uppercase; color: rgb(255,255,255)

### Social icons (LinkedIn, Instagram)
- SVG icons, white, ~24px each, displayed inline

### "Schedule a conversation ▸" link
- fontSize: 14px; color: rgb(255,255,255); textDecoration: underline

## Text Content (verbatim)
**H4:** Let's Get to Work.
**P1:** Digital Marketing is one of the most powerful tools you have to grow your business (and/or drive your startup toward an exit).
**P2:** Let's set up a conversation to discuss what I can do for you.
**Form placeholders:** Fill in your name | Email | Write a message
**Button:** Send
**Footer:** FOLLOW ME | [LinkedIn icon] [Instagram icon] | Schedule a conversation ▸

## Assets
- Background image in footer: `public/images/r168-startup-marketing-consultant-17.jpg` (circular portrait collage, used as decorative bg)
- LinkedIn SVG icon (use Lucide: Linkedin)
- Instagram SVG icon (use Lucide: Instagram)

## Responsive Behavior
- **Desktop:** Form centered, maxWidth 600px
- **Mobile:** Full-width form fields
- **Breakpoint:** N/A (single column always)
