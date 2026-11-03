import type { Robot, Source } from '../schema';

const R = '2026-11-03';
const agilus: Source = {
  url: 'https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/kr-agilus',
  title: 'KR AGILUS small robots',
  publisher: 'KUKA',
  retrieved: R,
};

// KUKA's KR AGILUS page lists payload, reach, IP rating and controller per variant,
// but not repeatability or weight — those stay blank until we cite a datasheet.
function agilusRobot(slug: string, name: string, payloadKg: number, reachMm: number): Robot {
  return {
    slug,
    brand: 'kuka',
    name,
    family: 'KR AGILUS',
    category: 'industrial-robots',
    status: 'production',
    summary: `A ${payloadKg} kg KUKA KR AGILUS small robot with ${reachMm} mm reach, run on the KR C5 micro-2 controller.`,
    specs: { payloadKg, reachMm, ipRating: 'IP65 / IP67', controller: 'KR C5 micro-2' },
    sources: [agilus],
    updated: R,
  };
}

export const robots: Robot[] = [
  agilusRobot('kr-6-r700-2', 'KR 6 R700-2', 6, 726),
  agilusRobot('kr-6-r900-2', 'KR 6 R900-2', 6, 901),
  agilusRobot('kr-10-r900-2', 'KR 10 R900-2', 11, 901),
  agilusRobot('kr-10-r1100-2', 'KR 10 R1100-2', 11, 1101),
];
