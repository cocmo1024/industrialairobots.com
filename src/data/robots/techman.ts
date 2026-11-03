import type { Robot, Source } from '../schema';

const R = '2026-11-03';
const BASE = 'https://www.tm-robot.com/en/product/tm-ai-cobot-series/';
const series: Source = {
  url: 'https://www.tm-robot.com/en/product/tm-ai-cobot-series',
  title: 'TM AI Cobot Series',
  publisher: 'Techman Robot',
  retrieved: R,
};
const VISION = { label: 'Vision', value: 'Integrated camera and vision system built into the arm (per Techman)' };

function tm(path: string, slug: string, name: string, payloadKg: number, reachMm: number, weightKg: number, summary: string): Robot {
  return {
    slug,
    brand: 'techman',
    name,
    family: 'TM AI Cobot',
    category: 'cobots',
    status: 'production',
    summary,
    specs: { payloadKg, reachMm, weightKg, ipRating: 'IP54' },
    notes: [VISION],
    sources: [{ url: BASE + path, title: name, publisher: 'Techman Robot', retrieved: R }, series],
    updated: R,
  };
}

export const robots: Robot[] = [
  tm('tm5-700', 'tm5-700', 'TM5-700', 6, 746, 22, 'A 6 kg Techman cobot with 746 mm reach and a camera built into the arm.'),
  tm('TM12', 'tm12', 'TM12', 12, 1300, 33, 'A 12 kg Techman cobot with 1300 mm reach and a camera built into the arm.'),
  tm('TM14', 'tm14', 'TM14', 14, 1100, 33, 'A 14 kg Techman cobot with 1100 mm reach and a camera built into the arm.'),
  tm('TM16', 'tm16', 'TM16', 16, 917, 32, 'A 16 kg short-reach Techman cobot (917 mm) with a camera built into the arm.'),
  tm('TM20', 'tm20', 'TM20', 20, 1300, 32, 'A 20 kg Techman cobot with 1300 mm reach and a camera built into the arm.'),
];
