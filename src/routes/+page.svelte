<script lang="ts">
	import { fly, fade } from "svelte/transition";
	import { backOut } from "svelte/easing";
	import AnimateOnLoad from "$lib/components/AnimateOnLoad.svelte";

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
	<!-- <AnimateOnLoad> -->
	<div class="mx-auto mb-5 max-w-4xl text-center">
		{#each welcomeLines as line, i}
			{#if i == 0}
				<div class="text-9xl font-black">
					<span
						class="text-shadow m-1 inline-block"
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
						class="text-shadow m-1 inline-block uppercase"
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
						class="text-shadow m-1 uppercase"
						in:fly={{
							y: 100,
							delay: 250 * i,
							easing: backOut,
						}}
					>
						{line}
					</span>
				</div>

				<form
					transition:fade={{
						delay: 250 * (i + 2),
						duration: 800,
						easing: backOut,
					}}
					class="text-shadow card mx-auto flex max-w-xs flex-col items-start gap-y-4 p-2 uppercase"
					action="?/verifyForShare"
					method="POST"
				>
					<label for="shareUsername"> Nutzername </label>
					<input class="w-full" type="text" name="shareUsername" id="shareUsername" />
					<label for="sharePassword"> Passwort </label>
					<input class="w-full" type="password" name="sharePassword" id="sharePassword" />
					<button type="submit" class="btn variant-filled-success"> Okay, let's go. </button>
				</form>
			{/if}
		{/each}
	</div>
	<!-- </AnimateOnLoad> -->
</div>
