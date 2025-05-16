<script lang="ts">
	import { projects } from '$lib/ProjectData';
	import type { Project } from '$lib/types';

	const project = projects.find((p) => p.slug === 'teasign');

	if (!project) {
		throw new Error('Project not found');
	}
</script>

<div class="project-content">
	<main>
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
	.project-content {
		display: flex;
		flex-direction: column;
		padding: 2rem 0;
	}

	:global(.project-content ::selection) {
		background-color: var(--accent-color);
		color: var(--black);
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
