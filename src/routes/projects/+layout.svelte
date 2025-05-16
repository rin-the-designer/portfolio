<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import ProjectHeader from '$lib/components/ProjectHeader.svelte';
	import type { Project } from '$lib/data/types';

	// Add type annotation for data with optional project
	interface LayoutData {
		project?: Project;
	}

	let { data, children } = $props<{ data: LayoutData }>();
	// Only assign project when it exists
	const project = data.project;

	const showHeader = derived(page, ($page) => $page.url.pathname !== '/projects');
</script>

{#if $showHeader && data.project}
	<ProjectHeader project={data.project} />
{/if}

{@render children()}
