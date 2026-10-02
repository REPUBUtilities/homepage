# Changelog

All notable changes to this project are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Changed

- Website now follows The Republic styleguide in the **Republic · Blue** look only (not the joint Republic · Helios look)
- Replaced the textured logo and Vite favicon with the Republic falcon emblem (`/falcon-republic-blue.png`); navbar and footer carry a falcon + `THE REPUBLIC` lockup
- Typography: IBM Plex Sans for body copy; Space Mono (uppercase) for eyebrows, nav, buttons and labels; Cinzel 600 for headings, never below 18px
- Palette: ground `#05070b`, surface `#061428`, rule `#1c2942`, ink `#d9dee8`, muted `#7f8ca3`; ion blue `#0a88cd` only; void purple removed from view
- Hero: drifting nebula and faint grid replace the photograph; faint falcon watermark; altar-rail divider; motto set as a muted signature line
- Dividers are now altar rails (hairline with short brand flanks); corner brackets added to the About statistics block
- Glow limited to the primary call to action; tool pill and other non-seal shapes no longer round
- Reduced-motion preference respected

## [2.0.0] — 2026-05-01

### Overview

Complete rewrite of the alliance homepage. The original static HTML/CSS site has been replaced with a React SPA, a Docker-based deployment pipeline, and CI/CD via GitHub Actions.

### Added

- React 19 + Vite SPA under `/repub`, replacing the previous static site
- Tailwind CSS v4 and Framer Motion for styling and animations
- **Hero section** — full-screen background image with alliance name, tagline, and CTA
- **About section** — alliance description based on Pax Ludos, with live capsuleer and corporation counts from the Eve ESI API
- **Membership section** — six-card grid covering combat, industry, expansion, community, training, and vision; illustrated with CCP official artwork
- **Leadership section** — director profiles with portraits pulled live from the Eve image server
- **Member Corporations section** — list of member corporations with modal detail view
- **Corporation CTA section** — contact prompt for corporations interested in joining the alliance
- **Navbar** — fixed header with active section tracking and animated link underlines
- **Footer** — alliance branding and external links
- Dockerfile and Nginx config for containerised deployment
- GitHub Actions workflow to build and push the Docker image to `ghcr.io/reputilities/homepage` on every push to `main`

### Removed

- Previous static `index.html` and `styles.css` site

---

## [1.0.0] — 2024

Initial static site.
