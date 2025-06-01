<script lang="ts">
	let { data } = $props<{ data: { project: any } }>();
	const { project } = data;
	import { onMount } from 'svelte';
</script>

<div class="project project-content color-{project.slug}">
	<main>
		<section>
			<div class="grid-col-2 border-bottom-1">
				<figure class="container-element padding-default">
					<img
						src="/img/projects/bauhaus-100/bauhaus-concept-01.jpg"
						alt="Front of the concept Bauhaus 100th anniversary exhibition poster"
					/>
					<figcaption class="body-3">Front</figcaption>
				</figure>
				<figure class="container-element padding-default">
					<img
						src="/img/projects/bauhaus-100/bauhaus-concept-02.jpg"
						alt="Back of the concept Bauhaus 100th anniversary exhibition poster"
					/>
					<figcaption class="body-3">Back (Fyler)</figcaption>
				</figure>
			</div>
			<div class="grid-col-2 border-bottom-1">
				<figure class="container-element padding-default">
					<img
						src="/img/projects/bauhaus-100/bauhaus-concept-03.jpg"
						alt="Mock up of the poster on a gallery building"
					/>
					<figcaption class="body-3">Mock up (Gallery)</figcaption>
				</figure>
				<figure class="container-element padding-default">
					<img
						src="/img/projects/bauhaus-100/bauhaus-concept-04.jpg"
						alt="Mock up of the poster in an open public space"
					/>
					<figcaption class="body-3">Mock up (Public space)</figcaption>
				</figure>
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
