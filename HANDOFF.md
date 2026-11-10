# HANDOFF — industrialairobots.com

## 2026-11-09 — Operations handover to Muse

- Owner handed site operations to Muse in a dedicated chat and confirmed: run it on the existing annual plan (`docs/AI_OPERATIONS_PLAN.md`). End goal clarified by the owner: **grow to large industry traffic first, then monetize by selling advertising — not by selling the domain or the site.** Ads stay off until the owner approves the gate (`src/site.ts` switch unchanged); the Aug 2027 lead-generation gate in the operations plan is no longer the default route.
- Baseline re-verified locally at handover: `npm run verify` passes (21 tests, check-site OK — 85 HTML files, 65 sitemap URLs, 21 redirects).
- Added `/llms-full.txt`, generated from the same database (all 51 robots with specs and sources, brands, robot types, calculators, full guide texts), and linked it from `/llms.txt`.
- Contact email: `src/site.ts` already carries cqq365@gmail.com — treated as the confirmed contact, no change made.
- Recurring operations now run as scheduled tasks owned by the site goal: weekly batch (Mon), monthly source audit (5th), monthly KPI and AI-answer audit (12th), quarterly strategy review (Jan/Apr/Jul/Oct 16th).
- Next: November catch-up per the plan — ABB (datasheets), Epson/Denso SCARA, Doosan catalog enrichment, 51 → ~80 robots.

## 2026-11-03 (evening) — Phase 1 batch 2

- Enriched from official datasheets so they pass the index bar: Yaskawa GP7/GP8/GP12/GP25/GP180, HC10DTP/HC20DTP/HC30PL (motoman.com getmedia PDFs: repeatability, weight, IP, mounting, wrist moment/inertia where the table extracted cleanly) and KUKA KR AGILUS ×4 (my.KUKA product data: ISO 9283 repeatability, max payload, IP, cleanroom, motion range — my.KUKA needs a JS browser; WebFetch only sees a loading page).
- Skipped on purpose: GP180 wrist moment/inertia and HC10DTP R/B wrist values (PDF cells misaligned), HC20DTP weight (not extractable), HC30PL safety PL (datasheet says PL e in one place and PL d in another), Techman TM5-900 ("coming soon").
- New brands: Doosan Robotics (10 models; model pages give payload/reach/repeatability only → noindex until catalog data), Techman Robot (5 models; payload, reach, weight, IP, built-in vision → indexed).
- Database 36 → 51 robots; sitemap 42 → 65 URLs. Guides 1 → 3 (cobot vs industrial robot; repeatability vs accuracy), so /guides/ is now indexed.
- ISO 10218-1/-2:2025 confirmed on iso.org (73933/73934); ISO 10218-2:2025 incorporates most of ISO/TS 15066 — reflected in the cobot guide.
- Guide tables scroll on narrow screens.
- Next (Nov plan): ABB (try one.robotics.abb.com per-variant pages or product specification PDFs), Epson/Denso SCARA, Doosan catalog PDF to lift Doosan over the index bar.

## 2026-11-03 (later) — Phase 1 batch 1, indexing policy, SEO plan

- Owner direction: submit only high-value pages to Google; long-term SEO; become the industry hub and tool. Written up in `docs/SEO_PLAN.md`.
- Indexing policy in code (`src/lib/db.ts`): robot page indexed only if quality score ≥ 5; brand hub needs ≥ 2 indexable models, type hub ≥ 3; guides hub needs ≥ 3 guides; contact is noindex. Sitemap built from the same rules; `check-site` enforces consistency.
- Database 12 → 36 models (+UR8 Long, UR15, UR18, UR30; FANUC CRX-5iA, CRX-10iA/L, CRX-20iA/L, CRX-30iA, LR Mate 200iD, M-10iD/12, R-2000iC/165F; Yaskawa GP7, GP8, GP12, GP180, HC10DTP, HC20DTP, HC30PL; KUKA KR AGILUS ×4; Unitree H2; UBTECH Walker S2). New brands: KUKA, UBTECH. 22 indexed, 14 noindex (thin: Yaskawa, KUKA, Digit 5, Walker S2 — enrich from datasheets).
- UR20/UR30 repeatability removed: UR's own pages conflict (±0.01 mm model page vs ±0.1 mm series overview); shown as a note.
- Skipped for now: Doosan (compare page shows identical specs for different models), ABB GoFa/IRB 1200 and Epson (no per-model specs on readable pages), Figure 03 and Apptronik Apollo 2 (no published specs), 1X NEO (home robot, out of scope).
- New tool: palletizing calculator (`src/lib/calc/pallet.ts`, tests in `tests/pallet.test.ts`).
- Cloudflare: redirect rule "从 WWW 重定向到根" deployed (https://www.* → https://${1}, 301, query kept). Verified live.
- GSC (sc-domain:industrialairobots.com): resubmitted https://industrialairobots.com/sitemap.xml (42 URLs) — "已成功提交站点地图". IndexNow: 202, 42 URLs.
- `docs/AI_OPERATIONS_PLAN.md`: one-year AI operations plan (2026-11 → 2027-10), cadence, KPIs, decision gates (ads Jun 2027, leads Aug 2027). `npm run check:sources` added; 14 redirected source URLs updated to final addresses (0 broken). About page now states AI-assisted operation.

## 2026-11-03 — Site rebuilt from scratch (framework release)

- Old Starlight article site (70 URLs, last commit 32a8e4d) removed at the owner's request. Old content stays in git history before this commit. Old URL list: `D:\Claude\web\_记录\industrialairobots.com\会话_20261103_新站框架\old-urls.txt`.
- New Astro 7 site: robot database (12 models, 6 brands, all cited to manufacturer pages read 2026-11-03), finder, compare, type and brand hubs, 4 calculators (ROI, cycle time, vacuum gripper, ISO 13855 safety distance), 1 guide, methodology/about/contact/privacy/terms, sitemap.xml (+ sitemap-index.xml for the old GSC entry), robots.txt, llms.txt, `/data/robots.json` (CC BY 4.0).
- `public/_redirects`: 21 old URLs with real equivalents 301; other old article URLs 404.
- Kept: `wrangler.jsonc` (unchanged), `public/ads.txt`, IndexNow key file. Ads switched off in `src/site.ts`.
- Verification: 14 unit tests, `astro check` clean, `check-site` OK (39 HTML files, 36 sitemap URLs). Desktop + 375 px mobile checked in browser.

Notes from data collection:
- Universal Robots renamed models: UR5e/UR10e now appear as UR7e/UR12e (CB5/CB7). Entries use the current names.
- Third-party humanoid spec sites disagree widely; Agility only publishes preliminary Digit 5 figures (payload 23 kg, reach 2.2 m). We list only those.
- Not yet added (no official spec page reachable): ABB GoFa, KUKA LBR iisy, Apptronik Apollo, Figure.

Owner to-dos: confirm contact email.
Next: Phase 1 in `docs/STRATEGY.md`.
