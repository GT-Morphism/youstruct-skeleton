<script lang="ts">
	import { Stepper, Step } from "@skeletonlabs/skeleton";
	import HomepageStepperIllustrated from "./HomepageStepperIllustrated.svelte";

	let iconToShow: number = 1;

	export let homepageStepperContent: homepageStepperContentItem[];
</script>

<div class="me-auto ms-auto max-w-screen-lg">
	<Stepper
		class="mb-20"
		stepTerm="Schritt"
		active="variant-filled-success"
		badge="variant-filled-primary"
		buttonBackLabel="Vorheriger Schritt"
		buttonBack="variant-ringed-primary"
		buttonNextLabel="Nächster Schritt"
		buttonNext="variant-ghost-primary"
		buttonCompleteLabel="Ich will loslegen"
		buttonComplete="variant-ghost-success"
		on:next={() => iconToShow++}
		on:back={() => iconToShow--}
	>
		{#each homepageStepperContent as stepperContent}
			<Step
				class="grid min-h-[15rem]"
				regionHeader="text-4xl text-success-500"
				regionContent="text-xl"
				regionNavigation="self-end"
			>
				<svelte:fragment slot="header">{stepperContent.header}</svelte:fragment>
				{stepperContent.content}
			</Step>
		{/each}
	</Stepper>
	<div>
		<HomepageStepperIllustrated {iconToShow} />
	</div>
</div>
