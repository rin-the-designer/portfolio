<script lang="ts">
	interface Item {
		title: string;
		thumbnail: string;
	}

	export let item: Item;
</script>

<img src={item.thumbnail} alt="{item.title} Thumbnail" />

<style>
	img {
		aspect-ratio: 1/1;
		object-fit: cover;
	}
</style>
