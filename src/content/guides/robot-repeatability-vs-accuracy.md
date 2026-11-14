---
title: "Robot Repeatability vs Accuracy: What ISO 9283 Numbers Mean"
description: "Why a robot rated ±0.02 mm repeatability can still miss a CAD point by much more. Repeatability, accuracy and what to ask for when precision matters."
topic: specs
published: 2026-11-03
updated: 2026-11-03
sources:
  - title: "ISO 9283:1998 — Manipulating industrial robots: performance criteria and related test methods"
    url: "https://www.iso.org/standard/22244.html"
  - title: "KUKA — KR 6 R900-2 product data (pose repeatability per ISO 9283)"
    url: "https://my.kuka.com/s/product/kr-6-r9002/01t58000004l6sKAAQ?language=en_US"
  - title: "Universal Robots — UR20-1750 and UR Series overview"
    url: "https://www.universal-robots.com/products/ur-series/"
---

**TL;DR:** Datasheets quote repeatability, not accuracy — repeatability is how tightly the robot returns to the same taught point, accuracy is how close it gets to a commanded point. ISO 9283 defines both, and accuracy is usually much worse.

Almost every robot datasheet quotes **repeatability**. Very few quote **accuracy**. They are different properties, and confusing them is one of the most common causes of a robot cell that works perfectly when taught by hand but misses when driven by CAD data or a vision system.

## Definitions

**Pose repeatability** — how closely the robot returns to the *same* position when it is commanded to that position many times, from the same direction, under the same conditions. ISO 9283 defines the test: the robot visits a set of test poses repeatedly, and repeatability is reported as a radius around the average attained position that contains (statistically) nearly all attempts.

**Pose accuracy** — how far the *average* attained position is from the position that was commanded. If you command X = 500.000 mm and the robot consistently arrives at 500.400 mm, it is very repeatable but 0.4 mm inaccurate.

A simple picture: repeatability is how tight the cluster of hits is; accuracy is how far the cluster is from the bullseye.

## Why datasheets show repeatability

- It is the number that matters for **taught points** — palletizing, machine tending, most pick-and-place — where an operator jogs the robot to a position and records it.
- It is small and comparable: KUKA lists ±0.02 mm pose repeatability per ISO 9283 for the [KR 6 R900-2](/robots/kuka/kr-6-r900-2/); FANUC lists ±0.01 mm for the [LR Mate 200iD](/robots/fanuc/lr-mate-200id/); cobots in our database are typically ±0.03 to ±0.1 mm.
- Accuracy depends heavily on calibration, payload, temperature and the robot's position in its workspace, so it is hard to state as one number.

## When accuracy is what you need

Accuracy matters whenever the target position is **calculated** rather than taught:

- Offline programming from CAD or simulation.
- Vision-guided picking, where the camera reports a part position in robot coordinates.
- Moving a program from one robot to another "identical" robot.
- Machining, drilling or measuring along long paths.

In these cases, ask the manufacturer or integrator about absolute-accuracy calibration options and the expected accuracy for your payload and work area. Calibration packages exist for many industrial robots precisely because uncalibrated absolute accuracy is typically far larger than repeatability.

## What changes the real numbers

- **Payload and speed** — the datasheet test is done under the manufacturer's conditions; heavy tools and high accelerations add deflection.
- **Temperature** — joints and links expand as the robot warms up; first-hour behavior can differ from steady state.
- **Position in the envelope** — near full extension, small joint errors produce larger errors at the tool.
- **Tool calibration** — an error in the tool center point (TCP) definition adds directly to every position.

## Reading conflicting numbers

Manufacturer pages occasionally disagree with each other. In November 2026, Universal Robots' UR20 model page listed ±0.01 mm repeatability while the UR Series overview listed ±0.1 mm for the same robot. We show such cases as a note on the [UR20 page](/robots/universal-robots/ur20/) instead of choosing one — and recommend confirming with the datasheet before you rely on either.

## What to ask for

1. Pose repeatability **per ISO 9283** (not a marketing figure).
2. If you use CAD, offline programming or vision: expected **absolute accuracy**, with and without calibration, at your payload.
3. Whether the figures were measured at rated payload and speed.

Then compare candidates in the [robot finder](/robots/) and read [how to read a robot datasheet](/guides/how-to-read-a-robot-datasheet/) for the other specs that matter.
