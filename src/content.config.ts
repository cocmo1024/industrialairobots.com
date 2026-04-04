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
				primaryKeyword: z.string().optional(),
				searchIntent: z.enum(['learn', 'compare', 'select', 'design', 'deploy']).optional(),
				decisionStage: z
					.enum([
						'problem-aware',
						'solution-aware',
						'vendor-aware',
						'shortlist',
						'implementation',
						'operations',
					])
					.optional(),
				targetRoles: z.array(z.string()).optional(),
				contentStatus: z.enum(['seed', 'growing', 'cornerstone']).optional(),
				problemSolved: z.string().optional(),
				readerTakeaway: z.string().optional(),
				keyQuestions: z.array(z.string()).optional(),
				notFor: z.array(z.string()).optional(),
				updateTriggers: z.array(z.string()).optional(),
			}),
		}),
	}),
};
