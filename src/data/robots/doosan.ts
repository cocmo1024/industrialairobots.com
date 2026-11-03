import type { Robot } from '../schema';

const R = '2026-11-03';
const BASE = 'https://www.doosanrobotics.com/en/product-solutions/product/';

// Doosan model pages state payload, reach and repeatability. M- and H-Series pages
// state six torque sensors, one per axis. Other fields stay blank until we cite the catalog.
function doosan(series: string, slug: string, name: string, payloadKg: number, reachMm: number, rep: number, summary: string, sixAxes: boolean): Robot {
  return {
    slug,
    brand: 'doosan-robotics',
    name,
    family: `${series.toUpperCase()}-Series`,
    category: 'cobots',
    status: 'production',
    summary,
    specs: { payloadKg, reachMm, repeatabilityMm: rep, ...(sixAxes ? { axes: 6 } : {}) },
    sources: [{ url: `${BASE}${series}-series/${slug}/`, title: name, publisher: 'Doosan Robotics', retrieved: R }],
    updated: R,
  };
}

export const robots: Robot[] = [
  doosan('p', 'p3020', 'P3020', 30, 2030, 0.1, 'The Doosan P-Series palletizing cobot: 30 kg payload with 2030 mm reach.', false),
  doosan('h', 'h2515', 'H2515', 25, 1500, 0.1, 'A 25 kg high-payload Doosan H-Series cobot with 1500 mm reach and torque sensors in all six axes.', true),
  doosan('h', 'h2017', 'H2017', 20, 1700, 0.1, 'A 20 kg Doosan H-Series cobot with 1700 mm reach and torque sensors in all six axes.', true),
  doosan('m', 'm1509', 'M1509', 15, 900, 0.03, 'A 15 kg short-reach Doosan M-Series cobot (900 mm) with torque sensors in all six axes.', true),
  doosan('m', 'm1013', 'M1013', 10, 1300, 0.05, 'A 10 kg Doosan M-Series cobot with 1300 mm reach and torque sensors in all six axes.', true),
  doosan('m', 'm0617', 'M0617', 6, 1700, 0.1, 'A 6 kg long-reach Doosan M-Series cobot (1700 mm) with torque sensors in all six axes.', true),
  doosan('m', 'm0609', 'M0609', 6, 900, 0.03, 'A 6 kg Doosan M-Series cobot with 900 mm reach and torque sensors in all six axes.', true),
  doosan('a', 'a0912', 'A0912', 9, 1200, 0.05, 'A 9 kg Doosan A-Series cobot with 1200 mm reach, aimed at fast, cost-sensitive automation.', false),
  doosan('a', 'a0509', 'A0509', 5, 900, 0.03, 'A 5 kg Doosan A-Series cobot with 900 mm reach.', false),
  doosan('e', 'e0509', 'E0509', 5, 900, 0.05, 'A 5 kg Doosan E-Series cobot with 900 mm reach.', false),
];
