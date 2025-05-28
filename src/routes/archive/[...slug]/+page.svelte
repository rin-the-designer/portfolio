<script lang="ts">
	import ArchiveOverview from '$lib/components/ArchiveOverview.svelte';
	import type { PageData } from './$types';
	import type { Archive } from '$lib/data/types';

	export let data: PageData;
	export const prerender = true;
	export const trailingSlash = 'never';

	$: ({ item } = data);
</script>

<ArchiveOverview archive={item} />
