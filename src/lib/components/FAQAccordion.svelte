<script lang="ts">
	import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";

	let duration: number = 200;

	export let faqContent: faqContentItem[];
</script>

<div>
	<Accordion
		class="w-full max-w-[70ch]"
		regionControl="variant-glass-primary"
		padding="p-4"
		spacing="space-y-4"
		regionPanel="border-s-2 border-success-500 !rounded-none mt-4"
		autocollapse
		{duration}
	>
		{#each faqContent as faqContentItem, index (index)}
			<AccordionItem
				class="text-xl [&>button[aria-expanded='false']>.accordion-summary-caret]:fill-[currentColor] [&>button[aria-expanded='true']>.accordion-summary-caret]:fill-[rgb(var(--color-success-500))]"
				open={index == 0}
			>
				<svelte:fragment slot="summary">{faqContentItem.question}</svelte:fragment>
				<svelte:fragment slot="content">
					<div class="flex flex-col items-start gap-y-4">
						<p class="!text-xl">{@html faqContentItem.answer}</p>
						{#if faqContentItem.hasAnchorTag}
							<a
								class="btn variant-ghost-{faqContentItem.anchorTagStyle}"
								href={faqContentItem.anchorTagURL}>{faqContentItem.anchorTagDescription}</a
							>
						{/if}
					</div>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
