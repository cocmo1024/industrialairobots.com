// Monthly source audit: checks every manufacturer source URL in dist/data/robots.json.
// Reports broken (4xx/5xx/network) and redirected links. Run after `npm run build`.
// Exit code 1 if any link is broken. Redirects are reported but do not fail.
import { readFileSync } from 'node:fs';

const data = JSON.parse(readFileSync('dist/data/robots.json', 'utf8'));
const byUrl = new Map();
for (const r of data.robots) for (const s of r.sources) {
  if (!byUrl.has(s.url)) byUrl.set(s.url, []);
  byUrl.get(s.url).push(r.id);
}

async function check(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      headers: { 'User-Agent': 'Mozilla/5.0 (source audit; industrialairobots.com)' },
      signal: AbortSignal.timeout(20000),
    });
    return { status: res.status, location: res.headers.get('location') };
  } catch (e) {
    return { status: 0, location: String(e.message || e) };
  }
}

const broken = [], moved = [];
const urls = [...byUrl.keys()];
for (let i = 0; i < urls.length; i += 6) {
  const batch = urls.slice(i, i + 6);
  const results = await Promise.all(batch.map(check));
  batch.forEach((u, j) => {
    const { status, location } = results[j];
    if (status >= 300 && status < 400) moved.push(`${status} ${u} → ${location}  [${byUrl.get(u).join(', ')}]`);
    else if (status === 0 || status >= 400) broken.push(`${status || 'ERR'} ${u}  [${byUrl.get(u).join(', ')}] ${status === 0 ? location : ''}`);
  });
}

console.log(`check-sources: ${urls.length} source URLs, ${broken.length} broken, ${moved.length} redirected`);
if (moved.length) console.log('Redirected (re-verify, then update the URL):\n' + moved.join('\n'));
if (broken.length) {
  console.error('Broken (re-verify these robots):\n' + broken.join('\n'));
  process.exit(1);
}
