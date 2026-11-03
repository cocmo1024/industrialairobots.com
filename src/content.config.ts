import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(70).max(160),
    /** Topic cluster; see docs/STRATEGY.md for the list. */
    topic: z.enum(['selection', 'specs', 'cost-roi', 'safety', 'applications', 'physical-ai']),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    /** Primary sources the guide relies on. */
    sources: z.array(z.object({ title: z.string(), url: z.url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
