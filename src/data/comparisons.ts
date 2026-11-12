// Static head-to-head comparison pages (pilot batch, 2026-11).
// Rule: every number in this text must come from the robot database entries
// themselves (specs / notes / summaries in src/data/robots/) — never invent a
// figure here. Qualitative points stay tied to what the makers publish.
// Each pair gets its own hand-written verdict; no templated conclusions.

export interface Comparison {
  /** URL slug: the page lives at /compare/<slug>/ */
  slug: string;
  /** Robot ids in "brand/model-slug" form, matching src/lib/db.ts. */
  a: string;
  b: string;
  /** Page <title> (kept ≤ 44 chars so the site suffix still fits in 70). */
  title: string;
  /** Meta description, 50–160 chars. */
  description: string;
  /** PageHead lede under the H1. */
  lede: string;
  /** One-line takeaway for cards on /compare/, brand hubs and model pages. */
  takeaway: string;
  /** "How they differ" — substantive paragraphs grounded in the data. */
  analysis: string[];
  /** "Choose <a> if …" */
  chooseA: string;
  /** "Choose <b> if …" */
  chooseB: string;
  bottomLine: string;
}

export const comparisonUrl = (c: Comparison) => `/compare/${c.slug}/`;

export const COMPARISONS: Comparison[] = [
  {
    slug: 'crx-10ia-l-vs-ur12e-1300',
    a: 'fanuc/crx-10ia-l',
    b: 'universal-robots/ur12e-1300',
    title: 'CRX-10iA/L vs UR12e: 10 kg Cobot Comparison',
    description:
      'FANUC CRX-10iA/L vs Universal Robots UR12e-1300: the 10 kg cobot class compared on payload, reach, sealing and ecosystem, every spec cited to the manufacturer.',
    lede: 'The two default shortlist entries in the 10 kg cobot class: FANUC’s long-arm CRX against the UR12e-1300, the renamed successor to the UR10e.',
    takeaway: 'UR12e lifts more and weighs less; the CRX reaches farther and is IP67-sealed.',
    analysis: [
      'On paper the UR12e-1300 is the stronger lifter: a 12.5 kg rated payload against the CRX’s 10 kg, in an arm that weighs 5.5 kg less (33.5 kg vs 39 kg), and UR publishes a 4 m/s maximum TCP speed plus a compact Ø190 mm footprint. The CRX-10iA/L answers with reach — 1,418 mm against 1,300 mm — and with sealing: the whole CRX line is rated IP67, while UR lists no IP rating for the UR12e in the data we cite. Repeatability is level at ±0.05 mm, so placement accuracy does not separate them.',
      'The bigger difference is what each arm plugs into. The CRX runs on FANUC’s R-30iB Plus, the same controller family as FANUC’s industrial robots, so a plant with FANUC cells, FANUC-trained programmers and a FANUC service contract can treat it as a smaller FANUC. The UR12e runs the CB7 controller and is sold through a large integrator and accessory ecosystem — third-party grippers, vision systems and palletizing kits are its home turf. Neither is objectively better; they optimise for different factories.',
    ],
    chooseA:
      'Choose the CRX-10iA/L if the cell is exposed to coolant, dust or washdown (IP67 sealing), if your layout needs the extra 118 mm of reach, or if your plant already runs FANUC controllers and service.',
    chooseB:
      'Choose the UR12e-1300 if part plus gripper pushes past 10 kg, if the arm will be carried between stations by hand, or if you want the deep third-party gripper and vision ecosystem around the arm.',
    bottomLine:
      'Same repeatability, different trade: the UR12e lifts more and weighs less; the CRX reaches farther and is sealed for harsh cells. In a clean, FANUC-free shop the UR12e is the easier default; in a wet or FANUC-standard plant the CRX is the safer buy.',
  },
  {
    slug: 'm-10id-12-vs-motoman-gp12',
    a: 'fanuc/m-10id-12',
    b: 'yaskawa/gp12',
    title: 'M-10iD/12 vs GP12: 12 kg Industrial Robots',
    description:
      'FANUC M-10iD/12 vs Yaskawa Motoman GP12: two 12 kg hollow-arm handling robots with near-identical headline specs, compared on the details that separate them.',
    lede: 'A dead heat on the headline numbers — 12 kg, ±0.02 mm and about 1.44 m of reach on both sides. The differences live in the datasheet details and the controller ecosystem.',
    takeaway: 'Near-identical specs — the decision is controller ecosystem, mounting and service.',
    analysis: [
      'Put the two spec tables side by side and you will struggle to separate these arms: identical 12 kg rated payload, reach within a single millimetre (1,441 mm vs 1,440 mm), identical ±0.02 mm repeatability, the same IP54 body with IP65 optional, and both are hollow-arm designs that route the dress pack inside the arm. FANUC shades the weigh-in, 145 kg against 150 kg. For a standard machine-tending or handling cell, either arm does the job.',
      'Where print exists, Yaskawa prints more of it: the GP12 datasheet publishes wrist allowable moment and inertia (22 / 22 / 9.8 N·m, 0.65 / 0.65 / 0.17 kg·m²) and a 2,511 mm vertical reach, and the GP12 is listed for floor, wall, tilt and ceiling mounting, where the M-10iD/12 covers floor, angle and inverted. Both makers rate the wrist itself IP67. Past the spec sheet, the honest deciding factors are the controller standard your programmers already know — FANUC’s R-30iB Plus or Yaskawa’s YRC1000 — and which maker’s service organisation answers faster in your region.',
    ],
    chooseA:
      'Choose the M-10iD/12 if your plant is FANUC-standard, or if the 5 kg weight saving matters for a riser, gantry or ceiling-adjacent mount.',
    chooseB:
      'Choose the GP12 if you need wall or tilt mounting, or if your end-effector design needs published wrist moment and inertia figures before you can commit.',
    bottomLine:
      'Buy the ecosystem, not the arm: on cited specs these two are interchangeable for most 12 kg handling work, so controller standard, integrator preference and service coverage should make the call.',
  },
  {
    slug: 'kr-6-r900-2-vs-lr-mate-200id',
    a: 'kuka/kr-6-r900-2',
    b: 'fanuc/lr-mate-200id',
    title: 'KR 6 R900-2 vs LR Mate 200iD Compared',
    description:
      'KUKA KR 6 R900-2 vs FANUC LR Mate 200iD: compact industrial arms compared on repeatability, reach, sealing and cleanroom credentials, specs cited to each maker.',
    lede: 'Two compact arms for machine tending and small-part handling. The FANUC is the precision pick; the KUKA is the reach-and-cleanroom pick.',
    takeaway: 'LR Mate wins on ±0.01 mm precision; KR 6 wins on reach and cleanroom rating.',
    analysis: [
      'The LR Mate 200iD posts the strongest repeatability in this class in our database — ±0.01 mm, half the KR 6 R900-2’s ±0.02 mm (KUKA quotes pose repeatability per ISO 9283) — and it carries more: 7 kg against 6 kg rated, though the KUKA’s 6.7 kg maximum closes most of that gap. The FANUC does it in a tighter envelope, 717 mm of reach and a 25 kg arm that is easy to mount over a machine. The KR 6 reaches 901 mm — 184 mm farther — which on its own decides some machine-tending layouts, where the arm must load deep into a machining centre from outside the door.',
      'Environment splits them further. Both are sealed — IP67 for the LR Mate, IP65 / IP67 for the KR 6’s robot and in-line wrist — but only FANUC offers an IP69K option for washdown duty, and only KUKA states a cleanroom classification (ISO 14644-1 Class 4 at 80 % override) together with any-angle mounting on the compact KR C5 micro-2 controller. Food and pharma washdown points one way; electronics cleanrooms point the other.',
    ],
    chooseA:
      'Choose the KR 6 R900-2 if your layout needs the 901 mm reach, if the cell is a cleanroom, or if your plant already runs KUKA controllers.',
    chooseB:
      'Choose the LR Mate 200iD if placement accuracy is the binding constraint (±0.01 mm), if the cell sees washdown (IP69K option), or if your plant is FANUC-standard.',
    bottomLine:
      'Precision and payload density point to the LR Mate 200iD; reach, cleanroom rating and mounting freedom point to the KR 6 R900-2. Let the cell environment make this decision.',
  },
  {
    slug: 'ur20-vs-crx-20ia-l',
    a: 'universal-robots/ur20',
    b: 'fanuc/crx-20ia-l',
    title: 'UR20 vs CRX-20iA/L: 20 kg Cobot Comparison',
    description:
      'Universal Robots UR20 vs FANUC CRX-20iA/L: 20 kg cobots for palletizing and tending, compared on reach, weight, sealing and the repeatability fine print.',
    lede: 'Both lift 20 kg without a fence. One is built around reach, the other is a lighter, sealed FANUC — and their spec sheets differ in what they are willing to state.',
    takeaway: 'UR20 for 1,750 mm reach and palletizing; CRX for IP67 sealing and 23 kg less weight.',
    analysis: [
      'The UR20 is the reach tool: 1,750 mm against the CRX-20iA/L’s 1,418 mm, plus a 25 kg extended payload rating — the combination Universal Robots aims at palletizing and welding. UR also publishes a 5 m/s maximum TCP speed. The cost is mass: at 64 kg the UR20 weighs 23 kg more than the 41 kg CRX, which matters when the arm sits on a riser or mobile base, and when a technician has to move it by hand.',
      'The CRX-20iA/L is IP67-sealed like the rest of the CRX line and runs on FANUC’s R-30iB Plus controller. It also publishes its repeatability (±0.04 mm). UR’s own pages conflict on the UR20’s repeatability — ±0.01 mm on the model page, ±0.1 mm on the UR Series overview — so our database lists none. If your 20 kg application is placement-critical rather than palletising, get the UR20’s datasheet figure in writing before you choose.',
    ],
    chooseA:
      'Choose the UR20 if you are palletising or tending across a wide envelope and need the 1,750 mm reach or the 25 kg extended payload.',
    chooseB:
      'Choose the CRX-20iA/L if the cell is wet or dusty (IP67), if the arm will sit on a riser or be redeployed by hand (41 kg), or if your plant is FANUC-standard.',
    bottomLine:
      'For reach-driven palletizing the UR20 is the clear pick; for harsh environments and lighter installation the CRX-20iA/L is the more practical arm. Check the UR20’s repeatability in the datasheet if accuracy matters to your process.',
  },
  {
    slug: 'atlas-vs-unitree-h2',
    a: 'boston-dynamics/atlas',
    b: 'unitree/h2',
    title: 'Atlas vs Unitree H2: Humanoid Comparison',
    description:
      'Boston Dynamics Atlas vs Unitree H2: an early-access enterprise humanoid against a buy-it-today platform, compared on size, strength, runtime and price.',
    lede: 'Both are “full-size humanoids”, and almost nothing else about them is alike: Atlas is an early-access enterprise programme; the H2 is a product with a public price tag.',
    takeaway: 'Atlas is stronger and sealed but early-access only; the H2 is buyable today at US$29,900.',
    analysis: [
      'Atlas is the bigger, stronger machine: 1.9 m tall and 90 kg against the H2’s 1.82 m and 70 kg, 56 degrees of freedom against 31, and a 30 kg rated payload (50 kg peak) where Unitree states no payload figure for the H2 at all. Atlas is sealed to IP67 with a −20 to 40 °C operating range and swaps its own battery at a charging station; the H2 carries a 972 Wh pack for a stated 3 h of runtime against Atlas’s 4 h. On capability per the published sheets, it is not close.',
      'The real divide is how you get one. Boston Dynamics lists Atlas as early access — field testing on sequencing tasks at a Hyundai facility with a small number of early adopters — and publishes no price. The H2 is a production product at a published US$29,900, orderable from Unitree’s shop, with an 8-month warranty (12 months for the EDU version). One is a partnership with a deployment programme behind it; the other is a purchase order.',
    ],
    chooseA:
      'Choose Atlas if you are an enterprise evaluating humanoids for logistics or factory material handling and can engage as an early-access partner — and if IP67 sealing and payload headroom matter.',
    chooseB:
      'Choose the H2 if you need a full-size humanoid you can actually buy now for research and development, at a known price and on a known delivery path.',
    bottomLine:
      'Atlas is the more capable and more industrial machine, but you cannot simply buy one. The H2 is the default for any team that needs humanoid hardware on the floor this quarter.',
  },
];
