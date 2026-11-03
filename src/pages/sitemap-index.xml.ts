import type { APIRoute } from 'astro';
import { SITE } from '../site';

// Kept because Search Console may still reference the old /sitemap-index.xml.
export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${SITE.url}/sitemap.xml</loc></sitemap>
</sitemapindex>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
