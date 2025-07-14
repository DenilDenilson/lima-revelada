import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const paranormalCollection = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/data/paranormal' }),
	schema: z.object({
		id: z.string(),
		kind: z.string(),
		title: z.string(),
		description: z.string(),
		coordinates: z.array(z.number()).length(2),
		direction: z.string(),
		history: z.array(z.string()),
		fuentes: z.array(
			z.object({
				title: z.string(),
				url: z.string().url(),
				description: z.string(),
			})
		),
	}),
});

export const collections = {
	paranormalCollection,
};
