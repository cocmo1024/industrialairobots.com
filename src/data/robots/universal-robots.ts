import type { Robot, Source } from '../schema';

const R = '2026-11-03';
const eSeries: Source = {
  url: 'https://www.universal-robots.com/products/e-series/',
  title: 'e-Series collaborative robots',
  publisher: 'Universal Robots',
  retrieved: R,
};

const urSeries: Source = {
  url: 'https://www.universal-robots.com/products/ur-series/',
  title: 'UR Series collaborative robots',
  publisher: 'Universal Robots',
  retrieved: R,
};

export const robots: Robot[] = [
  {
    slug: 'ur3e-540',
    brand: 'universal-robots',
    name: 'UR3e-540',
    family: 'e-Series',
    category: 'cobots',
    status: 'production',
    summary: 'The smallest Universal Robots e-Series arm, rated for 3 kg with 540 mm reach, for benchtop assembly and small-part handling.',
    specs: { payloadKg: 3, reachMm: 540, repeatabilityMm: 0.03, weightKg: 11.2, footprintMm: 128 },
    sources: [eSeries],
    updated: R,
  },
  {
    slug: 'ur7e-920',
    brand: 'universal-robots',
    name: 'UR7e-920',
    family: 'e-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 7.5 kg e-Series cobot with 920 mm reach, run on the CB7 controller.',
    specs: { payloadKg: 7.5, reachMm: 920, repeatabilityMm: 0.03, weightKg: 20.6, footprintMm: 151, maxTcpSpeedMs: 4, controller: 'CB7' },
    sources: [
      { url: 'https://www.universal-robots.com/products/ur7e-920/', title: 'UR7e-920', publisher: 'Universal Robots', retrieved: R },
      eSeries,
    ],
    updated: R,
  },
  {
    slug: 'ur12e-1300',
    brand: 'universal-robots',
    name: 'UR12e-1300',
    family: 'e-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 12.5 kg e-Series cobot with 1300 mm reach, common in machine tending and light palletizing.',
    specs: { payloadKg: 12.5, reachMm: 1300, repeatabilityMm: 0.05, weightKg: 33.5, footprintMm: 190, maxTcpSpeedMs: 4, controller: 'CB7' },
    sources: [
      { url: 'https://www.universal-robots.com/products/ur12e-1300/', title: 'UR12e-1300', publisher: 'Universal Robots', retrieved: R },
      eSeries,
    ],
    updated: R,
  },
  {
    slug: 'ur16e',
    brand: 'universal-robots',
    name: 'UR16e',
    family: 'e-Series',
    category: 'cobots',
    status: 'production',
    summary: 'A short-reach, high-payload e-Series cobot: 16 kg at 900 mm reach.',
    specs: { payloadKg: 16, reachMm: 900, repeatabilityMm: 0.05, weightKg: 33.1, footprintMm: 190 },
    sources: [eSeries],
    updated: R,
  },
  {
    slug: 'ur20',
    brand: 'universal-robots',
    name: 'UR20',
    family: 'UR Series',
    category: 'cobots',
    status: 'production',
    summary: 'A long-reach UR Series cobot rated 20 kg (25 kg extended payload) at 1750 mm, aimed at palletizing and welding.',
    specs: { payloadKg: 20, payloadMaxKg: 25, reachMm: 1750, weightKg: 64, footprintMm: 245, maxTcpSpeedMs: 5, ipRating: 'IP65' },
    specNotes: { payloadMaxKg: 'Extended payload as listed by Universal Robots' },
    notes: [
      { label: 'Cleanroom', value: 'ISO Class 4 (per Universal Robots)' },
      { label: 'Repeatability', value: 'Conflicting on the manufacturer site: ±0.01 mm on the model page, ±0.1 mm on the UR Series overview. Confirm with the datasheet.' },
    ],
    sources: [
      { url: 'https://www.universal-robots.com/products/ur20-1750/', title: 'UR20', publisher: 'Universal Robots', retrieved: R },
      urSeries,
    ],
    updated: R,
  },
  {
    slug: 'ur8-long',
    brand: 'universal-robots',
    name: 'UR8 Long',
    family: 'UR Series',
    category: 'cobots',
    status: 'production',
    summary: 'A long-reach UR Series cobot: 8 kg (10 kg extended) at 1750 mm, for applications that need reach more than payload.',
    specs: { payloadKg: 8, payloadMaxKg: 10, reachMm: 1750, repeatabilityMm: 0.08, weightKg: 44.7, footprintMm: 204, maxTcpSpeedMs: 5 },
    specNotes: { payloadMaxKg: 'Extended payload as listed by Universal Robots' },
    sources: [urSeries],
    updated: R,
  },
  {
    slug: 'ur15',
    brand: 'universal-robots',
    name: 'UR15',
    family: 'UR Series',
    category: 'cobots',
    status: 'production',
    summary: 'A 15 kg (17.5 kg extended) UR Series cobot with 1300 mm reach and 5 m/s maximum TCP speed.',
    specs: { payloadKg: 15, payloadMaxKg: 17.5, reachMm: 1300, repeatabilityMm: 0.05, weightKg: 40.7, footprintMm: 204, maxTcpSpeedMs: 5, ipRating: 'IP65' },
    specNotes: { payloadMaxKg: 'Extended payload capacity as listed by Universal Robots' },
    notes: [{ label: 'Cleanroom', value: 'Class 4 (per Universal Robots)' }],
    sources: [
      { url: 'https://www.universal-robots.com/products/ur15-cb5/', title: 'UR15', publisher: 'Universal Robots', retrieved: R },
      urSeries,
    ],
    updated: R,
  },
  {
    slug: 'ur18',
    brand: 'universal-robots',
    name: 'UR18',
    family: 'UR Series',
    category: 'cobots',
    status: 'production',
    summary: 'A compact high-payload UR Series cobot: 18 kg at 950 mm reach.',
    specs: { payloadKg: 18, reachMm: 950, repeatabilityMm: 0.05, weightKg: 39.2, footprintMm: 204, maxTcpSpeedMs: 4 },
    sources: [urSeries],
    updated: R,
  },
  {
    slug: 'ur30',
    brand: 'universal-robots',
    name: 'UR30',
    family: 'UR Series',
    category: 'cobots',
    status: 'production',
    summary: 'The highest-payload Universal Robots cobot: 30 kg (35 kg extended) at 1300 mm reach.',
    specs: { payloadKg: 30, payloadMaxKg: 35, reachMm: 1300, weightKg: 63.5, footprintMm: 245, maxTcpSpeedMs: 4, ipRating: 'IP65' },
    specNotes: { payloadMaxKg: 'Extended payload as listed by Universal Robots' },
    notes: [
      { label: 'Cleanroom', value: 'Class 4 (per Universal Robots)' },
      { label: 'Repeatability', value: 'Conflicting on the manufacturer site: ±0.01 mm on the model page, ±0.1 mm on the UR Series overview. Confirm with the datasheet.' },
    ],
    sources: [
      { url: 'https://www.universal-robots.com/products/ur30-1300/', title: 'UR30-1300', publisher: 'Universal Robots', retrieved: R },
      urSeries,
    ],
    updated: R,
  },
  {
    slug: 'ur10g-1750',
    brand: 'universal-robots',
    name: 'UR10g-1750',
    family: 'g-Series',
    category: 'cobots',
    status: 'production',
    summary:
      "Universal Robots' long-reach Gen 7 cobot: 1750 mm reach, 8 kg rated payload (10 kg extended), IP65 sealing and ±0.08 mm pose repeatability, running PolyScope X on the CB7 Core controller.",
    specs: {
      payloadKg: 8,
      payloadMaxKg: 10,
      reachMm: 1750,
      axes: 6,
      repeatabilityMm: 0.08,
      weightKg: 44.7,
      ipRating: 'IP65',
      controller: 'CB7 Core',
      maxTcpSpeedMs: 5,
      footprintMm: 204,
    },
    specNotes: {
      payloadMaxKg: 'Extended payload per the product page; also the maximum payload in UR’s g-Series datasheet.',
      weightKg: 'Arm weight per the product page; the g-Series datasheet lists 47.3 kg including cable.',
    },
    notes: [
      {
        label: 'Platform',
        value:
          'Gen 7 platform model with TP7 Core teach pendant and SP7 Smart Panel; the g-Series tool flange provides 1 Gb Ethernet and 24/48 V, 3 A continuous power for direct sensor and camera integration.',
      },
      {
        label: 'Safety',
        value:
          'PLd Cat. 3 safety architecture (EN ISO 13849-1); g-Series arms certified to ISO 10218-1 and UL 1740 (Universal Robots).',
      },
    ],
    sources: [
      { url: 'https://www.universal-robots.com/products/ur10g-1750/', title: 'UR10g-1750 collaborative robot arm', publisher: 'Universal Robots', retrieved: '2026-11-13' },
      { url: 'https://www.universal-robots.com/manuals/latest/en/datasheets/comp_g-serie/', title: 'g-Series robot arm specification', publisher: 'Universal Robots', retrieved: '2026-11-13' },
      { url: 'https://www.universal-robots.com/news-and-media/news-center/introducing-gen-7-tomorrows-automation-built-for-today/', title: 'Introducing Gen 7: tomorrow’s automation, built for today', publisher: 'Universal Robots', retrieved: '2026-11-13' },
    ],
    updated: '2026-11-13',
  },
  {
    slug: 'ur17g-1300',
    brand: 'universal-robots',
    name: 'UR17g-1300',
    family: 'g-Series',
    category: 'cobots',
    status: 'production',
    summary:
      'Gen 7 cobot with 1300 mm reach and a 15 kg rated payload (17.5 kg extended), IP65 sealing and ±0.05 mm pose repeatability, running PolyScope X on the CB7 Core controller.',
    specs: {
      payloadKg: 15,
      payloadMaxKg: 17.5,
      reachMm: 1300,
      axes: 6,
      repeatabilityMm: 0.05,
      weightKg: 40.7,
      ipRating: 'IP65',
      controller: 'CB7 Core',
      maxTcpSpeedMs: 5,
      footprintMm: 204,
    },
    specNotes: {
      payloadMaxKg: 'Extended payload per the product page; also the maximum payload in UR’s g-Series datasheet.',
      weightKg: 'Arm weight per the product page; the g-Series datasheet lists 43.4 kg including cable.',
    },
    notes: [
      {
        label: 'Platform',
        value:
          'Gen 7 platform model with TP7 Core teach pendant and SP7 Smart Panel; the g-Series tool flange provides 1 Gb Ethernet and 24/48 V, 3 A continuous power for direct sensor and camera integration.',
      },
      {
        label: 'Safety',
        value:
          'PLd Cat. 3 safety architecture (EN ISO 13849-1); g-Series arms certified to ISO 10218-1 and UL 1740 (Universal Robots).',
      },
    ],
    sources: [
      { url: 'https://www.universal-robots.com/products/ur17g-1300/', title: 'UR17g-1300 collaborative robot arm', publisher: 'Universal Robots', retrieved: '2026-11-13' },
      { url: 'https://www.universal-robots.com/manuals/latest/en/datasheets/comp_g-serie/', title: 'g-Series robot arm specification', publisher: 'Universal Robots', retrieved: '2026-11-13' },
      { url: 'https://www.universal-robots.com/news-and-media/news-center/introducing-gen-7-tomorrows-automation-built-for-today/', title: 'Introducing Gen 7: tomorrow’s automation, built for today', publisher: 'Universal Robots', retrieved: '2026-11-13' },
    ],
    updated: '2026-11-13',
  },
  {
    slug: 'ur18g-950',
    brand: 'universal-robots',
    name: 'UR18g-950',
    family: 'g-Series',
    category: 'cobots',
    status: 'production',
    summary:
      'Compact heavy-duty Gen 7 cobot with 18 kg payload, 950 mm reach and 4 m/s maximum TCP speed, with IP65 sealing and ±0.05 mm pose repeatability on the CB7 Core controller.',
    specs: {
      payloadKg: 18,
      reachMm: 950,
      axes: 6,
      repeatabilityMm: 0.05,
      weightKg: 39.2,
      ipRating: 'IP65',
      controller: 'CB7 Core',
      maxTcpSpeedMs: 4,
      footprintMm: 204,
    },
    specNotes: {
      weightKg: 'Arm weight per the product page; the g-Series datasheet lists 42 kg including cable.',
    },
    notes: [
      {
        label: 'Platform',
        value:
          'Gen 7 platform model with TP7 Core teach pendant and SP7 Smart Panel; the g-Series tool flange provides 1 Gb Ethernet and 24/48 V, 3 A continuous power for direct sensor and camera integration.',
      },
      {
        label: 'Safety',
        value:
          'PLd Cat. 3 safety architecture (EN ISO 13849-1); g-Series arms certified to ISO 10218-1 and UL 1740 (Universal Robots).',
      },
    ],
    sources: [
      { url: 'https://www.universal-robots.com/products/ur18g-950/', title: 'UR18g-950 collaborative robot arm', publisher: 'Universal Robots', retrieved: '2026-11-13' },
      { url: 'https://www.universal-robots.com/manuals/latest/en/datasheets/comp_g-serie/', title: 'g-Series robot arm specification', publisher: 'Universal Robots', retrieved: '2026-11-13' },
      { url: 'https://www.universal-robots.com/news-and-media/news-center/introducing-gen-7-tomorrows-automation-built-for-today/', title: 'Introducing Gen 7: tomorrow’s automation, built for today', publisher: 'Universal Robots', retrieved: '2026-11-13' },
    ],
    updated: '2026-11-13',
  },
];
