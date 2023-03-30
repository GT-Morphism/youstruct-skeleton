<script lang="ts">
	//#### IMPORT OF STYLESHEETS AND FONTS ####

	//#### IMPORT OF NPM PACKAGES ####

	//#### IMPORT OF SKELETON COMPONENTS ####
	import { AppBar, popup } from "@skeletonlabs/skeleton";

	import type { PopupSettings } from "@skeletonlabs/skeleton";

	//#### ADAPT SKELETON COMPONENTS ####
	let discoverConstructionMenu: PopupSettings = {
		event: "click",
		target: "discoverConstructionMenu",
		middleware: {
			offset: 20,
		},
	};

	let forTraineeMenu: PopupSettings = {
		event: "click",
		target: "forTraineeMenu",
		middleware: {
			offset: 20,
		},
	};

	let forStudentsMenu: PopupSettings = {
		event: "click",
		target: "forStudentsMenu",
		middleware: {
			offset: 20,
		},
	};

	//#### IMPORT OF CUSTOM COMPONENTS ####
	import SubNavigationCard from "./SubNavigationCard.svelte";

	//#### ADAPT CUSTOM COMPONENTS ####

	//#### ADAPT CURRENT COMPONENT/PAGE/LAYOUT ####

	//#### OTHER ####
</script>

<AppBar>
	<svelte:fragment slot="lead"><a href="/">YouStruct</a></svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="relative">
			<button class="btn variant-ghost-primary" use:popup={discoverConstructionMenu}
				>Entdecke die Baubranche</button
			>
			<div data-popup="discoverConstructionMenu">
				<div class="flex w-60 flex-col gap-y-4">
					<SubNavigationCard
						navCardHeading="Die Anfänge der Bauwelt"
						navCardDescription="Wie wurde die Welt, wie wir sie heute kennen."
						navCardUrl="/entdecke-die-baubranche/anfaenge-der-bauwelt"
					/>

					<SubNavigationCard
						navCardHeading="Innovationen und Technik"
						navCardDescription="Was sind die neuesten Highlights der Baubranche?"
						navCardUrl="/entdecke-die-baubranche/innovationen-und-technik"
					/>

					<SubNavigationCard
						navCardHeading="Anerkennung im Bau"
						navCardDescription="Warum Du als Bauheld die Stütze der Zukunft bist!"
						navCardUrl="/entdecke-die-baubranche/anerkennung-im-bau"
					/>
				</div>
			</div>
		</div>
		<div class="relative">
			<button class="btn variant-ghost-primary" use:popup={forTraineeMenu}>Für Azubis</button>
			<div data-popup="forTraineeMenu">
				<div class="flex w-60 flex-col gap-y-4">
					<SubNavigationCard
						navCardHeading="Jobs A bis Z"
						navCardDescription="Wie sehen Aufgaben und Entwicklungen im Job aus?"
						navCardUrl="/fuer-azubis/jobs-a-bis-z"
						outlineColor="outline-secondary-900"
					/>

					<SubNavigationCard
						navCardHeading="Theorie und Praxis"
						navCardDescription="Lernmaterialien für Deine Theorie- und Praxisprüfung!"
						navCardUrl="/fuer-azubis/theorie-und-praxis"
						outlineColor="outline-secondary-900"
					/>
				</div>
			</div>
		</div>
		<div class="relative">
			<button class="btn variant-ghost-primary" use:popup={forStudentsMenu}>Für Studenten</button>
			<div data-popup="forStudentsMenu">
				<div class="flex w-60 flex-col gap-y-4">
					<SubNavigationCard
						navCardHeading="Jobs A bis Z"
						navCardDescription="Wie sehen Aufgaben und Entwicklungen im Job aus?"
						navCardUrl="/fuer-studenten/jobs-a-bis-z"
						outlineColor="outline-success-900"
					/>

					<SubNavigationCard
						navCardHeading="Ein Tag im Leben als..."
						navCardDescription="Menschen wie Du und ich stellen sich und ihren Alltag vor."
						navCardUrl="/fuer-studenten/ein-tag-im-leben-als"
						outlineColor="outline-success-900"
					/>

					<SubNavigationCard
						navCardHeading="Theorie und Praxis"
						navCardDescription="Lernmaterialien für Deine Klausur und Praxishilfen!"
						navCardUrl="/fuer-studenten/theorie-und-praxis"
						outlineColor="outline-success-900"
					/>
				</div>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
