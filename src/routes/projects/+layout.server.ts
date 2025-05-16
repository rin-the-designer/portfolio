import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { projects } from '$lib/data/ProjectData';

export const load: LayoutServerLoad = ({ url }) => {
	// Get the slug from the URL path
	const pathname = url.pathname;

	// Skip loading on the main /projects page
	if (pathname === '/projects') {
		return { project: undefined };
	}

	// Extract slug from URL format /projects/[slug]
	const slug = pathname.split('/').pop();

	if (slug) {
		const project = projects.find((p) => p.slug === slug);

		if (project) {
			return { project };
		}
	}

	// Don't throw an error here, as the page will handle it
	return { project: undefined };
};
