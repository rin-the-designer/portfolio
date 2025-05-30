<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	let { data } = $props();

	// Get unique tags from all projects
	let allTags = ['All', ...new Set(data.projects.flatMap((project) => project.tags))];

	// Initialize selectedTag from URL parameter or default to 'All'
	let selectedTag = $state('All');

	// Filter projects based on selected tag
	let filteredProjects = $derived(
		selectedTag === 'All'
			? data.projects
			: data.projects.filter((project) => project.tags.includes(selectedTag))
	);

	// Calculate number of columns based on viewport width
	let columns = $state(4); // Default to desktop layout

	// Move window check to onMount
	onMount(() => {
		// Read URL parameter and set initial filter
		const urlParams = new URLSearchParams(window.location.search);
		const categoryParam = urlParams.get('category');
		if (categoryParam && allTags.includes(categoryParam)) {
			selectedTag = categoryParam;
		}

		const updateColumns = () => {
			columns =
				window.innerWidth >= 1920
					? 5
					: window.innerWidth >= 1024
						? 4
						: window.innerWidth >= 768
							? 3
							: window.innerWidth >= 480
								? 2
								: 1;
		};

		updateColumns();
		window.addEventListener('resize', updateColumns);
		return () => window.removeEventListener('resize', updateColumns);
	});

	// Calculate number of empty cards needed to fill last row
	let emptyCards = $derived(() => {
		const remainder = filteredProjects.length % columns;
		return remainder === 0 ? 0 : columns - remainder;
	});

	let isCardView = $state(true);

	// Function to update filter and URL
	async function updateFilter(tag: string) {
		selectedTag = tag;
		const url = new URL(window.location.href);
		if (tag === 'All') {
			url.searchParams.delete('category');
		} else {
			url.searchParams.set('category', tag);
		}
		await goto(url.toString(), { replaceState: true });
	}
</script>

<div class="filter-container">
	<div class="filters">
		{#each allTags as tag}
			<button
				class="filter-tag"
				class:active={selectedTag === tag}
				onclick={() => updateFilter(tag)}
			>
				{tag}
			</button>
		{/each}
	</div>
	<button class="view-button" onclick={() => (isCardView = !isCardView)}>
		{isCardView ? 'List ' : 'Card '}
	</button>
</div>

<div class={isCardView ? 'card-container' : 'list-container'}>
	{#each filteredProjects as project (project.slug)}
		{#if isCardView}
			<ProjectCard {project} on:tagSelect={(event) => updateFilter(event.detail)} />
		{:else}
			<ProjectList {project} on:tagSelect={(event) => updateFilter(event.detail)} />
		{/if}
	{/each}
	{#if isCardView && emptyCards() > 0}
		<div class="empty-card" style="grid-column: span {emptyCards()}"></div>
	{/if}
</div>

<style>
	.filter-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		position: sticky;
		top: 3rem;
		background-color: white;
		width: 100%;
		padding: 0.875rem var(--padding-default);
		border-bottom: 2px solid var(--black);
		gap: 1rem;
		z-index: 100;
	}

	.filters {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.filter-tag {
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 1.25rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.filter-tag:hover {
		background-color: var(--main-color);
		color: white;
	}

	.filter-tag.active {
		background-color: var(--main-color);
		color: white;
	}

	.view-button {
		font-weight: 400;
		font-size: 1.25rem;
		line-height: 1.25rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.view-button:hover {
		background-color: var(--main-color);
		color: white;
	}

	.card-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1px;
		background-color: var(--black);
	}

	/* Large Mobile: 2 columns */
	@media (min-width: 480px) {
		.card-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Tablet: 3 columns */
	@media (min-width: 768px) {
		.card-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* Desktop: 4 columns */
	@media (min-width: 1024px) {
		.card-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (min-width: 1920px) {
		.card-container {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	.empty-card {
		background-color: white;
	}

	.list-container {
		display: flex;
		flex-direction: column;
		gap: 1px;
		background-color: var(--black);
		min-height: calc(100vh - var(--header-height) - 50px);
	}
</style>
