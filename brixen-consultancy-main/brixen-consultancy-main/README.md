# Brixen Consultancy

Marketing website for **Brixen Consultancy LLC** — a **US-based BIM modeling & CAD
drafting partner** (HQ: Austin, TX) for general contractors, MEP firms and
architecture studios. What sets the output apart is the engineering judgment behind
it: a leadership team that has planned, managed and delivered major built work, not
just drawn it. Built as a modern, fully responsive SaaS-style site in a
**red / black / white** theme matched to the logo.

Markets: **USA · UK · UAE · Pakistan**. Group companies — Brixen Consultancy LLC
(BIM & CAD, Austin), Brixen Associates (civil, Pakistan), Spirit Brixen Building
Contracting LLC (UAE).

> _"A team that knows the building, not just the drawing."_

---

## Tech stack

| Layer        | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org) (App Router)      |
| Language     | TypeScript                                          |
| UI           | React 19                                            |
| Styling      | [Tailwind CSS v4](https://tailwindcss.com) (`@theme inline` tokens) |
| Fonts        | Archivo via `next/font/google`                     |
| Animations   | `IntersectionObserver` scroll-reveal + `requestAnimationFrame` count-up |
| Deployment   | [Vercel](https://vercel.com)                       |

All pages are **statically prerendered** at build time. There is no database or
runtime backend — the contact form is a mock that shows a confirmation on submit.

---

## Getting started

Requires **Node.js 20+**.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:3000)
npm run dev

# production build
npm run build

# serve the production build locally
npm run start

# lint
npm run lint
```

---

## Project structure

```
public/
├── brixen-logo.png           # Full logo lockup (text baked in) — header + footer
└── team/                      # Leadership headshots (kamran / kashan / waleed)
src/
├── app/                      # App Router routes (each folder = a route)
│   ├── layout.tsx            # Root layout: fonts, metadata, <Header/> + <Footer/>
│   ├── page.tsx              # Home / landing page
│   ├── globals.css           # Design system: red/black/white tokens + utilities
│   ├── icon.png              # Favicon (cube-B mark cropped from the logo)
│   ├── apple-icon.png        # Apple touch icon
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── projects/page.tsx
│   ├── equipment/page.tsx    # "Software & Tools"
│   ├── certifications/page.tsx  # "Credentials"
│   ├── team/page.tsx
│   └── contact/page.tsx
├── components/               # Reusable UI
│   ├── header.tsx            # Sticky nav + mobile drawer ("use client")
│   ├── footer.tsx
│   ├── ui.tsx                # Eyebrow, SectionHeading, StatBand, PageHero
│   ├── hero-scene.tsx        # SVG construction-scene backdrop for the hero
│   ├── marquee.tsx           # Capabilities marquee
│   ├── reveal.tsx            # Scroll-reveal wrapper ("use client")
│   ├── count-up.tsx          # Animated number counter ("use client")
│   ├── contact-form.tsx      # Mock contact form ("use client")
│   ├── contact-modal.tsx     # Branded contact popup ("use client")
│   ├── project-card.tsx
│   ├── service-icon.tsx
│   ├── visual.tsx            # Deterministic red/black-gradient SVG placeholder
│   ├── global-cta.tsx
│   └── logo.tsx              # Image-based logo (no separate text)
└── lib/
    └── data.ts               # Single source of truth for ALL site content
```

### Where content lives

**All copy, projects, services, metrics, leadership, offices, etc. live in
[`src/lib/data.ts`](src/lib/data.ts).** Edit that one file to change site content —
the pages and components read from it. No content is hard-coded into JSX.

---

## Routes

| Path              | Page                                            |
| ----------------- | ----------------------------------------------- |
| `/`               | Landing page (hero, stats, experience, capabilities, why-Brixen, leadership numbers, US projects, process, founder quote, credentials, CTA) |
| `/about`          | Company story, mission & vision, founder message, goals |
| `/services`       | Capabilities — BIM/CAD, structural/MEP, civil, mechanical CAE, construction mgmt, sustainability |
| `/projects`       | Track record by region — **USA first**, then Pakistan & UAE (values in USD) |
| `/equipment`      | Software & Tools (Revit, AutoCAD, Navisworks, SolidWorks, CATIA, NX, FEA…) |
| `/certifications` | Credentials — CCM, LEED AP, USACE CQM, PMP, P6, GD&T, FEA, Lean Six Sigma |
| `/team`           | Leadership (photos, credentials, focus, experience) + group structure |
| `/contact`        | Offices + branded contact modal + mock contact form |

---

## Design system

The palette and reusable utilities are defined in
[`src/app/globals.css`](src/app/globals.css) using Tailwind v4's `@theme inline`.
Defining a token (e.g. `--color-brick`) auto-generates the matching utilities
(`bg-brick`, `text-brick`, `border-brick`, …). Token names are kept generic
(`brick`, `ember`, `cream`, …) even though the values are now red / black / white.

Core tokens:

| Token              | Value     | Use                       |
| ------------------ | --------- | ------------------------- |
| `--color-brick`    | `#e42323` | Primary brand red         |
| `--color-brick-dark` / `-deep` | `#b41414` / `#121213` | Hover red / near-black surfaces |
| `--color-clay` / `--color-ember` | `#ef3838` / `#ff4d4d` | Red accents (on dark) |
| `--color-cream` / `--color-sand` | `#f4f4f5` / `#ececee` | Small tile/chip tints (sections are white) |
| `--color-ink` / `--color-muted`  | `#161618` / `#6b6b70` | Text |

Reusable classes include `.container-bx`, `.section`, `.eyebrow`, `.btn` (+
variants), `.card` / `.card-hover`, `.marquee-track`, `.fade-up`, and
`.fade-in` / `.modal-in`. All animations respect `prefers-reduced-motion`.

---

## Content rules

When editing content, follow these constraints:

- **No military affiliations.** Never reference "Pakistan Army", "FWO", or "NLC".
  Use neutral phrasing. (U.S. Army Corps of Engineers **CQM** is kept — it is a
  legitimate US professional credential, not a Pakistani-military reference.)
- **All money values in USD** — never PKR / Rs.
- **Colors stay pure red / black / white** — no orange or brown casts.

---

## Deploying to Vercel

This repo is Vercel-ready and includes a [`vercel.json`](vercel.json).

1. Push the repo to GitHub / GitLab / Bitbucket.
2. In the [Vercel dashboard](https://vercel.com/new), **Import** the repository.
3. Vercel auto-detects Next.js — keep the defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install: `npm install`
4. Click **Deploy**.

No environment variables are required. Every push to the production branch triggers
a new deployment; pull requests get preview deployments automatically.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

---

## License

© Brixen Consultancy LLC. All rights reserved.
