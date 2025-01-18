import { photographies, posters, logos, coding } from '$lib/ArchiveData';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	let item = photographies.find((item) => item.slug === params.slug);
	if (!item) item = posters.find((item) => item.slug === params.slug);
	if (!item) item = logos.find((item) => item.slug === params.slug);
	if (!item) item = coding.find((item) => item.slug === params.slug);

	if (!item) {
		throw error(404, 'Item not found');
	}

	return { item };
}
