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

<div class="project project-content color-{project.slug}">
	<main>
		<section>
			<div class="grid-col-2 border-bottom-1">
				<figure class="container-element padding-default">
					<img
						src="/img/projects/a-week-of-vinyl-records/awov-01.jpg"
						alt="Front and back cover of A Week of Vinyl Records"
					/>
					<figcaption class="body-3">Front and back cover</figcaption>
				</figure>
				<figure class="container-element padding-default">
					<img
						src="/img/projects/a-week-of-vinyl-records/awov-02.jpg"
						alt="Inner cover spread of A Week of Vinyl Records"
					/>
					<figcaption class="body-3">Inner cover spread</figcaption>
				</figure>
			</div>
			<div class="grid-col-2 border-bottom-1">
				<figure class="container-element padding-default">
					<img
						src="/img/projects/a-week-of-vinyl-records/awov-03.jpg"
						alt="Inner spread, pages 12 and 13, of A Week of Vinyl Records"
					/>
					<figcaption class="body-3">Inner spread (p12-p13)</figcaption>
				</figure>
				<figure class="container-element padding-default">
					<img
						src="/img/projects/a-week-of-vinyl-records/awov-04.jpg"
						alt="Inner spread, pages 14 and 15, of A Week of Vinyl Records"
					/>
					<figcaption class="body-3">Inner spread (p14-p15)</figcaption>
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
