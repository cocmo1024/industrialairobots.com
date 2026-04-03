import { SITE_CONTACT_EMAIL, SITE_TITLE } from './consts';

export const SITE_EDITOR = {
	name: `${SITE_TITLE} Editorial Desk`,
	role: 'Industrial robotics application research desk',
	email: SITE_CONTACT_EMAIL,
	bio: 'We focus on production use cases, deployment readiness, and the technical stack decisions that shape real industrial robotics adoption.',
};

export const SITE_POSITIONING =
	'Build an English-language robotics reference brand around use-case economics, deployment playbooks, and vision-stack decisions that matter to industrial buyers.';

export const SITE_AUDIENCES = [
	{
		title: 'Manufacturing and Automation Leaders',
		summary: 'Readers deciding where robotics can deliver measurable throughput, quality, or labor improvements first.',
	},
	{
		title: 'Integrators and Technical Specifiers',
		summary: 'Teams mapping pilots, rollout plans, safety considerations, and component choices to production constraints.',
	},
	{
		title: 'Vision and Compute Buyers',
		summary: 'People comparing cameras, edge compute, lighting, and software stacks that support AI-driven robotic cells.',
	},
];

export const SITE_CONTENT_PILLARS = [
	{
		title: 'Use Case Economics',
		href: '/categories/use-case-economics/',
		summary: 'Application-first content about where robotics and AI create value fast enough to justify spend.',
	},
	{
		title: 'Deployment Playbooks',
		href: '/categories/deployment-playbooks/',
		summary: 'Pilots, rollout sequencing, safety readiness, staffing, and line-level implementation detail.',
	},
	{
		title: 'Vision & Compute',
		href: '/categories/vision-and-compute/',
		summary: 'Cameras, lighting, edge compute, and model-inference infrastructure for industrial robotics systems.',
	},
];

export const SITE_VALUE_LANES = [
	{
		title: 'Application Intent',
		summary: 'Traffic is strongest when readers are evaluating a real task such as inspection, palletizing, or machine tending.',
	},
	{
		title: 'Deployment Intent',
		summary: 'Playbooks and safety-readiness pages attract teams who are moving from curiosity into actual rollout planning.',
	},
	{
		title: 'Stack Intent',
		summary: 'Vision and compute articles support technical buyers comparing the hardware and software needed to make the cell work.',
	},
];

export const SITE_PRIORITY_CLUSTERS = [
	{
		title: 'Machine Tending and Loading Cells',
		summary: 'Economics, safety, staffing, and integration detail for repetitive loading and unloading applications.',
		whyItWins: 'This is one of the clearest entry points for industrial robotics ROI and often leads directly into buyer and integrator research.',
	},
	{
		title: 'Palletizing and End-of-Line Automation',
		summary: 'Use-case pages covering throughput, variability, grippers, and deployment fit.',
		whyItWins: 'Palletizing attracts concrete commercial interest because the business case is easy to frame and compare.',
	},
	{
		title: 'AI Inspection and Vision Cells',
		summary: 'Machine vision, defect detection, camera placement, lighting, and model deployment topics.',
		whyItWins: 'Strong overlap between application intent and technical stack intent, which makes the cluster deep and commercially attractive.',
	},
	{
		title: 'Edge Compute for Robotics',
		summary: 'GPU selection, thermal fit, software stack maturity, and lifecycle support for vision-heavy workcells.',
		whyItWins: 'Creates durable long-tail content at the point where industrial buyers move from concept to system design.',
	},
];

export const SITE_CONTENT_FORMATS = [
	{
		title: 'Application Deep Dives',
		summary: 'Problem-first pages that explain where robotics fits, what constraints matter, and how value is measured.',
	},
	{
		title: 'Pilot and Rollout Playbooks',
		summary: 'Guides for sequencing pilots, staffing, safety planning, and cross-functional coordination.',
	},
	{
		title: 'Component Stack Guides',
		summary: 'Technical pages connecting cameras, compute, controllers, software, and integration concerns.',
	},
	{
		title: 'ROI and Comparison Pages',
		summary: 'Decision content that supports OEM, integrator, training, and component-partner fit later on.',
	},
];

export const SITE_METHOD_PRINCIPLES = [
	{
		title: 'Use cases before hype',
		summary: 'Robotics content should start with the job to be done and the production constraint, not with general AI excitement.',
	},
	{
		title: 'Economics and deployment belong together',
		summary: 'A high-quality page should connect ROI logic with implementation friction instead of treating them separately.',
	},
	{
		title: 'Technical stack content should tie back to applications',
		summary: 'Vision and compute pages work best when readers can see why the component decision matters inside a real cell.',
	},
	{
		title: 'Refresh fast-moving comparison pages',
		summary: 'Vendor landscapes and stack-selection pages should be revisited regularly so the archive stays commercially credible.',
	},
];

export const SITE_AVOID_TOPICS = [
	'Generic humanoid-robot hype with no industrial buying relevance',
	'Thin AI news rewrites that do not connect to production use cases',
	'Consumer robotics coverage disconnected from factory or warehouse reality',
	'Vendor-centric pages that skip economics, safety, and rollout constraints',
];

export const SITE_UPDATE_PLAYBOOK = [
	{
		title: 'Monthly application buildout',
		summary: 'Deepen one production use case with an economics page, a deployment playbook, and a related stack guide.',
	},
	{
		title: 'Quarterly stack refresh',
		summary: 'Revisit compute, vision, and component pages where the market shifts fast enough to affect buying decisions.',
	},
	{
		title: 'Quarterly rollout library growth',
		summary: 'Publish safety, staffing, pilot design, and change-management material that helps serious teams move forward.',
	},
	{
		title: 'Semiannual cluster recut',
		summary: 'Consolidate the strongest application topics into cleaner hub pages with better internal-link architecture.',
	},
];

export const SITE_REVIEW_PROMISE =
	'Application and comparison pages should be updated on a recurring cycle so industrial buyers can trust the archive when the stakes move beyond casual research.';
