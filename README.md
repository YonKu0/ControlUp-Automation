# ControlUp Automation – Playwright + TypeScript

[![CI](https://github.com/YonKu0/ControlUp-Automation/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/YonKu0/ControlUp-Automation/actions/workflows/ci.yml)

Production-grade Playwright framework for UI (Sauce Demo) and API (Airport Gap).

## Setup

```bash
npm i
npm run typecheck
npm run lint
npx playwright install
```

Optional environment via `.env` (see `src/utils/env.ts`):

```bash
UI_BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://airportgap.com
HEADLESS=true
```

## Run tests

- UI only: `npm run test:ui`
- API only: `npm run test:api`
- All: `npm run test:all`
- Headed: `npm run test:headed`
- HTML report: `npm run test:report`

Filter by tag: `npx playwright test --grep @ui` or `--grep @api`.

## Design

- POMs under `src/pages` expose intent methods
- API client under `src/api` wraps Playwright request
- Fixtures provide typed clients/pages and login flow
- Config in `src/config/urls.ts` and `src/utils/env.ts`

## Scenarios

UI (Sauce Demo):
- Inventory shows 6 items
- Add first item -> cart badge 1

API (Airport Gap):
- GET `/api/airports` length = 30
- Includes: Akureyri Airport, St. Anthony Airport, CFB Bagotville
- POST `/api/airports/distance` KIX-NRT km > 400

Docs for discoverability:
- Sauce Demo: `https://www.saucedemo.com/`
- Airport Gap API: `https://airportgap.com/#/api`

## CI

GitHub Actions workflow runs lint, typecheck, API, and UI (chromium) and uploads HTML report.
