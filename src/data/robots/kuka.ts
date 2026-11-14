import type { Robot, Source } from '../schema';

const R = '2026-11-03';
const agilus: Source = {
  url: 'https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/kr-agilus',
  title: 'KR AGILUS small robots',
  publisher: 'KUKA',
  retrieved: R,
};
const myKuka = (path: string, name: string): Source => ({
  url: `https://my.kuka.com/s/product/${path}?language=en_US`,
  title: `${name} product data (my.KUKA)`,
  publisher: 'KUKA',
  retrieved: R,
});

const COMMON_NOTES = [
  { label: 'Cleanroom', value: 'ISO 14644-1 Class 4 at 80 % override' },
  { label: 'Motion range', value: 'A1 ±170°, A2 −190°/45°, A3 −120°/156°, A4 ±185°, A5 ±120°, A6 ±350°' },
  { label: 'Operating temperature', value: '0 to 45 °C' },
];

function agilusRobot(slug: string, name: string, payloadKg: number, payloadMaxKg: number, reachMm: number, path: string, payloadNote: string, summary?: string): Robot {
  return {
    slug,
    brand: 'kuka',
    name,
    family: 'KR AGILUS',
    category: 'industrial-robots',
    status: 'production',
    summary: summary ?? `A KUKA KR AGILUS small robot rated ${payloadKg} kg (${payloadMaxKg} kg maximum) with ${reachMm} mm reach and ±0.02 mm pose repeatability.`,
    specs: {
      payloadKg,
      payloadMaxKg,
      reachMm,
      axes: 6,
      repeatabilityMm: 0.02,
      ipRating: 'IP65 / IP67',
      controller: 'KR C5 micro-2',
      mounting: ['Floor', 'Ceiling', 'Wall', 'Any angle'],
    },
    specNotes: {
      payloadKg: payloadNote,
      payloadMaxKg: 'Maximum payload per my.KUKA',
      repeatabilityMm: 'Pose repeatability per ISO 9283',
      ipRating: 'Robot and in-line wrist',
    },
    notes: COMMON_NOTES,
    sources: [myKuka(path, name), agilus],
    updated: R,
  };
}

export const robots: Robot[] = [
  agilusRobot('kr-6-r700-2', 'KR 6 R700-2', 6, 6.8, 726, 'kr-6-r7002/01t58000004l6iIAAQ', 'As listed on the KUKA KR AGILUS range page'),
  agilusRobot('kr-6-r900-2', 'KR 6 R900-2', 6, 6.7, 901, 'kr-6-r9002/01t58000004l6sKAAQ', 'As listed on the KUKA KR AGILUS range page', 'A KUKA KR AGILUS small robot rated 6 kg (6.7 kg maximum) with 901 mm reach and ±0.02 mm pose repeatability per ISO 9283 (KUKA).'),
  agilusRobot('kr-10-r900-2', 'KR 10 R900-2', 10, 11.3, 901, 'kr-10-r9002/01t58000004l73vAAA', 'Headline payload on my.KUKA; the range page lists 11 kg'),
  agilusRobot('kr-10-r1100-2', 'KR 10 R1100-2', 10, 11.1, 1101, 'kr-10-r11002/01t58000004l6jgAAA', 'Headline payload on my.KUKA; the range page lists 11 kg'),
];
