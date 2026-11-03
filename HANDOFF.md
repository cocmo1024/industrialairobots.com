# HANDOFF — industrialairobots.com

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

Owner to-dos: www → apex redirect rule in Cloudflare; GSC sitemap resubmission; confirm contact email.
Next: Phase 1 in `docs/STRATEGY.md`.
