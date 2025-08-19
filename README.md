# ValourOne — Astro Site

## Quick start
1. Install deps:
   ```bash
   npm install
   npm run dev
   ```
2. Replace placeholders:
   - Calendly URL in `src/components/CalendlyEmbed.astro` and on `index.astro` / `contact.astro`.
   - Formspree endpoint `REPLACE_WITH_YOUR_FORM_ID` in `CTA.astro` and `contact.astro`.
3. Build & deploy:
   ```bash
   npm run build
   git add . && git commit -m "ValourOne site" && git push
   ```

GitHub Action in `.github/workflows/deploy.yml` will publish to GitHub Pages.
If you're serving on **valourone.com** via Pages + DNS, `astro.config.mjs` is already set with `site: 'https://valourone.com'`.
