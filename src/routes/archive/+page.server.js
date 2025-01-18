import { photographies } from '$lib/ArchiveData.js';
import { posters } from '$lib/ArchiveData.js';
import { logos } from '$lib/ArchiveData.js';
export function load() {
	return {
		photographyData: photographies.map((photography) => ({
			title: photography.title,
			thumbnail: photography.thumbnail
		})),
		posterData: posters.map((poster) => ({
			title: poster.title,
			thumbnail: poster.thumbnail
		})),
		logoData: logos.map((logo) => ({
			title: logo.title,
			thumbnail: logo.thumbnail
		}))
	};
}
