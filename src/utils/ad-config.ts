type Frontmatter = Record<string, unknown> | undefined;

type AdSlotPlan = {
	zone: string;
	headline: string;
	sizes: string[];
	audience?: string;
	note?: string;
};

type AdPlan = {
	summary: string;
	rail: AdSlotPlan[];
	footer: AdSlotPlan;
};

type AdProfile =
	| 'foundation'
	| 'policy'
	| 'application'
	| 'case-study'
	| 'robot-type'
	| 'vision'
	| 'cell-design'
	| 'deployment';

function inferProfile(routeId: string, frontmatter: Frontmatter): AdProfile {
	const explicit = frontmatter?.adProfile;
	if (typeof explicit === 'string') return explicit as AdProfile;
	if (routeId.startsWith('applications/')) return 'application';
	if (routeId.startsWith('case-studies/')) return 'case-study';
	if (routeId.startsWith('robot-types/')) return 'robot-type';
	if (routeId.startsWith('vision-and-sensing/')) return 'vision';
	if (routeId.startsWith('cell-design/')) return 'cell-design';
	if (routeId.startsWith('deployment/')) return 'deployment';
	if (routeId === 'about' || routeId === 'contact' || routeId === 'index') return 'foundation';
	return 'policy';
}

const plans: Record<AdProfile, AdPlan> = {
	foundation: {
		summary:
			'Foundation pages keep the future commercial layout restrained while reserving space for relevant industrial automation sponsors.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Automation brand or ecosystem sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Fit for robotics, software, vision, or integration brands.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Report, event, or partner mention',
				sizes: ['300x600', 'native card'],
				audience: 'Lower-intensity awareness inventory for industrial readers.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Automation ecosystem placement',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Broad industrial awareness inventory.',
		},
	},
	policy: {
		summary:
			'Policy pages should remain low-pressure and easy to trust, so the reserved commercial footprint is intentionally conservative.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Disclosure-safe brand presence',
				sizes: ['300x250', 'native card'],
				audience: 'Reserved for conservative trust-page inventory only.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Low-pressure network placement',
			sizes: ['728x90', 'native strip'],
			audience: 'Appropriate only when disclosure stays explicit.',
		},
	},
	application: {
		summary:
			'Application pages are ideal for monetization because readers are often evaluating real robotic cells, integrators, tooling, and automation budgets.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Cell application sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Strong fit for robotics vendors, integrators, or automation software providers.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Deployment or tooling partner',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for readers moving from application research into implementation.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Application-stage automation placement',
			sizes: ['728x90', '970x90'],
			audience: 'Reserved for technically engaged project traffic.',
		},
	},
	'case-study': {
		summary:
			'Case study pages sit close to deployment intent, so the reserved commercial layout is built for integrators, software, tooling, and measured project-stage inventory.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Case-study sponsor slot',
				sizes: ['300x250', '300x300'],
				audience: 'Fit for integrators, robotics software, EOAT vendors, and automation partners.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Project validation partner',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for readers translating a pilot into rollout decisions.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Deployment-evidence placement',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Reserved for traffic studying real manufacturing examples and rollout logic.',
		},
	},
	'robot-type': {
		summary:
			'Robot-type pages support high-value inventory because they sit close to shortlist and cell-design decisions.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Robot-category sponsor slot',
				sizes: ['300x250', '300x300'],
				audience: 'Fit for OEMs, EOAT suppliers, or adjacent automation categories.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Shortlist and integration placement',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for evaluators narrowing robot or tooling choices.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Robot-type comparison strip',
			sizes: ['728x90', '970x90'],
			audience: 'Reserved for bottom-of-funnel robot selection traffic.',
		},
	},
	vision: {
		summary:
			'Vision pages align naturally with sensing, inspection, analytics, and guidance products, but the commercial layout should stay technically credible and low-noise.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Vision or inspection sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Fit for industrial vision, sensing, or quality platforms.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Guidance, analytics, or cell software slot',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for perception-adjacent products and services.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Inspection and guidance partner strip',
			sizes: ['728x90', '970x90'],
			audience: 'Reserved for perception-oriented industrial traffic.',
		},
	},
	'cell-design': {
		summary:
			'Cell design pages are excellent for integrator, safety, tooling, and layout-adjacent placements because readers are already deep in solution design.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Cell design or safety sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Strong fit for integrators, safety systems, or tooling vendors.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Material flow or maintenance partner',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for readers shaping the full cell around operations reality.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Cell architecture placement',
			sizes: ['728x90', '970x90'],
			audience: 'Reserved for integrator-grade or system-design inventory.',
		},
	},
	deployment: {
		summary:
			'Deployment and ROI pages tend to carry the strongest commercial value because they attract readers close to project funding and rollout decisions.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Deployment or ROI sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Strong fit for integrators, robotics software, and industrial service providers.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Pilot and rollout partner slot',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for readers evaluating implementation and scale-up partners.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Project-stage automation placement',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Reserved for traffic near budget or rollout decisions.',
		},
	},
};

export function getAdPlan(routeId: string, frontmatter: Frontmatter): AdPlan {
	const profile = inferProfile(routeId, frontmatter);
	return plans[profile];
}
