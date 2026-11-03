// Cycle time ↔ throughput for a robot cell.

export interface ThroughputInput {
  cycleTimeS: number;
  partsPerCycle: number;
  /** Share of planned time the cell actually runs, % (availability × performance, if known). */
  efficiencyPct: number;
  hoursPerShift: number;
  shiftsPerDay: number;
}

export interface ThroughputResult {
  idealPerHour: number;
  partsPerHour: number;
  partsPerShift: number;
  partsPerDay: number;
}

export function throughput(i: ThroughputInput): ThroughputResult {
  const idealPerHour = (3600 / i.cycleTimeS) * i.partsPerCycle;
  const partsPerHour = idealPerHour * (i.efficiencyPct / 100);
  const partsPerShift = partsPerHour * i.hoursPerShift;
  return { idealPerHour, partsPerHour, partsPerShift, partsPerDay: partsPerShift * i.shiftsPerDay };
}

/** Longest cycle time (s) that still meets a target output per hour. */
export function requiredCycleTime(targetPerHour: number, partsPerCycle: number, efficiencyPct: number): number {
  return (3600 * partsPerCycle * (efficiencyPct / 100)) / targetPerHour;
}

/** Takt time (s per part) from available time and demand. */
export function taktTime(availableHoursPerDay: number, demandPerDay: number): number {
  return (availableHoursPerDay * 3600) / demandPerDay;
}
