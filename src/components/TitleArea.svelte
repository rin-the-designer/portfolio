<script lang="ts">
	interface TitleAreaProps {
		title: string;
		slug: string;
		thumbnail: string;
		tags: string;
		date: {
			year: number;
			month: number;
		};
		intro: string;
	}

	export let item: TitleAreaProps;
</script>

<div class="title-area">
	<h1>{item.title}</h1>
	<img src={item.thumbnail} alt={item.title} />
	<p>{item.intro}</p>
	<div class="metadata">
		<span>{item.tags}</span>
		<span>{item.date.year}/{item.date.month}</span>
	</div>
</div>

<style>
	.title-area {
		height: calc(100vh - var(--header-height));
	}
</style>
