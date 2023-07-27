<script lang="ts">
	import { assets } from '$app/paths';

	export let title = 'Catppuccin';
	export let description = 'Soothing pastel theme for the high-spirited!';
</script>

<svelte:head>
	<title>{title}{title === 'Catppuccin' ? '' : ' · Catppuccin'}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Catppuccin" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@catppuccin" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta property="og:image" content="https://catppuccin.ryanccn.dev/icon.png" />
	<meta name="twitter:image" content="https://catppuccin.ryanccn.dev/icon.png" />
</svelte:head>
