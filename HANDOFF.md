# HANDOFF — industrialairobots.com

## 2026-11-03 (later) — Phase 1 batch 1, indexing policy, SEO plan

- Owner direction: submit only high-value pages to Google; long-term SEO; become the industry hub and tool. Written up in `docs/SEO_PLAN.md`.
- Indexing policy in code (`src/lib/db.ts`): robot page indexed only if quality score ≥ 5; brand hub needs ≥ 2 indexable models, type hub ≥ 3; guides hub needs ≥ 3 guides; contact is noindex. Sitemap built from the same rules; `check-site` enforces consistency.
- Database 12 → 36 models (+UR8 Long, UR15, UR18, UR30; FANUC CRX-5iA, CRX-10iA/L, CRX-20iA/L, CRX-30iA, LR Mate 200iD, M-10iD/12, R-2000iC/165F; Yaskawa GP7, GP8, GP12, GP180, HC10DTP, HC20DTP, HC30PL; KUKA KR AGILUS ×4; Unitree H2; UBTECH Walker S2). New brands: KUKA, UBTECH. 22 indexed, 14 noindex (thin: Yaskawa, KUKA, Digit 5, Walker S2 — enrich from datasheets).
- UR20/UR30 repeatability removed: UR's own pages conflict (±0.01 mm model page vs ±0.1 mm series overview); shown as a note.
- Skipped for now: Doosan (compare page shows identical specs for different models), ABB GoFa/IRB 1200 and Epson (no per-model specs on readable pages), Figure 03 and Apptronik Apollo 2 (no published specs), 1X NEO (home robot, out of scope).
- New tool: palletizing calculator (`src/lib/calc/pallet.ts`, tests in `tests/pallet.test.ts`).
- Cloudflare: redirect rule "从 WWW 重定向到根" deployed (https://www.* → https://${1}, 301, query kept). Verified live.

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

Owner to-dos: confirm contact email. (www redirect done; sitemap submission see later entry.)
Next: Phase 1 in `docs/STRATEGY.md`.
