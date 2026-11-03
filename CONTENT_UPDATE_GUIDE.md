# Content update guide

Read fully before adding, changing, merging or deleting content.

## Adding a robot

1. Find the manufacturer's own page or datasheet. Do **not** use distributor, marketplace or spec-aggregator sites as sources.
2. Add an entry to the right file in `src/data/robots/` (one file per brand or group). New file → register it in `ALL` in `src/lib/db.ts`. New brand → add to `src/data/brands.ts`.
3. Fill only the fields the source states. Leave others out. Put manufacturer qualifiers in `specNotes`, extra facts in `notes`.
4. `summary`: 1–2 factual sentences, 40–260 characters, no marketing adjectives.
5. `sources[].retrieved` and `updated` = today's date (YYYY-MM-DD).
6. `status`: `production`, `early-access`, `preliminary` (manufacturer says so), or `discontinued`.
7. Slugs are permanent: lowercase kebab-case of the model name (`m-20id-25`, `ur12e-1300`). Never rename after publishing; add a 301 in `public/_redirects` if you must.

## Updating a robot

Re-read the source, change values, update `retrieved` and `updated`. If the manufacturer replaced the model (e.g. UR5e → UR7e), keep the old entry with `status: 'discontinued'` only if you have a source for its specs; otherwise do not invent one.

## Adding a calculator

1. Pure function in `src/lib/calc/<name>.ts` with JSDoc on every input (units!).
2. Tests in `tests/calc.test.ts` against hand-worked numbers.
3. Page in `src/pages/tools/<slug>.astro` using `ToolPage` + `Field`; show the formula and the limits.
4. Register in `src/lib/tools.ts` (feeds hub, home, footer, sitemap).
5. Standards: name the edition (e.g. ISO 13855:2010) and say if a newer edition exists.

## Adding a guide

Markdown in `src/content/guides/<slug>.md`, frontmatter per `src/content.config.ts` (title ≤ 70, description 70–160, topic, dates, sources). Link to robot pages and tools. Every number needs a source in the frontmatter list or a link in the text. No fabricated case studies, prices, cycle times or customer names.

## Deleting or renaming

Needs the owner's approval. Add a 301 in `public/_redirects` to the closest real equivalent; if none exists, let it 404.

## Before commit

`npm run verify` (tests + type check + build + check-site) must pass.
