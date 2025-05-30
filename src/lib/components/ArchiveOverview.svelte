<script lang="ts">
	import type { Archive } from '$lib/data/types';

	export let archive: Archive;
</script>

<div class="archive">
	<div class="content-area">
		<div class="main-image">
			{#if archive.iframe}
				<iframe src={archive.iframe} title={archive.title} scrolling="no"></iframe>
			{:else}
				<img src={archive.mainImage} alt={archive.title} />
			{/if}
		</div>
	</div>
	<div class="metadata">
		<div class="container-element padding-vertical">
			<h1 class="header-4 semibold">{archive.title}</h1>
		</div>
		<hr />
		<div class="container-element padding-vertical">
			<span class="body-1"
				>{archive.date.year}/{archive.date.month.toString().padStart(2, '0')}</span
			>
		</div>
		<hr />
		<div class="container-element padding-vertical">
			<span class="body-1 link semibold">
				<a href={`/archive?category=${archive.tags}`}>{archive.tags}</a>
			</span>
		</div>
		<hr />
		<div class="container-element padding-vertical">
			<p class="body-1">{archive.intro}</p>
		</div>
	</div>
</div>

<style>
	.archive {
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
		padding: var(--padding-default);
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
		font-size: 2rem;
		line-height: 1.2;
		font-weight: 500;
	}

	.metadata .item-tags,
	.metadata .item-date,
	.metadata .item-intro {
		padding: var(--padding-small) var(--padding-default);
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

	@media (max-width: 1024px) {
		.metadata {
			width: 30%;
		}

		.content-area {
			width: 70%;
		}
	}

	@media (max-width: 768px) {
		.title-area {
			flex-direction: column;
		}

		.content-area {
			width: 100%;
			aspect-ratio: 1 / 1;
		}

		.metadata {
			width: 100%;
			border-top: 2px solid var(--black);
			border-left: none;
			height: auto;
		}
	}
</style>
