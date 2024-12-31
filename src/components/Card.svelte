<script lang="ts">
	interface Project {
		title: string;
		slug: string;
		thumbnail: string;
	}

	export let projects: Project[];
	let width: number;
	let totalSpaces: number = 2;

	$: totalSpaces = width >= 1024 ? 4 : width >= 768 ? 3 : 2;
</script>

<svelte:window bind:innerWidth={width} />

<div class="card-container">
	{#each projects as project}
		<div class="card">
			<img src={project.thumbnail} alt="{project.title} Thumbnail" />
			<div class="card-text">
				<h1>{project.title}</h1>
			</div>
		</div>
	{/each}

	{#if projects.length % totalSpaces !== 0}
		<div
			class="card empty-card"
			style="grid-column: span {totalSpaces - (projects.length % totalSpaces)};"
		>
			<div class="card-text">
				<h1>More projects coming soon...</h1>
			</div>
		</div>
	{/if}
</div>

<style>
	:global(.card-container) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2px;
		background-color: var(--black);
		padding: 2px 0;
	}

	.card {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.card img {
		width: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
		border-bottom: 2px solid var(--black);
	}

	.card-text {
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem;
	}

	.card h1 {
		font-weight: 600;
		font-size: 1rem;
	}

	/* Tablet: 3 columns */
	@media (min-width: 768px) {
		:global(.card-container) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* Desktop: 4 columns */
	@media (min-width: 1024px) {
		:global(.card-container) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.empty-card {
		background-color: white;
		height: 100%;
		box-shadow: 0px 0px 2px 0px white;
	}

	.empty-card .card-text {
		height: 100%;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
