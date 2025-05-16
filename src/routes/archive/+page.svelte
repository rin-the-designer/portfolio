<script lang="ts">
	import ArchiveCard from '$lib/components/ArchiveCard.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { Archive } from '$lib/data/types.js';
	import type { Category } from '$lib/data/ArchiveData';
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
	let allItems = $state<Archive[]>([]);
	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const categoryParam = urlParams.get('category');
		if (categoryParam && data.categories.includes(categoryParam as Category)) {
			selectedCategory = categoryParam;
		}

		allItems = shuffleArray(data.archiveItems);
	});

	// Get categories from data
	let allCategories = ['All', ...data.categories];
	let selectedCategory = $state('All');

	// Filter items based on selected category
	let filteredItems = $derived(
		selectedCategory === 'All'
			? allItems
			: allItems.filter((item) => item.tags.includes(selectedCategory as Category))
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
						? 4
						: window.innerWidth >= 480
							? 3
							: 2;
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

	// Update URL when category changes
	async function updateCategory(category: string) {
		selectedCategory = category;
		const url = new URL(window.location.href);
		if (category === 'All') {
			url.searchParams.delete('category');
		} else {
			url.searchParams.set('category', category);
		}
		await goto(url.toString(), { replaceState: true });
	}
</script>

<div class="filter-container">
	{#each allCategories as category}
		<button
			class="filter-tag"
			class:active={selectedCategory === category}
			onclick={() => updateCategory(category)}
		>
			{category}
		</button>
	{/each}
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
		overflow-x: auto;
		position: sticky;
		gap: 0.5rem;
		top: 3rem;
		background-color: white;
		width: 100%;
		padding: 0.875rem 0.5rem;
		border-bottom: 2px solid var(--black);
		z-index: 100;
	}

	.filter-container::-webkit-scrollbar {
		display: none;
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
		grid-template-columns: repeat(2, 1fr);
		gap: 2px;
		background-color: var(--black);
	}

	/* Large Mobile: 2 columns */
	@media (min-width: 480px) {
		.archive-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* Tablet: 4 columns */
	@media (min-width: 768px) {
		.archive-container {
			grid-template-columns: repeat(4, 1fr);
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
