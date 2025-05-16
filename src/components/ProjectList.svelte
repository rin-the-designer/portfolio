<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Project } from '$lib/types';
	const dispatch = createEventDispatcher();

	export let project: Project;
</script>

<div class="list-item">
	<div class="list-content">
		<h1>{project.title}</h1>
		<div class="excerpt">
			<p>{project.excerpt}</p>
		</div>
		<div class="tags">
			{#each project.tags as tag}
				<button type="button" class="tag" on:click={() => dispatch('tagSelect', tag)}>
					{tag}
				</button>
			{/each}
		</div>
		<div class="date">
			<p>{project.date.year}</p>
		</div>
	</div>
</div>

<style>
	.list-item {
		width: 100%;
		background-color: white;
		padding: 0.5rem;
	}

	.list-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
		flex: 1;
	}

	.list-content h1 {
		font-weight: 600;
		font-size: 1rem;
		width: 25%;
	}

	.excerpt {
		width: 40%;
	}

	.excerpt p {
		font-weight: 400;
		font-size: 1rem;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 0;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		width: 25%;
		align-items: center;
	}

	.tags .tag {
		font-weight: 700;
		text-decoration: underline;
		font-size: 0.75rem;
		color: var(--black);
		transition: all 0.2s ease-in-out;
		border: none;
		background: none;
		padding: 0;
		cursor: pointer;
	}

	.tags .tag:hover {
		background-color: var(--main-color);
		color: white;
		cursor: pointer;
	}

	.date {
		width: 10%;
		text-align: right;
	}

	@media (max-width: 768px) {
		.list-content {
			flex-direction: column;
			gap: 0.5rem;
		}

		.list-content h1 {
			width: 100%;
		}

		.excerpt {
			width: 100%;
		}

		.tags {
			width: 100%;
		}

		.date {
			width: 100%;
			text-align: left;
		}
	}
</style>
