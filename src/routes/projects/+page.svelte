<script>
	import ProjectCard from '../../components/ProjectCard.svelte';
	import ProjectList from '../../components/ProjectList.svelte';
	import { onMount } from 'svelte';
	let { data } = $props();

	// Get unique tags from all projects and count projects per tag
	let allTags = ['All', ...new Set(data.summaries.flatMap((project) => project.tags))];
	let selectedTag = $state('All');

	// Add this derived store to calculate counts
	let tagCounts = $derived(
		Object.fromEntries(
			allTags.map((tag) => [
				tag,
				tag === 'All'
					? data.summaries.length
					: data.summaries.filter((project) => project.tags.includes(tag)).length
			])
		)
	);

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

	let isCardView = $state(true);
</script>

<div class="filter-container">
	<div class="filters">
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
	<div class="sort-view">
		<button class="view-button" onclick={() => (isCardView = !isCardView)}>
			{isCardView ? 'List ' : 'Card '}
		</button>
	</div>
</div>

<div class={isCardView ? 'card-container' : 'list-container'}>
	{#each filteredProjects as project (project.slug)}
		{#if isCardView}
			<ProjectCard {project} on:tagSelect={(event) => (selectedTag = event.detail)} />
		{:else}
			<ProjectList {project} on:tagSelect={(event) => (selectedTag = event.detail)} />
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
		z-index: 100;
		background-color: white;
		width: 100%;
		padding: 0.875rem 0.5rem;
		border-bottom: 2px solid var(--black);
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
		gap: 2px;
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

	.empty-card {
		background-color: white;
	}

	.list-container {
		display: flex;
		flex-direction: column;
		gap: 1px;
		background-color: var(--black);
	}
</style>
