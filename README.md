# Jalwan Security — Web & API Penetration Testing Site

Production-ready Next.js (App Router) + Tailwind CSS single-service site for the "All-Inclusive Web Penetration Testing" offering.

## Quick start

```bash
npm install
npm run dev
```

## Commands
- `npm run dev` — start Next.js dev server
- `npm run build` — production build
- `npm run start` — serve build
- `npm run lint` — lint with Next.js config
- `npm run test` — unit tests with Vitest + Testing Library

## Environment variables
Create `.env.local` (used by Next.js):

```
SMTP_URL=smtp://user:pass@smtp.host:587   # optional; or RESEND_API_KEY=...
RESEND_API_KEY=                           # optional email provider
RECAPTCHA_SECRET=                         # optional server-side verify
```

## Contact form
- Validates email, role, app URL, 30s prequal, notes.
- Honeypot field (`company`) blocks bots; server rejects when filled.
- API route: `/api/contact` (see `app/api/contact/route.ts`). Wire up SMTP/Resend to actually send.
- Client copy includes recaptcha guidance; add client key to the form if desired.

## Report generation
- Template: `lib/report-template.json` (id, title, cvss, severity, poc, screenshots[], remediation[], priority, status).
- API route `/api/report` returns inline PDF; `/api/report?download=1` downloads it. Built with `pdfkit` (serverless friendly).
- Sample HTML preview: `app/sample-report/page.tsx`.
- Example script: `scripts/generate-sample-report.ts` (expects dev server on 3000).

## Pages
- Home: hero, reality check, inclusions, OWASP risk summaries, NIST-style timeline, deliverables, founder benefits.
- About: bio, signals, disclosure stance.
- Contact: intake form + expectations and email fallback.
- Sample Report: HTML preview + download links.
- Legal: responsible disclosure policy.

## Deployment
- Recommended: Vercel. Push to repo, connect on Vercel, add env vars, and deploy.
- CDN/Edge ready; dark, responsive design; minimal animations for speed.

## Testing
- Unit tests live under `tests/` and use Vitest + Testing Library (`jsdom` environment).

## Notes
- Tone stays calm, expert, and founder-friendly with subtle scarcity cues (“Limited monthly audits”).
- No fake logos or overpromising claims.
