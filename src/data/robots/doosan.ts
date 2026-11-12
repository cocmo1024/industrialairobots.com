import type { Robot } from '../schema';

const R = '2026-11-12';
const BASE = 'https://www.doosanrobotics.com/en/product-solutions/product/';
const CATALOG = {
  url: 'https://www.doosanrobotics.com/pdf/catalog/External_DoosanRobotics_renew_eng.pdf',
  title: 'Doosan Robotics robot series catalog (2024) — technical specification table',
  publisher: 'Doosan Robotics',
  retrieved: R,
};
const ANY_ORIENTATION = ['Floor', 'Wall', 'Ceiling', 'Inverted'];

// Weight policy: Doosan's own documents disagree on manipulator weight for the M- and
// H-Series (installation manual and older series catalogs vs the 2024 catalog), so those
// entries publish no weight and carry a note with the conflicting figures. Models whose
// weight appears in the current catalog without a conflicting source keep the value.
export const robots: Robot[] = [
  {
    slug: 'p3020',
    brand: 'doosan-robotics',
    name: 'P3020',
    family: 'P-Series',
    category: 'cobots',
    status: 'production',
    summary: 'The Doosan P-Series palletizing cobot: 30 kg payload with 2030 mm reach and five axes, per Doosan’s catalog.',
    specs: { payloadKg: 30, reachMm: 2030, repeatabilityMm: 0.1, axes: 5, weightKg: 83, ipRating: 'IP54', mounting: ['Floor'] },
    sources: [
      { url: `${BASE}p-series/p3020/`, title: 'P3020', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'h2515',
    brand: 'doosan-robotics',
    name: 'H2515',
    family: 'H-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 25 kg high-payload Doosan H-Series cobot with 1500 mm reach and torque sensors in all six axes.',
    specs: { payloadKg: 25, reachMm: 1500, repeatabilityMm: 0.1, axes: 6, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    notes: [
      {
        label: 'Weight',
        value: 'Not published here: Doosan documents disagree — 70 kg (2020 H-Series catalog), 72 kg (installation manual) and 77 kg (2024 catalog).',
      },
    ],
    sources: [
      { url: `${BASE}h-series/h2515/`, title: 'H2515', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'h2017',
    brand: 'doosan-robotics',
    name: 'H2017',
    family: 'H-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 20 kg Doosan H-Series cobot with 1700 mm reach and torque sensors in all six axes.',
    specs: { payloadKg: 20, reachMm: 1700, repeatabilityMm: 0.1, axes: 6, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    notes: [
      {
        label: 'Weight',
        value: 'Not published here: Doosan documents disagree — 72 kg (2020 H-Series catalog), 74 kg (installation manual) and 79 kg (2024 catalog).',
      },
    ],
    sources: [
      { url: `${BASE}h-series/h2017/`, title: 'H2017', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'm1509',
    brand: 'doosan-robotics',
    name: 'M1509',
    family: 'M-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 15 kg short-reach Doosan M-Series cobot (900 mm) with torque sensors in all six axes.',
    specs: { payloadKg: 15, payloadMaxKg: 17, reachMm: 900, repeatabilityMm: 0.03, axes: 6, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    specNotes: {
      payloadMaxKg: 'Up to 17 kg depending on the automatic acceleration adjustment, per Doosan’s catalog.',
    },
    notes: [
      {
        label: 'Weight',
        value: 'Not published here: Doosan documents disagree — 32 kg (installation manual) vs 33 kg (2024 catalog).',
      },
    ],
    sources: [
      { url: `${BASE}m-series/m1509/`, title: 'M1509', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'm1013',
    brand: 'doosan-robotics',
    name: 'M1013',
    family: 'M-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 10 kg Doosan M-Series cobot with 1300 mm reach and torque sensors in all six axes.',
    specs: { payloadKg: 10, payloadMaxKg: 12, reachMm: 1300, repeatabilityMm: 0.05, axes: 6, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    specNotes: {
      payloadMaxKg: 'Up to 12 kg depending on the automatic acceleration adjustment, per Doosan’s catalog.',
    },
    notes: [
      {
        label: 'Weight',
        value: 'Not published here: Doosan documents disagree — 33 kg (installation manual) vs 34 kg (2024 catalog).',
      },
    ],
    sources: [
      { url: `${BASE}m-series/m1013/`, title: 'M1013', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'm0617',
    brand: 'doosan-robotics',
    name: 'M0617',
    family: 'M-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 6 kg long-reach Doosan M-Series cobot (1700 mm) with torque sensors in all six axes.',
    specs: { payloadKg: 6, payloadMaxKg: 8, reachMm: 1700, repeatabilityMm: 0.1, axes: 6, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    specNotes: {
      payloadMaxKg: 'Up to 8 kg depending on the automatic acceleration adjustment, per Doosan’s catalog.',
    },
    notes: [
      {
        label: 'Weight',
        value: 'Not published here: Doosan documents disagree — 34 kg (installation manual) vs 35.5 kg (2024 catalog).',
      },
    ],
    sources: [
      { url: `${BASE}m-series/m0617/`, title: 'M0617', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'm0609',
    brand: 'doosan-robotics',
    name: 'M0609',
    family: 'M-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 6 kg Doosan M-Series cobot with 900 mm reach and torque sensors in all six axes.',
    specs: { payloadKg: 6, reachMm: 900, repeatabilityMm: 0.03, axes: 6, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    notes: [
      {
        label: 'Weight',
        value: 'Not published here: Doosan documents disagree — 27 kg (installation manual) vs 27.5 kg (2024 catalog).',
      },
    ],
    sources: [
      { url: `${BASE}m-series/m0609/`, title: 'M0609', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'a0912s',
    brand: 'doosan-robotics',
    name: 'A0912S',
    family: 'A-Series',
    category: 'cobots',
    status: 'production',
    summary: 'The A0912S variant of Doosan’s A-Series cobot line: 9 kg payload with 1,203 mm reach, per Doosan’s catalog.',
    specs: { payloadKg: 9, reachMm: 1203, repeatabilityMm: 0.05, axes: 6, weightKg: 31, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    sources: [CATALOG],
    updated: R,
  },
  {
    slug: 'a0509s',
    brand: 'doosan-robotics',
    name: 'A0509S',
    family: 'A-Series',
    category: 'cobots',
    status: 'production',
    summary: 'The A0509S variant of Doosan’s A-Series cobot line: 5 kg payload with 903 mm reach, per Doosan’s catalog.',
    specs: { payloadKg: 5, reachMm: 903, repeatabilityMm: 0.03, axes: 6, weightKg: 21, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    sources: [CATALOG],
    updated: R,
  },
  {
    slug: 'a0912',
    brand: 'doosan-robotics',
    name: 'A0912',
    family: 'A-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 9 kg Doosan A-Series cobot with 1200 mm reach, aimed at fast, cost-sensitive automation.',
    specs: { payloadKg: 9, reachMm: 1200, repeatabilityMm: 0.05, axes: 6, weightKg: 31, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    sources: [
      { url: `${BASE}a-series/a0912/`, title: 'A0912', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'a0509',
    brand: 'doosan-robotics',
    name: 'A0509',
    family: 'A-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 5 kg Doosan A-Series cobot with 900 mm reach.',
    specs: { payloadKg: 5, reachMm: 900, repeatabilityMm: 0.03, axes: 6, weightKg: 21, ipRating: 'IP54', mounting: ANY_ORIENTATION },
    sources: [
      { url: `${BASE}a-series/a0509/`, title: 'A0509', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
  {
    slug: 'e0509',
    brand: 'doosan-robotics',
    name: 'E0509',
    family: 'E-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 5 kg Doosan E-Series cobot with 900 mm reach; the E-Series is Doosan’s food-and-beverage line with an IP66 rating.',
    specs: { payloadKg: 5, reachMm: 900, repeatabilityMm: 0.05, axes: 6, weightKg: 22.5, ipRating: 'IP66', mounting: ANY_ORIENTATION },
    sources: [
      { url: `${BASE}e-series/e0509/`, title: 'E0509', publisher: 'Doosan Robotics', retrieved: R },
      CATALOG,
    ],
    updated: R,
  },
];
