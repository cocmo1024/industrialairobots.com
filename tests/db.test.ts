import { describe, expect, it } from 'vitest';
import { robots, brands, categories, validate, specKeysFor, formatSpec } from '../src/lib/db';

describe('robot database', () => {
  it('is valid', () => {
    expect(validate(robots, brands, categories)).toEqual([]);
  });
  it('catches unsourced entries and bad numbers', () => {
    const bad = { ...robots[0], sources: [], specs: { payloadKg: -1 } };
    const errs = validate([bad], brands, categories);
    expect(errs.some((e) => e.includes('no sources'))).toBe(true);
    expect(errs.some((e) => e.includes('positive'))).toBe(true);
  });
  it('every brand has at least one robot', () => {
    for (const b of brands) expect(robots.some((r) => r.brand === b.slug), b.slug).toBe(true);
  });
  it('formats specs', () => {
    expect(formatSpec('repeatabilityMm', 0.03)).toBe('±0.03 mm');
    expect(formatSpec('reachMm', 1750)).toBe('1,750 mm');
    expect(formatSpec('payloadKg', undefined)).toBe('—');
    expect(specKeysFor(robots[0]).length).toBeGreaterThan(3);
  });
});

import { isIndexable, robotScore, MIN_ROBOT_SCORE } from '../src/lib/db';

describe('indexing policy', () => {
  it('indexes only robots with enough sourced data', () => {
    for (const r of robots) expect(isIndexable(r), r.slug).toBe(robotScore(r) >= MIN_ROBOT_SCORE);
  });
  it('keeps thin entries out of the index', () => {
    const thin = robots.find((r) => r.slug === 'walker-s2')!;
    expect(isIndexable(thin)).toBe(false);
    const rich = robots.find((r) => r.slug === 'crx-10ia')!;
    expect(isIndexable(rich)).toBe(true);
  });
});
