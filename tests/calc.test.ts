import { describe, expect, it } from 'vitest';
import { roi } from '../src/lib/calc/roi';
import { throughput, requiredCycleTime, taktTime } from '../src/lib/calc/throughput';
import { holdingForce, sizeVacuum, G } from '../src/lib/calc/vacuum';
import { safetyDistance } from '../src/lib/calc/safety-distance';

describe('roi', () => {
  const base = {
    investment: 150_000, operatorsPerShift: 1, shiftsPerDay: 2, hoursPerShift: 8, daysPerYear: 250,
    laborRate: 30, annualOperatingCost: 6_000, otherAnnualSavings: 0, discountRatePct: 0, years: 5,
  };
  it('computes savings and payback by hand', () => {
    const r = roi(base);
    expect(r.laborHoursPerYear).toBe(4000);
    expect(r.annualLaborSavings).toBe(120_000);
    expect(r.annualNetSavings).toBe(114_000);
    expect(r.paybackMonths!).toBeCloseTo((150_000 / 114_000) * 12, 9);
    expect(r.netOverPeriod).toBe(114_000 * 5 - 150_000);
    expect(r.npv).toBeCloseTo(r.netOverPeriod, 6); // 0 % discount → NPV = undiscounted net
    expect(r.cashflow).toHaveLength(6);
  });
  it('discounts cash flows', () => {
    const r = roi({ ...base, discountRatePct: 10, years: 1 });
    expect(r.npv).toBeCloseTo(-150_000 + 114_000 / 1.1, 6);
  });
  it('returns null payback when the cell loses money', () => {
    expect(roi({ ...base, laborRate: 1 }).paybackMonths).toBeNull();
  });
});

describe('throughput', () => {
  it('converts cycle time to output', () => {
    const t = throughput({ cycleTimeS: 12, partsPerCycle: 2, efficiencyPct: 85, hoursPerShift: 8, shiftsPerDay: 2 });
    expect(t.idealPerHour).toBe(600);
    expect(t.partsPerHour).toBeCloseTo(510, 9);
    expect(t.partsPerDay).toBeCloseTo(510 * 16, 9);
  });
  it('inverts back to the cycle time', () => {
    expect(requiredCycleTime(510, 2, 85)).toBeCloseTo(12, 9);
    expect(taktTime(16, 960)).toBe(60);
  });
});

describe('vacuum', () => {
  it('applies the three load cases', () => {
    const p = { massKg: 10, accelMs2: 5, friction: 0.5, safetyFactor: 2 };
    expect(holdingForce({ ...p, loadCase: 'horizontal-vertical' })).toBeCloseTo(10 * (G + 5) * 2, 9);
    expect(holdingForce({ ...p, loadCase: 'horizontal-horizontal' })).toBeCloseTo(10 * (G + 10) * 2, 9);
    expect(holdingForce({ ...p, loadCase: 'vertical-vertical' })).toBeCloseTo(20 * (G + 5) * 2, 9);
  });
  it('sizes the cup area from vacuum level', () => {
    const r = sizeVacuum({ massKg: 10, accelMs2: 5, friction: 0.5, safetyFactor: 2, loadCase: 'horizontal-vertical', cups: 4, vacuumKpa: 60 });
    expect(r.forcePerCupN).toBeCloseTo(296.2 / 4, 6);
    expect(r.areaPerCupMm2).toBeCloseTo(74.05 / 0.06, 6);
    expect(Math.PI * (r.diameterMm / 2) ** 2).toBeCloseTo(r.areaPerCupMm2, 6);
  });
});

describe('safety distance (ISO 13855:2010)', () => {
  it('uses K = 2000 below 500 mm with the 100 mm floor', () => {
    const r = safetyDistance({ machineStopMs: 100, deviceResponseMs: 20, resolutionMm: 14 });
    expect(r.k).toBe(2000);
    expect(r.distanceMm).toBeCloseTo(240, 9);
    expect(safetyDistance({ machineStopMs: 20, deviceResponseMs: 10, resolutionMm: 14 }).distanceMm).toBe(100);
  });
  it('switches to K = 1600 above 500 mm, never below 500 mm', () => {
    const r = safetyDistance({ machineStopMs: 280, deviceResponseMs: 20, resolutionMm: 30 });
    // 2000·0.3 + 128 = 728 > 500 → 1600·0.3 + 128 = 608
    expect(r.k).toBe(1600);
    expect(r.distanceMm).toBeCloseTo(608, 9);
    // 2000·0.2 + 128 = 528 > 500, 1600·0.2 + 128 = 448 → floor 500
    expect(safetyDistance({ machineStopMs: 190, deviceResponseMs: 10, resolutionMm: 30 }).distanceMm).toBe(500);
  });
  it('uses C = 850 for 40 < d ≤ 70 and rejects coarser devices', () => {
    expect(safetyDistance({ machineStopMs: 200, deviceResponseMs: 0, resolutionMm: 50 }).distanceMm).toBeCloseTo(1170, 9);
    expect(() => safetyDistance({ machineStopMs: 200, deviceResponseMs: 0, resolutionMm: 80 })).toThrow();
  });
});
