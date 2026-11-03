// Registry of calculators (used by the tools hub, home page and sitemap).
export const TOOLS = [
  {
    slug: 'robot-roi-calculator',
    name: 'Robot ROI & payback calculator',
    short: 'ROI & payback',
    blurb: 'Payback months, NPV and 5-year return for a robot cell, from your own labor and cost numbers.',
  },
  {
    slug: 'cycle-time-calculator',
    name: 'Cycle time & throughput calculator',
    short: 'Cycle time',
    blurb: 'Convert robot cycle time to parts per hour, shift and day — or work back from a target output.',
  },
  {
    slug: 'vacuum-gripper-calculator',
    name: 'Vacuum gripper & suction cup calculator',
    short: 'Vacuum gripper',
    blurb: 'Required holding force and minimum suction cup diameter for your part, motion and vacuum level.',
  },
  {
    slug: 'safety-distance-calculator',
    name: 'Light curtain safety distance calculator',
    short: 'Safety distance',
    blurb: 'Minimum mounting distance for a light curtain using the ISO 13855 formula S = K·T + C.',
  },
] as const;
