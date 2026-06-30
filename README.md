# GLP Guideline — Landing Page

Next.js (App Router) landing page for glpguideline.com. Deployed on Vercel.

## Edit the most common things

- **Affiliate / CTA link:** open `app/page.tsx`, change the `CTA_URL` constant at the top. Every button uses it.
- **Brand colors:** edit the CSS variables at the top of `app/globals.css`.
- **Copy:** all text lives in `app/page.tsx`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Pushing to the `main` branch auto-deploys via the linked Vercel project (`glp-guided`).
