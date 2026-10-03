# BSFix website — build brief for Claude Code

This file tells you (Claude Code) everything needed to build the BSFix project website. Read it fully before writing code. Where something is marked `TODO`, leave a clearly visible placeholder and list it in `TODO.md` — **never invent facts, numbers, partners, quotes, photos or results.**

---

## 1. What BSFix is

BSFix is a youth-led climate project from Sri Lanka, supported by the Youth4Climate Financial Award 2025. It builds compact, low-tech units (5 ft × 5 ft × 3 ft, 4-tier compartments) that use Black Soldier Fly (BSF) larvae to turn food waste into compost and protein-rich larvae, right where the waste is produced.

- Location: Colombo and surrounding areas, Western Province, Sri Lanka
- Project period: December 2026 – December 2028
- Team: Mandu Demitha Manawadu (Leader), Muftee Mysan (Tech lead), Chamudi Gamage (Business lead) — final-year undergraduates
- Contact: demithamanawadu@gmail.com
- Long-term goal: become a startup that runs an on-site food-waste service for hotels, canteens and institutions, and supplies larvae to farmers.

### Project phases (use these exactly)

| Phase | Dates | What happens |
| --- | --- | --- |
| Design and build | Dec 2026 – Jun 2027 | Prototype units built with local fabricators |
| Phase A pilot | Jul – Sep 2027 | 4 full waste-to-compost cycles on our rented site; measured results |
| Phase B public sites | Jan – Sep 2028 | Units at 3 public sites in and around Colombo, 8+ weeks each |
| Final results | Oct – Dec 2028 | Market research, business plan, final report |

### Targets (always present as targets, never as achieved results)

- Divert at least 5,000 kg of organic waste from landfill and open dumps by August 2028
- Awareness sessions reaching 200+ people
- Around 6 labourers trained to operate the units
- Larvae supplied to at least 2 local chicken/fish farms
- Market survey of 50+ respondents

---

## 2. Who the site is for and what it must do

Primary job: **get organisations to ask about hosting a BSFix unit.** Secondary jobs: explain BSF simply, build trust, show progress, meet Youth4Climate visibility requirements.

| Audience | What they need from the site | Tone |
| --- | --- | --- |
| Site and facilities managers, council officers ("Ruwan", 45, practical, sceptical) | Proof it is clean, who runs it, cost, results from a real site | Respectful, evidence-first, short |
| Hotel sustainability/operations staff ("Dilini", 32) | Sustainability story for guests, reporting, compost for gardens | Modern, professional |
| University students and public ("Sachini", 21) | What BSF is, why it matters, how to join a demo or volunteer | Friendly, a little humour |
| Chicken and fish farmers | How to receive larvae as feed | Plain, practical |
| Youth4Climate / funders | Project overview, progress, impact | Clear, factual |

Ruwan mostly uses WhatsApp on a phone. Design mobile-first and add a WhatsApp contact option.

---

## 3. Tech stack and constraints

- **Framework:** Astro (static output), plain CSS with custom properties. No heavy UI kit. If you have a strong reason to use something else, explain it in `DECISIONS.md` first.
- **Language:** English only. No i18n routing or language switcher.
- **Hosting:** static deploy to Netlify, Vercel, or GitHub Pages. Include a short deploy section in the project's own README.
- **Forms:** no backend. Use a form service (Formspree or Netlify Forms) behind a single config value; fall back to a `mailto:` link if not configured.
- **Performance:** many visitors will be on mobile data. Target Lighthouse 90+ on mobile; total page weight under ~1 MB; images in AVIF/WebP with `srcset`; no autoplay video; self-host fonts or subset them.
- **Accessibility:** WCAG 2.1 AA, semantic HTML, visible keyboard focus, alt text on every image, `prefers-reduced-motion` respected, sufficient contrast.
- **Content as data:** keep editable content in Markdown/JSON so non-developers can update it:
  - `src/content/updates/*.md` — project news posts
  - `src/data/impact.json` — progress numbers (kg diverted, sessions held, people reached, units running). Start every value at `0` with `"status": "target"` and the target value; the UI must clearly label targets vs measured results.
  - `src/data/sites.json` — deployment sites (start empty; site names are `TODO`)
- **No tracking cookies.** If analytics are needed, use a privacy-friendly option (e.g. Plausible) behind a config flag, off by default.

---

## 4. Pages

### Home
1. **Hero:** one sentence of what BSFix does, e.g. "We turn food waste into compost and animal feed, right where it's thrown away." Primary button: "Host a BSFix unit". Secondary: "How it works".
   The memorable element of the site lives here: an interactive "follow 50 kg of food waste" sequence showing waste → larvae feeding (~2 weeks) → compost + larvae → garden and farm. Label all quantities "up to" or "target"; real yields are measured in the 2027 pilot.
2. **The problem in Colombo**, with these sourced facts (link the sources):
   - Colombo Municipal Council collects about 420–450 tonnes of waste a day (Ada Derana, Dec 2024: https://adaderana.lk/news/104535/colombos-garbage-surges-during-festive-season)
   - Food waste is on average 56% of municipal waste in Sri Lanka, nearly 4,000 tonnes a day nationally (IWMI: https://archive.iwmi.org/wle/node/19638/)
3. **How a BSFix unit works** — short, with an illustration of the unit and its 4 tiers.
4. **Who it's for** — three short blocks: hotels and canteens, markets and institutions, farmers.
5. **Progress** — reads from `impact.json`, showing current phase and targets.
6. **Supported by Youth4Climate** strip (see section 6).

### How it works
- BSF life cycle explained simply (egg → larva → pupa → adult fly). Key reassurance, stated plainly: adult Black Soldier Flies do not bite, sting or feed, are not house pests, and are not known disease carriers.
- What goes in (food waste), what comes out (compost, larvae), what can't go in (plastics, wood, bones — mark list as `TODO: confirm with team`).
- Who runs it: units are built so an untrained labourer can load, harvest, clean and move them; the BSFix team provides training and service.
- FAQ: smell, flies escaping, rain/flooding, space needed, cost (answer "contact us — pricing set after our 2027 pilot").

### Host a unit (main conversion page)
- Who should apply, what the site provides (space, food waste, a contact person), what BSFix provides (unit, training, monthly service visits, a monthly impact report).
- Enquiry form: organisation name, type (hotel / canteen / market / university / institution / farm / other), location, approx. food waste per day (ranges), contact name, phone/WhatsApp, email, message. Clear success and error messages.
- WhatsApp link: `TODO: team WhatsApp number`.

### For farmers
- Larvae as a protein-rich supplementary feed for chickens and fish; we're looking for farms near Colombo to receive and test larvae during the project. Short form or WhatsApp link.

### Project
- Theory of change in one line: if communities use BSF and other nature-inspired solutions for waste, more waste is disposed of sustainably because there's an effective alternative.
- Phase timeline (table in section 1) drawn as a visual timeline with the current phase highlighted from a config value.
- Team with roles. Photos are `TODO`; use initials-based placeholders, not stock photos or generated faces.

### Updates
- List of posts from `src/content/updates/`. Create one seed post: "BSFix is launching" — dated as a placeholder, marked `TODO`.

### Get involved
- Awareness sessions and university demonstrations (dates `TODO`), volunteering, partnership enquiries.

### Contact
- Email, WhatsApp, Instagram (`TODO: handle — account launches December 2026`).

### Footer (every page)
- Youth4Climate logo and support statement, contact, Instagram link, copyright.

---

## 5. Design direction

Ground the look in the subject: soil, compost, monsoon greenery, and the Black Soldier Fly itself, whose wings have a dark, iridescent blue-green sheen.

- **Palette (starting point; refine but keep the idea):**
  - Soil, deep brown for text and dark surfaces: `#2A2119`
  - Monsoon green, primary: `#1F6B4A`
  - Wing teal, accent for interactive elements: `#2C7A8C`
  - Young leaf, light highlight: `#CFE3B0`
  - Rain-washed off-white background: `#F5F7F2`
  - Do **not** use a cream background with a terracotta accent, or a black background with neon green. Both are overused defaults.
- **Type:** one or two deliberately chosen families (not default system fonts), self-hosted and subset. Set a clear type scale with readable body text on small phone screens.
- **Imagery rules (from the project's communication risk plan):** lead with outcomes — compost, gardens, clean sites, people. Do not put close-ups of larvae in the hero or above the fold. Larvae may appear further down, small and well-framed, where they're explained.
- Illustrations of the unit and life cycle should be simple inline SVG.
- Motion: one orchestrated moment (the hero sequence). No fade-in on every section. Respect reduced motion.
- Avoid template tells: all-caps eyebrow labels above every heading, numbered markers on things that aren't sequences, identical rounded cards with soft grey shadows everywhere, arrows appended to every link.
- Write copy in plain, active, sentence-case language. Buttons say exactly what happens ("Send enquiry", then "Enquiry sent").

---

## 6. Youth4Climate branding rules (mandatory)

- Use **only the Youth4Climate logo**. **Never use the UNDP logo.**
- Use this statement exactly, alongside the logo:
  > This project is supported by Youth4Climate, an initiative of the United Nations Development Programme (UNDP) and the Italian Ministry of Environment and Energy Security.
- Follow the Y4C branding guidelines. Logo files go in `public/brand/y4c/` — `TODO: team to add official logo files`; use a clearly labelled placeholder box until then.

---

## 7. SEO and sharing

- Unique title and meta description per page.
- Open Graph and Twitter card images (placeholder generated from brand colours + logo text; no stock photos).
- `sitemap.xml`, `robots.txt`, structured data (`Organization`).

---

## 8. Suggested build order

1. Write a short design plan (tokens, type scale, wireframe of Home) in `DECISIONS.md`. Check it against section 5 and revise anything generic.
2. Scaffold Astro, layout, header, footer with Y4C block.
3. Home page including the hero sequence.
4. Host a unit page and form (with success/error states).
5. Remaining pages, content collections, `impact.json`-driven progress.
6. SEO, accessibility and performance pass on mobile; fix issues.
7. Write `TODO.md` listing every placeholder, and a project README with run and deploy steps.

## 9. Done means

- [ ] All pages build and work
- [ ] Forms submit (or fall back to mailto) with clear feedback
- [ ] Lighthouse mobile ≥ 90 for Performance, Accessibility, Best Practices, SEO
- [ ] No UNDP logo anywhere; Y4C statement present verbatim
- [ ] Every number on the site is either sourced (with link) or labelled as a target
- [ ] No invented testimonials, partners, photos or results
- [ ] `TODO.md` lists all placeholders for the team
