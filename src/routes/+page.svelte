<script lang="ts">
	import Card from '../components/Card.svelte';
	let { data } = $props();
</script>

<h1>Hello World</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
	{#each data.summaries as { title, slug, thumbnail }}
		<li>
			<a href={thumbnail}>{title}, {slug}, {thumbnail}</a>
		</li>
	{/each}
</ul>

<Card projects={data.summaries} />
