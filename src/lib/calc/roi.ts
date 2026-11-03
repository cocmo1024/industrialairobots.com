// Robot cell ROI / payback. Plain arithmetic on user inputs; no hidden assumptions.

export interface RoiInput {
  /** Robot, tooling, guarding, integration and commissioning — total upfront cost. */
  investment: number;
  /** Operators no longer needed on this task, per shift. */
  operatorsPerShift: number;
  shiftsPerDay: number;
  hoursPerShift: number;
  daysPerYear: number;
  /** Fully burdened labor cost per hour (wage + benefits + overhead). */
  laborRate: number;
  /** Maintenance, energy, spare parts, support contracts per year. */
  annualOperatingCost: number;
  /** Other quantified yearly gains (scrap, throughput) — optional. */
  otherAnnualSavings: number;
  /** Discount rate for NPV, % per year. */
  discountRatePct: number;
  /** Evaluation period in years. */
  years: number;
}

export interface RoiResult {
  laborHoursPerYear: number;
  annualLaborSavings: number;
  annualNetSavings: number;
  /** Simple payback in months; null if net savings <= 0. */
  paybackMonths: number | null;
  /** Undiscounted net over the period: years × net − investment. */
  netOverPeriod: number;
  npv: number;
  /** (net over period) / investment × 100. */
  roiPct: number;
  cashflow: { year: number; cumulative: number }[];
}

export function roi(i: RoiInput): RoiResult {
  const laborHoursPerYear = i.operatorsPerShift * i.shiftsPerDay * i.hoursPerShift * i.daysPerYear;
  const annualLaborSavings = laborHoursPerYear * i.laborRate;
  const annualNetSavings = annualLaborSavings + i.otherAnnualSavings - i.annualOperatingCost;
  const paybackMonths = annualNetSavings > 0 ? (i.investment / annualNetSavings) * 12 : null;
  const years = Math.max(1, Math.round(i.years));
  const r = i.discountRatePct / 100;
  let npv = -i.investment;
  const cashflow = [{ year: 0, cumulative: -i.investment }];
  for (let t = 1; t <= years; t++) {
    npv += annualNetSavings / Math.pow(1 + r, t);
    cashflow.push({ year: t, cumulative: -i.investment + annualNetSavings * t });
  }
  const netOverPeriod = annualNetSavings * years - i.investment;
  const roiPct = i.investment > 0 ? (netOverPeriod / i.investment) * 100 : 0;
  return { laborHoursPerYear, annualLaborSavings, annualNetSavings, paybackMonths, netOverPeriod, npv, roiPct, cashflow };
}
