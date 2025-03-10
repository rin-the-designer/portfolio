<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	interface Project {
		title: string;
		slug: string;
		thumbnail: string;
		excerpt: string;
		tags: string[];
	}

	export let project: Project;
</script>

<div class="card">
	<img src={project.thumbnail} alt="{project.title} Thumbnail" />
	<div class="card-text">
		<h1>{project.title}</h1>
		<div class="excerpt">
			<p>{project.excerpt}</p>
		</div>
		<div class="tags">
			{#each project.tags as tag}
				<button type="button" class="tag" on:click={() => dispatch('tagSelect', tag)}>
					{tag}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
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
		border: none;
		background: none;
		padding: 0;
		cursor: pointer;
	}

	.tags .tag:hover {
		background-color: var(--main-color);
		color: white;
		cursor: pointer;
	}

	.excerpt p {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 0;
		height: 2.625rem;
	}
</style>
