// Site-wide settings. Change here, not in individual pages.

export const SITE = {
  name: 'Industrial AI Robots',
  domain: 'industrialairobots.com',
  url: 'https://industrialairobots.com',
  tagline: 'Specs, comparisons and engineering tools for industrial robots and physical AI.',
  description:
    'Independent, source-cited reference for industrial robots, cobots and humanoids: spec database, side-by-side comparisons and engineering calculators.',
  locale: 'en-US',
  email: 'cqq365@gmail.com',
  themeColor: '#0d0f12',
  // Monetization switches. Keep off until each section has enough depth (see docs/STRATEGY.md).
  ads: {
    enabled: false,
    client: 'ca-pub-6017297149672924',
  },
} as const;

export const NAV = [
  { href: '/robots/', label: 'Robot database' },
  { href: '/types/humanoid-robots/', label: 'Humanoids' },
  { href: '/compare/', label: 'Compare' },
  { href: '/tools/', label: 'Tools' },
  { href: '/guides/', label: 'Guides' },
] as const;

export const FOOTER_NAV = [
  {
    title: 'Database',
    links: [
      { href: '/robots/', label: 'All robots' },
      { href: '/types/', label: 'Robot types' },
      { href: '/brands/', label: 'Brands' },
      { href: '/compare/', label: 'Compare robots' },
      { href: '/data/robots.json', label: 'Open dataset (JSON)' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { href: '/tools/robot-roi-calculator/', label: 'Robot ROI calculator' },
      { href: '/tools/cycle-time-calculator/', label: 'Cycle time & throughput' },
      { href: '/tools/vacuum-gripper-calculator/', label: 'Vacuum gripper sizing' },
      { href: '/tools/safety-distance-calculator/', label: 'Safety distance (ISO 13855)' },
    ],
  },
  {
    title: 'About',
    links: [
      { href: '/about/', label: 'About' },
      { href: '/methodology/', label: 'Data methodology' },
      { href: '/contact/', label: 'Contact & corrections' },
      { href: '/privacy/', label: 'Privacy' },
      { href: '/terms/', label: 'Terms' },
    ],
  },
] as const;
