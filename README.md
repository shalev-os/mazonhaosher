# Mazon HaOsher

The public website for [mazonhaosher.co.il](https://mazonhaosher.co.il), maintained in [shalev-os/mazonhaosher](https://github.com/shalev-os/mazonhaosher).

This is a Hebrew-only static React and TypeScript website built with Vite. It includes a warm cream brand palette, accessible navigation, a product gallery, and direct links to the bakery's WhatsApp and social profiles.

Orders and enquiries continue through WhatsApp. The website does not create accounts, store orders, collect newsletter subscriptions, or send analytics events. There is no administration panel, database, hosted backend, or required build-time environment variable.

## Development

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

Vite writes the static files to `dist/`. Serve that directory through IIS or another static web server with SPA fallback. IIS configuration is managed on the deployment server.

## Content and contact links

Edit the public components in `src/components/` and images in `src/assets/`. WhatsApp links are defined in `TopToolbar.tsx`, `Hero.tsx`, `FloatingCTA.tsx`, and `ProductGallery.tsx`.

The site uses Hebrew with right-to-left layout and a consistent light appearance throughout. It does not read or store a visitor theme preference. Changes to the repository are reviewed and built before production deployment.
