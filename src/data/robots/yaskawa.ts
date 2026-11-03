import type { Robot } from '../schema';

const R = '2026-11-03';

export const robots: Robot[] = [
  {
    slug: 'gp25',
    brand: 'yaskawa',
    name: 'Motoman GP25',
    family: 'GP',
    category: 'industrial-robots',
    status: 'production',
    summary: 'A 25 kg general-purpose Motoman handling robot with 1730 mm horizontal reach on the YRC1000 controller.',
    specs: { payloadKg: 25, reachMm: 1730, controller: 'YRC1000' },
    specNotes: { reachMm: 'Horizontal reach' },
    notes: [{ label: 'Vertical reach', value: '3089 mm' }],
    sources: [
      {
        url: 'https://www.motoman.com/en-us/products/robots/industrial/assembly-handling/gp-series/gp25',
        title: 'GP25 robot',
        publisher: 'Yaskawa America (Motoman)',
        retrieved: R,
      },
    ],
    updated: R,
  },
];
