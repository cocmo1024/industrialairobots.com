import { getCollection } from 'astro:content';
import { robots, brands, categories, robotsByCategory, robotUrl, brandUrl, categoryUrl } from './db';
import { TOOLS } from './tools';

export interface PageEntry { path: string; lastmod?: string }

/** Every indexable URL on the site. Sitemap and checks use this list. */
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
    { path: '/guides/' },
    { path: '/about/' },
    { path: '/methodology/' },
    { path: '/contact/' },
    ...robots.map((r) => ({ path: robotUrl(r), lastmod: r.updated })),
    ...brands.map((b) => ({ path: brandUrl(b.slug) })),
    ...categories.filter((c) => robotsByCategory(c.slug).length > 0).map((c) => ({ path: categoryUrl(c.slug) })),
    ...TOOLS.map((t) => ({ path: `/tools/${t.slug}/` })),
    ...guides.map((g) => ({ path: `/guides/${g.id}/`, lastmod: g.data.updated.toISOString().slice(0, 10) })),
  ];
}
