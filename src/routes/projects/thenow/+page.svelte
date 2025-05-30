<script lang="ts">
	let { data } = $props<{ data: { project: any } }>();
	const { project } = data;

	import { onMount } from 'svelte';
	import { initializeFlipbook } from '$lib/utils/dflip';

	onMount(async () => {
		try {
			// Now you only need to pass the PDF file - all Material Symbols defaults are built-in!
			await initializeFlipbook('flipbook', '/files/THENOW.pdf');
		} catch (error) {
			console.error('Failed to initialize flipbook:', error);
		}
	});
</script>

<div class="project project-content color-{project.slug}">
	<main>
		<section>
			<div class="grid-col-2 border-bottom-1">
				<figure class="container-element padding-default">
					<img src="/img/projects/thenow/thenow-01.png" alt="Front and back cover of THENOW" />
					<figcaption class="body-3">Front and back cover</figcaption>
				</figure>
				<figure class="container-element padding-default">
					<img
						src="/img/projects/thenow/thenow-02.png"
						alt="Inner spread, pages 4 and 5, of THENOW"
					/>
					<figcaption class="body-3">Inner spread (p4-p5)</figcaption>
				</figure>
			</div>
			<div class="grid-col-2 border-bottom-1">
				<figure class="container-element padding-default">
					<img
						src="/img/projects/thenow/thenow-03.png"
						alt="Inner spread, pages 6 and 7, of THENOW"
					/>
					<figcaption class="body-3">Inner spread (p6-p7)</figcaption>
				</figure>
				<figure class="container-element padding-default">
					<img
						src="/img/projects/thenow/thenow-04.png"
						alt="Inner spread, pages 8 and 9, of THENOW"
					/>
					<figcaption class="body-3">Inner spread (p8-p9)</figcaption>
				</figure>
			</div>
		</section>
		<section>
			<div class="container-element padding-default" style="background-color: #f8f8f8">
				<p class="subtitle-1 semibold">PDF Preview</p>
			</div>
			<div class="book-preview">
				<div id="flipbook"></div>
			</div>
		</section>
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

	.project-content {
		display: flex;
		flex-direction: column;
	}

	.book-preview {
		height: 800px;
		width: 100%;
	}

	h2 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	@media (max-width: 768px) {
		.book-preview {
			height: 500px;
		}
	}
</style>
