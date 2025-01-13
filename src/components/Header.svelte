<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="header">
	<div class="logo">
		<a href="/">rinchong<span>.</span>kim</a>
	</div>
	<div class="menu">
		<a href="/projects" class:active={$page.url.pathname === '/projects'}>Projects</a>
		<a href="/information" class:active={$page.url.pathname === '/information'}>Information</a>
		<a href="/archive" class="last" class:active={$page.url.pathname === '/archive'}>Archive</a>
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		width: 100%;
		border-bottom: 2px solid var(--black);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header .logo {
		padding: 0.5rem;
		font-weight: 700;
		transition: color 0.2s ease-in-out;
	}

	.header .logo:hover {
		color: var(--main-color);
	}

	.header .logo a {
		font-size: 1.25rem;
	}

	.header .logo span {
		color: var(--main-color);
	}

	.header .menu {
		display: flex;
		height: 100%;
		gap: 0.5rem;
		padding-right: 0.5rem;
	}

	.header .menu a {
		height: 100%;
		font-size: 1.25rem;
		line-height: 1.25rem;
		transition: background-color 0.2s ease-in-out;
	}

	.header .menu a.last {
		border-right: none;
	}

	.header .menu a:not(.active):hover {
		background-color: var(--main-color);
		color: white;
	}

	.header .menu a.active {
		background-color: var(--main-color);
		color: white;
		pointer-events: none;
	}
</style>
