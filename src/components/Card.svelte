<script lang="ts">
	interface Project {
		title: string;
		slug: string;
		thumbnail: string;
		excerpt: string;
		tags: string[];
	}

	export let projects: Project[];
	let width: number;
	let totalSpaces: number = 1;

	$: totalSpaces = width >= 1024 ? 4 : width >= 768 ? 3 : width >= 480 ? 2 : 1;
</script>

<svelte:window bind:innerWidth={width} />

<div class="card-container">
	{#each projects as project}
		<div class="card">
			<img src={project.thumbnail} alt="{project.title} Thumbnail" />
			<div class="card-text">
				<h1>{project.title}</h1>
				<p>{project.excerpt}</p>
				<div class="tags">
					{#each project.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
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
		grid-template-columns: repeat(1, 1fr);
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
		padding: 1rem 0.5rem;
		height: 100%;
	}

	.card h1 {
		font-weight: 600;
		font-size: 1rem;
	}

	.card p {
		font-weight: 400;
		font-size: 0.875rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tags .tag {
		font-weight: 700;
		text-decoration: underline;
		font-size: 0.75rem;
		color: var(--black);
		transition: all 0.2s ease-in-out;
	}

	.tags .tag:hover {
		background-color: var(--main-color);
		color: white;
		cursor: pointer;
	}

	/* Large Mobile: 2 columns */
	@media (min-width: 480px) {
		:global(.card-container) {
			grid-template-columns: repeat(2, 1fr);
		}
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
