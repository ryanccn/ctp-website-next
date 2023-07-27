<script lang="ts">
	import { Code, Computer, Gamepad, MessageCircle, Search, Umbrella, Users } from 'lucide-svelte';

	export let data;

	const { ports, userstyles, portCategories } = data;

	let filteredPorts = ports;
	let filteredUserstyles = userstyles;
	let searchTerm = '';

	$: {
		filteredPorts = Object.fromEntries(
			Object.entries(ports).filter(([id, p]) => (p.name ?? id).toLowerCase().includes(searchTerm))
		);

		filteredUserstyles = Object.fromEntries(
			Object.entries(userstyles).filter(([id, p]) =>
				typeof p.name === 'string'
					? p.name.toLowerCase().includes(searchTerm)
					: p.name.map((k) => k.toLowerCase()).some((k) => k.includes(searchTerm))
			)
		);
	}
</script>

<!--
bg-ctp-rosewater bg-ctp-flamingo bg-ctp-pink bg-ctp-mauve bg-ctp-red bg-ctp-maroon
bg-ctp-peach bg-ctp-yellow bg-ctp-green bg-ctp-teal bg-ctp-sky bg-ctp-sapphire
bg-ctp-blue bg-ctp-lavender bg-ctp-text
-->

<h1 class="text-3xl font-extrabold tracking-tight mb-3">Ports</h1>
<p class="text-lg text-ctp-subtext1 font-medium tracking-tight mb-12">
	Catppuccin is available for various apps and in different formats.
</p>

<input
	type="text"
	class="px-3 py-2 rounded-lg bg-ctp-surface0 text-ctp-text mb-12 w-full placeholder:opacity-50 focus:outline-none focus:ring focus:ring-ctp-teal/40"
	placeholder="Search"
	aria-label="Search"
	bind:value={searchTerm}
/>

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
	{#each Object.entries(filteredPorts) as [id, port] (id)}
		<li>
			<a
				class={'p-4 rounded-lg flex flex-col gap-y-2 h-full ' +
					(port.color ? `bg-ctp-${port.color} bg-opacity-20` : 'bg-ctp-surface0')}
				href={`https://github.com/catppuccin/${id}`}
			>
				<span class="text-lg font-semibold leading-snug">{port.name}</span>

				{#if port.category}
					{@const category = portCategories.find((a) => a.key === port.category)}
					{#if category}
						<span class="text-sm font-medium text-ctp-subtext0">
							{category.emoji}
							{category.name}
						</span>
					{/if}
				{/if}
			</a>
		</li>
	{/each}
</ul>

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
	{#each Object.entries(filteredUserstyles) as [id, userstyle] (id)}
		<li>
			<a
				class={'p-4 rounded-lg flex flex-col gap-y-2 h-full ' +
					(userstyle.color ? `bg-ctp-${userstyle.color} bg-opacity-20` : 'bg-ctp-surface0')}
				href={`https://github.com/catppuccin/userstyles/tree/main/styles/${id}`}
			>
				<span class="text-lg font-semibold leading-snug">
					{typeof userstyle.name === 'string' ? userstyle.name : userstyle.name[0]}
				</span>

				<div
					class="flex flex-row flex-wrap items-center gap-x-1 text-ctp-subtext0 text-sm font-medium"
				>
					{#if userstyle.category === 'game'}
						<Gamepad class="block w-4 h-4" />
					{:else if userstyle.category === 'search_engine'}
						<Search class="block w-4 h-4" />
					{:else if userstyle.category === 'productivity'}
						<Computer class="block w-4 h-4" />
					{:else if userstyle.category === 'leisure'}
						<Umbrella class="block w-4 h-4" />
					{:else if userstyle.category === 'social'}
						<Users class="block w-4 h-4" />
					{:else if userstyle.category === 'messaging'}
						<MessageCircle class="block w-4 h-4" />
					{:else if userstyle.category === 'development'}
						<Code class="block w-4 h-4" />
					{/if}
					<span>{userstyle.category}</span>
				</div>
			</a>
		</li>
	{/each}
</ul>
