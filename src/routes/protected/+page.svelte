<script lang="ts">
	import abstractBuildingHero from "$lib/assets/abstract-building-hero.jpg";
	import TextWithIcon from "$lib/components/TextWithIcon.svelte";
	import { heroTeaserStrings } from "$lib/content/homepage";
</script>

<section
	class="grid min-h-[40dvh] grid-cols-2 place-items-center gap-x-8"
	role="contentinfo"
	aria-label="YouStruct: Alles, was Du für Deine Zukunft in der Baubranche brauchst."
>
	<div class="flex flex-col gap-y-8">
		<h1>
			Alles, was Du für <span class="gradient-text-color">Deine Zukunft</span> in der Baubranche brauchst.
		</h1>
		<p class="!text-xl">
			Noch nie war das Finden eines Jobs so einfach. Erstelle Dir ein Profil, nutze die Vorteile und
			<span class="gradient-text-color">werde zum Bauhelden</span>.
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
	<img
		class="shadow-sm shadow-primary-500 rounded-container-token"
		src={abstractBuildingHero}
		alt="Außenfassade des Wolkenkratzers Tuletornen in Schweden"
	/>
</section>
