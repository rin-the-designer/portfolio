<script lang="ts">
	interface TitleAreaProps {
		title: string;
		image: string;
	}

	export let titleArea: TitleAreaProps;
</script>

<div class="title-area">
	<h1>{titleArea.title}</h1>
</div>

<style>
</style>
