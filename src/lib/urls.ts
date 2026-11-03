import { getCollection } from 'astro:content';
import { robots, brands, categories, robotUrl, brandUrl, categoryUrl, isIndexable, brandIndexable, categoryIndexable } from './db';
import { TOOLS } from './tools';

export interface PageEntry { path: string; lastmod?: string }

/** Every indexable URL on the site (high-value pages only — see docs/SEO_PLAN.md §2). */
export async function indexablePages(): Promise<PageEntry[]> {
  const guides = await getCollection('guides', (g) => !g.data.draft);
  const latest = robots.map((r) => r.updated).sort().at(-1);
  return [
    { path: '/', lastmod: latest },
    { path: '/robots/', lastmod: latest },
    { path: '/brands/' },
    { path: '/types/' },
    { path: '/compare/' },
    { path: '/tools/' },
    ...(guides.length >= 3 ? [{ path: '/guides/' }] : []),
    { path: '/about/' },
    { path: '/methodology/' },
    ...robots.filter(isIndexable).map((r) => ({ path: robotUrl(r), lastmod: r.updated })),
    ...brands.filter((b) => brandIndexable(b.slug)).map((b) => ({ path: brandUrl(b.slug) })),
    ...categories.filter((c) => categoryIndexable(c.slug)).map((c) => ({ path: categoryUrl(c.slug) })),
    ...TOOLS.map((t) => ({ path: `/tools/${t.slug}/` })),
    ...guides.map((g) => ({ path: `/guides/${g.id}/`, lastmod: g.data.updated.toISOString().slice(0, 10) })),
  ];
}
