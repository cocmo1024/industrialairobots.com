# industrialairobots.com — Strategy and top-level design

Decided 2026-11-03 when the old Starlight article site (70 URLs, generic deployment essays) was retired.
This file is the reference for every later decision. Change it deliberately, not by drift.

## 1. Goal

Become the **independent, source-cited reference for choosing industrial robots and physical-AI machines** —
the place an engineer or buyer in the US/EU lands when they search a model name, a spec question or a cell-design calculation.

Success = high-intent organic traffic (model names, comparisons, specs, calculators), repeat use by engineers,
links/citations from forums, integrators and AI answer engines — then monetization on top of that audience.

Not the goal: news churn, generic "what is a robot" essays, raw pageview volume.

## 2. Why this shape (facts vs. judgments)

- **Fact:** The highest-intent robot searches are model and spec queries ("UR20 payload", "CRX-10iA vs UR10e", "Unitree G1 price") and calculator queries ("robot ROI calculator", "suction cup size calculator", "ISO 13855 safety distance").
- **Fact (2026-11-03 search):** Spec data online is inconsistent — third-party humanoid directories disagree on Digit's height/weight/payload; distributor pages disagree on ABB GoFa repeatability. Several thin "humanoid directory" sites exist on pages.dev.
- **Judgment:** The open niche is *trustworthy* data: manufacturer-only sources, dated, gaps left blank. That is defensible (hard to copy well), earns links, and is what AI answer engines prefer to cite.
- **Judgment:** Calculators are durable assets: evergreen, linkable, and the sister site sensorcatalog.com shows the pattern works for this owner.
- **Assumption to test:** humanoid/physical-AI interest brings volume; industrial arms/cobots bring buyer intent. We serve both from one database.

## 3. Product pillars (URL structure is fixed — do not change URLs once published)

| Pillar | URL | What it is | Status |
|---|---|---|---|
| Robot database | `/robots/`, `/robots/<brand>/`, `/robots/<brand>/<model>/` | One page per model; finder with filters | Live, 12 models |
| Types | `/types/`, `/types/<type>/` | Category hubs with spec tables (cobots, industrial-robots, humanoid-robots, scara-robots, delta-robots, mobile-manipulators) | Live for types with data; empty types get no page |
| Brands | `/brands/` | Manufacturer index | Live, 6 brands |
| Compare | `/compare/?r=a,b,c` | Client-side compare, canonical `/compare/` | Live |
| Tools | `/tools/<slug>/` | Calculators, formulas shown, unit-tested | Live, 4 tools |
| Guides | `/guides/<slug>/` | Source-cited explainers linking data and tools | Live, 1 guide |
| Open data | `/data/robots.json` | Full dataset, CC BY 4.0 | Live |
| Trust | `/methodology/`, `/about/`, `/contact/` | Sourcing rules, corrections | Live |

Reserved for later phases (create only when there is real data behind them):
- `/compare/<a>-vs-<b>/` — static comparison pages for pairs people actually search (from GSC / Keyword Planner), with written analysis. Not auto-generated for every pair.
- `/applications/<slug>/` — palletizing, machine tending, welding, bin picking: application hubs that join robots + tools + guides.
- `/humanoids/deployments/` — dated, sourced log of humanoid pilots and commercial deployments.
- `/integrators/` — directory (only with verified data; a monetization lever).
- `/glossary/`.

## 4. Data rules (enforced in code)

- Specs only from manufacturer pages/datasheets/manuals. Each robot has ≥1 source with URL + retrieval date (`src/lib/db.ts` `validate()` fails the build otherwise).
- Value not stated → field left undefined → page shows "Not stated by the cited source".
- Manufacturer qualifiers go into `specNotes` ("about 35 kg with battery").
- `status`: production / early-access / preliminary / discontinued — as the manufacturer states it.
- No prices unless the manufacturer publishes them.
- Re-check entries yearly or when a model update is announced; update `updated` and `retrieved`.

## 5. Phased roadmap

**Phase 0 — Framework (done 2026-11-03).** Architecture, data model with validation, 12 seed models, 4 calculators, 1 guide, compare, finder, sitemap/llms.txt/JSON dataset, old URL redirects, post-build checks.

**Phase 1 — Coverage (next 4–8 weeks).** Target 80–150 models, prioritizing search demand:
1. Cobots: full UR e-Series/UR Series, FANUC CRX family, ABB GoFa/SWIFTI, KUKA LBR iisy, Doosan, Techman, Yaskawa HC, Kassow, Elite, JAKA, Aubo.
2. Industrial arms most searched: FANUC M/R/LR Mate, ABB IRB 1200/2600/4600/6700, KUKA KR AGILUS/QUANTEC, Yaskawa GP, Kawasaki, Epson/Denso SCARA.
3. Humanoids: Figure, Apptronik Apollo, Tesla Optimus (only official statements), UBTech Walker S, Fourier, Agibot, 1X, Unitree H2 — only manufacturer-published figures.
Add fields as needed (wrist moment/inertia, stopping data links, controller, price).
Also: 4–6 more calculators (payload/wrist moment check, palletizing pattern & pallet count, gripper force for mechanical grippers, conveyor tracking speed, robot energy cost) and 6–10 guides (cost of a robot cell, cobot vs industrial robot, humanoid robots in factories — status 2026, ISO 10218 2025 revision overview, ISO/TS 15066 explained).

**Phase 2 — Search fit (after GSC data, ~8–12 weeks).** Use GSC + Keyword Planner to pick static `/compare/a-vs-b/` pages and application hubs. Tune titles. Build the humanoid deployment log.

**Phase 3 — Monetization (only after depth exists).**
1. AdSense on database/tool pages (switch `SITE.ads.enabled`; ads.txt is already live). Keep ads out of calculator result panels.
2. Lead generation: "Get integrator quotes" / robot selection help form → sell or route to integrators (needs RFQ endpoint; owner approval required per workspace rules).
3. Sponsored listings for manufacturers/integrators, clearly labeled; listing itself stays free and unpaid.
4. Embeddable calculators / data licensing (pattern from sensorcatalog.com `/embed/`).

Exit / review conditions: if after ~6 months of Phase 1 content the site has < 3k monthly organic clicks, reassess the database scope (narrow to cobots + humanoids) before investing in Phase 3.

## 6. Technical design

- Astro 7 static site, TypeScript strict, no UI framework; vanilla TS in `<script>` for interactivity.
- Data in TS files per brand group: `src/data/robots/*.ts`, registered in `src/lib/db.ts`.
- Calculator math in `src/lib/calc/*.ts` (pure functions, Vitest) — the same code runs in the browser.
- `src/lib/urls.ts` = single list of indexable URLs → sitemap and checks.
- `scripts/check-site.mjs` = post-build gate: one H1, title ≤ 70, description 50–160, canonical, broken internal links, sitemap ↔ pages, redirect targets.
- Hosting: Cloudflare (Worker `industrialairobots`, static assets from `dist/`, `wrangler.jsonc` unchanged). `public/_redirects` holds old-URL 301s.
- English only for now. Add languages only where GSC shows demand (lesson from sensorcatalog.com/metal3dpowder.com).

## 7. Open items needing the owner

- `www.industrialairobots.com` serves 200 (duplicate host). Needs a Cloudflare redirect rule www → apex (Cloudflare settings change: owner approval).
- Confirm GSC property and resubmit `https://industrialairobots.com/sitemap.xml`.
- Contact email currently `cqq365@gmail.com` (carried over from old site) — confirm or replace.
