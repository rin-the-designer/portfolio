<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Project } from '$lib/data/types';
	const dispatch = createEventDispatcher();

	export let project: Project;

	const handleTagClick = (event: MouseEvent, tag: string) => {
		event.preventDefault(); // Prevent navigation when clicking tag
		event.stopPropagation();
		dispatch('tagSelect', tag);
	};
</script>

<a href="/projects/{project.slug}" class="card">
	<div class="image-container">
		<img src={project.thumbnail} alt="{project.title} Thumbnail" />
	</div>
	<div class="card-text">
		<h2 class="subtitle-1 semibold">{project.title}</h2>
		<div class="excerpt">
			<p class="body-2">{project.excerpt}</p>
		</div>
		<div class="tags">
			{#each project.tags as tag}
				<button type="button" class="link tag-small bold" on:click={(e) => handleTagClick(e, tag)}>
					{tag}
				</button>
			{/each}
		</div>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		width: 100%;
		cursor: pointer;
		text-decoration: none;
		color: var(--black);
	}

	.card:hover {
		img {
			transform: scale(1.1);
		}
	}

	.image-container {
		width: 100%;
		aspect-ratio: 1/1;
		overflow: hidden;
	}

	.card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.2s ease-in-out;
	}

	.card-text {
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: var(--padding-default);
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
