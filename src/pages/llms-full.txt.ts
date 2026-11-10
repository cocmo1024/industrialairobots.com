import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { robots, brands, categories, fullName, robotUrl, brandUrl, categoryUrl, brandBySlug, categoryBySlug, formatSpec, STATUS_LABEL } from '../lib/db';
import type { Specs } from '../data/schema';
import { TOOLS } from '../lib/tools';
import { SITE } from '../site';

// Full-text companion to /llms.txt: the complete robot database, brand and
// category reference, tool list and guide texts in one plain-text file, so an
// AI system can read everything without crawling page by page. Generated from
// the same data as the site — every spec keeps its manufacturer source.
export const GET: APIRoute = async () => {
  const guides = (await getCollection('guides')).filter((g) => !g.data.draft);
  const lines: string[] = [
    `# ${SITE.name} — full content`,
    '',
    `> ${SITE.description}`,
    '',
    'Every robot specification below is copied from the manufacturer and cited with a link and retrieval date. Missing values are omitted, never estimated. Status labels distinguish products you can order from preliminary spec sheets.',
    '',
    `- Site: ${SITE.url}/`,
    `- Methodology: ${SITE.url}/methodology/`,
    `- Open dataset (JSON, CC BY 4.0): ${SITE.url}/data/robots.json`,
    `- Contact: ${SITE.email}`,
    '',
    '## Brands',
    '',
    ...brands.flatMap((b) => [
      `### ${b.name} (${b.country})`,
      '',
      b.summary,
      '',
      `- Website: ${b.website}`,
      `- Brand page: ${SITE.url}${brandUrl(b.slug)}`,
      '',
    ]),
    '## Robot types',
    '',
    ...categories.flatMap((c) => [
      `### ${c.name}`,
      '',
      c.intro,
      '',
      `- Type page: ${SITE.url}${categoryUrl(c.slug)}`,
      '',
    ]),
    `## Robot database (${robots.length} models)`,
    '',
  ];

  for (const r of robots) {
    lines.push(`### ${fullName(r)}`, '');
    lines.push(r.summary, '');
    lines.push(`- Page: ${SITE.url}${robotUrl(r)}`);
    lines.push(`- Brand: ${brandBySlug(r.brand)?.name ?? r.brand}`);
    lines.push(`- Type: ${categoryBySlug(r.category)?.name ?? r.category}`);
    lines.push(`- Status: ${STATUS_LABEL[r.status]}`);
    for (const [k, v] of Object.entries(r.specs)) {
      if (v === undefined) continue;
      const key = k as keyof Specs;
      lines.push(`- ${key}: ${formatSpec(key, v)}`);
    }
    for (const [k, note] of Object.entries(r.specNotes ?? {})) {
      lines.push(`- Note on ${k}: ${note}`);
    }
    for (const n of r.notes ?? []) {
      lines.push(`- ${n.label}: ${n.value}`);
    }
    lines.push(`- Entry updated: ${r.updated}`);
    lines.push('- Sources:');
    for (const s of r.sources) {
      lines.push(`  - ${s.title} (${s.publisher}, retrieved ${s.retrieved}): ${s.url}`);
    }
    lines.push('');
  }

  lines.push('## Engineering calculators', '');
  for (const t of TOOLS) {
    lines.push(`### ${t.name}`, '', t.blurb, '', `- Tool: ${SITE.url}/tools/${t.slug}/`, '');
  }

  lines.push('## Guides (full text)', '');
  for (const g of guides) {
    lines.push(`### ${g.data.title}`, '');
    lines.push(g.data.description, '');
    lines.push(`- Guide: ${SITE.url}/guides/${g.id}/`);
    lines.push(`- Updated: ${g.data.updated.toISOString().slice(0, 10)}`);
    lines.push('', g.body ?? '', '');
  }

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
