// Minimum distance for electro-sensitive protective equipment (light curtains),
// normal (perpendicular) approach, using the ISO 13855:2010 / EN ISO 13855:2010 formulas.
// ISO 13855 was revised in 2024; the page tells users to check which edition applies.

export interface SafetyInput {
  /** Machine stopping time incl. control system, ms. */
  machineStopMs: number;
  /** Response time of the protective device, ms. */
  deviceResponseMs: number;
  /** Detection capability (resolution) of the light curtain, mm. */
  resolutionMm: number;
}

export interface SafetyResult {
  totalTimeS: number;
  /** Approach speed used, mm/s. */
  k: number;
  /** Intrusion distance C, mm. */
  c: number;
  /** Minimum distance S, mm. */
  distanceMm: number;
  rule: string;
}

export function safetyDistance(i: SafetyInput): SafetyResult {
  const t = (i.machineStopMs + i.deviceResponseMs) / 1000;
  const d = i.resolutionMm;
  if (d <= 40) {
    const c = Math.max(0, 8 * (d - 14));
    const s2000 = 2000 * t + c;
    if (s2000 <= 500) {
      return { totalTimeS: t, k: 2000, c, distanceMm: Math.max(100, s2000), rule: 'S = 2000·T + 8(d − 14), minimum 100 mm' };
    }
    const s1600 = 1600 * t + c;
    return { totalTimeS: t, k: 1600, c, distanceMm: Math.max(500, s1600), rule: 'S > 500 mm, so S = 1600·T + 8(d − 14), minimum 500 mm' };
  }
  if (d <= 70) {
    return { totalTimeS: t, k: 1600, c: 850, distanceMm: 1600 * t + 850, rule: 'S = 1600·T + 850 (40 < d ≤ 70 mm)' };
  }
  throw new RangeError('Resolution above 70 mm is outside this calculator (use the multi-beam rules of the standard).');
}
