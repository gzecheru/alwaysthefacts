import { defineCollection, z } from 'astro:content';

const digests = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),

    dayOfYear: z.number(),
    dominantTheme: z.string(),
    executiveSummary: z.string(),
    continents: z.array(z.string()),
    implications: z.string(),
  }),
});

export const collections = {
  digests,
};
