import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				referenceType: z
					.enum([
						'home',
						'foundation',
						'policy',
						'application',
						'robot-type',
						'vision',
						'cell-design',
						'deployment',
						'case-study',
					])
					.optional(),
				adProfile: z
					.enum([
						'foundation',
						'policy',
						'application',
						'case-study',
						'robot-type',
						'vision',
						'cell-design',
						'deployment',
					])
					.optional(),
				commercialIntent: z.enum(['low', 'medium', 'high']).optional(),
				reviewCadence: z.string().optional(),
			}),
		}),
	}),
};
