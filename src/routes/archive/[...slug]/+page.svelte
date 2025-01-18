<script lang="ts">
	import TitleArea from '../../../components/TitleArea.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export const prerender = true;
	export const trailingSlash = 'never';

	$: ({ item } = data);
</script>

<TitleArea {item} />
