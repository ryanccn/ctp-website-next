<script lang="ts">
	import '../app.postcss';
	import { assets } from '$app/paths';
	import { browser } from '$app/environment';

	import { Palette, Ship, HeartHandshake } from 'lucide-svelte';
	import { onMount } from 'svelte';

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

<div class="pt-12 pb-36 px-6 max-w-[90ch] mx-auto">
	<nav
		class="flex flex-col items-start gap-y-4 md:flex-row md:justify-between md:items-center mb-16"
	>
		<a class="flex flex-row items-center gap-x-2" href="/">
			<img src={`${assets}/icon.png`} alt="Catppuccin icon" width="32" height="32" />
			<h1 class="text-lg font-bold">Catppuccin</h1>
		</a>

		<div class="flex flex-col items-start md:flex-row md:items-center gap-4">
			{#each links as link}
				<a class="p-2 flex flex-row items-center gap-x-2" href={link.href}>
					<svelte:component this={link.icon} class="block w-4 h-4" />
					<span class="text-base font-medium">{link.name}</span>
				</a>
			{/each}
		</div>
	</nav>

	<main>
		<slot />
	</main>

	<footer class="mt-36 flex flex-col gap-y-2">
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
					(flavorLocal === 'frappe'
						? 'text-ctp-blue'
						: 'text-ctp-subtext1 hover:text-ctp-subtext0')}
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
</div>
