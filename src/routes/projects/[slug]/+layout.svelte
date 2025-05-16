<script lang="ts">
	import ProjectHeader from '../../../components/ProjectHeader.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { project } = data;
</script>

<ProjectHeader {project} />

<slot />
