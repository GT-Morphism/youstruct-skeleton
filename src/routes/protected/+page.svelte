<script lang="ts">
	import abstractBuildingHero from "$lib/assets/homepage/abstract-building-hero.jpg";
	import focusOnYourself from "$lib/assets/homepage/youstruct-homepage-focus-on-yourself.jpg";
	import AccordionWithImageToggle from "$lib/components/AccordionWithImageToggle.svelte";
	import HomepageStepper from "$lib/components/HomepageStepper.svelte";
	import TextWithIcon from "$lib/components/TextWithIcon.svelte";
	import BasicTwoColumns from "$lib/components/BasicTwoColumns.svelte";

	import {
		heroTeaserStrings,
		accordionContent,
		homepageStepperContent,
	} from "$lib/content/homepage";
</script>

<BasicTwoColumns ariaLabel="YouStruct: Alles, was Du für Deine Zukunft in der Baubranche brauchst.">
	<svelte:fragment slot="leftColumn">
		<div class="flex max-w-[70ch] flex-col gap-y-8">
			<h1>
				Alles, was Du für <span class="gradient-text-color-primary">Deine Zukunft</span> in der Baubranche
				brauchst.
			</h1>
			<p class="!text-xl">
				Noch nie war das Finden eines Jobs so einfach. Erstelle Dir ein Profil, nutze die Vorteile
				und
				<span class="gradient-text-color-success">werde zum Bauhelden</span>.
			</p>
			<div class="grid grid-cols-2 grid-rows-3 gap-y-4">
				{#each heroTeaserStrings as heroTeaserString}
					<TextWithIcon
						fillColor="rgb(var(--color-primary-500))"
						innerColor="rgb(var(--color-surface-900))"
						size={32}
						text={heroTeaserString}
					/>
				{/each}
			</div>
			<button class="btn variant-ghost-success self-start">Anmelden</button>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="rightColumn">
		<img
			class="shadow-sm shadow-primary-500 rounded-container-token"
			src={abstractBuildingHero}
			alt="Außenfassade des Wolkenkratzers Tuletornen in Schweden"
		/>
	</svelte:fragment>
</BasicTwoColumns>

<section class="mb-48" role="contentinfo" aria-label="Eine Plattform. Tausend Möglichkeiten">
	<h2 class="gradient-text-color-primary mb-20 text-center !text-6xl/normal">
		Eine Plattform. Tausend Möglichkeiten.
	</h2>
	<AccordionWithImageToggle {accordionContent} />
</section>

<section class="mb-48" role="contentinfo" aria-label="In weniger als 3 Minuten loslegen">
	<h2 class="gradient-text-color-primary mb-20 text-center !text-6xl/normal">
		In weniger als 3 Minuten loslegen
	</h2>
	<HomepageStepper {homepageStepperContent} />
</section>

<BasicTwoColumns ariaLabel="Während Du lernst, suchen wir den perfekten Job für Dich">
	<svelte:fragment slot="leftColumn">
		<img
			class="shadow-sm shadow-primary-500 rounded-container-token"
			src={focusOnYourself}
			alt="Außenfassade des Wolkenkratzers Tuletornen in Schweden"
		/>
	</svelte:fragment>
	<svelte:fragment slot="rightColumn">
		<div class="flex max-w-[70ch] flex-col gap-y-8">
			<h2 class="!text-5xl">
				Während Du lernst, suchen wir den <span class="gradient-text-color-primary"
					>perfekten Job</span
				> für Dich.
			</h2>
			<p class="!text-xl">
				Warum Zeit mit Bewerbungsschreiben verschwenden, wenn Du Dich stattdessen auch auf Dich
				konzentrieren kannst und sich Firmen bei Dir melden?
			</p>
			<button class="btn variant-ghost-success self-start">Anmelden</button>
		</div>
	</svelte:fragment>
</BasicTwoColumns>
