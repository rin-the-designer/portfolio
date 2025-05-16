import { projects } from '$lib/data/ProjectData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		summaries: projects.map((project) => ({
			title: project.title,
			slug: project.slug,
			thumbnail: project.thumbnail,
			excerpt: project.excerpt,
			tags: project.tags
		}))
	};
};
