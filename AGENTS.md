# AGENTS.md — industrialairobots.com

Independent, source-cited reference for industrial robots, cobots and humanoids: spec database, comparisons, engineering calculators, guides. Strategy and roadmap: `docs/STRATEGY.md`. Handoff log: `HANDOFF.md`.

## Must read
- `docs/STRATEGY.md` before structural or scope changes.
- `CONTENT_UPDATE_GUIDE.md` before adding/changing/removing content.

## Commands
- `npm run dev` — local dev
- `npm run verify` — tests + `astro check` + build + `scripts/check-site.mjs` (must pass before commit)

## Rules
- No source, no number. Specs only from manufacturer pages; unknown = leave blank.
- URLs are permanent (see STRATEGY §3). Renames/deletions need owner approval and a 301.
- Don't edit `dist/`. Don't change `wrangler.jsonc` or Cloudflare settings without approval.
- Ads stay off (`SITE.ads.enabled` in `src/site.ts`) until the owner approves Phase 3.
- Calculator math lives in `src/lib/calc/` with tests; pages only wire inputs to it.

## Map
- `src/site.ts` — name, nav, ads switch
- `src/data/` — schema, brands, categories, robots per brand
- `src/lib/db.ts` — aggregation + validation (build fails on bad data); `format.ts` — spec labels/formatting (also used in browser)
- `src/lib/calc/` — calculators; `src/lib/tools.ts` — tool registry; `src/lib/urls.ts` — sitemap URL list
- `src/pages/` — routes; `src/content/guides/` — guides (Markdown)
- `public/_redirects` — old-site 301s; `public/ads.txt` — AdSense authorization (keep)
