<script>
	import Card from '../../components/Card.svelte';
	import { onMount } from 'svelte';
	let { data } = $props();

	// Get unique tags from all projects
	let allTags = ['All', ...new Set(data.summaries.flatMap((project) => project.tags))];
	let selectedTag = $state('All');
	// Filter projects based on selected tag
	let filteredProjects = $derived(
		selectedTag === 'All'
			? data.summaries
			: data.summaries.filter((project) => project.tags.includes(selectedTag))
	);

	// Calculate number of columns based on viewport width
	let columns = $state(4); // Default to desktop layout

	// Move window check to onMount
	onMount(() => {
		const updateColumns = () => {
			columns =
				window.innerWidth >= 1024
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
</script>

<div class="filter-container">
	{#each allTags as tag}
		<button
			class="filter-tag"
			class:active={selectedTag === tag}
			onclick={() => (selectedTag = tag)}
		>
			{tag}
		</button>
	{/each}
</div>

<div class="card-container">
	{#each filteredProjects as project (project.slug)}
		<Card {project} on:tagSelect={(event) => (selectedTag = event.detail)} />
	{/each}
	{#if emptyCards() > 0}
		<div class="empty-card" style="grid-column: span {emptyCards()}"></div>
	{/if}
</div>

<style>
	.filter-container {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		padding: 0.875rem 0.5rem;
		position: sticky;
		top: 3rem;
		z-index: 100;
		background-color: white;
	}

	.filter-tag {
		border: none;
		background: none;
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

	.card-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 2px;
		background-color: var(--black);
		padding: 2px 0;
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

	.empty-card {
		background-color: white;
	}
</style>
