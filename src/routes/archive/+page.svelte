<script lang="ts">
	import ArchiveCard from '../../components/ArchiveCard.svelte';
	import { onMount } from 'svelte';
	let { data } = $props();

	// Function to shuffle array
	function shuffleArray<T>(array: T[]): T[] {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	// Combine and shuffle all items on mount
	type Item = { title: string; thumbnail: string };
	let allItems = $state<Item[]>([]);
	onMount(() => {
		allItems = shuffleArray([
			...data.photographyData,
			...data.posterData,
			...data.logoData,
			...data.codingData
		]);
	});

	// Get unique categories based on the data type
	let allCategories = ['All', 'Photography', 'Poster', 'Logo', 'Coding'];
	let selectedCategory = $state('All');

	// Filter items based on selected category
	let filteredItems = $derived(
		selectedCategory === 'All'
			? allItems
			: allItems.filter((item) => {
					if (selectedCategory === 'Photography')
						return data.photographyData.some((p) => p.title === item.title);
					if (selectedCategory === 'Poster')
						return data.posterData.some((p) => p.title === item.title);
					if (selectedCategory === 'Logo') return data.logoData.some((p) => p.title === item.title);
					if (selectedCategory === 'Coding')
						return data.codingData.some((p) => p.title === item.title);
					return false;
				})
	);

	// Calculate number of columns based on viewport width
	let columns = $state(6); // Default to desktop layout

	// Move window check to onMount and update columns
	onMount(() => {
		const updateColumns = () => {
			columns =
				window.innerWidth >= 1024
					? 6
					: window.innerWidth >= 768
						? 5
						: window.innerWidth >= 480
							? 4
							: 3;
		};

		updateColumns();
		window.addEventListener('resize', updateColumns);
		return () => window.removeEventListener('resize', updateColumns);
	});

	// Calculate number of empty cards needed to fill last row
	let emptyCards = $derived(() => {
		const remainder = filteredItems.length % columns;
		return remainder === 0 ? 0 : columns - remainder;
	});
</script>

<div class="filter-container">
	<div class="filters">
		{#each allCategories as category}
			<button
				class="filter-tag"
				class:active={selectedCategory === category}
				onclick={() => (selectedCategory = category)}
			>
				{category}
			</button>
		{/each}
	</div>
</div>

<div class="archive-container">
	{#each filteredItems as item}
		<ArchiveCard {item} />
	{/each}
	{#if emptyCards() > 0}
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

	.archive-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
		background-color: var(--black);
	}

	/* Large Mobile: 2 columns */
	@media (min-width: 480px) {
		.archive-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	/* Tablet: 4 columns */
	@media (min-width: 768px) {
		.archive-container {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	/* Desktop: 6 columns */
	@media (min-width: 1024px) {
		.archive-container {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	.empty-card {
		background-color: white;
	}
</style>
