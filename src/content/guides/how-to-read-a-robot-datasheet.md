---
title: "How to Read an Industrial Robot Datasheet"
description: "Payload, reach, repeatability, wrist moment and IP rating explained: what each robot spec means, what it hides, and how to check it for your application."
topic: specs
published: 2026-11-03
updated: 2026-11-03
sources:
  - title: "ISO 9283:1998 — Manipulating industrial robots: performance criteria and related test methods"
    url: "https://www.iso.org/standard/22244.html"
  - title: "IEC 60529 — Degrees of protection provided by enclosures (IP Code)"
    url: "https://webstore.iec.ch/en/publication/2452"
  - title: "FANUC America — CRX-10iA specifications (example of wrist moment and inertia data)"
    url: "https://www.fanucamerica.com/products/robot/crx-10ia"
---

Robot datasheets look alike, but the headline numbers are measured under the maker’s own conditions. Reading them correctly saves you from the most common shortlisting mistake: picking a robot whose rated payload covers your part on paper but not with your gripper, at your speed, at full extension.

## Rated payload is a best case

The rated payload is the mass the robot can carry at its flange under conditions set out in the manufacturer’s **load diagram** — typically with the center of gravity close to the flange. Everything you mount counts: the gripper, tool changer, cables, vacuum generator *and* the part.

As the load’s center of gravity moves away from the flange, the allowable mass drops. That is why detailed datasheets also list:

- **Allowable wrist moment** (N·m) for the last axes — mass × gravity × offset distance.
- **Allowable wrist inertia** (kg·m²) — how hard it is to rotate the load.

For example, FANUC publishes allowable moments of 34.8 / 26 / 11 N·m and inertias of 1.28 / 0.9 / 0.3 kg·m² for J4 / J5 / J6 of the [CRX-10iA](/robots/fanuc/crx-10ia/). If your tool plus part exceeds any of these, the robot is wrong for the job even if the total mass is under 10 kg.

**Screening margin:** many engineers keep total tool + part mass well below the rated payload — something like 70–80 % — to leave room for speed and later tool changes. That is a rule of thumb, not a standard; the load diagram decides.

## Reach is measured to a reference point

Reach is usually the maximum distance from the base axis to the wrist center point or flange — not to the tip of your gripper. Subtract the tool length, and remember that the outer edge of the work envelope is slow and awkward to reach in useful orientations. Some makers state **horizontal and vertical reach** separately (Yaskawa lists 1730 mm horizontal and 3089 mm vertical for the [GP25](/robots/yaskawa/gp25/)).

## Repeatability is not accuracy

**Pose repeatability** (for example ±0.03 mm on the [UR7e-920](/robots/universal-robots/ur7e-920/)) tells you how closely the robot returns to a taught point, measured to the test method in ISO 9283. It says nothing about **absolute accuracy** — how close the robot gets to a point calculated from CAD or a vision system — which is usually much larger and is rarely on the datasheet.

- Taught points (traditional palletizing, machine tending): repeatability matters.
- Points from offline programming or vision: absolute accuracy and calibration matter.

## Speed figures

Maximum TCP speed (4 m/s for the CB7-based [UR12e-1300](/robots/universal-robots/ur12e-1300/), for instance) is a peak that short moves rarely reach. Cobots working near people are often slowed further by the risk assessment. Estimate real cycle times with simulation or a trial, then use the [cycle time calculator](/tools/cycle-time-calculator/) to turn them into output.

## Protection ratings (IP)

The IP code under IEC 60529 has two digits: solids/dust, then water. IP54 means dust-protected and splash-resistant; IP67 means dust-tight and protected against temporary immersion. Ratings often differ between the **body** and the **wrist** — FANUC lists the [M-20iD/25](/robots/fanuc/m-20id-25/) body at IP54 (IP65 optional) with the wrist and J3 arm at IP67. Check the rating of the part of the robot that actually meets coolant or washdown.

## Weight, footprint and mounting

Robot weight and footprint drive the base or pedestal design, and whether the robot can sit on a mobile cart. Mounting options (floor, wall, angle, inverted) matter in tight cells — not every model allows every orientation, and some need reduced payload when angled.

## What datasheets usually leave out

- Stopping times and distances at different speeds and loads — needed for [safety distance](/tools/safety-distance-calculator/) calculations and usually found in a separate manual.
- Absolute accuracy and path accuracy.
- Controller cabinet size, power supply and cable length limits.
- Software options that are licensed separately.

## Shortlist checklist

1. Total mass of tool + part, and its center-of-gravity offset.
2. Wrist moment and inertia against the load diagram.
3. Reach to the farthest pick and place point, **including tool length**.
4. Repeatability vs. accuracy — which one your process needs.
5. IP rating of the wrist and body for your environment.
6. Mounting orientation and base design.
7. Stopping data for the safety concept.

Use the [robot database](/robots/) to filter by payload and reach, then [compare](/compare/) the finalists side by side.
