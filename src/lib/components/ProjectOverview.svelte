<script lang="ts">
	import type { Project } from '$lib/data/types';

	export let project: Project;
</script>

<div class="project">
	<div class="overview color-{project.slug}">
		<div class="image">
			<img src={project.coverimg} alt="{project.title} thumbnail" />
		</div>
		<div class="container-element border-bottom padding-default">
			<h1 class="header-4 semibold">{project.title}</h1>
			<div class="date body-1">
				{project.date.year}/{project.date.month.toString().padStart(2, '0')}
			</div>
			<div class="tags">
				{#each project.tags as tag}
					<span class="tag tag-large semibold link">{tag}</span>
				{/each}
			</div>
		</div>
		<div class="data">
			<div class="container-element border-bottom">
				{#if project.projectType === 'Individual'}
					<div class="metadata grid-2">
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Project Type</p>
							<div class="project-type body-1">{project.projectType}</div>
						</div>
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Tools</p>
							<div class="container-metadata">
								{#each project.tools as tool}
									<div class="body-1">{tool}</div>
								{/each}
							</div>
						</div>
					</div>
				{:else if project.projectType === 'Team'}
					<div class="metadata grid-4">
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Project Type</p>
							<div class="project-type body-1">{project.projectType}</div>
						</div>
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Role</p>
							<div class="container-metadata">
								{#each project.roles as role}
									<div class="body-1">{role}</div>
								{/each}
							</div>
						</div>
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Tools</p>
							<div class="container-metadata">
								{#each project.tools as tool}
									<div class="body-1">{tool}</div>
								{/each}
							</div>
						</div>
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Team</p>
							<div class="container-metadata">
								{#each project.team as member}
									<div class="container-metadata body-1">
										{#if member.portfolio}
											<a
												class="link"
												href={member.portfolio}
												target="_blank"
												rel="noopener noreferrer"
												>{member.name}
											</a>
										{:else}
											{member.name}
										{/if}
										{#if member.role}
											<span class="member-role">({member.role})</span>
										{/if}
									</div>
								{/each}
							</div>
						</div>
					</div>
				{:else if project.projectType === 'Work'}
					<div class="metadata grid-4">
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Project Type</p>
							<div class="project-type body-1">{project.projectType}</div>
						</div>
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Role</p>
							<div class="container-metadata">
								{#each project.roles as role}
									<div class="body-1">{role}</div>
								{/each}
							</div>
						</div>
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Tools</p>
							<div class="container-metadata">
								{#each project.tools as tool}
									<div class="body-1">{tool}</div>
								{/each}
							</div>
						</div>
						<div class="container-element padding-default">
							<p class="subtitle-1 semibold">Company</p>
							<div class="container-metadata">
								<div class="body-1">
									{#if project.company?.link}
										<a
											class="link"
											href={project.company.link}
											target="_blank"
											rel="noopener noreferrer">{project.company.name}</a
										>
									{:else}
										{project.company.name}
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
			<div class="container-element padding-default border-bottom">
				<div class="subtitle-1 semibold">Overview</div>
				<p class="body-1">{project.intro}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.overview {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.overview .image {
		width: 100%;
		aspect-ratio: 16/6;
		overflow: hidden;
		border-bottom: 2px solid var(--black);
	}

	.overview .image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.container-element {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: var(--white);
		width: 100%;
		height: 100%;
	}

	.container-metadata {
		display: flex;
		flex-direction: column;
		align-self: flex-start;
	}

	.overview .data {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		align-items: center;
		background-color: var(--black);
	}

	.metadata {
		display: grid;
		gap: 2px;
		background-color: var(--black);
		height: 100%;
	}

	.grid-2 {
		grid-template-columns: 1fr 1fr;
	}

	.grid-4 {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media (max-width: 1024px) {
		.grid-4 {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}

	/* .metadata .member-role {
		color: var(--gray-600);
	} */

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

		.overview .data {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 0;
		}
	}
</style>
