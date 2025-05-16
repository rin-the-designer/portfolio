import { archiveItems, categories } from '$lib/ArchiveData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		archiveItems,
		categories
	};
};
