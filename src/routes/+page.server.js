import { projects } from '$lib/ProjectData.js';

export function load() {
	return {
		summaries: projects.map((project) => ({
			title: project.title,
			slug: project.slug,
			thumbnail: project.thumbnail,
			excerpt: project.excerpt,
			tags: project.tags
		}))
	};
}
