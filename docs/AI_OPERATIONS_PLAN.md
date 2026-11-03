# One-year AI operations plan — industrialairobots.com

Period: **2026-11 → 2027-10**. Written 2026-11-03 at the owner's request: the site is run end to end by AI (Claude), with the owner as approver and account holder.
Parent documents: `docs/STRATEGY.md` (what and why), `docs/SEO_PLAN.md` (search and indexing). This file is the **how and when**.

---

## 1. Operating model

### Who does what

| Area | AI (Claude) does | Owner does |
|---|---|---|
| Data | Finds manufacturer sources, adds/updates robots, re-verifies yearly, logs conflicts | Nothing routine; resolves rare disputes with manufacturers |
| Tools | Designs, codes, tests calculators; fixes bugs | Approves tools that touch safety standards before first publish (optional) |
| Content | Writes source-cited guides; updates them when standards or products change | Spot-reads 1 guide a month |
| SEO | Sitemap, indexing rules, titles, internal links, GSC review, IndexNow | Keeps GSC/Bing access working |
| Engineering | Code, tests, deploys (push to main), Cloudflare rule changes already approved | Approves new paid services, `wrangler.jsonc`, RFQ/lead forms, deleting URLs |
| Outreach | Drafts posts, data stories, emails to manufacturers/press | Sends or posts under a real name (AI never posts as a person) |
| Money | Prepares ad and lead-gen setups, reports revenue | Turns on AdSense placements, signs partner deals, handles payments |

### Hard rules for AI operation (never relaxed)

1. **No source, no number.** Manufacturer pages and datasheets only. Conflicts are shown, not resolved by guessing.
2. **No fabricated** case studies, customers, prices, test results, reviews, authors or credentials. The site is labeled as independent and AI-assisted on `/about/` and `/methodology/`.
3. **Quality over count.** Thin pages stay `noindex` (rule in `src/lib/db.ts`); never publish pages just to grow page count.
4. **Every change passes `npm run verify`** before push; every push is checked live (status, canonical, sitemap).
5. **Compliant SEO only:** no paid links, PBNs, fake accounts, comment spam or parasite pages.
6. Anything irreversible or outward-facing under the owner's name needs the owner's yes (see table above).

---

## 2. Cadence

| When | AI task | Output |
|---|---|---|
| **Every working session** | Pull, read HANDOFF.md, do the planned batch, verify, push, check live, update HANDOFF.md | Commit + HANDOFF entry |
| **Weekly (Mon)** | Add 10–15 robots (or enrich thin ones to pass the index bar); 1 guide or tool improvement; IndexNow for changed URLs | Weekly batch commit |
| **Weekly (Thu)** | GSC check: new queries, pages 8–30, crawl/index errors; fix quick wins | Note in `_记录/…/周报_YYYYMMDD.md` |
| **Monthly (1st week)** | Source audit (`npm run check:sources`): broken or moved manufacturer links → re-verify those robots; dependency updates; Core Web Vitals check | Monthly report in `_记录` |
| **Monthly** | One new calculator *or* one major feature (see calendar) | Release |
| **Quarterly** | Strategy review against KPIs; adjust SEO_PLAN; data story for outreach | Updated STRATEGY/SEO_PLAN |
| **Yearly per robot** | Re-read every source; update `retrieved`/`updated` | Data freshness ≤ 12 months |

Scheduling: the weekly and monthly tasks can run as Claude scheduled tasks (as done for metal3dpowder ads checks). Each run must end with a short report; nothing is pushed without `npm run verify` passing.

---

## 3. Twelve-month calendar

Targets are plans, not promises. Traffic figures are working assumptions to check against GSC, not forecasts.

### Q1 — Data depth and trust (2026-11 → 2027-01)

| Month | Data | Tools / features | Content | SEO / ops |
|---|---|---|---|---|
| **Nov 2026** | 36 → 80 robots. Enrich Yaskawa/KUKA from datasheets; add ABB (via datasheets), Doosan (model pages), Techman, Epson/Denso SCARA | Palletizing calculator (done); source-link checker | Guides: cobot vs industrial robot; repeatability vs accuracy | Sitemap submitted (done 11-03); weekly GSC from week 3 |
| **Dec 2026** | 80 → 120. Humanoids with official specs; first mobile manipulators | Payload & wrist-moment check (uses per-model wrist data where published) | Guides: robot cell cost breakdown; ISO 10218 overview | Robot page template v2: FAQ from real queries, "what to check" box per type |
| **Jan 2027** | 120 → 150. Delta robots; enrich for index bar | Mechanical gripper force calculator | Guides: ISO/TS 15066 explained; vacuum vs mechanical grippers | First quarterly review; first data story ("cobot payload vs reach 2027") |

**Q1 exit:** ≥ 150 robots, ≥ 100 indexed, 7 tools, 7 guides, indexed/submitted > 90 %.

### Q2 — Search fit and comparisons (2027-02 → 2027-04)

| Month | Focus |
|---|---|
| **Feb 2027** | Static `/compare/a-vs-b/` pages for the 10 pairs with proven demand (GSC + Keyword Planner), each with a written verdict. Application hub #1: palletizing. |
| **Mar 2027** | Application hubs #2–3: machine tending, welding. Conveyor-tracking and robot energy-cost calculators. |
| **Apr 2027** | Humanoid deployment log (`/humanoids/deployments/`): dated, sourced pilot and deployment entries. Second quarterly review. |

**Q2 exit:** ≥ 200 robots, 10 compare pages, 3 application hubs, 9 tools; GSC shows rankings for model-spec queries.

### Q3 — Reference status and first revenue (2027-05 → 2027-07)

| Month | Focus |
|---|---|
| **May 2027** | Embeddable calculators (`/embed/<tool>/`, noindex) and an outreach kit for integrators and distributors. |
| **Jun 2027** | **Decision gate: ads.** If indexed pages ≥ 200 and traffic is steady, propose AdSense placements (database and guides only, never inside calculator results). Owner approves. |
| **Jul 2027** | Mid-year data release (dataset v1.0, changelog) and press outreach. Third quarterly review. Translation decision based on GSC country data (tools first). |

### Q4 — Buyer hub (2027-08 → 2027-10)

| Month | Focus |
|---|---|
| **Aug 2027** | **Decision gate: lead generation.** Design "get matched with an integrator" request flow; owner approves backend and data handling before build. |
| **Sep 2027** | Manufacturer data-submission flow (free, verified, never paid placement). Integrator directory pilot (verified entries only). |
| **Oct 2027** | Annual review: full source re-verification of entries older than 12 months; year-2 plan. |

---

## 4. KPIs (reviewed monthly; targets set from GSC after month 3)

| KPI | Source | Direction |
|---|---|---|
| Robots in database / indexed | `robots.json`, sitemap | Up, indexed share ≥ 60 % |
| Indexed / submitted pages | GSC Pages report | ≥ 90 % |
| Organic clicks, impressions, CTR by page type | GSC | Up |
| Queries ranking 1–10 for model and tool terms | GSC | Up |
| Data freshness (entries checked < 12 months) | `updated` field | 100 % |
| Broken source links | `npm run check:sources` | 0 after each monthly audit |
| Referring domains (natural) | GSC Links | Up |
| Corrections received / fixed | contact log | Fixed within 7 days |
| Revenue (from Q3) | AdSense / leads | Track only after gates |

**Review / exit condition:** if by **May 2027** organic clicks are < 3,000/month, narrow scope to cobots + humanoids + tools and delay monetization (from STRATEGY.md).

---

## 5. Costs

- Hosting: Cloudflare (current plan; static site, no added cost expected).
- AI operation: owner's Claude usage.
- Optional later: Keyword Planner via the existing Google Ads account (free to use), paid datasheet access none planned.
- Any new paid service needs owner approval first.

---

## 6. Risks and controls

| Risk | Control |
|---|---|
| Wrong spec published | Manufacturer-only sources, conflict notes, public corrections, yearly re-verification, monthly link audit |
| Thin or "scaled" content flagged by Google | Index bar in code; no auto-generated pair pages; each guide tied to data/tools |
| Manufacturer site redesign breaks sources | Monthly source audit; keep `retrieved` dates honest |
| Safety calculator misused | Standard edition named, limits stated, "not a substitute for risk assessment" on page |
| AI drift from the plan | HANDOFF.md every session; quarterly review against this file |
| Trademark complaints | Names used only to identify products; independence statement; respond within 7 days |

---

## 7. Session checklist for the AI operator

1. `git pull`; read `HANDOFF.md` (latest entry) and this file's current month.
2. Do the month's batch (data → tools → content → SEO).
3. `npm run verify` → commit with a clear message → push.
4. Check live: changed pages 200, canonical, sitemap count, noindex where expected.
5. `npm run indexnow -- <changed paths>` for meaningful updates.
6. Add a HANDOFF entry: what changed, what was skipped and why, next step.
