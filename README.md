# Writing Desk

A static index page with one hard-coded published note ("Why I paused mass templates"). You can search it and
filter by Draft or Published. The page itself states it has no editor, CMS, publishing pipeline or private drafts.

Status: the portfolio card is marked **Experiment**; archiving this repository is recommended (see below). It is
kept buildable and checked by CI, but not developed further.

Live: https://writing.bookchaowalit.com (deployed by Vercel CLI; the last production deploy is from 2026-08-24, so it
lags `main`).

## What it does not do

- No editor, word count, focus mode, auto-save, MDX export or publishing. No storage or account.
- `/api/mcp` answers `initialize` and an empty `tools/list` and rejects tool calls: there is nothing to expose.

## Run

```bash
npm ci
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

CI (`.github/workflows/ci.yml`) runs the shared Node workflow (lint, typecheck, build) and the shared security scan on
every push and PR to `main`. There are no tests (archive recommended, so the repo stays at L1).

## Archive recommendation (2026-10-23)

- Card `writing` in `portfolio-site-web/docs/audits/CARD-CLAIMS-REVIEW-2026-10.md` was downgraded Live→Experiment:
  "a static list of one hard-coded entry ... no editor or publishing pipeline".
- One entry, one page (`app/page.tsx`); the same search-and-filter list pattern is already shown, with more content,
  by `content-reading-web`.
- Owner decision; nothing is archived by this change.
