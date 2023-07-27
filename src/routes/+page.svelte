<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Catppuccin</title>
</svelte:head>

<p class="mt-28 text-4xl font-extrabold tracking-tight leading-tight">
	Soothing pastel theme for the high-spirited!
</p>

<p class="mt-6 text-base font-medium text-ctp-subtext0">
	Catppuccin is a community-driven pastel theme that aims to be the middle ground between low and
	high contrast themes. It consists of 4 soothing warm flavors with 26 eye-candy colors each,
	perfect for coding, designing, and much more!
</p>

<div class="mt-48 flex flex-col gap-y-8">
	<h3 class="text-3xl font-bold mb-4">Design Philosophy</h3>

	<div class="flex flex-col lg:flex-row gap-8">
		<div class="flex flex-col gap-y-4 lg:w-1/3">
			<p class="text-2xl font-semibold">
				<span class="text-ctp-flamingo">C</span><span class="text-ctp-mauve">o</span><span
					class="text-ctp-maroon">l</span
				><span class="text-ctp-yellow">o</span><span class="text-ctp-teal">r</span><span
					class="text-ctp-sapphire">f</span
				><span class="text-ctp-lavender">u</span>l is better than colorless.
			</p>
			<p class="text-base text-ctp-subtext0">
				The colorfulness of something contributes to the distinction amongst the parts of that
				something, making it marginally easier to understand how things are structured.
			</p>
		</div>

		<div class="flex flex-col gap-y-4 lg:w-1/3">
			<p class="text-2xl font-semibold">
				There should be <span class="text-ctp-blue">balance</span>.
			</p>
			<p class="text-base text-ctp-subtext0">
				Not too dull, not too bright. Suitability under various light conditions is a must.
			</p>
		</div>

		<div class="flex flex-col gap-y-4 lg:w-1/3">
			<p class="text-2xl font-semibold">
				<span class="text-ctp-rosewater">Harmony</span> is superior to
				<span class="text-ctp-red">dissonance</span>.
			</p>
			<p class="text-base text-ctp-subtext0">Vivacious colors must complement each other.</p>
		</div>
	</div>
</div>

<div class="mt-48 flex flex-col gap-y-10">
	<h3 class="text-3xl font-bold mb-4">Palette</h3>

	<p>
		Catppuccin consists of 4 beautiful pastel color palettes, named flavors. If you want to use them
		for your own project, refer to our <a
			class="inline-link"
			href="https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md">style guide</a
		>
		for general use cases and guidelines. Additionally, you can find integrations with popular frameworks
		and tools in
		<a class="inline-link" href="https://github.com/catppuccin/palette">catppuccin/palette</a>.
	</p>

	<a
		class="flex flex-row items-center gap-x-2 bg-ctp-teal text-ctp-base px-4 py-3 rounded font-medium text-sm brightness-100 hover:brightness-90 transition-all self-start"
		href="/palette"
	>
		<span>View the palette</span>
		<ArrowRight class="block w-3 h-3 stroke-[2.5]" />
	</a>
</div>
