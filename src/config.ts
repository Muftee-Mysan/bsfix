// Site-wide settings. Non-developers: change values here, then rebuild.

// Prefix an internal path with the site's base path (e.g. '/bsfix' on GitHub Pages).
export const u = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const site = {
  name: 'BSFix',
  // Comes from `site` in astro.config.mjs (set by the GitHub Pages workflow).
  url: import.meta.env.SITE ?? 'https://example.com',
  email: 'demithamanawadu@gmail.com',

  // TODO: team WhatsApp number in international format, digits only, e.g. '94771234567'.
  // While empty, the site shows a visible placeholder instead of a WhatsApp link.
  whatsappNumber: '',

  // TODO: Instagram handle without '@' (account launches December 2026).
  instagramHandle: '',

  // Form service endpoint, e.g. 'https://formspree.io/f/abcdwxyz'.
  // While empty, forms fall back to opening the visitor's email app (mailto:).
  formEndpoint: '',

  // Which phase is running now. One of: 'design-build', 'phase-a', 'phase-b', 'final'.
  // Leave as null before the project starts in December 2026.
  currentPhase: null as null | 'design-build' | 'phase-a' | 'phase-b' | 'final',

  // Privacy-friendly analytics (Plausible). Off by default; set to your domain to enable.
  plausibleDomain: '',

  // Path to the official Youth4Climate logo inside /public, e.g. '/brand/y4c/y4c-logo.svg'.
  // TODO: team to add official logo files. While empty, a labelled placeholder box is shown.
  y4cLogo: '',
};

export const phases = [
  {
    id: 'design-build',
    name: 'Design and build',
    dates: 'Dec 2026 – Jun 2027',
    what: 'Prototype units built with local fabricators',
  },
  {
    id: 'phase-a',
    name: 'Phase A pilot',
    dates: 'Jul – Sep 2027',
    what: '4 full waste-to-compost cycles on our rented site; measured results',
  },
  {
    id: 'phase-b',
    name: 'Phase B public sites',
    dates: 'Jan – Sep 2028',
    what: 'Units at 3 public sites in and around Colombo, 8+ weeks each',
  },
  {
    id: 'final',
    name: 'Final results',
    dates: 'Oct – Dec 2028',
    what: 'Market research, business plan, final report',
  },
] as const;

export const y4cStatement =
  'This project is supported by Youth4Climate, an initiative of the United Nations Development Programme (UNDP) and the Italian Ministry of Environment and Energy Security.';

export const whatsappHref = (text = '') =>
  site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`
    : '';
