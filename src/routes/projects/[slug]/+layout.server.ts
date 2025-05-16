import { projects } from '$lib/ProjectData';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
};
