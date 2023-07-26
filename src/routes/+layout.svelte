<script lang="ts">
	import '../app.postcss';
	import { assets } from '$app/paths';
	import { Palette, Ship, HeartHandshake } from 'lucide-svelte';

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
</script>

<div class="pt-12 pb-36 px-6 max-w-[90ch] mx-auto">
	<nav class="flex flex-row justify-between items-center mb-16">
		<a class="flex flex-row items-center gap-x-2" href="/">
			<img src={`${assets}/icon.png`} alt="Catppuccin icon" width="32" height="32" />
			<h1 class="text-lg font-bold">Catppuccin</h1>
		</a>
		<div class="flex flex-row items-center gap-x-4">
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
</div>
