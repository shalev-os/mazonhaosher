# מזון האושר

The public website for [mazonhaosher.co.il](https://mazonhaosher.co.il), maintained in [shalev-os/mazonhaosher](https://github.com/shalev-os/mazonhaosher).

This is a static React and TypeScript website built with Vite. It includes the existing brand design, five languages, theme preferences, accessible navigation, and direct links to the bakery's WhatsApp and social profiles.

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

Edit the public components in `src/components/`, translation strings in `src/contexts/LanguageContext.tsx`, and images in `src/assets/`. WhatsApp links are defined in `Hero.tsx` and `FloatingCTA.tsx`.

Language and theme preferences are stored only in the visitor's browser. Changes to the repository are reviewed and built before production deployment.
