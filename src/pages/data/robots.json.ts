import type { APIRoute } from 'astro';
import { robots, brandBySlug, robotUrl } from '../../lib/db';
import { SITE } from '../../site';

export const GET: APIRoute = () => {
  const body = {
    name: `${SITE.name} robot database`,
    license: 'CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/',
    attribution: `${SITE.name} (${SITE.url})`,
    units: { payloadKg: 'kg', reachMm: 'mm', repeatabilityMm: '± mm', weightKg: 'kg', maxTcpSpeedMs: 'm/s', heightMm: 'mm', runtimeH: 'h', batteryWh: 'Wh', speedMs: 'm/s', priceUsd: 'USD' },
    count: robots.length,
    robots: robots.map((r) => ({
      id: `${r.brand}/${r.slug}`,
      brand: brandBySlug(r.brand)!.name,
      name: r.name,
      family: r.family,
      category: r.category,
      status: r.status,
      url: SITE.url + robotUrl(r),
      specs: r.specs,
      specNotes: r.specNotes,
      sources: r.sources,
      updated: r.updated,
    })),
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
