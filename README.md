# Tendai Makaripe — Portfolio

Single-page journalist portfolio: plain HTML + Tailwind (CDN). No build step.

## Wiring up
- Images go next to `index.html`: `headshot.jpg`, `field-1.jpg` … `field-4.jpg`.
- Archived PDFs go in `clips/` as `story-1.pdf`, `story-2.pdf`, …
- Replace the bracketed placeholders (beat line, bio, clips, captions, contacts).
- Add a story by copying an `<article class="clip">` block and setting
  `data-category` to `investigative`, `features` or `oped`.

## Deploy
Import this repo in Vercel (Framework preset: **Other**, no build command). Every push to `main` redeploys.
