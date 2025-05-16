<script lang="ts">
	import { projects } from '$lib/ProjectData';
	import type { Project } from '$lib/types';

	// Get the project data from ProjectData.ts
	const project = projects.find((p) => p.slug === 'loops');

	if (!project) {
		throw new Error('Project not found');
	}
</script>

<div class="project-loops">
	<main class="project-content">
		<section class="section">
			<h2>Overview</h2>
			<p>{project.intro}</p>
		</section>

		<section class="section">
			<h2>Process</h2>
			<!-- Your process content -->
		</section>

		<section class="section">
			<h2>Outcome</h2>
			<!-- Your outcome content -->
		</section>
	</main>
</div>

<style>
	.project-loops {
		display: flex;
		flex-direction: column;
	}

	:global(.project-loops ::selection) {
		background-color: #ff8800;
		color: var(--black);
	}

	.project-content {
		padding: 2rem 0;
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
