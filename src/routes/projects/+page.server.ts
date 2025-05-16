import { projects, tags } from '$lib/ProjectData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		projects,
		tags
	};
};
