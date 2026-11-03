import { BRANDS } from '../data/brands';
import { CATEGORIES } from '../data/categories';
import type { Brand, Category, CategorySlug, Robot, Specs, Status } from '../data/schema';
import { SPEC_DEFS, formatSpec } from './format';
export { SPEC_DEFS, formatSpec };
import { robots as ur } from '../data/robots/universal-robots';
import { robots as fanuc } from '../data/robots/fanuc';
import { robots as yaskawa } from '../data/robots/yaskawa';
import { robots as humanoids } from '../data/robots/humanoids';
import { robots as kuka } from '../data/robots/kuka';

// Add new data files here.
const ALL: Robot[] = [...ur, ...fanuc, ...yaskawa, ...kuka, ...humanoids];

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Returns a list of problems. Empty list = valid. Used by tests and at build time. */
export function validate(robots: Robot[], brands: Brand[], categories: Category[]): string[] {
  const errors: string[] = [];
  const brandSlugs = new Set(brands.map((b) => b.slug));
  const catSlugs = new Set(categories.map((c) => c.slug));
  const seen = new Set<string>();
  for (const b of brands) if (!SLUG.test(b.slug)) errors.push(`brand slug "${b.slug}" is not kebab-case`);
  for (const r of robots) {
    const id = `${r.brand}/${r.slug}`;
    if (seen.has(id)) errors.push(`${id}: duplicate`);
    seen.add(id);
    if (!SLUG.test(r.slug)) errors.push(`${id}: slug is not kebab-case`);
    if (!brandSlugs.has(r.brand)) errors.push(`${id}: unknown brand`);
    if (!catSlugs.has(r.category)) errors.push(`${id}: unknown category`);
    if (!DATE.test(r.updated)) errors.push(`${id}: bad updated date`);
    if (r.sources.length === 0) errors.push(`${id}: no sources`);
    for (const s of r.sources) {
      if (!/^https:\/\//.test(s.url)) errors.push(`${id}: source url must be https`);
      if (!DATE.test(s.retrieved)) errors.push(`${id}: bad retrieved date on ${s.url}`);
    }
    if (r.summary.length < 40 || r.summary.length > 260) errors.push(`${id}: summary should be 40–260 chars`);
    for (const [k, v] of Object.entries(r.specs)) {
      if (typeof v === 'number' && !(Number.isFinite(v) && v > 0)) errors.push(`${id}: ${k} must be a positive number`);
    }
    for (const k of Object.keys(r.specNotes ?? {})) {
      if ((r.specs as Record<string, unknown>)[k] === undefined) errors.push(`${id}: note for missing spec ${k}`);
    }
    if (r.specs.payloadMaxKg !== undefined && r.specs.payloadKg !== undefined && r.specs.payloadMaxKg < r.specs.payloadKg)
      errors.push(`${id}: payloadMaxKg below payloadKg`);
  }
  return errors;
}

const problems = validate(ALL, BRANDS, CATEGORIES);
if (problems.length) throw new Error('Robot database is invalid:\n' + problems.join('\n'));

export const robots: Robot[] = [...ALL].sort((a, b) => a.name.localeCompare(b.name));
export const brands = BRANDS;
export const categories = CATEGORIES;

export const brandBySlug = (slug: string) => BRANDS.find((b) => b.slug === slug);
export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const robotsByBrand = (slug: string) => robots.filter((r) => r.brand === slug);
export const robotsByCategory = (slug: CategorySlug) => robots.filter((r) => r.category === slug);
export const robotUrl = (r: Robot) => `/robots/${r.brand}/${r.slug}/`;
export const brandUrl = (slug: string) => `/robots/${slug}/`;
export const categoryUrl = (slug: string) => `/types/${slug}/`;
export const fullName = (r: Robot) => `${brandBySlug(r.brand)?.name ?? r.brand} ${r.name}`;

/** Same-category robots, closest payload first. */
export function similar(r: Robot, n = 4): Robot[] {
  const p = r.specs.payloadKg ?? 0;
  return robots
    .filter((x) => x !== r && x.category === r.category)
    .sort((a, b) => Math.abs((a.specs.payloadKg ?? 0) - p) - Math.abs((b.specs.payloadKg ?? 0) - p))
    .slice(0, n);
}

export const STATUS_LABEL: Record<Status, string> = {
  production: 'In production',
  'early-access': 'Early access',
  preliminary: 'Preliminary specs',
  discontinued: 'Discontinued',
};

/** Order for the full spec table on a robot page. */
export const SPEC_ORDER: (keyof Specs)[] = [
  'payloadKg', 'payloadMaxKg', 'reachMm', 'axes', 'dof', 'repeatabilityMm', 'weightKg', 'heightMm',
  'maxTcpSpeedMs', 'speedMs', 'runtimeH', 'batteryWh', 'ipRating', 'footprintMm', 'mounting', 'controller', 'priceUsd',
];

/** Spec keys relevant to a category (always show these rows, even if missing). */
export function specKeysFor(r: Robot): (keyof Specs)[] {
  const cat = categoryBySlug(r.category)!;
  const present = SPEC_ORDER.filter((k) => r.specs[k] !== undefined);
  return SPEC_ORDER.filter((k) => cat.keySpecs.includes(k) || present.includes(k));
}

/** Compact record shipped to the browser for the finder and compare tool. */
export function toClient(r: Robot) {
  return {
    id: `${r.brand}/${r.slug}`,
    name: r.name,
    brand: brandBySlug(r.brand)!.name,
    brandSlug: r.brand,
    category: r.category,
    status: r.status,
    url: robotUrl(r),
    specs: r.specs,
  };
}
export type ClientRobot = ReturnType<typeof toClient>;

// ---------------------------------------------------------------------------
// Indexing policy (docs/SEO_PLAN.md §2): only pages with enough real data are
// offered to search engines. Thin pages stay live and linked for visitors but
// carry noindex and are left out of the sitemap until they are enriched.
// ---------------------------------------------------------------------------

/** Minimum quality score for a robot page to be indexed. */
export const MIN_ROBOT_SCORE = 5;
/** Data depth of a robot entry: published spec fields + up to 2 extra sourced facts. */
export function robotScore(r: Robot): number {
  const specs = Object.values(r.specs).filter((v) => v !== undefined).length;
  return specs + Math.min(r.notes?.length ?? 0, 2);
}
export const isIndexable = (r: Robot) => robotScore(r) >= MIN_ROBOT_SCORE;
/** Brand hub: needs at least 2 indexable models. */
export const brandIndexable = (slug: string) => robotsByBrand(slug).filter(isIndexable).length >= 2;
/** Type hub: needs at least 3 indexable models. */
export const categoryIndexable = (slug: CategorySlug) => robotsByCategory(slug).filter(isIndexable).length >= 3;
