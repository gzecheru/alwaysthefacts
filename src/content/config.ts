import { defineCollection, z } from 'astro:content';

const digestCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    dayOfYear: z.number(),
    dominantTheme: z.string(),
    executiveSummary: z.string(),
    continents: z.array(z.object({
      name: z.string(),
      topStories: z.array(z.object({
        title: z.string(),
        source: z.string(),
        score: z.number(),
        summary: z.string()
      }))
    })),
    implications: z.object({
      market: z.string(),
      geopolitical: z.string(),
      patterns: z.string(),
      secondOrder: z.string(),
      watchList: z.string()
    })
  })
});

export const collections = {
  'digests': digestCollection
};
