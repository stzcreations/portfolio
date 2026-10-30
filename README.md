# STZ Creations — Personal Portfolio

A responsive personal developer portfolio built with Next.js App Router, TypeScript and plain CSS.

## Routes
- `/` — Home
- `/about` — About, skills and experience
- `/projects` — Project directory
- `/projects/[slug]` — Project detail pages
- `/services` — Services
- `/contact` — Contact form (opens the visitor's email app)
- Unknown routes — Custom 404

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Personalize before publishing
Edit `src/lib/site.ts`:
- Replace the display name, role, short bio and email.
- Add your real social profile URLs.
- Replace sample projects, descriptions and demo/repository URLs.
- Update skills and experience.

The contact form uses a `mailto:` workflow so it works without a server or paid email service. For direct message delivery, connect an email provider and implement a protected server route.

## Deploy to Vercel
1. Push this folder to your GitHub repository.
2. In Vercel, choose **Add New → Project** and import `stzcreations/portfolio`.
3. Framework Preset: **Next.js**; Build Command: `npm run build`; Output Directory: leave default.
4. Add `NEXT_PUBLIC_SITE_URL` with your deployed URL (optional but recommended).
5. Click **Deploy**. Future pushes to the connected branch trigger deployments.

No PHP, MySQL, or custom server is required.
