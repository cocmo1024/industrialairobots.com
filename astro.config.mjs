// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { siteMeta } from './src/utils/site-meta.mjs';

export default defineConfig({
	site: siteMeta.siteUrl,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: siteMeta.name,
			description: siteMeta.description,
			tagline: siteMeta.tagline,
			lastUpdated: true,
			social: [
				{
					icon: 'x.com',
					label: 'X',
					href: 'https://x.com/oocxx_com',
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
							label: 'Case Studies',
							autogenerate: { directory: 'case-studies' },
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
					items: [
						'about',
						'contact',
						'editorial-policy',
						'privacy',
						'terms-of-use',
						'disclaimer',
					],
				},
			],
			customCss: ['./src/styles/global.css'],
			pagefind: true,
			favicon: siteMeta.faviconPath,
			credits: false,
			components: {
				Head: './src/components/Head.astro',
				PageSidebar: './src/components/PageSidebar.astro',
				Footer: './src/components/Footer.astro',
			},
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
