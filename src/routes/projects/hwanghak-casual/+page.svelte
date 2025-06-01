<script lang="ts">
	let { data } = $props<{ data: { project: any } }>();
	const { project } = data;
</script>

<div class="project-content color-{project.slug}">
	<main>
		<section class="section">
			<h2>Overview</h2>
			<p>{project.intro}</p>
		</section>

		<section class="section">
			<h2>Process</h2>
			<!-- Add project-specific process content here -->
		</section>

		<section class="section">
			<h2 class="hh-text-eng">Outcome</h2>
			<!-- Add project-specific outcome content here -->
		</section>
	</main>
</div>

<style>
	.project-content {
		display: flex;
		flex-direction: column;
		padding: 2rem 0;
	}

	:global(.color-hwanghak-casual ::selection) {
		background-color: #ffb800 !important;
		color: var(--black) !important;
	}

	.section {
		margin-bottom: 4rem;
		padding: 0 var(--padding-default);
	}

	h2 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.hh-text-eng {
		font-family: owners-wide, sans-serif;
		font-weight: 700;
		font-style: normal;
	}
</style>
