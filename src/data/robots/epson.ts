import type { Robot } from '../schema';

const R = '2026-11-12';

export const robots: Robot[] = [
  {
    slug: 'ax6-a901s',
    brand: 'epson',
    name: 'AX6-A901S',
    family: 'AX Series',
    category: 'cobots',
    status: 'production',
    summary:
      "Epson's first collaborative robot: a 6-axis carbon-fibre arm with the compact RC-A101 controller. Orders opened in Japan only on 29 October 2026; no international release date has been announced.",
    specs: {
      payloadKg: 6,
      reachMm: 900,
      axes: 6,
      repeatabilityMm: 0.03,
      maxTcpSpeedMs: 2,
      ipRating: 'IP54',
      controller: 'RC-A101',
      mounting: ['Floor', 'Wall', 'Ceiling'],
    },
    specNotes: {
      reachMm: 'Arm length to the P point (J2–J5 centre) per Epson; 990 mm to the J2–J6 flange face.',
      repeatabilityMm: 'Pose repeatability per ISO 9283, joints J1–J6.',
    },
    notes: [
      {
        label: 'Availability',
        value:
          'Orders opened in Japan only, through Epson Japan, on 29 October 2026. Epson has not announced sales or a release date for other markets.',
      },
      {
        label: 'Programming',
        value: 'Python and block programming via the Epson AX Portal (per Epson).',
      },
      {
        label: 'Cleanroom',
        value: 'ISO Class 5 cleanroom classification (ISO 14644-1) per Epson’s datasheet.',
      },
      {
        label: 'Safety',
        value:
          'Safety functions SS2, SOS, SLS, SLP, PFL, STO and HGC; certified to ISO 10218-1 (2025), ISO 13849-1 and ISO 15066 (per Epson’s datasheet).',
      },
    ],
    sources: [
      {
        url: 'https://kyodonewsprwire.jp/release/202610288866',
        title: 'AX6-A901S and RC-A101 launch release — orders open in Japan (Japanese)',
        publisher: 'Seiko Epson',
        retrieved: R,
      },
      {
        url: 'https://neon.epson-europe.com/files/assets/source/a/u/d/c/a22375-brochure-cropped-de-de-at-ch-cobot_ax6.pdf',
        title: 'Epson AX6-A901S brochure — technical specifications',
        publisher: 'Epson Europe',
        retrieved: R,
      },
    ],
    updated: R,
  },
];
