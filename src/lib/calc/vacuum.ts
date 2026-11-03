// Vacuum suction cup sizing using the standard theoretical holding-force load cases
// published by vacuum gripper manufacturers (e.g. Schmalz, Festo, Piab).

export const G = 9.81;

export type LoadCase =
  /** Cup faces down onto a horizontal part, robot moves vertically. */
  | 'horizontal-vertical'
  /** Cup faces down onto a horizontal part, robot moves horizontally. */
  | 'horizontal-horizontal'
  /** Cup on a vertical face (part held on its side), robot moves vertically. */
  | 'vertical-vertical';

export interface VacuumInput {
  massKg: number;
  /** Max acceleration of the robot during the move, m/s². */
  accelMs2: number;
  /** Friction coefficient between cup and part (only used in friction load cases). */
  friction: number;
  safetyFactor: number;
  loadCase: LoadCase;
  cups: number;
  /** Vacuum level (pressure below atmosphere), kPa. */
  vacuumKpa: number;
}

export interface VacuumResult {
  /** Theoretical holding force required for the whole part, N. */
  forceN: number;
  forcePerCupN: number;
  /** Minimum effective suction area per cup, mm². */
  areaPerCupMm2: number;
  /** Minimum effective diameter per cup, mm. */
  diameterMm: number;
}

export function holdingForce(i: Pick<VacuumInput, 'massKg' | 'accelMs2' | 'friction' | 'safetyFactor' | 'loadCase'>): number {
  const { massKg: m, accelMs2: a, friction: mu, safetyFactor: s } = i;
  switch (i.loadCase) {
    case 'horizontal-vertical':
      return m * (G + a) * s;
    case 'horizontal-horizontal':
      return m * (G + a / mu) * s;
    case 'vertical-vertical':
      return (m / mu) * (G + a) * s;
  }
}

export function sizeVacuum(i: VacuumInput): VacuumResult {
  const forceN = holdingForce(i);
  const forcePerCupN = forceN / i.cups;
  // 1 kPa = 0.001 N/mm²
  const areaPerCupMm2 = forcePerCupN / (i.vacuumKpa * 0.001);
  const diameterMm = Math.sqrt((4 * areaPerCupMm2) / Math.PI);
  return { forceN, forcePerCupN, areaPerCupMm2, diameterMm };
}

export const FRICTION_PRESETS = [
  { label: 'Oily surface', value: 0.1 },
  { label: 'Wet surface', value: 0.25 },
  { label: 'Wood, metal, glass, stone (dry)', value: 0.5 },
  { label: 'Rough surface', value: 0.6 },
] as const;
