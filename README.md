# The Republic — Alliance Homepage

Public-facing website for **The Republic**, an alliance in [Eve Online](https://www.eveonline.com). Covers alliance identity, membership information, leadership, and corporation recruitment.

## Stack

- **React 19** + **Vite** — SPA
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations
- **Eve ESI API** — live capsuleer and corporation counts

## Prerequisites

- [Node.js](https://nodejs.org) 20+
- [Docker](https://www.docker.com) (for container builds)

## Local Development

```bash
cd repub
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production Build

```bash
cd repub
npm run build       # outputs to repub/dist
npm run preview     # preview the built output locally
```

## Docker

Build and run the Nginx container locally:

```bash
docker build -t the-republic-web .
docker run -p 8080:80 the-republic-web
```

The site is then available at `http://localhost:8080`.

## CI/CD

Pushing to `main` triggers a GitHub Actions workflow that builds and publishes the Docker image to the GitHub Container Registry:

```text
ghcr.io/reputilities/homepage:latest
```

Each build is also tagged with its short commit SHA for traceability.

### Deploying on a server

Authenticate once:

```bash
echo <TOKEN> | docker login ghcr.io -u <github-username> --password-stdin
```

Then pull and run:

```bash
docker pull ghcr.io/reputilities/homepage:latest
docker run -d -p 80:80 --restart unless-stopped ghcr.io/reputilities/homepage:latest
```

## Project Structure

```text
/
├── Dockerfile
├── nginx.conf
├── .github/
│   └── workflows/
│       └── docker.yml
└── repub/                  # SPA root
    ├── public/             # Static assets (images, favicon)
    └── src/
        ├── components/
        │   ├── layout/     # Navbar, Footer, Section
        │   ├── sections/   # Page sections (Hero, About, etc.)
        │   └── ui/         # Button, Card, Divider
        ├── hooks/          # useActiveSection, useAllianceStats
        ├── lib/            # constants.js, variants.js
        └── styles/         # globals.css
```

## License

All rights reserved. Eve Online and related assets are property of [CCP Games](https://www.ccpgames.com).
