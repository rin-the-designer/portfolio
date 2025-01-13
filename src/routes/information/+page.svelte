<script lang="ts">
	import AboutList from '../../components/AboutList.svelte';
	let { data } = $props();
</script>

<AboutList
	educations={data.educationData}
	experiences={data.experienceData}
	activities={data.activitiesData}
	awards={data.awardsData}
/>
