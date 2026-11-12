# HANDOFF — industrialairobots.com

## 2026-11-12 — High-priority batch executed early (database 52 → 82, compare pilots shipped)

Owner approved pulling high-priority November items forward instead of waiting for the 2026-11-16 weekly batch. Executed same day; `npm run verify` passes on the combined tree (125 HTML files, 116 sitemap URLs, 21 redirects).

- Database 52 → 82 robots, indexable model pages 40 → 80, brands 11 → 13 (+ABB, +DENSO). Only Digit 5 and Walker S2 remain noindex (humanoids, official specs due December per plan).
- ABB (new brand, 17 models) from the official ABB *Robotics product range 2025* handbook + official cobot selection table: IRB 1010, 1100-4/0.475, 1200-5/0.9, 1200-7/0.7, 1300-11/0.9, 1300-12/1.4, 1600-6/1.45, 2600ID-15/1.85, 4600-60/2.05, 660-180/3.15, 5710-90/2.7, 8700-550/4.2, IRB 920T SCARA, GoFa 5/10/12, YuMi IRB 14000. Held back on purpose: IRB 360 FlexPicker (datasheet gives workspace diameter, not reach — no reachMm until the site defines a delta-robot convention), SWIFTI CRB 1100 and single-arm YuMi IRB 14050 (sources located; December batch).
- Epson +5 SCARA (GX4-B251, GX4-B351, GX20B-1000, T3-B, T6-B) from official spec-sheet PDFs; rated/max payloads mapped to payloadKg/payloadMaxKg with a note. GX20B weight left blank (spec table weight row ambiguous across mounting variants).
- DENSO (new brand, 6 models) from official densorobotics.com spec tables: VS-050/060/068/087, HS-035A1/HS-045A1.
- Doosan enrichment from the official 2024 catalog spec table: +A0912S, +A0509S; all 10 existing models gained IP rating, axes (P3020 confirmed 5-axis), mounting; M1509/M1013/M0617 gained catalog-stated payloadMaxKg. Doosan indexable 0 → 12. M/H-series weights left blank with conflict notes (manufacturer documents disagree, e.g. H2515 at 70/72/77 kg across the 2020 H catalog, install manual and 2024 catalog) — same treatment as the Epson AX6 weight precedent; P/A/E/S weights appear only in the 2024 catalog with no conflicting source and were taken from it.
- Static compare pilots (new data-driven route `/compare/[pair]/`, registered in sitemap, linked from the compare tool page, both brand hubs and both model pages): CRX-10iA/L vs UR12e-1300; M-10iD/12 vs Yaskawa GP12; KUKA KR 6 R900-2 vs LR Mate 200iD; UR20 vs CRX-20iA/L; Atlas vs Unitree H2. Each page: side-by-side sourced spec table, individually written verdict sections, choose-A/choose-B cards. New `tests/comparisons.test.ts` guards against template filler (both sides must be indexable, same category, verdict text must be substantive). Planned UR10e vs Franka pairing was replaced — Franka is not in the database and UR10e is now sold as UR12e; a Doosan pairing waits until Doosan data depth lands (done in this same batch, so a Doosan pair is now unblocked for the next batch).
- Brand hubs strengthened at template level (all brands): data-driven fact strip (types covered with links, payload range, max reach), head-to-head comparison cards, honest "in progress" note on below-threshold hubs (Boston Dynamics, Epson, Doosan, Agility, UBTECH) instead of an empty-shell look. FANUC brand summary extended to two sentences.
- Not done in this batch: GSC/Bing baseline still blocked — the same-day read attempt passed email+password but stopped at a Google passkey challenge ("请使用您的通行密钥证实是您本人在登录"), which needs the owner in the browser (fingerprint/face/screen lock); the monthly review's separate attempt hit the Gmail-app Yes prompt instead. Baseline and country calibration remain open until one of these verifications is completed by the owner.
- November plan status after this batch: robots ~80 target MET early (82); compare pilots MET (5). Remaining for late November: de i18n foundation + pilot batch; guides still 3 (December cadence per plan).

## 2026-11-12 — Monthly review #1 (baseline attempt; GSC blocked by 2-Step Verification)

- Quantified (local build `npm run verify` passes; live checks same day): database 52 robots / 11 brands (51 → 52, +Epson AX6-A901S, commit 6600489); indexable robot pages 40 of 52 (db.ts rule: score ≥ 5); sitemap 66 URLs live = local (was 65); 87 HTML files; guides 3; calculators 5; data freshness: all entries `updated` 2026-11-03 except AX6 at 2026-11-12 — 0 entries older than 12 months, 100% fresh.
- Search/AI friendliness checklist (monthly fixed list): robots.txt PASS — live text is `User-agent: *` + `Allow: /` + sitemap line only; no Disallow for GPTBot/ClaudeBot/PerplexityBot/Google-Extended/Applebot-Extended/CCBot, no Content-Signal, no Cloudflare managed block segment. llms.txt PASS (200, synced: 40 indexable robots incl. AX6 + 5 tools) with one minor gap: llms.txt itself has no Guides section (generator emits Data/Robots/Tools only); guides are present in llms-full.txt — fix in a weekly batch, low priority. llms-full.txt PASS (200, heading states "Robot database (52 models)", all 11 brands incl. Epson, full text of all 3 guides to the end, no truncation detected). Sitemap PASS on count/no-dead-link spot checks (new AX6 page live 200); GSC sitemap status NOT read (see blocker below). IndexNow: no weekly-batch record found for the new AX6 URL, so supplemented this run — `npm run indexnow -- /robots/epson/ax6-a901s/ /robots/epson/` returned 200 OK, 2 URLs.
- Search visibility audit (15 core queries: UR30 / CRX-10iA / KUKA KR 6 R900 / Yaskawa GP12 / Techman TM12 / Atlas / Unitree H2 specs, cobot vs industrial, repeatability vs accuracy ISO 9283, how to read a datasheet, ROI / palletizing / vacuum gripper / ISO 13855 safety-distance calculators, plus a branded site query): industrialairobots.com appeared in 0 of 15 top result sets. Dominant competitors: manufacturer sites (Universal Robots, FANUC, KUKA, Yaskawa), Unchained Robotics, distributors/dealer listings, devicebase. This is web-search visibility only — direct ChatGPT/Claude/Perplexity/Gemini chat testing was NOT covered this run, and no AI citation rate is claimed.
- GSC + Bing baseline NOT established — blocker, no numbers estimated: browser sign-in as Walter Chen (info@szcomo.com) was accepted, then stopped at Google 2-Step Verification. On-screen text: "2-Step Verification" / "Open the Gmail app on Apple iPhone 15 Pro" / "Google sent a notification to your Apple iPhone 15 Pro. Open the Gmail app and tap Yes on the prompt to verify it's you." GSC 28-day / 3-month clicks, impressions, CTR, position, top queries/pages/countries, index coverage and sitemap status in GSC are all unread; Bing Webmaster was not reached (same sign-in unfinished), so its import status is also unverified. Owner action needed: tap "Yes" in the Gmail app on iPhone 15 Pro when the next audit run signs in, so the baseline can be read; language-order calibration (de → es → ja → zh → fr → pt) could not be calibrated without country data and stays as planned.
- Against TRAFFIC-PLAN.md November stage: robots 52 vs ~80 target for end of November (gap 28, two weekly batches left); static compare-page pilots 0 of 3–5 (still due in November); application hubs 0 (first due December); calculators 5 (next +1 payload/wrist-moment due December; Q1 exit target 7 tools / 7 guides / 150 robots by end of January); guides 3 (Q1 target 7). Ad gate: cannot be evaluated without GSC clicks/impressions — threshold is monthly clicks ≥ 3,000 or impressions ≥ 100,000 with 2 consecutive months of growth before even proposing; ads stay off, no proposal made.
- Next month Top 3 gaps: (1) unblock GSC/Bing read (owner phone tap) and record the real baseline + country data; (2) close the November data gap — ABB datasheets, Epson/Denso SCARA, Doosan enrichment toward ~80 robots in the 2026-11-16 / 11-23 weekly batches; (3) ship the 3–5 static compare pilots and the German (de) i18n pilot as scheduled for the second half of November, watching GSC once readable.

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
