# TODO — placeholders for the team

Every item below shows on the live site as a dashed yellow “TODO” box until it is fixed. Search the code for `TODO` to find them all.

## Settings (`src/config.ts`)

- [ ] **WhatsApp number** — `whatsappNumber`, digits only in international format (e.g. `94771234567`). Shows on Home footer, Host a unit, For farmers, Contact.
- [ ] **Instagram handle** — `instagramHandle` (account launches December 2026). Footer and Contact.
- [ ] **Form service** — `formEndpoint` (e.g. a Formspree form URL). Until set, forms open the visitor’s email app instead.
- [ ] **Real domain** — `url` in `src/config.ts` **and** `site` in `astro.config.mjs` (currently `https://example.com`). Needed for canonical URLs, sitemap and share images.
- [ ] **Current phase** — `currentPhase`. Set to `'design-build'` in December 2026, then `'phase-a'`, `'phase-b'`, `'final'`.

## Brand

- [ ] **Youth4Climate logo** — add official files to `public/brand/y4c/` and set `y4cLogo` in `src/config.ts`. Follow the Y4C branding guidelines. **Never add the UNDP logo.**

## Content to confirm

- [ ] **“Can’t go in” list** (How it works) — currently “Plastics, wood, bones”. Confirm or correct.
- [ ] **How adult flies are contained or released** (How it works FAQ, “Will flies escape?”).
- [ ] **Hosting cost in 2028** (Host a unit) — is hosting a unit at a Phase B public site free for the host?
- [ ] **Larvae for farmers** (For farmers) — when larvae are first available, rough quantities, any charge.
- [ ] **Awareness session and demo dates** (Get involved).
- [ ] **Volunteer roles and sign-up** (Get involved).
- [ ] **Number of awareness sessions** target (`sessionsHeld` in `src/data/impact.json`).
- [ ] **Deployment sites** — add to `src/data/sites.json` once agreed (currently empty).

## Photos

- [ ] **Team photo caption** (Home and Project) — who is pictured in `team-site-visit.jpeg`, and where.
- [ ] **Lithira and Rusiru** (Project, `src/data/team.ts`) — full names and roles.
- [ ] **Mesh-cage prototype caption** (Project, “What we have built so far”) — confirm what the wheeled mesh unit on the composting beds is.
- [ ] **Poultry photo** (For farmers) — where it was taken.
- [ ] **Demo stand photo** (Get involved) — name the event.
- [ ] **SPARK award** — add the year.
- [ ] **SLIoT Challenge 2025** — confirm this award was for BSFix (the photo says Team Zypher, University of Moratuwa).
- [ ] **IESE Grant Scheme** — confirm this grant was for BSFix and add the year.

## Updates

- [ ] **“BSFix is launching” post** (`src/content/updates/bsfix-is-launching.md`) — placeholder text and date (set to 1 Dec 2026). Rewrite, then delete the `todo:` line in its front matter.

## Before launch

- [ ] Run Lighthouse (mobile) on the deployed site and confirm 90+ in all four categories.
