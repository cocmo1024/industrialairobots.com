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
				'Application-focused reference material for industrial robotics, machine vision, AI-assisted automation, and deployment strategy.',
			tagline: 'Industrial robotics reference material organized by application, cell design, and deployment reality.',
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
					items: ['applications', 'robot-types', 'vision-and-sensing', 'cell-design', 'deployment'],
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
