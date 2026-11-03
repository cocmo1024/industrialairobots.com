---
title: "Cobot vs Industrial Robot: How to Choose for Your Application"
description: "Collaborative vs industrial robots compared on payload, speed, repeatability, weight and safety — with real spec examples and a decision checklist."
topic: selection
published: 2026-11-03
updated: 2026-11-03
sources:
  - title: "ISO 10218-1:2025 — Robotics: Safety requirements, Part 1: Industrial robots"
    url: "https://www.iso.org/standard/73933.html"
  - title: "ISO 10218-2:2025 — Robotics: Safety requirements, Part 2: Industrial robot applications and robot cells"
    url: "https://www.iso.org/standard/73934.html"
  - title: "ISO/TS 15066:2016 — Robots and robotic devices: Collaborative robots"
    url: "https://www.iso.org/standard/62996.html"
  - title: "FANUC America — CRX-10iA and M-10iD/12 specifications"
    url: "https://www.fanucamerica.com/products/robot/crx-10ia"
  - title: "Yaskawa — HC10DTP datasheet"
    url: "https://www.motoman.com/getmedia/6bee5ac1-77ed-43da-aa0c-8d3e493d3aea/ds_hc10dtp.pdf.aspx"
---

"Cobot or industrial robot?" is usually the first question in a robot project — and it is slightly the wrong question. Safety standards treat **collaboration as a property of the application**, not of the robot arm. A cobot holding a knife is not a safe collaborative application; an industrial robot can work near people with the right sensors and safety functions. Start from the task, then pick the arm.

## The short answer

| If your application needs… | Lean towards |
|---|---|
| People working in the same space without fences, frequent changeovers, hand-guided teaching | Cobot |
| High speed, high payload, long continuous cycles, harsh environment | Industrial robot |
| Small parts, tight space, high precision at speed | Small industrial robot (often with a scanner or light curtain instead of a full fence) |
| A mobile cart or AMR mounting | Cobot (lighter, lower power) |

## How they compare on the datasheet

Real examples from the [robot database](/robots/), each cited to the manufacturer:

| | FANUC [CRX-10iA](/robots/fanuc/crx-10ia/) (cobot) | FANUC [M-10iD/12](/robots/fanuc/m-10id-12/) (industrial) |
|---|---|---|
| Rated payload | 10 kg | 12 kg |
| Reach | 1249 mm | 1441 mm |
| Repeatability | ±0.05 mm | ±0.02 mm |
| Robot weight | 39 kg | 145 kg |

The pattern holds across brands: for similar payload, cobot arms are much lighter and usually have looser repeatability than industrial arms. Compare more pairs side by side in the [compare tool](/compare/?r=fanuc/crx-10ia,fanuc/m-10id-12,yaskawa/gp12).

### Speed is the biggest real difference

Cobots often run two speed regimes. FANUC lists 1000 mm/s in collaborative mode and 2000 mm/s in high-speed mode for the CRX-10iA; Yaskawa lists 1000 mm/s collaborative and 2000 mm/s non-collaborative for the [HC10DTP](/robots/yaskawa/hc10dtp/). When people are present, the risk assessment often limits speed further. Industrial robots are designed to move faster for the whole cycle — the main reason they win on throughput. Check your output with the [cycle time calculator](/tools/cycle-time-calculator/) before choosing.

### Payload range

Cobots in our database reach 30 kg (Universal Robots [UR30](/robots/universal-robots/ur30/), FANUC [CRX-30iA](/robots/fanuc/crx-30ia/), Yaskawa [HC30PL](/robots/yaskawa/hc30pl/)). Industrial robots go far higher — the Yaskawa [GP180](/robots/yaskawa/gp180/) carries 180 kg and the FANUC [R-2000iC/165F](/robots/fanuc/r-2000ic-165f/) 165 kg. Above roughly 30–35 kg payload, the choice is effectively made for you.

## Safety: what "collaborative" actually requires

ISO 10218-2:2025 covers robot applications and cells. Because collaboration is a property of the application, the 2025 edition incorporates most of the requirements of ISO/TS 15066:2016, the earlier technical specification for collaborative applications (including body-region force and pressure limits for power-and-force-limited contact). In practice a collaborative application uses one or more of:

- **Safety-rated monitored stop** — the robot stops while a person is in the shared space.
- **Hand guiding** — a person moves the robot directly with an enabling device.
- **Speed and separation monitoring** — scanners slow or stop the robot as people approach.
- **Power and force limiting** — contact is allowed but force and pressure stay below limits.

Only the last one relies on the robot's own force sensing. The tool and the part matter as much as the arm: a sharp edge, a hot part or a heavy payload can make power-and-force-limited contact unacceptable. That is why the risk assessment of the complete application — not the robot label — decides whether fences are needed.

If you use light curtains or scanners instead of fences (with either robot type), work out the mounting distance with the [safety distance calculator](/tools/safety-distance-calculator/).

## Cost: where the difference really is

The arm is usually not the biggest line item. Guarding, tooling, part presentation, integration and commissioning often cost more than the robot. A cobot can save on guarding and floor space, and is often quicker to redeploy; an industrial robot can save on cycle time and therefore on the number of cells you need. Put both options through the [ROI calculator](/tools/robot-roi-calculator/) with your own quotes rather than relying on list prices.

## Decision checklist

1. Will people need to work **in the robot's space during production**, not just during setup?
2. What cycle time do you need — and can a cobot meet it at **collaborative speed**?
3. Total mass of tool + part, and its center-of-gravity offset (see [how to read a datasheet](/guides/how-to-read-a-robot-datasheet/)).
4. Is the tool or part hazardous on contact (sharp, hot, heavy)?
5. How often will the cell be moved or re-taught for new products?
6. Floor space and mounting: fixed base, pedestal or mobile cart?

If the answers are "rarely / tight cycle / heavy or hazardous", choose an industrial robot with appropriate safeguarding. If they are "often / moderate cycle / light and harmless", a cobot is likely the better fit. Shortlist candidates in the [robot finder](/robots/).
