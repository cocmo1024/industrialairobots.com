// Palletizing pattern: cases per layer, layers, cases per pallet and load mass.
// Pure geometry on the user's dimensions. Patterns considered: all cases in one
// orientation, or a two-block pattern (one block rotated 90°) — the common
// column/block patterns used for single-SKU pallets.

export interface PalletInput {
  palletLengthMm: number;
  palletWidthMm: number;
  palletHeightMm: number;
  /** Max overall height of the loaded pallet (incl. pallet), mm. */
  maxLoadHeightMm: number;
  /** Max load mass on the pallet (excluding the pallet), kg. 0 = no limit. */
  maxLoadKg: number;
  caseLengthMm: number;
  caseWidthMm: number;
  caseHeightMm: number;
  caseMassKg: number;
  /** Allowed overhang beyond the pallet edge, per side, mm. */
  overhangMm: number;
}

export interface Layout {
  /** Cases per layer. */
  count: number;
  /** Description, e.g. "4 × 3 + 2 × 1 rotated". */
  pattern: string;
}

export interface PalletResult {
  layout: Layout;
  layers: number;
  /** Layers limited by mass rather than height. */
  massLimited: boolean;
  cases: number;
  loadKg: number;
  loadHeightMm: number;
  /** Footprint area used, % of usable area. */
  areaUsePct: number;
}

/** Best cases-per-layer for a rectangle L × W filled with a × b cases. */
export function bestLayer(L: number, W: number, a: number, b: number): Layout {
  const fit = (len: number, size: number) => Math.floor(len / size);
  let best: Layout = { count: 0, pattern: 'Case larger than pallet' };
  const consider = (count: number, pattern: string) => {
    if (count > best.count) best = { count, pattern };
  };
  for (const [x, y] of [[a, b], [b, a]] as const) {
    // Single orientation
    consider(fit(L, x) * fit(W, y), `${fit(L, x)} × ${fit(W, y)}`);
    // Two blocks split along the length: first part in (x, y), rest rotated (y, x)
    for (let n = 1; n * x <= L; n++) {
      const rest = L - n * x;
      const c = n * fit(W, y) + fit(rest, y) * fit(W, x);
      consider(c, `${n} × ${fit(W, y)} + ${fit(rest, y)} × ${fit(W, x)} rotated`);
    }
    // Two blocks split along the width
    for (let m = 1; m * y <= W; m++) {
      const rest = W - m * y;
      const c = fit(L, x) * m + fit(L, y) * fit(rest, x);
      consider(c, `${fit(L, x)} × ${m} + ${fit(L, y)} × ${fit(rest, x)} rotated`);
    }
  }
  return best;
}

export function palletize(i: PalletInput): PalletResult {
  const L = i.palletLengthMm + 2 * i.overhangMm;
  const W = i.palletWidthMm + 2 * i.overhangMm;
  const layout = bestLayer(L, W, i.caseLengthMm, i.caseWidthMm);
  const heightLayers = Math.max(0, Math.floor((i.maxLoadHeightMm - i.palletHeightMm) / i.caseHeightMm));
  const perLayerKg = layout.count * i.caseMassKg;
  const massLayers = i.maxLoadKg > 0 && perLayerKg > 0 ? Math.floor(i.maxLoadKg / perLayerKg) : Infinity;
  const layers = Math.min(heightLayers, massLayers);
  const cases = layers * layout.count;
  return {
    layout,
    layers,
    massLimited: massLayers < heightLayers,
    cases,
    loadKg: cases * i.caseMassKg,
    loadHeightMm: i.palletHeightMm + layers * i.caseHeightMm,
    areaUsePct: ((layout.count * i.caseLengthMm * i.caseWidthMm) / (L * W)) * 100,
  };
}

export const PALLET_PRESETS = [
  { label: 'EUR / EPAL 1 — 1200 × 800 mm', l: 1200, w: 800, h: 144 },
  { label: 'GMA (North America) — 48 × 40 in (1219 × 1016 mm)', l: 1219, w: 1016, h: 140 },
  { label: 'ISO 1200 × 1000 mm', l: 1200, w: 1000, h: 144 },
  { label: 'Asia 1100 × 1100 mm', l: 1100, w: 1100, h: 144 },
] as const;
