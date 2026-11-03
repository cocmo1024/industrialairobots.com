// Post-build checks on dist/. Fails (exit 1) on any problem.
// - every HTML page: one <h1>, <title>, meta description ≤ 160 chars, canonical = own URL
// - every internal link points to a built page or file
// - every sitemap URL exists and is not noindex; every indexable page is in the sitemap
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const SITE = 'https://industrialairobots.com';
const errors = [];

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const toUrlPath = (f) => {
  const rel = '/' + relative(DIST, f).split(sep).join('/');
  return rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel;
};
const exists = (path) => {
  const clean = decodeURIComponent(path.split('#')[0].split('?')[0]);
  if (clean === '') return true;
  const p = join(DIST, clean);
  return existsSync(p) && (statSync(p).isFile() || existsSync(join(p, 'index.html')));
};

const redirectsFrom = new Set(
  readFileSync(join(DIST, '_redirects'), 'utf8').split('\n').filter((l) => l.trim() && !l.startsWith('#')).map((l) => l.split(/\s+/)[0]),
);

const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
const sitemapPaths = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, '')));
const indexable = new Set();

for (const f of htmlFiles) {
  const path = toUrlPath(f);
  const html = readFileSync(f, 'utf8');
  const where = `${path}:`;
  if (path === '/404.html') continue;
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${where} has ${h1} <h1>`);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.replace(/&amp;/g, '&');
  if (!title) errors.push(`${where} missing <title>`);
  else if (title.length > 70) errors.push(`${where} title ${title.length} chars: ${title}`);
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) errors.push(`${where} missing description`);
  else if (desc.length > 160 || desc.length < 50) errors.push(`${where} description ${desc.length} chars`);
  const canon = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canon !== SITE + path) errors.push(`${where} canonical ${canon}`);
  const noindex = /<meta name="robots" content="noindex/.test(html);
  if (!noindex) indexable.add(path);
  if (noindex && sitemapPaths.has(path)) errors.push(`${where} noindex but in sitemap`);
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (href.startsWith('//')) continue;
    if (!exists(href) && !redirectsFrom.has(href.split('?')[0])) errors.push(`${where} broken link ${href}`);
  }
}

for (const p of sitemapPaths) if (!exists(p)) errors.push(`sitemap: ${p} does not exist`);
for (const p of indexable) if (!sitemapPaths.has(p)) errors.push(`sitemap: indexable page ${p} missing`);
for (const target of readFileSync(join(DIST, '_redirects'), 'utf8').split('\n').filter((l) => l.trim() && !l.startsWith('#')).map((l) => l.split(/\s+/)[1])) {
  if (!exists(target)) errors.push(`_redirects: target ${target} does not exist`);
}

if (errors.length) {
  console.error(`check-site: ${errors.length} problem(s)\n` + errors.join('\n'));
  process.exit(1);
}
console.log(`check-site: OK — ${htmlFiles.length} HTML files, ${sitemapPaths.size} sitemap URLs, ${redirectsFrom.size} redirects`);
