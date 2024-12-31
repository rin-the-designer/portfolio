<script>
	import Card from './Card.svelte';
</script>

<h1>Hello World</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Card />

<style>
	::selection {
		background-color: var(--main-color);
		color: white;
	}
</style>
