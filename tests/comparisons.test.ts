import { describe, expect, it } from 'vitest';
import { COMPARISONS, comparisonUrl } from '../src/data/comparisons';
import { comparisonRobots } from '../src/lib/comparisons';
import { isIndexable } from '../src/lib/db';

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe('static comparisons', () => {
  it('has the pilot batch size (3–5 pairs)', () => {
    expect(COMPARISONS.length).toBeGreaterThanOrEqual(3);
    expect(COMPARISONS.length).toBeLessThanOrEqual(5);
  });
  it('every pair resolves to two distinct, indexable robots of one category', () => {
    const seen = new Set<string>();
    for (const c of COMPARISONS) {
      expect(SLUG.test(c.slug), c.slug).toBe(true);
      expect(seen.has(c.slug), c.slug).toBe(false);
      seen.add(c.slug);
      const [a, b] = comparisonRobots(c);
      expect(a).not.toBe(b);
      expect(a.category, c.slug).toBe(b.category);
      expect(isIndexable(a), c.a).toBe(true);
      expect(isIndexable(b), c.b).toBe(true);
      expect(comparisonUrl(c)).toBe(`/compare/${c.slug}/`);
    }
  });
  it('titles and descriptions fit the site limits (check-site rules)', () => {
    for (const c of COMPARISONS) {
      const fullTitle = c.title.length > 44 ? c.title : `${c.title} | Industrial AI Robots`;
      expect(fullTitle.length, c.slug).toBeLessThanOrEqual(70);
      expect(c.description.length, c.slug).toBeGreaterThanOrEqual(50);
      expect(c.description.length, c.slug).toBeLessThanOrEqual(160);
    }
  });
  it('every pair carries a hand-written verdict, not filler', () => {
    for (const c of COMPARISONS) {
      expect(c.analysis.length, c.slug).toBeGreaterThanOrEqual(2);
      for (const p of c.analysis) expect(p.length, c.slug).toBeGreaterThan(200);
      expect(c.chooseA.length, c.slug).toBeGreaterThan(60);
      expect(c.chooseB.length, c.slug).toBeGreaterThan(60);
      expect(c.bottomLine.length, c.slug).toBeGreaterThan(60);
      expect(c.takeaway.length, c.slug).toBeGreaterThan(30);
    }
  });
});
