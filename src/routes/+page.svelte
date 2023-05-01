<script lang="ts">
	import { fly, fade } from "svelte/transition";
	import { backOut } from "svelte/easing";
	import AnimateOnLoad from "$lib/components/AnimateOnLoad.svelte";

	import type { ModalComponent, ModalSettings } from "@skeletonlabs/skeleton";
	import ModalShareVerification from "$lib/components/ModalShareVerification.svelte";
	import { modalStore } from "@skeletonlabs/skeleton";

	function modalShareVerification(): void {
		const c: ModalComponent = { ref: ModalShareVerification };
		const d: ModalSettings = {
			type: "component",
			component: c,
		};
		modalStore.trigger(d);
	}

	const welcomeLines: string[] = [
		"YouStruct",
		"",
		"weil",
		"",
		"es",
		"",
		"die",
		"",
		"Baubranche",
		"",
		"verdient",
		"",
		"💪",
	];
</script>

<div class="grid min-h-[100dvh] place-items-center">
	<AnimateOnLoad>
		<div class="mx-auto max-w-4xl text-center">
			{#each welcomeLines as line, i}
				{#if i == 0}
					<div class="text-9xl font-black">
						<span
							class="m-1 inline-block"
							in:fly={{
								y: 100,
								delay: 250 * i,
								easing: backOut,
							}}>{line}</span
						>
					</div>
				{:else if i != welcomeLines.length - 1}
					<div class="inline-block text-4xl font-black">
						<span
							class="m-1 inline-block uppercase"
							in:fly={{
								y: 100,
								delay: 250 * i,
								easing: backOut,
							}}>{line}</span
						>
					</div>
				{:else}
					<div class="inline-block text-5xl">
						<span
							class="m-1 uppercase"
							in:fly={{
								y: 100,
								delay: 250 * i,
								easing: backOut,
							}}
						>
							{line}
						</span>
					</div>
					<button
						in:fade={{
							delay: 250 * (i + 1),
							duration: 1000,
							easing: backOut,
						}}
						class="btn variant-glass-primary mt-4"
						on:click={modalShareVerification}>Vallah Billah Bro, ich will sehen!</button
					>
				{/if}
			{/each}
		</div>
	</AnimateOnLoad>
</div>
