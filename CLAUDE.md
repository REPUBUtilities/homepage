# CLAUDE.md — The Republic Alliance Website

## Project Overview

This is a static single-page application (SPA) for **The Republic**, an alliance in the MMO game **Eve Online**.
The site serves as a public-facing presence: identity, recruitment, lore, and fleet/leadership information.

**Stack:** React + Vite · Tailwind CSS · Framer Motion · React Router (BrowserRouter)  
**Deploy target:** Nginx Docker image (self-hosted)  
**Repo:** https://github.com/REPUBUtilities/homepage

---

## Design Philosophy

### The Core Tension

Eve Online's aesthetic is cold, industrial, and corporate — deep space interfaces, angular HUDs, scanner readouts.
The Republic layers onto this a subtler register: _order, legacy, governance_. Think Roman senate translated into
a spacefaring civilisation. Star Wars Galactic Republic architecture. Clean. Authoritative. Old power wearing
new technology.

**The tone is: imperial minimalism.** Not chaos, not maximalism. Restraint with weight.

### What This Means in Practice

- Layouts should feel like classified briefing documents or institutional records — structured, deliberate
- Decorative elements should be sparse and purposeful: a rule line, a subtle glyph, a faint grid
- Animations are slow and composed, not flashy — fade-ins, slow reveals, no bouncing or elastic effects
- Typography carries the personality — pair a strong geometric display font with a clean monospace or sans-serif body
- The sci-fi HUD aesthetic from Eve Online is present but _understated_: thin borders, scan-line textures at low opacity, corner bracket motifs
- Republic references are _architectural_, not literal — no eagles slapped on banners, but structural symmetry, latin-derived section labels, ceremonial spacing

### What to Avoid

- Neon glow overload — use glow effects at max 1–2 key moments (e.g. CTA button, hero accent line)
- Particle storm backgrounds — subtle animated grid or slow nebula drift only
- Generic "gaming website" aesthetics — no lens flares, no generic HUD overlays
- Comic sans, gradient rainbows, busy textures
- Anything that looks like it was templated

---

## Colour Palette

```css
:root {
	--color-primary: #0a88cd; /* Ion blue — main interactive colour, links, highlights */
	--color-accent: #c052c3; /* Void purple — secondary accent, hover states, subtle glows */
	--color-navy: #012862; /* Deep Republic navy — section backgrounds, cards */
	--color-void: #090909; /* Near-black — primary background */
	--color-light: #f7f7f7; /* Off-white — body text, headings on dark */

	/* Derived utility tokens */
	--color-primary-dim: rgba(10, 136, 205, 0.12);
	--color-accent-dim: rgba(192, 82, 195, 0.1);
	--color-border: rgba(10, 136, 205, 0.25);
	--color-border-subtle: rgba(247, 247, 247, 0.07);
	--color-surface: rgba(1, 40, 98, 0.35); /* Glassmorphism card surface */
}
```

**Usage guidelines:**

- `--color-void` is the default page background
- `--color-navy` for raised surfaces (cards, nav, modals) — not solid fills, use with low opacity or as gradient termination
- `--color-primary` for all interactive elements and primary emphasis
- `--color-accent` used sparingly — one per section maximum, never adjacent to primary
- `--color-light` for all body copy; headings can use `#FFFFFF` at full weight
- Never use `--color-accent` as a background fill at full opacity

---

## Typography

```
Display / Hero:     Cinzel (Google Fonts) — Roman letterforms, authoritative, ceremonial
                    Use for: page title, section headers, alliance name
                    Weight: 400 or 600 only — never bold/700

UI / Body:          Space Mono (Google Fonts) — monospace, technical, clean
                    Use for: body copy, labels, metadata, nav items
                    Weight: 400 regular only

Data / Tags:        IBM Plex Mono (Google Fonts) — secondary monospace for stats, codes, callouts
```

**Scale (rem, base 16px):**

```
--text-xs:   0.65rem   /* labels, tags, metadata */
--text-sm:   0.80rem   /* secondary body, captions */
--text-base: 0.95rem   /* primary body */
--text-lg:   1.15rem   /* lead paragraphs */
--text-xl:   1.50rem   /* section subheadings */
--text-2xl:  2.25rem   /* section headings (Cinzel) */
--text-3xl:  3.50rem   /* hero subheading (Cinzel) */
--text-hero: clamp(4rem, 8vw, 7rem)  /* alliance name / hero display */
```

**Letter-spacing:** Cinzel headings should use `tracking-widest` or `letter-spacing: 0.15em–0.25em`.
Body copy in Space Mono should use `tracking-wide` (`0.05em`).

---

## Motion & Animation

Use **Framer Motion** for all entrance animations and interactive transitions.

### Principles

- Default easing: `[0.16, 1, 0.3, 1]` (expo out) — fast start, slow settle
- Duration: 0.6s–1.0s for reveals, never faster than 0.4s
- Stagger children: 0.08s–0.12s between items
- No spring physics on page elements — use `tween` for institutional composure
- Scroll-triggered reveals using Framer Motion `whileInView` with `once: true`

### Standard Variants (reuse across components)

```js
export const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
	},
};

export const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

export const revealLine = {
	hidden: { scaleX: 0, originX: 0 },
	visible: {
		scaleX: 1,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};
```

### Background Animation

- Hero: very slow drifting radial gradient or nebula-like mesh — movement cycle 20–30s, subtle
- Optional: faint 1px grid at 3–5% opacity, static or very slowly panning
- No particle systems, no WebGL unless explicitly requested

---

## Component Patterns

### Layout

- Max content width: `1200px`, centred
- Section padding: `py-24 md:py-32`
- No full-bleed sections except hero and divider bands

### Cards (e.g. leadership, fleet doctrine)

```
Background:   var(--color-surface) with backdrop-blur-sm
Border:       1px solid var(--color-border)
Corner:       Rounded 2px — almost square, institutional feel
Hover:        Border shifts to --color-primary at 0.5 opacity, subtle translateY(-2px)
```

### Buttons

```
Primary CTA:  bg transparent, border 1px --color-primary, text --color-primary
              Hover: bg --color-primary-dim, box-shadow 0 0 16px rgba(10,136,205,0.3)

Secondary:    border 1px --color-border-subtle, text --color-light at 70% opacity
              Hover: border --color-border, text at 100% opacity

Text link:    --color-primary with underline on hover only
```

### Decorative Elements

- **Corner brackets:** `[ ]` motif on key callout boxes — CSS pseudo-elements, not images
- **Section dividers:** a single 1px horizontal rule in `--color-border`, with optional short flanking lines (Roman altar rail aesthetic)
- **Section labels:** small-caps uppercase Cinzel at `--text-xs` in `--color-primary`, placed above section headings as an eyebrow label (e.g. `SENATUS — III`)
- **Glyph accent:** a single centred ornamental glyph (e.g. `✦` or `⬡`) in `--color-accent` at low opacity can mark major section transitions

---

## File & Folder Structure

The project root holds infrastructure files. The SPA lives entirely under `/repub`.

```
/                         ← project root (where CLAUDE.md lives)
  Dockerfile
  nginx.conf
  .dockerignore
  /repub                  ← SPA root
    package.json
    vite.config.js
    tailwind.config.js
    index.html
    /public               — static assets served as-is (favicon, og images)
    /src
      /assets             — logos, images, alliance emblem (imported in code)
      /components
        /ui               — Button, Card, Divider, Badge, Tooltip
        /layout           — Navbar, Footer, Section, PageWrapper
        /sections         — Hero, About, Leadership, Doctrine, Recruitment, Contact
      /hooks              — useScrollReveal, useActiveSection
      /lib
        variants.js       — Framer Motion shared variants (fadeUp, fadeIn, etc.)
        constants.js      — alliance data, nav links, colour tokens as JS
      /styles
        globals.css       — CSS custom properties, Tailwind base overrides
      App.jsx
      main.jsx
```

---

## Naming Conventions

- Components: **PascalCase** (`HeroSection.jsx`, `LeadershipCard.jsx`)
- Hooks: **camelCase** with `use` prefix (`useScrollReveal.js`)
- CSS classes: **Tailwind utilities only** — no custom class names except in `globals.css` for base elements
- Constants: **SCREAMING_SNAKE_CASE** for data constants, **camelCase** for config objects
- Files: match component name exactly

---

## Dev Commands

All commands run from `/repub`:

```bash
cd repub
npm run dev       # local dev server — http://localhost:5173
npm run build     # production static build → /repub/dist
npm run preview   # preview /repub/dist locally before deploying
```

---

## Sections (Page Structure)

1. **Hero** — Alliance name (Cinzel, hero scale), tagline, slow animated background, single CTA
2. **About** — Brief alliance identity and history. 2–3 paragraphs max. No walls of text.
3. **Values / Doctrine** — 3–4 card grid. Core tenets or fleet doctrines.
4. **Leadership** — Profile cards: portrait, name, title. Minimal. Institutional.
5. **Recruitment** — Requirements, how to apply, contact. Clear, no fluff.
6. **Footer** — Alliance name, external links (zkillboard, Discord, forums), copyright line.

---

## Tone of Voice (Copy)

- Formal but not cold — this is an institution, not a corporation
- No exclamation marks
- Sentences are complete and deliberate
- Latin or quasi-latin section labels are encouraged (e.g. _Imperium_, _Senatus_, _Legio_, _Pax_)
- In-universe voice where appropriate — speak as if the alliance exists in New Eden

---

## Eve Online Aesthetic References

- Eve Online's in-game UI: dark surfaces, thin blue-white borders, angular brackets, data readouts
- Jita trading hub aesthetics: dense, informational, no wasted space
- Caldari / Amarr ship design: clean geometric angularity, institutional authority
- Do NOT replicate Eve's UI literally — absorb the language, translate it into the web medium

---

## Republic Aesthetic References (Subtle)

- Roman Republic: symmetry, columns, rule of law — expressed through layout structure and spacing, not imagery
- Star Wars Galactic Republic: sleek senatorial architecture, cool tones, ordered grandeur
- Key: these are _felt_, not _seen_ — a visitor should sense authority and legacy without spotting a single eagle

---

## Deployment Notes

The site is packaged as an Nginx Docker image and deployed to a self-hosted server.

### Build & Container

```dockerfile
# Dockerfile (at project root)
FROM node:20-alpine AS build
WORKDIR /app
COPY repub/package*.json ./
RUN npm ci
COPY repub/ .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### Nginx Config (`nginx.conf`)

Required for SPA routing — all paths must fall back to `index.html`:

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Serve static assets with caching
    location ~* \.(?:js|css|woff2?|svg|png|ico|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # SPA fallback — all routes serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
```

### Routing

Use **`BrowserRouter`** (not `HashRouter`) — the Nginx config above handles fallback routing correctly,
so clean URLs like `/recruitment` and `/leadership` work without hash fragments.

### Vite Config

```js
// vite.config.js
export default {
	base: "/", // adjust only if serving from a subdirectory
};
```

### Docker Commands

```bash
# Build image
docker build -t the-republic-web .

# Run locally for testing
docker run -p 8080:80 the-republic-web

# Tag and push to your registry
docker tag the-republic-web your-registry/the-republic-web:latest
docker push your-registry/the-republic-web:latest
```

### Asset Paths

- All assets must be in `/repub/public` or imported via `/repub/src/assets` — no absolute paths
- Do not hardcode hostnames or ports anywhere in the frontend code

---

_Pro Patria Et Stellis._
