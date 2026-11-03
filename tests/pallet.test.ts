import { describe, expect, it } from 'vitest';
import { bestLayer, palletize } from '../src/lib/calc/pallet';

describe('pallet layer', () => {
  it('fits simple grids', () => {
    expect(bestLayer(1200, 800, 400, 200).count).toBe(12); // 3 × 4
    expect(bestLayer(1200, 800, 600, 400).count).toBe(4);
  });
  it('uses a two-block pattern when it beats a single orientation', () => {
    // 1200 × 1000 with 400 × 300: single = 3×3 = 9 or 4×2 = 8; mixed 3 × 2 + 4 × 1 (300-wide rows) = 10
    const r = bestLayer(1200, 1000, 400, 300);
    expect(r.count).toBe(10);
    expect(r.pattern).toContain('rotated');
  });
  it('returns zero when the case does not fit', () => {
    expect(bestLayer(1200, 800, 1300, 900).count).toBe(0);
  });
});

describe('palletize', () => {
  const base = {
    palletLengthMm: 1200, palletWidthMm: 800, palletHeightMm: 144, maxLoadHeightMm: 1800, maxLoadKg: 0,
    caseLengthMm: 400, caseWidthMm: 200, caseHeightMm: 250, caseMassKg: 8, overhangMm: 0,
  };
  it('stacks to the height limit', () => {
    const r = palletize(base);
    expect(r.layers).toBe(6); // (1800 − 144) / 250 = 6.6
    expect(r.cases).toBe(72);
    expect(r.loadKg).toBe(576);
    expect(r.loadHeightMm).toBe(144 + 1500);
    expect(r.massLimited).toBe(false);
    expect(r.areaUsePct).toBeCloseTo(100, 9);
  });
  it('stops at the mass limit', () => {
    const r = palletize({ ...base, maxLoadKg: 400 }); // 96 kg per layer → 4 layers
    expect(r.layers).toBe(4);
    expect(r.massLimited).toBe(true);
  });
});
