<script lang="ts">
	import worldFromUniverse from "$lib/assets/business-page/world-view-from-universe.jpg";
	import dummyImage from "$lib/assets/business-page/business-page-dummy.jpg";
	import BasicTwoColumns from "$lib/components/BasicTwoColumns.svelte";
	import modalContact from "$lib/importContactModal";
	import FAQAccordion from "$lib/components/FAQAccordion.svelte";

	import IconFocalPoint from "$lib/components/icons/IconFocalPoint.svelte";
	import IconNetwork from "$lib/components/icons/IconNetwork.svelte";
	import IconProcess from "$lib/components/icons/IconProcess.svelte";
	import IconPool from "$lib/components/icons/IconPool.svelte";

	import {
		businessPageIntroContent,
		whatWeDoContent,
		recruitmentContent,
		faqContent,
	} from "$lib/content/business-page";

	let iconSize: number = 200;
	const iconsForBusinessPage = [IconFocalPoint, IconNetwork, IconProcess, IconPool];
</script>

<BasicTwoColumns ariaLabel="Fachkräfte für Ihre Bauzukunft">
	<svelte:fragment slot="leftColumn">
		<div>
			<h1 class="gradient-text-color-primary mb-8">Fachkräfte für Ihre Bauzukunft</h1>
			<h2 class="mb-8">Wir greifen Ihnen unter die Arme.</h2>
			<button class="btn variant-ghost-error" on:click={modalContact}
				>Jetzt Bautalente finden</button
			>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="rightColumn">
		<img src={worldFromUniverse} alt="Ein atemberaubender Blick auf die Welt vom Universum." />
	</svelte:fragment>
</BasicTwoColumns>

<section class="mb-48 flex flex-col items-center justify-center" aria-label="Wir von YouStruct">
	<h2 class="gradient-text-color-primary mb-8 !text-6xl/normal">Nie mehr Fachkräftemangel</h2>
	<h3 class="mb-32">
		Fachkräftemangel und Personalprobleme? YouStruct ist <span class="gradient-text-color-success"
			>Ihre Lösung</span
		>.
	</h3>
	<div class="flex flex-col gap-y-32">
		{#each businessPageIntroContent as businessPageIntroContentItem}
			{#if businessPageIntroContentItem.areColumnsReversed}
				<div class="grid grid-cols-2 place-items-center">
					<svelte:component
						this={iconsForBusinessPage[businessPageIntroContentItem.iconID - 1]}
						width={iconSize}
						height={iconSize}
					/>
					<p
						class="max-w-[70ch] p-8 !text-xl shadow-[0_0_2px_2px] shadow-success-600 outline outline-2 outline-surface-600 rounded-container-token"
					>
						{@html businessPageIntroContentItem.content}
					</p>
				</div>
			{:else}
				<div class="grid grid-cols-2 place-items-center">
					<p
						class="max-w-[70ch] p-8 !text-xl shadow-[0_0_2px_2px] shadow-success-600 outline outline-2 outline-surface-600 rounded-container-token"
					>
						{@html businessPageIntroContentItem.content}
					</p>
					<svelte:component
						this={iconsForBusinessPage[businessPageIntroContentItem.iconID - 1]}
						width={iconSize}
						height={iconSize}
					/>
				</div>
			{/if}
		{/each}
	</div>
</section>

<section
	class="mb-48 flex flex-col items-center justify-center"
	aria-label="Nie mehr Fachkräftemangel"
>
	<h2 class="gradient-text-color-primary mb-32 !text-6xl/normal">Wir von YouStruct</h2>
	<div class="flex flex-col gap-y-12">
		{#each whatWeDoContent as whatWeDoContentItem, index}
			<p
				class="grid place-items-center p-8 text-center !text-2xl outline outline-1 outline-{index %
					2 ==
				0
					? 'primary'
					: 'success'}-500 rounded-container-token"
			>
				{whatWeDoContentItem}
			</p>
		{/each}
		<p
			class="grid place-items-center p-8 text-center !text-2xl outline outline-1 outline-error-500 rounded-container-token"
		>
			Sagen dem Fachkräftemangel den Kampf an.
		</p>
	</div>
</section>

<section
	class="mb-48 flex flex-col items-center justify-center"
	aria-label="Personalvermittlung neu gedacht – Bau Recruitment der Zukunft"
>
	<h2 class="gradient-text-color-primary mb-4 !text-6xl/normal">Personalvermittlung neu gedacht</h2>
	<h3 class="mb-32 !text-4xl">Bau Recruitment der Zukunft</h3>
	<div class="flex flex-col gap-y-32">
		{#each recruitmentContent as recruitmentContentItem}
			<div class="grid grid-cols-[1fr_2fr] items-center gap-x-12">
				<h4 class="p-8 !text-3xl outline outline-1 outline-surface-600 rounded-container-token">
					{@html recruitmentContentItem.title}
				</h4>
				<p
					class="max-w-[60ch] p-8 !text-xl outline outline-1 outline-success-500 rounded-container-token"
				>
					{recruitmentContentItem.content}
				</p>
			</div>
		{/each}
	</div>
</section>

<section
	class="mb-48 flex flex-col items-center justify-center"
	aria-label="Beratung gewünscht? Wir freuen uns auf Sie"
>
	<h2 class="gradient-text-color-primary mb-32 !text-6xl/normal">
		Beratung gewünscht? Wir freuen uns auf Sie
	</h2>
	<div class="variant-ghost-surface p-32 rounded-container-token">
		<BasicTwoColumns marginBottom="mb-0" columnGap="gap-x-32">
			<svelte:fragment slot="leftColumn">
				<div class="flex flex-col gap-y-8 text-2xl">
					<div>
						<p class="unstyled gradient-text-color-success text-5xl">Tarik Muratovic</p>
						<p class="unstyled">CEO YouStruct & Sales Representative</p>
					</div>
					<div class="flex flex-col gap-y-2">
						<div class="flex items-center gap-x-4">
							<span class="variant-glass-success p-2 text-base rounded-container-token">Phone</span>
							<a
								class="unstyled gradient-color-on-hover gradient-underline-on-hover"
								href="tel:+491734197593">+49 173 4197593</a
							>
						</div>
						<div class="flex items-center gap-x-4">
							<span class="variant-glass-success p-2 text-base rounded-container-token">E-Mail</span
							>
							<a
								class="unstyled gradient-color-on-hover gradient-underline-on-hover"
								href="mailto:t.muratovic@youstruct.de">t.muratovic@youstruct.de</a
							>
						</div>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="rightColumn">
				<div class="max-w-md">
					<img src={dummyImage} alt="Dummy" />
				</div>
			</svelte:fragment>
		</BasicTwoColumns>
	</div>
</section>

<section
	class="mb-48 flex flex-col items-center justify-center"
	aria-label="Häufig gestellte Fragen (FAQ)"
>
	<h2 class="gradient-text-color-primary mb-20 !text-6xl/normal">Häufig gestellte Fragen (FAQ)</h2>
	<div
		class="variant-ghost-surface mb-12 flex flex-col items-center justify-center gap-y-4 p-10 rounded-container-token"
	>
		<p class="!text-xl">
			Wir halten engen Kontakt mit allen Unternehmen, die uns ihr Vertrauen schenken.
		</p>
		<p class="!text-xl">Falls Sie weiterhin Fragen haben, so lassen Sie uns ins Gespräch kommen.</p>
		<button class="btn variant-ghost-primary" on:click={modalContact}>Kontakt</button>
	</div>
	<FAQAccordion {faqContent} />
</section>
