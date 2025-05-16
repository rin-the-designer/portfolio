<script lang="ts">
	import type { Project } from '$lib/data/types';

	export let project: Project;
</script>

<div class="header-content color-{project.slug}">
	<div class="header-image">
		<img src={project.coverimg} alt="{project.title} thumbnail" />
	</div>
	<div class="header-text">
		<div class="header-text-content">
			<h1 class="header-5">{project.title}</h1>
			<div class="metadata">
				<div class="date">{project.date.year}/{project.date.month.toString().padStart(2, '0')}</div>
				<div class="role">{project.role}</div>
			</div>
			<div class="tags">
				{#each project.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>
		<div class="header-text-content">
			<div class="subtitle-1">Overview</div>
			<p class="body-1">{project.intro}</p>
		</div>
	</div>
</div>

<style>
	/* .project-header {
		width: 100%;
		padding: 2rem 0;
		border-bottom: 2px solid var(--black);
	} */

	.header-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.header-text {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		align-items: center;
		background-color: var(--black);
	}

	.header-text-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: var(--white);
		padding: var(--padding-default);
		height: 100%;
		border-bottom: 2px solid var(--black);
	}

	.header-image {
		width: 100%;
		aspect-ratio: 16/6;
		overflow: hidden;
		border-bottom: 2px solid var(--black);
	}

	.header-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.metadata {
		display: flex;
		gap: 1rem;
		font-size: 1.25rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		font-size: 1rem;
		font-weight: 500;
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.header-content {
			flex-direction: column;
		}

		.header-image {
			width: 100%;
		}

		h1 {
			font-size: 2rem;
		}

		.metadata {
			font-size: 1rem;
		}
	}
</style>
