<script lang="ts">
	import { variants } from '@catppuccin/palette';

	import Head from '../../components/Head.svelte';
	import CopyButton from './CopyButton.svelte';

	const flavors = Object.keys(variants) as (keyof typeof variants)[];
	const flavorDisplayName = {
		latte: 'Latte',
		frappe: 'Frappé',
		macchiato: 'Macchiato',
		mocha: 'Mocha'
	};

	const colors = Object.keys(variants.frappe) as (keyof typeof variants.frappe)[];
</script>

<Head
	title="Palette"
	description="Catppuccin consists of 4 beautiful pastel color palettes, named flavors."
/>

<h1 class="text-3xl font-extrabold tracking-tight mb-3">Palette</h1>
<p class="text-lg text-ctp-subtext1 font-medium tracking-tight mb-12">
	Catppuccin consists of 4 beautiful pastel color palettes, named flavors. If you want to use them
	for your own project, refer to our <a
		class="inline-link"
		href="https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md">style guide</a
	>
	for general use cases and guidelines. Additionally, you can find integrations with popular frameworks
	and tools in
	<a class="inline-link" href="https://github.com/catppuccin/palette">catppuccin/palette</a>.
</p>

<div class="flex flex-col gap-y-6">
	{#each flavors as flavor (flavor)}
		<div class="p-8 flex flex-col gap-y-3 rounded-lg bg-ctp-mantle">
			<h2 class="text-2xl font-bold tracking-tight">{flavorDisplayName[flavor]}</h2>

			<div class="overflow-x-scroll w-full">
				<table class="w-full">
					<tr class="font-medium text-xs text-ctp-subtext0 mb-2">
						<td class="p-2">Color</td>
						<td class="p-2">Hex</td>
						<td class="p-2">RGB</td>
						<td class="p-2">HSL</td>
					</tr>

					{#each colors as colorKey}
						<tr>
							<td class="p-2 flex flex-row items-center gap-x-2">
								<span
									class="block w-4 h-4 rounded-full"
									style={`background-color: ${variants[flavor][colorKey].hex}`}
								/>
								<span class="font-semibold text-sm">
									{colorKey[0].toUpperCase() + colorKey.slice(1)}
								</span>
							</td>

							<td class="p-2">
								<CopyButton text={variants[flavor][colorKey].hex} />
							</td>

							<td class="p-2">
								<CopyButton text={variants[flavor][colorKey].rgb} />
							</td>

							<td class="p-2">
								<CopyButton text={variants[flavor][colorKey].hsl} />
							</td>
						</tr>
					{/each}
				</table>
			</div>
		</div>
	{/each}
</div>
