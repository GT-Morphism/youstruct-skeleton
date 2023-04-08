<script lang="ts">
	//#### IMPORT OF STYLESHEETS AND FONTS ####

	//#### IMPORT OF NPM PACKAGES ####

	//#### IMPORT OF SKELETON COMPONENTS ####
	import { AppBar, LightSwitch, popup } from "@skeletonlabs/skeleton";

	import type { PopupSettings } from "@skeletonlabs/skeleton";

	//#### ADAPT SKELETON COMPONENTS ####
	let discoverConstructionMenu: PopupSettings = {
		event: "focus-click",
		target: "discoverConstructionMenu",
		middleware: {
			offset: 20,
		},
	};

	let forTraineeMenu: PopupSettings = {
		event: "focus-click",
		target: "forTraineeMenu",
		middleware: {
			offset: 20,
		},
	};

	let forStudentsMenu: PopupSettings = {
		event: "focus-click",
		target: "forStudentsMenu",
		middleware: {
			offset: 20,
		},
	};

	//#### IMPORT OF CUSTOM COMPONENTS ####
	import SubNavigationCard from "./SubNavigationCard.svelte";
	import modalContact from "$lib/importContactModal";

	//#### ADAPT CUSTOM COMPONENTS ####

	//#### ADAPT CURRENT COMPONENT/PAGE/LAYOUT ####

	//#### OTHER ####
</script>

<AppBar class="[&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[100rem] [&>div]:px-10">
	<svelte:fragment slot="lead"
		><a class="focus-primary" href="/protected">YouStruct</a></svelte:fragment
	>
	<svelte:fragment slot="trail">
		<!-- Entdecke die Baubranche -->
		<div class="relative">
			<button
				class="focus-primary p-2 transition-all hover:variant-ghost-primary"
				use:popup={discoverConstructionMenu}>Entdecke die Baubranche</button
			>
			<div data-popup="discoverConstructionMenu">
				<div class="flex w-60 flex-col gap-y-4">
					<SubNavigationCard
						navCardHeading="Die Anfänge der Bauwelt"
						navCardDescription="Wie wurde die Welt, wie wir sie heute kennen."
						navCardUrl="/protected/entdecke-die-baubranche/anfaenge-der-bauwelt"
					/>

					<SubNavigationCard
						navCardHeading="Innovationen und Technik"
						navCardDescription="Was sind die neuesten Highlights der Baubranche?"
						navCardUrl="/protected/entdecke-die-baubranche/innovationen-und-technik"
					/>

					<SubNavigationCard
						navCardHeading="Anerkennung im Bau"
						navCardDescription="Warum Du als Bauheld die Stütze der Zukunft bist!"
						navCardUrl="/protected/entdecke-die-baubranche/anerkennung-im-bau"
					/>
				</div>
			</div>
		</div>
		<!-- Für Azubis -->
		<div class="relative">
			<button
				class="focus-secondary p-2 transition-all hover:variant-ghost-secondary"
				use:popup={forTraineeMenu}>Für Azubis</button
			>
			<div data-popup="forTraineeMenu">
				<div class="flex w-60 flex-col gap-y-4">
					<SubNavigationCard
						navCardHeading="Jobs A bis Z"
						navCardDescription="Wie sehen Aufgaben und Entwicklungen im Job aus?"
						navCardUrl="/protected/fuer-azubis/jobs-a-bis-z"
						outlineColor="outline-secondary-900"
					/>

					<SubNavigationCard
						navCardHeading="Theorie und Praxis"
						navCardDescription="Lernmaterialien für Deine Theorie- und Praxisprüfung!"
						navCardUrl="/protected/fuer-azubis/theorie-und-praxis"
						outlineColor="outline-secondary-900"
					/>
				</div>
			</div>
		</div>
		<!-- Für Studenten -->
		<div class="relative">
			<button
				class="focus-success p-2 transition-all hover:variant-ghost-success"
				use:popup={forStudentsMenu}>Für Studenten</button
			>
			<div data-popup="forStudentsMenu">
				<div class="flex w-60 flex-col gap-y-4">
					<SubNavigationCard
						navCardHeading="Jobs A bis Z"
						navCardDescription="Wie sehen Aufgaben und Entwicklungen im Job aus?"
						navCardUrl="/protected/fuer-studenten/jobs-a-bis-z"
						outlineColor="outline-success-900"
					/>

					<SubNavigationCard
						navCardHeading="Ein Tag im Leben als..."
						navCardDescription="Menschen wie Du und ich stellen sich und ihren Alltag vor."
						navCardUrl="/protected/fuer-studenten/ein-tag-im-leben-als"
						outlineColor="outline-success-900"
					/>

					<SubNavigationCard
						navCardHeading="Theorie und Praxis"
						navCardDescription="Lernmaterialien für Deine Klausur und Praxishilfen!"
						navCardUrl="/protected/fuer-studenten/theorie-und-praxis"
						outlineColor="outline-success-900"
					/>
				</div>
			</div>
		</div>
		<!-- Über Uns -->
		<a class="focus-error p-2 transition-all hover:variant-ghost-error" href="/protected/ueber-uns"
			>Über Uns</a
		>
		<!-- Kontakt -->
		<button class="focus-primary btn variant-ghost-primary" on:click={modalContact}>Kontakt</button>
		<!-- Light Switch -->
		<LightSwitch />
	</svelte:fragment>
</AppBar>
