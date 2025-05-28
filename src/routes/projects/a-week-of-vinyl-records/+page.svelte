<script lang="ts">
	let { data } = $props<{ data: { project: any } }>();
	const { project } = data;

	import { onMount } from 'svelte';
	import { initializeFlipbook } from '$lib/utils/dflip';

	onMount(async () => {
		try {
			// Now you only need to pass the PDF file - all Material Symbols defaults are built-in!
			await initializeFlipbook('flipbook', '/files/A-Week-of-Vinyl-Records.pdf');
		} catch (error) {
			console.error('Failed to initialize flipbook:', error);
		}
	});
</script>

<div class="project-content color-{project.slug}">
	<main>
		<div class="book-preview">
			<div id="flipbook"></div>
		</div>
		<section class="section">
			<h2>Overview</h2>
			<p>{project.intro}</p>
		</section>

		<section class="section">
			<h2>Process</h2>
			<!-- Add project-specific process content here -->
		</section>

		<section class="section">
			<h2>Outcome</h2>
			<!-- Add project-specific outcome content here -->
		</section>
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

	.project-content {
		display: flex;
		flex-direction: column;
		padding: 2rem 0;
	}

	.book-preview {
		height: 800px;
		width: 100%;
	}

	.section {
		margin-bottom: 4rem;
		padding: 0 var(--padding-default);
	}

	h2 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
</style>
