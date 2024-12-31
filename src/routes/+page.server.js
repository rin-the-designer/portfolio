import { projects } from './ProjectData.js';

export function load() {
	return {
		summaries: projects.map((project) => ({
			title: project.title,
			slug: project.slug,
			thumbnail: project.thumbnail
		}))
	};
}
