<script lang="ts">
	interface Item {
		title: string;
		thumbnail: string;
		slug: string;
	}

	export let item: Item;
</script>

<a href={`/archive/${item.slug}`}>
	<img src={item.thumbnail} alt="{item.title} Thumbnail" />
</a>

<style>
	img {
		aspect-ratio: 1/1;
		object-fit: cover;
	}
</style>
