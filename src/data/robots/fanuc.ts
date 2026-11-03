import type { Robot } from '../schema';

const R = '2026-11-03';

export const robots: Robot[] = [
  {
    slug: 'crx-10ia',
    brand: 'fanuc',
    name: 'CRX-10iA',
    family: 'CRX',
    category: 'cobots',
    status: 'production',
    summary: 'FANUC’s 10 kg collaborative robot with 1249 mm reach, running on the R-30iB Plus controller.',
    specs: {
      payloadKg: 10,
      reachMm: 1249,
      axes: 6,
      repeatabilityMm: 0.05,
      weightKg: 39,
      ipRating: 'IP67',
      controller: 'R-30iB Plus',
      mounting: ['Floor', 'Angle', 'Inverted'],
    },
    notes: [
      { label: 'Speed', value: '1000 mm/s in collaborative mode; 2000 mm/s in high-speed mode' },
      { label: 'Wrist moment (J4 / J5 / J6)', value: '34.8 / 26 / 11 N·m' },
      { label: 'Wrist inertia (J4 / J5 / J6)', value: '1.28 / 0.9 / 0.3 kg·m²' },
      { label: 'Motion range', value: 'J1 380°, J2 360°, J3 570°, J4 380°, J5 360°, J6 380°' },
    ],
    sources: [
      {
        url: 'https://www.fanucamerica.com/products/robots/series/collaborative-robot/crx-10ia',
        title: 'CRX-10iA collaborative robot',
        publisher: 'FANUC America',
        retrieved: R,
      },
    ],
    updated: R,
  },
  {
    slug: 'm-20id-25',
    brand: 'fanuc',
    name: 'M-20iD/25',
    family: 'M-20',
    category: 'industrial-robots',
    status: 'production',
    summary: 'A 25 kg, 1831 mm hollow-wrist industrial robot from FANUC’s M-20 series for handling and machine tending.',
    specs: {
      payloadKg: 25,
      reachMm: 1831,
      axes: 6,
      repeatabilityMm: 0.02,
      weightKg: 250,
      ipRating: 'IP54 (IP65 optional)',
      controller: 'R-30iB Plus',
      mounting: ['Floor', 'Angle', 'Inverted'],
    },
    specNotes: { ipRating: 'Body; wrist and J3 arm IP67' },
    sources: [
      {
        url: 'https://www.fanucamerica.com/products/robots/series/m-20/m-20id-25',
        title: 'M-20iD/25 industrial robot',
        publisher: 'FANUC America',
        retrieved: R,
      },
    ],
    updated: R,
  },
];
