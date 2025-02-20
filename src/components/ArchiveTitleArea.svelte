<script lang="ts">
	interface TitleAreaProps {
		title: string;
		slug: string;
		thumbnail: string;
		mainImage: string;
		tags: string;
		date: {
			year: number;
			month: number;
		};
		intro: string[];
		iframe: string;
	}

	export let item: TitleAreaProps;
</script>

<div class="title-area">
	<div class="content-area">
		<div class="title">
			<h1>{item.title}</h1>
		</div>
		<hr />
		<div class="main-image">
			{#if item.iframe}
				<iframe src={item.iframe} title={item.title} scrolling="no"></iframe>
			{:else}
				<img src={item.mainImage} alt={item.title} />
			{/if}
		</div>
	</div>
	<div class="metadata">
		<span class="item-tags">
			<a href={`/archive?category=${item.tags}`}>{item.tags}</a>
		</span>
		<hr />
		<span class="item-date">{item.date.year}/{item.date.month}</span>
		<hr />
		{#each item.intro as intro}
			<p class="item-intro">{intro}</p>
		{/each}
	</div>
</div>

<style>
	.title-area {
		min-height: calc(100vh - var(--header-height));
		display: flex;
		flex-direction: row;
	}

	.content-area {
		display: flex;
		flex-direction: column;
		width: 75%;
	}

	.title {
		background-color: white;
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		padding: 0.5rem;
		height: auto;
	}

	.main-image {
		background-color: white;
		height: 100%;
	}

	.metadata {
		background-color: white;
		display: flex;
		flex-direction: column;
		position: sticky;
		top: var(--header-height);
		align-self: start;
		height: calc(100vh - var(--header-height));
		width: 25%;
		border-left: 2px solid var(--black);
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	.title h1 {
		font-size: calc(100vw / 16);
		line-height: 1.2;
	}

	.metadata .item-tags,
	.metadata .item-date,
	.metadata .item-intro {
		padding: 0.5rem;
	}

	.metadata .item-tags a {
		font-size: 1.25rem;
		transition: all 0.2s ease-in-out;
	}

	.metadata .item-tags a:hover {
		background-color: var(--main-color);
		color: white;
	}

	.metadata .item-date {
		font-size: 1.25rem;
	}

	hr {
		border-top: 2px solid var(--black);
	}
</style>
