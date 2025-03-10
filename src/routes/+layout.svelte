<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Rinchong (Rin) Kim</title>
	<meta
		name="description"
		content="Rinchong (Rin) Kim is a Korean designer based in New York, interested in how people interact with digital products. He is passionate about learning new technologies and finding ways to make design more intuitive, inclusive, and interactive."
	/>
	<meta property="og:image" content="/og.png" />
	<meta name="author" content="Rinchong (Rin) Kim" />
	<meta name="keywords" content="Rin Kim, Rinchong Kim, portfolio, design, art, creative" />
</svelte:head>

<Header />
{@render children()}
<Footer />
