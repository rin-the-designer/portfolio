<script lang="ts">
	import type { Archive } from '$lib/data/types';

	export let item: Archive;
</script>

<a href={`/archive/${item.slug}`}>
	<div class="image-container">
		<img src={item.thumbnail} alt="{item.title} Thumbnail" />
	</div>
</a>

<style>
	.image-container {
		overflow: hidden;
	}

	img {
		aspect-ratio: 1/1;
		object-fit: cover;
		transition: transform 0.2s ease-in-out;
	}

	img:hover {
		transform: scale(1.1);
	}
</style>
