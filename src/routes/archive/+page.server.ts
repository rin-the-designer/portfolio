import { archiveItems, categories } from '$lib/data/ArchiveData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		archiveItems,
		categories
	};
};
