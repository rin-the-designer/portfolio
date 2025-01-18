import { photographies, posters, logos, coding } from '$lib/ArchiveData';
import { error } from '@sveltejs/kit';

// Add this entries function to tell SvelteKit which paths to prerender
export function entries() {
	// Collect all slugs from each category and join them back to strings
	const allSlugs = [
		...photographies.map((item) => ({ slug: item.slug })),
		...posters.map((item) => ({ slug: item.slug })),
		...logos.map((item) => ({ slug: item.slug })),
		...coding.map((item) => ({ slug: item.slug }))
	];
	return allSlugs;
}

export function load({ params }) {
	let item = photographies.find((item) => item.slug === params.slug);
	if (!item) item = posters.find((item) => item.slug === params.slug);
	if (!item) item = logos.find((item) => item.slug === params.slug);
	if (!item) item = coding.find((item) => item.slug === params.slug);

	if (!item) {
		throw error(404, 'Item not found');
	}

	return { item };
}
