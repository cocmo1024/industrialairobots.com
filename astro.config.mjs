// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://industrialairobots.com',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Industrial AI Robots',
			description:
				'Application-focused reference system for industrial robotics, machine vision, cell design, and deployment strategy.',
			tagline: 'Industrial robotics organized by application, robot class, vision complexity, cell design, and deployment reality.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/cocmo1024/industrialairobots.com',
				},
			],
			sidebar: [
				{
					label: 'Reference Areas',
					items: [
						{
							label: 'Applications',
							autogenerate: { directory: 'applications' },
						},
						{
							label: 'Robot Types',
							autogenerate: { directory: 'robot-types' },
						},
						{
							label: 'Vision and Sensing',
							autogenerate: { directory: 'vision-and-sensing' },
						},
						{
							label: 'Cell Design',
							autogenerate: { directory: 'cell-design' },
						},
						{
							label: 'Deployment',
							autogenerate: { directory: 'deployment' },
						},
					],
				},
				{
					label: 'Site',
					collapsed: true,
					items: ['about', 'contact', 'privacy', 'disclaimer'],
				},
			],
			customCss: ['./src/styles/global.css'],
			pagefind: true,
			favicon: '/favicon.svg',
			credits: false,
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
