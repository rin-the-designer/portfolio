import { projects, tags } from '$lib/data/ProjectData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		projects,
		tags
	};
};
