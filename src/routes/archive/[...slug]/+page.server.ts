import { archiveItems, CATEGORIES } from '$lib/ArchiveData';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Add this entries function to tell SvelteKit which paths to prerender
export function entries() {
	// Get all slugs from the unified archive items
	return archiveItems.map((item) => ({ slug: item.slug }));
}

export const load: PageServerLoad = ({ params }) => {
	const item = archiveItems.find((item) => item.slug === params.slug);

	if (!item) {
		throw error(404, 'Item not found');
	}

	return { item };
};
