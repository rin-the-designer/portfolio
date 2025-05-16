import { educations, experiences, activities, awards } from '$lib/data/AboutData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		educations,
		experiences,
		activities,
		awards
	};
};
