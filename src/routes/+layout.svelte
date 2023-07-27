<script lang="ts">
	import '../app.postcss';
	import { browser } from '$app/environment';

	import { Palette, Ship, HeartHandshake } from 'lucide-svelte';
	import Icon from './Icon.svelte';

	import { onMount } from 'svelte';
	import GitHub from '../icons/GitHub.svelte';
	import Discord from '../icons/Discord.svelte';
	import Twitter from '../icons/Twitter.svelte';
	import Mastodon from '../icons/Mastodon.svelte';
	import Reddit from '../icons/Reddit.svelte';

	const links = [
		{
			name: 'Ports',
			href: '/ports',
			icon: Ship
		},
		{
			name: 'Palette',
			href: '/palette',
			icon: Palette
		},
		{
			name: 'Donate',
			href: 'https://opencollective.com/catppuccin',
			icon: HeartHandshake
		}
	] satisfies { name: string; href: string; icon: unknown }[];

	let flavorLocal = '';

	onMount(() => {
		flavorLocal = window.flavorGlobal.value;
	});

	$: {
		if (browser && ['latte', 'frappe', 'macchiato', 'mocha'].includes(flavorLocal)) {
			window.flavorGlobal.value = flavorLocal;
		}
	}
</script>

<nav class="flex flex-col items-start gap-y-8 md:flex-row md:justify-between md:items-center mb-16">
	<a class="flex flex-row items-center gap-x-2" href="/">
		<Icon />
		<h1 class="text-lg font-bold">Catppuccin</h1>
	</a>

	<div class="flex flex-col items-start md:flex-row md:items-center gap-4">
		{#each links as link}
			<a class="md:p-2 flex flex-row items-center gap-x-2" href={link.href}>
				<svelte:component this={link.icon} class="block w-4 h-4" />
				<span class="text-base font-medium">{link.name}</span>
			</a>
		{/each}
	</div>
</nav>

<main>
	<slot />
</main>

<footer class="mt-36 flex flex-col gap-y-4">
	<div class="flex flex-wrap items-center gap-x-3 fill-ctp-text">
		<a href="https://github.com/catppuccin"><GitHub class="block w-5 h-5" /></a>
		<a href="https://discord.com/servers/907385605422448742"><Discord class="block w-5 h-5" /></a>
		<a href="https://twitter.com/catppuccintheme"><Twitter class="block w-5 h-5" /></a>
		<a href="https://fosstodon.org/@catppuccin"><Mastodon class="block w-5 h-5" /></a>
		<a href="https://reddit.com/r/catppuccin"><Reddit class="block w-5 h-5" /></a>
	</div>

	<div class="flex flex-wrap items-baseline gap-x-2">
		<button
			class={'font-medium text-sm ' +
				(flavorLocal === 'latte' ? 'text-ctp-blue' : 'text-ctp-subtext1 hover:text-ctp-subtext0')}
			on:click={() => {
				flavorLocal = 'latte';
			}}
		>
			Latte
		</button>
		<button
			class={'font-medium text-sm ' +
				(flavorLocal === 'frappe' ? 'text-ctp-blue' : 'text-ctp-subtext1 hover:text-ctp-subtext0')}
			on:click={() => {
				flavorLocal = 'frappe';
			}}
		>
			Frappé
		</button>
		<button
			class={'font-medium text-sm ' +
				(flavorLocal === 'macchiato'
					? 'text-ctp-blue'
					: 'text-ctp-subtext1 hover:text-ctp-subtext0')}
			on:click={() => {
				flavorLocal = 'macchiato';
			}}
		>
			Macchiato
		</button>
		<button
			class={'font-medium text-sm ' +
				(flavorLocal === 'mocha' ? 'text-ctp-blue' : 'text-ctp-subtext1 hover:text-ctp-subtext0')}
			on:click={() => {
				flavorLocal = 'mocha';
			}}
		>
			Mocha
		</button>
	</div>

	<p class="text-sm text-ctp-surface2">&copy; Catppuccin 2023</p>
</footer>
