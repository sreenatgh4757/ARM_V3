# A.R.M Technologies website

The marketing site for A.R.M Technologies, live at **armtechnologies.ltd**.

It markets three things:

| | What it is | Status |
|---|---|---|
| **Virgo** | AI hotel intelligence platform. Connects a hotel's PMS, accounting and guest messaging, and answers questions in plain English. | In development, onboarding first pilot hotels |
| **The Gig Search** | Hospitality staffing marketplace | Live at [thegigsearch.com](https://www.thegigsearch.com) |
| **Consulting** | Advisory for other founders | Ongoing |

This repo is the **website only**. It is not the Virgo product itself.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · React Router · anime.js v4 · Supabase

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | Does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

### Environment

Create `.env.local` in the project root:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Both are optional for local work. Without them the app falls back to placeholder
values and runs fine, but the Virgo pilot signup form won't save anything.

## Structure

```
src/
  index.css              Design tokens (:root custom properties) and .pill button classes
  App.tsx                Routes
  lib/
    motion.ts            anime.js primitives: useReveal, useStaggerReveal,
                         useScrollScrub, useCursorGlow, prefersReducedMotion
    supabase.ts          Supabase client
  components/
    home/                Homepage sections, in page order
    virgo/               Virgo-specific sections (problem, how it works, pilot form)
    layout/              Navbar, Footer, ScrollToTop
  pages/                 HomePage, CompanyPage, GigSearchPage, ConsultingPage
supabase/migrations/     SQL for the pilot signup table
docs/                    Copy audits and content planning
```

Routes: `/` · `/company` · `/thegigsearch` · `/consulting`. `/vzir` redirects to
`/` for old bookmarks.

## Design system

A light theme, "Electric Violet on Porcelain": porcelain ground, large Bricolage
Grotesque headlines, pill buttons, a bento feature grid and one dark contrast band.

**Never hardcode a colour in a component.** Every colour is a CSS custom property
in `src/index.css` (`--ground`, `--ink`, `--primary`, `--pop`, `--amber`, `--mint`,
`--danger`…), so re-theming is a change to that one block.

Animation runs through `src/lib/motion.ts`. Every primitive respects
`prefers-reduced-motion`: reveals collapse to instant so content still lands, and
purely decorative motion is skipped.

## The WhatsApp bot

A.R.M's WhatsApp bot used to live in this repo under `backend/`. Nothing in the
site ever called it, so it now has its own project at `../arm-whatsapp-bot`. This
repo is the website and nothing else.

## A note on the name

The flagship product was renamed from **Vzir** to **Virgo**. A few "vzir" names
survive on purpose, because renaming them would break live things:

- the Supabase table `vzir_pilot_signups`, which holds real signups
- its migration file in `supabase/migrations/`
- `/vzir`, which redirects to `/`
- `docs/vzir-website-content-plan.md`, a dated historical audit

Everything a visitor can see says Virgo.

## Writing copy for this site

Read `CLAUDE.md` before editing anything about Virgo. The short version:
**Virgo never writes to a connected system.** No rate changes, no reservation
edits, no bookings. The only write surface in the product is guardrailed WhatsApp
guest replies. Any copy implying Virgo "adjusts", "applies" or "updates" something
is wrong and must say it *recommends* or *surfaces* instead.
