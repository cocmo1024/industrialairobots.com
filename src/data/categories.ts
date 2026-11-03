import type { Category } from './schema';

export const CATEGORIES: Category[] = [
  {
    slug: 'industrial-robots',
    name: 'Industrial robots',
    short: 'Industrial',
    title: 'Industrial Robot Arms: Specs and Comparison',
    description:
      'Compare articulated industrial robot arms by payload, reach, repeatability and weight. Every spec links to the manufacturer source.',
    intro:
      'Articulated industrial robots work behind guarding or other safeguarding and cover the widest payload and speed range. Shortlist by payload at your real center of gravity, then reach, then wrist moment and inertia limits.',
    keySpecs: ['payloadKg', 'reachMm', 'repeatabilityMm', 'weightKg', 'controller'],
  },
  {
    slug: 'cobots',
    name: 'Collaborative robots (cobots)',
    short: 'Cobots',
    title: 'Collaborative Robots (Cobots): Specs and Comparison',
    description:
      'Cobot database: compare collaborative robot arms by payload, reach, repeatability and weight, with manufacturer-cited specs.',
    intro:
      'Cobots are designed for applications where people and robots can share space, subject to a risk assessment of the complete application. A cobot arm alone does not make a cell safe — the tool, part and speed matter.',
    keySpecs: ['payloadKg', 'reachMm', 'repeatabilityMm', 'weightKg', 'maxTcpSpeedMs'],
  },
  {
    slug: 'scara-robots',
    name: 'SCARA robots',
    short: 'SCARA',
    title: 'SCARA Robots: Specs and Comparison',
    description: 'Compare SCARA robots by payload, reach, repeatability and cycle time, with manufacturer-cited specs.',
    intro: 'SCARA robots are fast four-axis arms for planar pick-and-place and assembly.',
    keySpecs: ['payloadKg', 'reachMm', 'repeatabilityMm', 'weightKg'],
  },
  {
    slug: 'delta-robots',
    name: 'Delta robots',
    short: 'Delta',
    title: 'Delta (Parallel) Robots: Specs and Comparison',
    description: 'Compare delta and parallel-link robots for high-speed picking and packaging.',
    intro: 'Delta robots are parallel-link pickers for light, fast, top-down handling.',
    keySpecs: ['payloadKg', 'reachMm', 'repeatabilityMm', 'weightKg'],
  },
  {
    slug: 'humanoid-robots',
    name: 'Humanoid robots',
    short: 'Humanoids',
    title: 'Humanoid Robots for Industry: Specs, Status and Comparison',
    description:
      'Tracker of humanoid robots for factories and warehouses: official specs, price where published, and commercial status — each value linked to its source.',
    intro:
      'Humanoid robots are moving from demos to early commercial pilots. Specs here come only from the manufacturer; where a company marks figures as preliminary, so do we. Status tells you whether you can actually buy one.',
    keySpecs: ['payloadKg', 'heightMm', 'weightKg', 'dof', 'runtimeH', 'priceUsd'],
  },
  {
    slug: 'mobile-manipulators',
    name: 'Mobile manipulators',
    short: 'Mobile manipulators',
    title: 'Mobile Manipulators: Specs and Comparison',
    description: 'Robot arms on autonomous mobile bases for machine tending and intralogistics.',
    intro: 'A mobile manipulator combines an AMR base with a robot arm so one robot can serve several stations.',
    keySpecs: ['payloadKg', 'reachMm', 'repeatabilityMm', 'runtimeH'],
  },
];
