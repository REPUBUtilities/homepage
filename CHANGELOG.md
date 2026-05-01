# Changelog

All notable changes to this project are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

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
