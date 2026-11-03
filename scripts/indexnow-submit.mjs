// Submit URLs to IndexNow (Bing, Yandex, etc.) after a deploy.
// Usage: npm run indexnow            → every URL in dist/sitemap.xml
//        npm run indexnow -- /robots/fanuc/crx-10ia/ /tools/   → only these paths
import { readFileSync } from 'node:fs';

const HOST = 'industrialairobots.com';
const KEY = 'c7c0317f-3864-4fb8-9520-589781c244f9'; // key file: public/<KEY>.txt

const args = process.argv.slice(2).filter((a) => a.startsWith('/') || a.startsWith('http'));
const urls = args.length
  ? args.map((a) => (a.startsWith('http') ? a : `https://${HOST}${a}`))
  : [...readFileSync('dist/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urls.length} URL(s)`);
