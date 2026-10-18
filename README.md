# Coookin.ph App

![License: MIT](https://img.shields.io/badge/license-MIT-green) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

A mobile-first front-end prototype for Coookin.ph, a Filipino home-cook marketplace where customers browse local cooks and their homemade dishes (ulam). Built on the MIT-licensed [Next.js Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) by Remi W.

## Status

The app is a UI prototype. Cooks, menus and messages are static sample data in `src/data`; the order, checkout, favorites, messages and account pages are screens without a backend. Authentication (Clerk) and the Drizzle/PostgreSQL setup come from the boilerplate (the database only holds its demo counter table).

## Pages

Home, about, portfolio, cook profiles (`/[slug]`), menu, ulam, search, order, checkout, favorites, messages, account, plus Clerk sign-in/sign-up and a dashboard. English and French locales via next-intl.

## Stack

Next.js (App Router, Turbopack), React 19, TypeScript, Tailwind CSS, Clerk, Drizzle ORM with PostgreSQL, next-intl, Sentry, PostHog, Arcjet, Vitest, Playwright, Storybook.

## Getting started

Requires Node.js 20+.

```bash
npm install
cp .env .env.local   # then set CLERK_SECRET_KEY and your Clerk publishable key
npm run dev
```

Open http://localhost:3000. Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm run check-types`, `npm test`, `npm run test:e2e`, `npm run storybook`.

## Structure

```
src/app/[locale]/   routes (auth, marketing, menu, order, checkout, favorites, messages, account, search, ulam)
src/components/     UI components
src/data/           static cook and menu data
src/libs/           DB, env, i18n, logging, Arcjet
src/locales/        translations (en, fr)
migrations/         Drizzle migrations
```

## License

MIT. See [LICENSE](LICENSE).
