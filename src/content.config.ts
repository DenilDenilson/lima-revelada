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

const espacioSingularCollection = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/data/espacioSingular' }),
	schema: z.object({
		id: z.string(),
		kind: z.string(),
		title: z.string(),
		singularidad: z.string(),
		coordinates: z.array(z.number()).length(2),
		direction: z.string(),
		fuentes: z.array(
			z.object({
				title: z.string(),
				url: z.string().url(),
			})
		),
	}),
});

const curiosidadOcultaCollection = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/data/curiosidadOculta' }),
	schema: z.object({
		id: z.string(),
		kind: z.string(),
		title: z.string(),
		singularidad: z.string(),
		coordinates: z.array(z.number()).length(2),
		direction: z.string(),
		fuentes: z.array(
			z.object({
				title: z.string(),
				url: z.string().url(),
			})
		),
	}),
});

const instagrameableCollection = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/data/instagrameable' }),
	schema: z.object({
		id: z.string(),
		kind: z.string(),
		title: z.string(),
		coordinates: z.array(z.number()).length(2),
		direction: z.string(),
	}),
});

export const collections = {
	paranormalCollection,
	espacioSingularCollection,
	curiosidadOcultaCollection,
	instagrameableCollection,
};
