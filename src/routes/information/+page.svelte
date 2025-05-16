<script lang="ts">
	import AboutList from '../../components/AboutList.svelte';
	let { data } = $props();
</script>

<AboutList
	educations={data.educations}
	experiences={data.experiences}
	activities={data.activities}
	awards={data.awards}
/>
