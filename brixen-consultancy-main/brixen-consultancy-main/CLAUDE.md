@AGENTS.md

# Brixen Consultancy — project guide for Claude

Marketing website for **Brixen Consultancy LLC** — a **US-based BIM modeling & CAD
drafting partner** (HQ: Austin, TX) for general contractors, MEP firms and
architecture studios. The differentiator is engineering judgment: a leadership team
that has planned, managed and delivered major built work, not just drawn it. Modern
SaaS-style layout in a **red / black / white** theme (logo-matched). Fully
responsive, statically prerendered, deployed on Vercel.

Markets: **USA · UK · UAE · Pakistan**. Group companies:
- **Brixen Consultancy LLC** — BIM & CAD drafting services (Austin, TX, USA)
- **Brixen Associates** — civil construction & project delivery (Pakistan)
- **Spirit Brixen Building Contracting LLC** — building contracting (UAE)

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — tokens via `@theme inline` in `src/app/globals.css`
- `next/font/google` (Archivo)
- No backend/database. The contact form is a **mock** (shows a "Thank you."
  confirmation; does not send).

> ⚠️ This is Next.js 16 — APIs and conventions differ from older versions. Read the
> relevant guide in `node_modules/next/dist/docs/` before writing Next.js code (see
> `AGENTS.md`).

## Commands

```bash
npm run dev     # dev server
npm run build   # production build (verify changes with this)
npm run lint    # eslint
```

Always run `npm run build` after non-trivial changes to confirm the site still
compiles and all routes prerender.

## Architecture

- **`src/lib/data.ts` is the single source of truth for all content.** Copy,
  projects, services, metrics, leadership, offices, credentials, tools, etc. all
  live here as typed exports. Pages/components import from it — never hard-code
  content into JSX.
- **`src/app/`** — App Router routes (`page.tsx` per folder). Root `layout.tsx`
  wires fonts, metadata, `<Header/>` and `<Footer/>`.
- **`src/components/`** — reusable UI. Interactive ones (`header`, `reveal`,
  `count-up`, `contact-form`, `contact-modal`) are `"use client"`; the rest are
  server components.
- **`src/app/globals.css`** — design system. Palette tokens in `@theme inline`
  auto-generate utilities (`bg-brick`, `text-ink`, `border-line`, …). Reusable
  classes: `.container-bx`, `.section`, `.eyebrow`, `.btn*`, `.card`/`.card-hover`,
  `.marquee-track`, `.fade-up`, `.fade-in`/`.modal-in`. All animation respects
  `prefers-reduced-motion`.
- **Logo & favicon are raster assets:** `public/brixen-logo.png` (full stacked
  lockup — the "BRIXEN CONSULTANCY / STRUCTURAL ENGINEERING" text is baked into the
  image, so no separate text is rendered beside it). Favicon = cropped cube-B mark
  at `src/app/icon.png` + `src/app/apple-icon.png` (App Router auto-detects).
- **Team headshots:** `public/team/{kamran-hayat,kashan-bhatti,waleed-ghauri}.jpg`.

## Routes

`/about`, `/services`, `/projects`, `/team`, `/certifications` (labeled
**Credentials**), `/equipment` (labeled **Software & Tools**), `/contact`. Projects
are grouped by region with **USA first**, then Pakistan, then UAE.

## Design direction

OpenSpace.ai-style modern SaaS (rounded pill buttons, soft-shadow rounded cards,
scroll-reveal + count-up animations) in a **red / black / white** palette matched to
the logo. Dark heroes/sections are **near-black with a red radial glow**; the CTA
band and the About "Vision" card are solid red; content sections are white. Brand
red is `#e42323`.

## Content rules (MANDATORY)

1. **No military affiliations.** NEVER reference "Pakistan Army", "FWO", or "NLC"
   anywhere (Kamran Hayat's bio is neutralized to "national engineering programs").
   Note: **U.S. Army Corps of Engineers CQM** is kept — it is a legitimate US
   professional credential, distinct from the banned Pakistani-military references.
2. **All money in USD** — never PKR / Rs.
3. **Colors stay pure red / black / white** — no orange or brown casts. Red tints
   keep green = blue so the hue can't drift warm.

## Leadership (order matters — CEO first)

1. **Mr. Kamran Hayat** — Founder & CEO · Civil Engineer (Pakistan)
2. **Mr. Kashan Bhatti, CCM, LEED AP** — Construction Management & Sustainability
   Lead (Los Angeles) — managed $2.7B+ in construction
3. **Mr. Waleed Iqbal Ghauri** — Mechanical / Manufacturing / Automation Engineer
   (Dallas)

## Contact

US Head Office: 5900 Balcones Drive, STE 100, Austin, TX 78731, USA ·
**+1 (229) 210-3506** · Info@brixenconsultancy.com · Sales@brixenconsultancy.com ·
brixenconsultancy.com. Pakistan and UAE offices show their own local numbers
(+92 / +971). The contact-hero phone opens a branded **modal** (`contact-modal.tsx`)
instead of a raw `tel:` link (which triggered the OS "Open FaceTime?" prompt).

## Source of truth for company facts

`~/Downloads/Brixen Consultancy Compatibility Profile.pdf` (US capability portfolio).

## Deployment

Vercel (config in `vercel.json`). Auto-detects Next.js; no env vars required.
