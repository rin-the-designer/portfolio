<script>
	const projects = [
		{
			title: 'Pick and Play',
			folder: 'pick-and-play'
		},
		{
			title: 'Career Dive',
			folder: 'career-dive'
		},
		{
			title: 'Dacon',
			folder: 'dacon'
		},
		{
			title: 'Hwanghak Casual',
			folder: 'hwanghak-casual'
		},
		{
			title: 'Hwanghak Casual',
			folder: 'hwanghak-casual'
		}
	];

	// Calculate total grid spaces based on viewport width
	let totalSpaces = 2; // Default to mobile layout

	function updateTotalSpaces() {
		const width = window.innerWidth;
		if (width >= 1024) return 4; // Desktop
		if (width >= 768) return 3; // Tablet
		return 2; // Mobile
	}

	// Set initial value
	totalSpaces = updateTotalSpaces();
</script>

<svelte:window on:resize={() => (totalSpaces = updateTotalSpaces())} />

<div class="card-container">
	{#each projects as project}
		<div class="card">
			<img src="/src/img/{project.folder}/thumbnail.png" alt="{project.title} Thumbnail" />
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

	::selection {
		background-color: var(--main-color);
		color: white;
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
