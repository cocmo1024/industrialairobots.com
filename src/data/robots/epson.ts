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
      "The AX6-A901S is Epson's first cobot: 6 kg payload, 900 mm reach, ±0.03 mm repeatability (Epson datasheet). Orders opened in Japan only on 29 October 2026; no international release date has been announced.",
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
  {
    slug: 'gx4-b251',
    brand: 'epson',
    name: 'GX4-B251',
    family: 'GX Series',
    category: 'scara-robots',
    status: 'production',
    summary:
      "Epson's GX4 high-power-density SCARA in its 250 mm arm version: 2 kg rated payload (4 kg maximum) and ±0.008 mm repeatability on joints #1–#2.",
    specs: {
      payloadKg: 2,
      payloadMaxKg: 4,
      reachMm: 250,
      axes: 4,
      repeatabilityMm: 0.008,
      weightKg: 15,
      controller: 'RC700E',
      mounting: ['Tabletop'],
    },
    specNotes: {
      payloadMaxKg: 'Maximum payload per Epson; the rated payload is 2 kg.',
      repeatabilityMm: 'Joints #1–#2 repeatability per Epson; joint #3 is ±0.01 mm and joint #4 ±0.005 deg.',
    },
    notes: [
      {
        label: 'Cycle time',
        value: 'Standard cycle time 0.33 s (round-trip arch motion, 2 kg payload) per Epson’s specification sheet.',
      },
    ],
    sources: [
      {
        url: 'https://files.support.epson.com/far/docs/scara_gx4b_robot_prod_spec_sheet_cpd-63924r1.pdf',
        title: 'Epson GX4B SCARA robot — specification sheet',
        publisher: 'Epson America',
        retrieved: R,
      },
    ],
    updated: R,
  },
  {
    slug: 'gx4-b351',
    brand: 'epson',
    name: 'GX4-B351',
    family: 'GX Series',
    category: 'scara-robots',
    status: 'production',
    summary:
      "Epson's GX4 SCARA in its longest 350 mm arm version: 2 kg rated payload (4 kg maximum) and ±0.010 mm repeatability on joints #1–#2.",
    specs: {
      payloadKg: 2,
      payloadMaxKg: 4,
      reachMm: 350,
      axes: 4,
      repeatabilityMm: 0.01,
      weightKg: 17,
      controller: 'RC700E',
      mounting: ['Tabletop'],
    },
    specNotes: {
      payloadMaxKg: 'Maximum payload per Epson; the rated payload is 2 kg.',
      repeatabilityMm: 'Joints #1–#2 repeatability per Epson; joint #3 is ±0.01 mm and joint #4 ±0.005 deg.',
    },
    notes: [
      {
        label: 'Cycle time',
        value: 'Standard cycle time 0.35 s (round-trip arch motion, 2 kg payload) per Epson’s specification sheet.',
      },
    ],
    sources: [
      {
        url: 'https://files.support.epson.com/far/docs/scara_gx4b_robot_prod_spec_sheet_cpd-63924r1.pdf',
        title: 'Epson GX4B SCARA robot — specification sheet',
        publisher: 'Epson America',
        retrieved: R,
      },
    ],
    updated: R,
  },
  {
    slug: 'gx20b-1000',
    brand: 'epson',
    name: 'GX20B-1000',
    family: 'GX Series',
    category: 'scara-robots',
    status: 'production',
    summary:
      "Epson's heavy-payload GX20 SCARA with a 1,000 mm arm: 10 kg rated payload (20 kg maximum) for large-part handling and assembly.",
    specs: {
      payloadKg: 10,
      payloadMaxKg: 20,
      reachMm: 1000,
      axes: 4,
      repeatabilityMm: 0.025,
      controller: 'RC700E',
      mounting: ['Tabletop', 'Wall', 'Ceiling'],
    },
    specNotes: {
      payloadMaxKg: 'Maximum payload per Epson; the rated payload is 10 kg.',
      repeatabilityMm: 'Joints #1–#2 repeatability per Epson; joint #3 is ±0.010 mm and joint #4 ±0.005 deg.',
    },
    notes: [
      {
        label: 'Cycle time',
        value: 'Standard cycle time 0.42 s for the 1,000 mm arm per Epson’s specification sheet.',
      },
      {
        label: 'Variants',
        value: 'An 850 mm arm version (GX20-B85x) shares the same payload ratings; protected IP65 and cleanroom models are offered.',
      },
    ],
    sources: [
      {
        url: 'https://files.support.epson.com/far/docs/scara_gx20b_robot_specification_sheet_cpd-64070r0.pdf',
        title: 'Epson GX20B SCARA robot — specification sheet',
        publisher: 'Epson America',
        retrieved: R,
      },
    ],
    updated: R,
  },
  {
    slug: 't3-b',
    brand: 'epson',
    name: 'T3-B',
    family: 'T-B Series',
    category: 'scara-robots',
    status: 'production',
    summary:
      "Epson's all-in-one T3-B SCARA: 400 mm arm, 1 kg rated payload (3 kg maximum) and a built-in controller; Epson positions it as an alternative to slide-based systems.",
    specs: {
      payloadKg: 1,
      payloadMaxKg: 3,
      reachMm: 400,
      axes: 4,
      repeatabilityMm: 0.02,
      weightKg: 16,
      controller: 'Built-in',
      mounting: ['Tabletop'],
    },
    specNotes: {
      payloadMaxKg: 'Maximum payload per Epson; the rated payload is 1 kg.',
      repeatabilityMm: 'Joints #1–#2 repeatability per Epson’s catalog.',
    },
    notes: [
      {
        label: 'Cycle time',
        value: 'Standard cycle time 0.52 s per Epson’s 2023 robot specifications catalog.',
      },
      {
        label: 'Power',
        value: 'Runs on 110 V or 220 V power with the controller built into the arm (per Epson).',
      },
    ],
    sources: [
      {
        url: 'https://files.support.epson.com/far/docs/epson_robot_specification_2023_catalog_cpd-54833r3.pdf',
        title: 'Epson robot specifications catalog 2023 — TB-Series all-in-one specifications',
        publisher: 'Epson America',
        retrieved: R,
      },
    ],
    updated: R,
  },
  {
    slug: 't6-b',
    brand: 'epson',
    name: 'T6-B',
    family: 'T-B Series',
    category: 'scara-robots',
    status: 'production',
    summary:
      "Epson's all-in-one T6-B SCARA: 600 mm arm, 2 kg rated payload (6 kg maximum) and a built-in controller, running on 110 V or 220 V power.",
    specs: {
      payloadKg: 2,
      payloadMaxKg: 6,
      reachMm: 600,
      axes: 4,
      repeatabilityMm: 0.04,
      weightKg: 22,
      controller: 'Built-in',
      mounting: ['Tabletop'],
    },
    specNotes: {
      payloadMaxKg: 'Maximum payload per Epson; the rated payload is 2 kg.',
      repeatabilityMm: 'Joints #1–#2 repeatability per Epson; joint #3 is ±0.020 mm.',
    },
    notes: [
      {
        label: 'Cycle time',
        value: 'Standard cycle time 0.46 s per Epson’s T6-B specification sheet.',
      },
    ],
    sources: [
      {
        url: 'https://files.support.epson.com/far/docs/t6-b_all-in-one_scara_robot_specification_sheet_cpd-61650_final.pdf',
        title: 'Epson T6-B all-in-one SCARA robot — specification sheet',
        publisher: 'Epson America',
        retrieved: R,
      },
      {
        url: 'https://files.support.epson.com/far/docs/epson_robot_specification_2023_catalog_cpd-54833r3.pdf',
        title: 'Epson robot specifications catalog 2023 — TB-Series all-in-one specifications',
        publisher: 'Epson America',
        retrieved: R,
      },
    ],
    updated: R,
  },
];
