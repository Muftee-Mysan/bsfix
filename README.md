# BSFix website

Static website for BSFix, a youth-led climate project from Sri Lanka that uses Black Soldier Fly larvae to turn food waste into compost and animal feed. Built with [Astro](https://astro.build) and plain CSS.

- Original build brief: [`BRIEF.md`](BRIEF.md)
- Design decisions: [`DECISIONS.md`](DECISIONS.md)
- Placeholders the team still needs to fill: [`TODO.md`](TODO.md)

## Run it locally

Needs Node.js 22 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # builds the static site into dist/
npm run preview   # serves dist/ to check the build
```

## Updating content (no coding needed)

| What | Where |
| --- | --- |
| WhatsApp number, Instagram, form service, current phase, Y4C logo | `src/config.ts` |
| Progress numbers (kg diverted, people reached, …) | `src/data/impact.json` — change `value`; when a number is a real measured result, change `"status"` from `"target"` to `"measured"` |
| Deployment sites | `src/data/sites.json` |
| News posts | add a Markdown file to `src/content/updates/` (copy the existing one for the format) |
| Photos | `src/assets/photos/` — they are resized and converted to AVIF/WebP automatically at build time |

### Forms

Forms have no backend. Create a free form at [Formspree](https://formspree.io), then paste its URL into `formEndpoint` in `src/config.ts`. Until then, submitting a form opens the visitor’s email app with their answers filled in, addressed to the team email.

### Analytics

Off by default, and the site sets no cookies. To use [Plausible](https://plausible.io), set `plausibleDomain` in `src/config.ts`.

## Deploy

The build output in `dist/` is plain static files. Before the first deploy, set the real domain in `astro.config.mjs` (`site`) and `src/config.ts` (`url`).

**Netlify:** New site → import the repository → base directory `Webpage`, build command `npm run build`, publish directory `Webpage/dist`.

**Vercel:** New project → import the repository → root directory `Webpage`. Vercel detects Astro automatically.

**GitHub Pages (set up):** the workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`. In the repository, go to Settings → Pages → Source and choose **GitHub Actions** once. The workflow sets the site URL and the `/<repo>/` base path automatically; in code, always link internally with `u('/path/')` from `src/config.ts` so links keep working under that base path.

## Branding rules

- Only the Youth4Climate logo. **Never the UNDP logo.**
- The Y4C support statement (in `src/config.ts`, `y4cStatement`) must stay word-for-word.
- Every number on the site is either sourced with a link or labelled as a target.
