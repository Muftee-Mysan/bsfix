# Design decisions

Short design plan, written before building and checked against section 5 of `BRIEF.md`.

## Stack

Astro (static output) with plain CSS custom properties, as the brief asks. No UI kit. The only client-side JavaScript is:

- the hero "follow 50 kg of food waste" sequence (about 2 KB),
- form submission with success/error states (about 1.5 KB).

Both work without JavaScript: the hero shows all four steps as a list, and the forms post to the form service or fall back to `mailto:`.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--soil` | `#2A2119` | Body text, dark surfaces (footer, hero sequence stage) |
| `--green` | `#1F6B4A` | Primary buttons, headings accents |
| `--teal` | `#2C7A8C` | Links, focus ring, interactive states (the BSF wing sheen) |
| `--teal-dark` | `#1E5866` | Link text on light backgrounds (AA contrast at small sizes) |
| `--leaf` | `#CFE3B0` | Highlights, "current phase" marker, target bars |
| `--rain` | `#F5F7F2` | Page background |
| `--compost` | `#5B4636` | Secondary text on light surfaces |

The wing sheen appears once, as a teal-to-green gradient on the hero sequence's progress rail. It is not used as a decoration everywhere.

## Type

- Headings: **Bricolage Grotesque** (variable, self-hosted via Fontsource). Slightly irregular, earthy grotesque; reads as hand-made rather than corporate.
- Body: **Atkinson Hyperlegible** (400/700, Latin subset). Designed for legibility, which matters on small phones and for readers with low vision.
- Scale (mobile → desktop, `clamp`): body 1.0625rem; h3 1.25rem; h2 1.6 → 2.2rem; h1 2.1 → 3.4rem. Line length capped at ~65ch.

## Home wireframe (mobile first)

```
[logo]                         [Menu]
-----------------------------------
We turn food waste into compost and
animal feed, right where it's thrown away.
[Host a BSFix unit] [How it works]

┌ dark soil stage ───────────────────┐
│  Follow 50 kg of food waste         │
│  (SVG scene changes per step)       │
│  1 Waste in · 2 Larvae feed ·       │
│  3 Compost + larvae · 4 Garden/farm │
│  [Replay]                           │
└────────────────────────────────────┘
The problem in Colombo (2 sourced figures)
How a BSFix unit works (4-tier SVG + 3 lines)
Who it's for (3 blocks, different layouts per width)
Progress (impact.json; targets clearly labelled)
Recognition (real photos from the team, small)
Supported by Youth4Climate
```

## Checks against section 5

- No cream + terracotta, no black + neon. Background is the cool rain-washed off-white.
- No all-caps eyebrow labels. Numbered markers only on the hero sequence and life cycle, which are real sequences.
- Cards are not used as the default container. Sections are separated by background changes and rules, not identical rounded cards with grey shadows.
- Links are plain underlined text; no arrows appended.
- No larvae photos at all. Larvae appear only as small, simple shapes inside the unit illustration further down and in the hero's second step.
- The hero leads with an outcome (compost, garden, farm) and the team's real photos sit lower down.
- One orchestrated motion moment (the hero sequence). It auto-plays once and does not move at all under `prefers-reduced-motion`.

## Photos

The team supplied five photos. Four are used (team site visit, SLIoT 2025 stage photo, SPARK announcement, IESE Grant Scheme). The SLIoT poster duplicates the stage photo and is kept in `src/assets/photos/` but not shown. All photos go through `astro:assets` and ship as AVIF/WebP with `srcset`, lazy-loaded below the fold.

## Config

Everything the team will need to change lives in `src/config.ts` (form endpoint, WhatsApp number, current phase, Instagram, analytics flag) or in `src/data/*.json` and `src/content/updates/*.md`.
