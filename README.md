# Tendai Makaripe — Portfolio

Single-page journalist portfolio: plain HTML + Tailwind (CDN). No build step.

## Wiring up
- Photos live in `images/` (headshot, workshop, award photos).
- Archived PDFs go in `clips/` as `story-1.pdf`, `story-2.pdf`, …
- Content comes from the April 2025 portfolio PDF. Stories without a known web link have no "Read Story" button.
- Add a story by copying an `<article class="clip">` block and setting
  `data-category` to `health`, `rights`, `accountability` or `research`.

## Deploy
Import this repo in Vercel (Framework preset: **Other**, no build command). Every push to `main` redeploys.

## Styles
`styles.css` is precompiled Tailwind (fast to load, no in-browser compiler).
After changing classes in `index.html`, rebuild it:

```bash
npx tailwindcss@3.4.16 -c tailwind.config.js -i tailwind.input.css -o styles.css --minify
```
