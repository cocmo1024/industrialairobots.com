# SEO plan — industrialairobots.com

Owner's direction (2026-11-03): **submit only high-value pages to Google; plan for the long term; become the industry hub and a powerful tool.**
This plan sits under `docs/STRATEGY.md`. Review it every quarter against Search Console data.

## 1. Positioning in search

Become the page Google and AI answer engines trust for **"which robot, what specs, will it work in my cell"**:

| Search intent | Our asset | Example queries |
|---|---|---|
| Model specs | Robot pages | "crx-10ia payload", "ur20 reach", "unitree h2 price" |
| Shortlisting | Type hubs, finder, brand hubs | "20 kg cobot", "humanoid robots for factories", "fanuc cobot models" |
| Comparison | Compare tool → later static comparison pages | "ur10e vs crx-10ia", "ur20 vs ur30" |
| Engineering | Calculators | "robot roi calculator", "suction cup size calculator", "pallet pattern calculator", "light curtain safety distance" |
| Understanding | Guides | "robot repeatability vs accuracy", "how much does a robot cell cost" |

Moat = verified data + working tools + the links between them. Pages that only restate what others say do not get written.

## 2. Indexation policy (enforced in code)

Only pages that would satisfy a searcher go into the sitemap and are indexable. Everything else stays live and linked for visitors, with `noindex, follow`.

| Page type | Indexed when | Code |
|---|---|---|
| Robot page | quality score ≥ 5 (published spec fields + up to 2 extra sourced facts) | `isIndexable()` in `src/lib/db.ts` |
| Brand hub | ≥ 2 indexable models | `brandIndexable()` |
| Type hub | ≥ 3 indexable models | `categoryIndexable()` |
| Guides hub | ≥ 3 guides | `src/pages/guides/index.astro` |
| Tools, guides, home, finder, compare, about, methodology | always | `src/lib/urls.ts` |
| Contact, privacy, terms, 404 | never | `noindex` |
| Compare with `?r=` parameters | canonical to `/compare/` | `Base.astro` |

`scripts/check-site.mjs` fails the build if a noindex page is in the sitemap or an indexable page is missing from it. Thin robot pages become indexable automatically once their data is enriched — no manual sitemap edits.

Submission: only `https://industrialairobots.com/sitemap.xml` is submitted in Search Console. `npm run indexnow` submits the same list to IndexNow (Bing etc.) after significant updates. Do not use "Request indexing" for thin pages.

## 3. Hub architecture and internal links

```
Home ─┬─ Robot finder ─┬─ Type hubs ── Robot pages ──┐
      │                └─ Brand hubs ── Robot pages ─┤── Compare (prefilled)
      ├─ Tools ── each tool links to robots filtered by its result (e.g. payload) 
      └─ Guides ── link into robots, types and tools
```

Rules:
- Every robot page links to its brand, type, similar models, compare and the relevant tools.
- Every tool links back to robots (payload → finder filter) and to the guide that explains it.
- Every guide links to at least 3 robot/tool pages it talks about.
- No orphan pages: `check-site` already catches broken links; add an orphan check when the site passes ~150 pages.

## 4. Roadmap (12 months)

**Months 0–2 — Data depth (now).**
- Grow to 100+ models, prioritizing families people search: FANUC CRX/LR Mate/M/R, UR e-Series/UR Series, ABB GoFa/IRB, KUKA KR/LBR, Yaskawa GP/HC, Doosan, Techman, Epson/Denso SCARA, humanoids with official specs.
- Enrich thin entries from official datasheets (PDF) so they pass the index threshold: repeatability, weight, IP and wrist moment for Yaskawa and KUKA.
- Tools: payload/wrist-moment check (needs per-model wrist data), gripper force for mechanical grippers, conveyor tracking, robot energy cost.
- Guides (one per week, each tied to tools/data): cobot vs industrial robot; robot cell cost breakdown; repeatability vs accuracy; ISO 10218:2025 changes; ISO/TS 15066 explained; humanoid robots in factories — status by company.

**Months 2–4 — Search fit.**
- Search Console: find queries with impressions at positions 8–30 and improve those pages first (titles, missing specs, FAQ blocks from real questions).
- Static `/compare/<a>-vs-<b>/` pages only for pairs with measurable search demand (GSC or Keyword Planner), each with a written verdict; never auto-generate all pairs.
- Application hubs (`/applications/palletizing/`, `/machine-tending/`, `/welding/`) joining robots + tools + guides.

**Months 4–8 — Become the reference.**
- Humanoid deployment log: dated, sourced entries of pilots and commercial deployments — a page journalists and analysts can cite.
- Embeddable calculators (`/embed/<tool>/`, noindex) for integrators and distributors — each embed links back.
- Data releases: quarterly "cobot market by payload/reach" built from our dataset → outreach to trade press.

**Months 8–12 — Hub for buyers.**
- Integrator directory and "get matched with an integrator" lead form (needs owner approval; RFQ backend).
- Manufacturer data-submission flow (free, verified, never paid placement).

## 5. Links and authority (compliant only)

Same rules as the owner set for metal3dpowder.com (2026-10-26): no PBNs, paid links, fake accounts or parasite pages.
- Linkable assets: the open dataset (CC BY), calculators, the humanoid deployment log.
- Outreach: robotics forums and subreddits answering real questions with a tool link, engineering course pages, trade press data stories, integrators who embed tools.
- Corrections from manufacturers are welcome and logged — accuracy is the reputation.

## 6. Technical SEO checklist (each release)

- `npm run verify` passes (titles ≤ 70, descriptions 50–160, one H1, canonical, links, sitemap consistency).
- Structured data: Product + BreadcrumbList on robots, Dataset on the finder, WebApplication on tools, Article on guides. Test new templates in Google's Rich Results Test.
- Core Web Vitals: static HTML, no client framework, fonts self-hosted; keep JS per page small.
- `www` → apex 301 (Cloudflare redirect rule, done 2026-11-03). HTTPS only.
- English only until GSC shows demand from specific countries; then translate the highest-traffic tools first.

## 7. Measurement

Monthly, in `_记录/industrialairobots.com/`:
- GSC: clicks, impressions, indexed pages vs sitemap pages, top queries per page type.
- Ratio indexed / submitted should stay > 90%. If Google ignores pages ("Crawled – currently not indexed"), raise the quality bar, not the page count.
- Tool usage (later: privacy-friendly event counter, as on sensorcatalog.com).

Review / exit condition (from STRATEGY.md): if after ~6 months of Phase 1 content organic clicks are < 3k/month, narrow scope to cobots + humanoids before investing in monetization.
