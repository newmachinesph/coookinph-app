# Coookin.ph App

The web application for Coookin.ph — a Filipino home cook marketplace where customers can browse cooks, order homemade meals, and connect with local food makers. Built with Next.js and a full commerce feature set.

## Overview

Coookin.ph App is the customer-facing platform of the Coookin.ph ecosystem. Users can discover home cooks (ulam), browse menus, place orders, manage favorites, and communicate with cooks through messaging.

## Features

- Browse home cooks and ulam (Filipino dishes)
- Menu browsing and item details
- Order placement and checkout (Stripe)
- User account and profile management
- Favorites and saved cooks
- In-app messaging between customers and cooks
- Search and discovery
- Multi-language support (i18n)
- Authentication (Clerk)

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Auth | Clerk |
| Database | PostgreSQL (Neon), Drizzle ORM |
| Payments | Stripe |
| Styling | Tailwind CSS |
| i18n | next-intl |
| Analytics | PostHog, Sentry |
| Testing | Vitest, Playwright (E2E) |
| CI/CD | GitHub Actions, Semantic Release |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   └── [locale]/
│       ├── (auth)/       # Login and registration
│       ├── (marketing)/  # Landing page
│       ├── ulam/         # Browse dishes/cooks
│       ├── menu/         # Cook menu pages
│       ├── order/        # Order flow
│       ├── checkout/     # Checkout and payment
│       ├── favorites/    # Saved cooks
│       ├── messages/     # Customer-cook messaging
│       └── account/      # User account
├── components/           # Shared UI components
├── data/                 # Static menu and cook data
├── libs/                 # DB, auth, and utility libraries
├── locales/              # i18n translation files
└── validations/          # Zod schemas

migrations/               # Drizzle migrations
```

## Testing

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e
```

## License

Private — all rights reserved.
