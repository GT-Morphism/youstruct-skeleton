<script lang="ts">
	import type { SvelteComponent } from "svelte";
	import { fade, slide, scale } from "svelte/transition";
	import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";

	import IconWorker from "./icons/IconWorker.svelte";
	import IconFutureClock from "./icons/IconFutureClock.svelte";
	import IconExamAPlus from "./icons/IconExamAPlus.svelte";
	import IconGroup from "./icons/IconGroup.svelte";
	import fittingJob from "$lib/assets/homepage/youstruct-homepage-fitting-job.jpg";
	import modernTech from "$lib/assets/homepage/youstruct-homepage-modern.jpg";
	import examMaterials from "$lib/assets/homepage/youstruct-homepage-learning-material.jpg";
	import inviteFriends from "$lib/assets/homepage/youstruct-homepage-friends.jpg";

	type AccordionIconCollection = Record<string, typeof SvelteComponent>;

	const accordionIconCollection: AccordionIconCollection = {
		IconWorker,
		IconFutureClock,
		IconExamAPlus,
		IconGroup,
	};

	let imageToShow: number = 1;
	let duration: number = 200;

	export let accordionContent: accordionContentItem[];

	function changeImageToShow(imageID: number) {
		imageToShow = imageID;
	}
</script>

<div class="grid min-h-[35rem] grid-cols-2 place-items-center gap-x-8">
	{#if imageToShow == 1}
		<img
			in:fade={{ duration: duration }}
			class="shadow-sm shadow-primary-500 rounded-container-token"
			src={fittingJob}
			alt="Ein Mann mit einer Schlafmaschine und Funken, die dem Betrachter des Bildes in die Augen springen."
		/>
	{:else if imageToShow == 2}
		<img
			in:fade={{ duration: duration }}
			class="shadow-sm shadow-primary-500 rounded-container-token"
			src={modernTech}
			alt="Ein halb geöffneter MacBook mit einem farbfrohen Bildschirm-Hintergrund in einem dunklen Raum."
		/>
	{:else if imageToShow == 3}
		<img
			in:fade={{ duration: duration }}
			class="shadow-sm shadow-primary-500 rounded-container-token"
			src={examMaterials}
			alt="Eine Bibliothek in einem Vintage-Style mit Skulpturen von wichtigen Intellektuellen"
		/>
	{:else if imageToShow == 4}
		<img
			in:fade={{ duration: duration }}
			class="shadow-sm shadow-primary-500 rounded-container-token"
			src={inviteFriends}
			alt="Zwei Menschen sind gerade dabei, sich die Hand zu geben."
		/>
	{/if}
	<Accordion
		class="w-full max-w-[70ch]"
		regionControl="variant-glass-primary"
		padding="p-4"
		spacing="space-y-4"
		regionPanel="border-s-2 border-success-500 !rounded-none mt-4"
		autocollapse
		{duration}
	>
		{#each accordionContent as accordionContentItem, index (index)}
			<AccordionItem
				id={index.toString()}
				on:click={() => changeImageToShow(index + 1)}
				class="text-xl [&>button[aria-expanded='false']>.accordion-lead]:text-[rgb(var(--color-primary-500))] [&>button[aria-expanded='true']>.accordion-lead]:text-[rgb(var(--color-success-500))]"
				open={index == 0}
			>
				<svelte:fragment slot="lead"
					><svelte:component this={accordionIconCollection[accordionContentItem.iconName]} />
				</svelte:fragment>
				<svelte:fragment slot="summary">{accordionContentItem.summary}</svelte:fragment>
				<svelte:fragment slot="content">{accordionContentItem.content}</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
