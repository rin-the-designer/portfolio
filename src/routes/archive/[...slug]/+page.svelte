<script lang="ts">
	import TitleArea from '../../../components/TitleArea.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ item } = data);
</script>

<TitleArea {item} />
