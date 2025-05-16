<script lang="ts">
	import TitleArea from '$lib/components/ArchiveTitleArea.svelte';
	import type { PageData } from './$types';
	import type { Archive } from '$lib/data/types';

	export let data: PageData;
	export const prerender = true;
	export const trailingSlash = 'never';

	$: ({ item } = data);
</script>

<TitleArea archive={item} />
