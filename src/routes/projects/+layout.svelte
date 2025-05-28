<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import ProjectOverview from '$lib/components/ProjectOverview.svelte';
	import type { Project } from '$lib/data/types';
	import { onMount } from 'svelte';
	import jQuery from 'jquery';
	import 'jquery';

	// Add type annotation for data with optional project
	interface LayoutData {
		project?: Project;
	}

	let { data, children } = $props<{ data: LayoutData }>();
	// Only assign project when it exists
	const project = data.project;

	const showHeader = derived(page, ($page) => $page.url.pathname !== '/projects');

	// Make jQuery available globally
	onMount(() => {
		window.jQuery = jQuery;
		window.$ = jQuery;

		// Load dflip CSS only once
		if (!document.querySelector('link[href="/dflip/css/dflip.min.css"]')) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = '/dflip/css/dflip.min.css';
			document.head.appendChild(link);
		}

		// Load dflip JS only once
		if (!document.querySelector('script[src="/dflip/js/dflip.min.js"]')) {
			const script = document.createElement('script');
			script.src = '/dflip/js/dflip.min.js';
			document.head.appendChild(script);
		}
	});
</script>

{#if $showHeader && data.project}
	<ProjectOverview project={data.project} />
{/if}

{@render children()}
