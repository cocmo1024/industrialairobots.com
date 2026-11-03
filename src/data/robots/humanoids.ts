import type { Robot } from '../schema';

const R = '2026-11-03';

export const robots: Robot[] = [
  {
    slug: 'atlas',
    brand: 'boston-dynamics',
    name: 'Atlas',
    family: 'Atlas (electric)',
    category: 'humanoid-robots',
    status: 'early-access',
    summary: 'The electric Atlas humanoid. Boston Dynamics says it starts with a select number of early adopters, with field testing at a Hyundai facility.',
    specs: { heightMm: 1900, weightKg: 90, payloadKg: 30, payloadMaxKg: 50, dof: 56, reachMm: 2300, runtimeH: 4, ipRating: 'IP67' },
    specNotes: { payloadKg: 'Sustained payload', payloadMaxKg: 'Instant payload' },
    notes: [
      { label: 'Battery', value: 'Self-swapping: navigates to a station and swaps its own battery' },
      { label: 'Operating temperature', value: '−20 to 40 °C' },
      { label: 'Named deployment', value: 'Field testing on sequencing tasks at a Hyundai facility' },
    ],
    sources: [{ url: 'https://bostondynamics.com/atlas/', title: 'Atlas', publisher: 'Boston Dynamics', retrieved: R }],
    updated: R,
  },
  {
    slug: 'digit-5',
    brand: 'agility-robotics',
    name: 'Digit 5',
    family: 'Digit',
    category: 'humanoid-robots',
    status: 'preliminary',
    summary: 'The next Digit humanoid, described by Agility as its first cooperatively safe humanoid. Agility marks the published specs as preliminary.',
    specs: { payloadKg: 23, reachMm: 2200 },
    notes: [
      { label: 'Run-to-charge ratio', value: '10:1 (preliminary)' },
      { label: 'Work per day', value: '20 h of 24 h (preliminary)' },
      { label: 'Customers shown by Agility', value: 'GXO, Schaeffler, Toyota Motor Manufacturing Canada' },
    ],
    sources: [
      { url: 'https://www.agilityrobotics.com/solutions/digit-5', title: 'Digit 5', publisher: 'Agility Robotics', retrieved: R },
      { url: 'https://www.agilityrobotics.com/', title: 'Agility Robotics home page', publisher: 'Agility Robotics', retrieved: R },
    ],
    updated: R,
  },
  {
    slug: 'g1',
    brand: 'unitree',
    name: 'G1',
    family: 'G1',
    category: 'humanoid-robots',
    status: 'production',
    summary: 'A compact 1.32 m humanoid with a published US$13.5K base price, widely used for research and development.',
    specs: { heightMm: 1320, weightKg: 35, dof: 23, payloadKg: 2, runtimeH: 2, priceUsd: 13500 },
    specNotes: {
      weightKg: 'About 35 kg with battery',
      payloadKg: 'Arm load about 2 kg; varies with arm pose (EDU: about 3 kg)',
      dof: 'Base G1; EDU version 23–43',
      runtimeH: 'About 2 h',
      priceUsd: 'Base G1, excluding tax and shipping',
    },
    notes: [
      { label: 'Max joint torque (knee)', value: '90 N·m (EDU: 120 N·m)' },
      { label: 'Battery', value: '13-cell lithium, 9000 mAh, quick release' },
    ],
    sources: [{ url: 'https://www.unitree.com/g1', title: 'Unitree G1', publisher: 'Unitree Robotics', retrieved: R }],
    updated: R,
  },
  {
    slug: 'h1',
    brand: 'unitree',
    name: 'H1',
    family: 'H1',
    category: 'humanoid-robots',
    status: 'production',
    summary: 'A full-size 1.8 m Unitree humanoid with a quick-swap 864 Wh battery and a stated moving speed of 3.3 m/s.',
    specs: { heightMm: 1800, weightKg: 47, batteryWh: 864, speedMs: 3.3 },
    specNotes: { heightMm: 'About 180 cm', weightKg: 'About 47 kg' },
    notes: [
      { label: 'Max joint torque', value: '360 N·m (knee); about 220 N·m (hip)' },
      { label: 'Degrees of freedom', value: '5 per leg, 4 per arm (expandable)' },
    ],
    sources: [{ url: 'https://www.unitree.com/h1', title: 'Unitree H1', publisher: 'Unitree Robotics', retrieved: R }],
    updated: R,
  },
];
