<script lang="ts">
	import { AppRail, AppRailTile, Avatar } from "@skeletonlabs/skeleton";
	import { writable, type Writable } from "svelte/store";
	import BasicTestimonialCard from "./BasicTestimonialCard.svelte";

	export let testimonialContent: testimonialContentItem[];

	const storeValue: Writable<number> = writable(1);
</script>

<div class="grid w-full grid-cols-[1fr_3fr] place-items-center gap-x-8">
	<AppRail
		selected={storeValue}
		width="w-full"
		background="bg-transparent"
		active="border-2 border-success-500"
		border="border border-2 border-surface-400-500-token"
		regionDefault="flex flex-col justify-between"
	>
		{#each testimonialContent as testimonialContentItem, index (index)}
			<AppRailTile
				regionIcon="pt-4"
				regionLabel="p-4"
				label={testimonialContentItem.testimonialName}
				value={index + 1}
			>
				<Avatar
					initials={testimonialContentItem.testimonialInitials}
					background={(index + 1) % 2 == 0 ? "variant-ghost-success" : "variant-ghost-primary"}
				/>
			</AppRailTile>
		{/each}
	</AppRail>
	{#each testimonialContent as testimonialContentItem, index (index)}
		{#if $storeValue == index + 1}
			<BasicTestimonialCard
				testimonialName={testimonialContentItem.testimonialName}
				testimonialAge={testimonialContentItem.testimonialAge}
				testimonialPosition={testimonialContentItem.testimonialPosition}
				testimonialOpinionSummary={testimonialContentItem.testimonialOpinionSummary}
				testimonialOpinionContent={testimonialContentItem.testimonialOpinionContent}
			/>
		{/if}
	{/each}
</div>
