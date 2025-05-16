<script lang="ts">
	import TitleArea from '../../../components/ArchiveTitleArea.svelte';
	import type { PageData } from './$types';
	import type { Archive } from '$lib/types';

	export let data: PageData;
	export const prerender = true;
	export const trailingSlash = 'never';

	$: ({ item } = data);
</script>

<TitleArea archive={item} />
