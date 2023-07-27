<script lang="ts">
	import { ClipboardCopyIcon, CheckIcon } from 'lucide-svelte';

	export let text: string;
	export let showCheck = false;

	const activate = async () => {
		await navigator.clipboard.writeText(text);
		showCheck = true;
		setTimeout(() => {
			showCheck = false;
		}, 2500);
	};
</script>

<button class="flex flex-row items-center gap-x-1 text-xs font-mono" on:click={activate}>
	{#if !showCheck}
		<ClipboardCopyIcon class="block w-3 h-3 shrink-0" />
	{:else}
		<CheckIcon class="block w-3 h-3 shrink-0" />
	{/if}

	<span>{text}</span>
</button>
