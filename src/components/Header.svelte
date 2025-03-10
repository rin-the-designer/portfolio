<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	let isMenuOpen = false;

	// Close menu when route changes
	$: {
		$page.url.pathname;
		isMenuOpen = false;
	}
</script>

<div class="header">
	<div class="logo">
		<a href="/">rinchong<span>.</span>kim</a>
	</div>
	<div class="menu-container">
		<button
			class="menu-toggle"
			on:click={() => (isMenuOpen = !isMenuOpen)}
			aria-label="Toggle menu"
		>
			<img src="/menu-toggle.svg" alt="Menu toggle icon" class:open={isMenuOpen} />
		</button>
		<div class="menu desktop">
			<a href="/projects" class:active={$page.url.pathname === '/projects'}>Projects</a>
			<a href="/information" class:active={$page.url.pathname === '/information'}>Information</a>
			<a href="/archive" class="last" class:active={$page.url.pathname === '/archive'}>Archive</a>
		</div>
		{#if isMenuOpen}
			<div class="menu mobile" transition:slide={{ duration: 300 }}>
				<a href="/projects" class:active={$page.url.pathname === '/projects'}>Projects</a>
				<a href="/information" class:active={$page.url.pathname === '/information'}>Information</a>
				<a href="/archive" class="last" class:active={$page.url.pathname === '/archive'}>Archive</a>
			</div>
		{/if}
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
		gap: 1rem;
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

	.header .menu-container {
		display: flex;
		gap: 0.5rem;
	}

	.header .menu-container .menu-toggle {
		display: none;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}

	.header .menu-container .menu-toggle img {
		width: 18px;
		height: 18px;
		transition: transform 0.3s ease;
		transform-origin: center;
	}

	.header .menu-container .menu-toggle img.open {
		transform: rotate(-45deg);
	}

	.header .menu {
		display: flex;
		gap: 0.5rem;
		padding-right: 0.5rem;
	}

	.header .menu a {
		height: 100%;
		font-size: 1.25rem;
		line-height: 1.25rem;
		transition: all 0.2s ease-in-out;
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

	.header .menu.mobile {
		display: none;
	}

	@media (max-width: 480px) {
		.header {
			align-items: flex-start;
		}

		.header .menu-container {
			flex-direction: column;
			align-items: flex-end;
		}

		.header .menu-container .menu-toggle {
			display: block;
			padding: 0.875rem 0.5rem 0.875rem 0;
		}

		.header .menu.desktop {
			display: none;
		}

		.header .menu.mobile {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			align-items: flex-end;
			padding-bottom: 1rem;
		}
	}
</style>
