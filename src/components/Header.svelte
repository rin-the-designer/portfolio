<script lang="ts">
</script>

<div class="header">
	<div class="logo">
		<a href="/">rinchong<span>.</span>kim</a>
	</div>
	<div class="menu">
		<a href="/projects">Projects</a>
		<a href="/information">Information</a>
		<a href="/archive" class="last">Archive</a>
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		width: 100%;
		height: 3.5rem;
		border-bottom: 2px solid var(--black);
		border-top: 2px solid var(--black);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header .logo {
		padding: 0.5rem 0.5rem 1rem 0.5rem;
		line-height: 1.25rem;
		font-weight: 700;
		transition: color 0.3s ease-in-out;
	}

	.header .logo:hover {
		color: var(--main-color);
	}

	.header .logo a {
		font-size: 1.25rem;
	}

	.header .logo span {
		color: var(--main-color);
		font-size: 3rem;
		line-height: 1.25rem;
	}

	.header .menu {
		display: flex;
		border-left: 2px solid var(--black);
		height: 100%;
	}

	.header .menu a {
		height: 100%;
		line-height: 1.25rem;
		padding: 1rem 1rem;
		transition: background-color 0.3s ease-in-out;
		border-right: 2px solid var(--black);
	}

	.header .menu a.last {
		border-right: none;
	}

	.header .menu a:hover {
		background-color: var(--main-color);
	}
</style>
