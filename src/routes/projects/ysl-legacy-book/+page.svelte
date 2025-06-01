<script lang="ts">
	let { data } = $props<{ data: { project: any } }>();
	const { project } = data;

	import { onMount } from 'svelte';
	import { initializeFlipbook } from '$lib/utils/dflip';

	onMount(async () => {
		try {
			// Now you only need to pass the PDF file - all Material Symbols defaults are built-in!
			await initializeFlipbook('flipbook', '/files/YSL-Legacy-Book.pdf');
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
						src="/img/projects/ysl-legacy-book/ysl-01.jpg"
						alt="Front cover and inner spread, pages 16 and 17, of YSL Legacy Book"
					/>
					<figcaption class="body-3">Front cover and inner spread (p16-p17)</figcaption>
				</figure>
				<div class="container-element padding-default">
					<p class="subtitle-1 semibold">Details</p>
					<p class="body-1">
						The book is divided into two chapters: "The Chronicles" and "The Biographies." "The
						Chronicles" explores the three main phases of Yves Saint Laurent's life, while "The
						Biographies" provides a more detailed, year-by-year account.
					</p>
					<p class="body-1">
						All text is set in a single serif typeface, Sabon LT Pro, reflecting the designer's
						aesthetic and the brand's identity. The entire book is presented in grayscale.
					</p>
				</div>
			</div>
			<div class="grid-col-2 border-bottom-1">
				<figure class="container-element padding-default">
					<img
						src="/img/projects/ysl-legacy-book/ysl-02.jpg"
						alt="Inner spread, pages 14 and 15, of YSL Legacy Book"
					/>
					<figcaption class="body-3">Inner spread (p14-p15)</figcaption>
				</figure>
				<figure class="container-element padding-default">
					<img
						src="/img/projects/ysl-legacy-book/ysl-03.jpg"
						alt="Inner spread, pages 32 and 33, of YSL Legacy Book"
					/>
					<figcaption class="body-3">Inner spread (p32-p33)</figcaption>
				</figure>
			</div>
			<div class="grid-col-2 border-bottom-1">
				<div class="container-element padding-default">
					<p class="subtitle-1 semibold">Layout</p>
					<p class="body-1">
						The book comprises 108 pages in a landscape A4 format (297mm x 210mm). All content is
						presented in both English and French. In "The Chronicles," English and French texts
						appear side by side on each page, while in "The Biographies," the two languages are
						separated by the page spread.
					</p>
					<p class="body-1">
						There are four main layout types used throughout the book—chapter title, "The
						Chronicles" content, quote, and "The Biographies" content—ensuring a consistent design
						from start to finish.
					</p>
				</div>
				<figure class="container-element padding-default">
					<img
						src="/img/projects/ysl-legacy-book/ysl-04.jpg"
						alt="Inner spread, pages 46 and 47, of YSL Legacy Book"
					/>
					<figcaption class="body-3">Inner spread (p46-p47)</figcaption>
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
