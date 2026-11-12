import { robots, brandBySlug } from './db';
import { COMPARISONS, type Comparison } from '../data/comparisons';
import type { Robot } from '../data/schema';

const byId = new Map(robots.map((r) => [`${r.brand}/${r.slug}`, r]));

/** Resolve a comparison's two robots. Throws at build time if an id is wrong. */
export function comparisonRobots(c: Comparison): [Robot, Robot] {
  const a = byId.get(c.a);
  const b = byId.get(c.b);
  if (!a || !b) throw new Error(`comparison ${c.slug}: unknown robot id (${!a ? c.a : c.b})`);
  return [a, b];
}

/** "FANUC CRX-10iA/L" style name, collapsing duplicates like "Motoman Motoman". */
export function displayName(r: Robot): string {
  const brand = brandBySlug(r.brand)?.name ?? r.brand;
  return `${brand} ${r.name}`.replace(/\b(\w+) \1\b/g, '$1');
}

/** The static comparison a robot takes part in, if any (pilot pairs are unique per robot). */
export function comparisonFor(r: Robot): { c: Comparison; other: Robot } | undefined {
  const id = `${r.brand}/${r.slug}`;
  for (const c of COMPARISONS) {
    if (c.a === id) return { c, other: byId.get(c.b)! };
    if (c.b === id) return { c, other: byId.get(c.a)! };
  }
  return undefined;
}

/** All static comparisons that involve any robot of a brand (for brand hubs). */
export function comparisonsForBrand(brandSlug: string): Comparison[] {
  return COMPARISONS.filter((c) => c.a.startsWith(`${brandSlug}/`) || c.b.startsWith(`${brandSlug}/`));
}
