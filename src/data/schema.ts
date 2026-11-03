// Data model for the robot database.
// Rule: every number must come from a cited source. Leave a field undefined when the
// source does not state it — the page then shows "Not stated by source".

export type CategorySlug =
  | 'industrial-robots'
  | 'cobots'
  | 'scara-robots'
  | 'delta-robots'
  | 'humanoid-robots'
  | 'mobile-manipulators';

export type Status = 'production' | 'early-access' | 'preliminary' | 'discontinued';

export interface Source {
  url: string;
  title: string;
  publisher: string;
  /** Date we read the source, YYYY-MM-DD. */
  retrieved: string;
}

export interface Specs {
  payloadKg?: number;
  /** Extended or peak payload (e.g. UR20 extended payload, Atlas instant lift). */
  payloadMaxKg?: number;
  reachMm?: number;
  axes?: number;
  repeatabilityMm?: number;
  weightKg?: number;
  ipRating?: string;
  controller?: string;
  mounting?: string[];
  maxTcpSpeedMs?: number;
  footprintMm?: number;
  // Humanoid / mobile fields
  heightMm?: number;
  dof?: number;
  runtimeH?: number;
  batteryWh?: number;
  speedMs?: number;
  /** Public list price in USD, only if the manufacturer publishes it. */
  priceUsd?: number;
}

export interface Note {
  label: string;
  value: string;
}

export interface Robot {
  slug: string;
  brand: string;
  name: string;
  family?: string;
  category: CategorySlug;
  status: Status;
  /** One or two factual sentences. No marketing claims. */
  summary: string;
  specs: Specs;
  /** Qualifiers for specs, e.g. "payloadKg": "about 2 kg; varies with arm pose". */
  specNotes?: Partial<Record<keyof Specs, string>>;
  /** Extra facts that do not fit the spec fields. Each must be supported by a source. */
  notes?: Note[];
  sources: Source[];
  /** Last time the entry was checked, YYYY-MM-DD. */
  updated: string;
}

export interface Brand {
  slug: string;
  name: string;
  country: string;
  website: string;
  summary: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  short: string;
  title: string;
  description: string;
  intro: string;
  /** Which spec columns matter most for this type, in display order. */
  keySpecs: (keyof Specs)[];
}
