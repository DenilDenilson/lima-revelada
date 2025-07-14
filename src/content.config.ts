import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const paranormalCollection = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/data/paranormal' }),
});

export const collections = {
	paranormalCollection,
};
