<script>
	import Card from '../../components/Card.svelte';
	let { data } = $props();
</script>

<Card projects={data.summaries} />
