import { photographies } from '$lib/ArchiveData.js';
import { posters } from '$lib/ArchiveData.js';
import { logos } from '$lib/ArchiveData.js';
import { coding } from '$lib/ArchiveData.js';
export function load() {
	return {
		photographyData: photographies.map((photography) => ({
			title: photography.title,
			thumbnail: photography.thumbnail,
			slug: photography.slug
		})),
		posterData: posters.map((poster) => ({
			title: poster.title,
			thumbnail: poster.thumbnail,
			slug: poster.slug
		})),
		logoData: logos.map((logo) => ({
			title: logo.title,
			thumbnail: logo.thumbnail,
			slug: logo.slug
		})),
		codingData: coding.map((coding) => ({
			title: coding.title,
			thumbnail: coding.thumbnail,
			slug: coding.slug
		}))
	};
}
