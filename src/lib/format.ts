import type { Specs } from '../data/schema';

export interface SpecDef {
  label: string;
  short: string;
  format: (v: never) => string;
}

const num = (v: number, d = 0) => v.toLocaleString('en-US', { maximumFractionDigits: d });

export const SPEC_DEFS: Record<keyof Specs, SpecDef> = {
  payloadKg: { label: 'Rated payload', short: 'Payload', format: (v: number) => `${num(v, 1)} kg` },
  payloadMaxKg: { label: 'Max / extended payload', short: 'Max payload', format: (v: number) => `${num(v, 1)} kg` },
  reachMm: { label: 'Reach', short: 'Reach', format: (v: number) => `${num(v)} mm` },
  axes: { label: 'Axes', short: 'Axes', format: (v: number) => String(v) },
  repeatabilityMm: { label: 'Repeatability', short: 'Repeat.', format: (v: number) => `±${v} mm` },
  weightKg: { label: 'Robot weight', short: 'Weight', format: (v: number) => `${num(v, 1)} kg` },
  ipRating: { label: 'Protection rating', short: 'IP', format: (v: string) => v },
  controller: { label: 'Controller', short: 'Controller', format: (v: string) => v },
  mounting: { label: 'Mounting', short: 'Mounting', format: (v: string[]) => v.join(', ') },
  maxTcpSpeedMs: { label: 'Max TCP speed', short: 'TCP speed', format: (v: number) => `${num(v, 2)} m/s` },
  footprintMm: { label: 'Base footprint', short: 'Footprint', format: (v: number) => `Ø${num(v)} mm` },
  heightMm: { label: 'Height', short: 'Height', format: (v: number) => `${num(v / 1000, 2)} m` },
  dof: { label: 'Degrees of freedom', short: 'DoF', format: (v: number) => String(v) },
  runtimeH: { label: 'Runtime per charge', short: 'Runtime', format: (v: number) => `${num(v, 1)} h` },
  batteryWh: { label: 'Battery capacity', short: 'Battery', format: (v: number) => `${num(v)} Wh` },
  speedMs: { label: 'Moving speed', short: 'Speed', format: (v: number) => `${num(v, 1)} m/s` },
  priceUsd: { label: 'Published price', short: 'Price', format: (v: number) => `US$${num(v)}` },
};

export function formatSpec(key: keyof Specs, value: unknown): string {
  if (value === undefined || value === null) return '—';
  return (SPEC_DEFS[key].format as (v: unknown) => string)(value);
}

