<script lang="ts">
	//#### IMPORT OF STYLESHEETS AND FONTS ####
	import "@fontsource/martel";
	import "@fontsource/quattrocento";
	// Custom Skeleton theme:
	import "../theme.postcss";

	// This contains the bulk of Skeletons required styles:
	import "@skeletonlabs/skeleton/styles/all.css";

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import "../app.css";

	//#### IMPORT OF NPM PACKAGES ####
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";

	//#### IMPORT OF SVELTE/SVELTEKIT UTILITIES ####
	import { page } from "$app/stores";

	//#### IMPORT OF SKELETON COMPONENTS ####
	import { storePopup, Modal } from "@skeletonlabs/skeleton";

	//#### ADAPT SKELETON COMPONENTS ####
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	//#### IMPORT OF CUSTOM COMPONENTS ####
	import MainNavigation from "$lib/components/MainNavigation.svelte";

	//#### ADAPT CUSTOM COMPONENTS ####

	//#### ADAPT CURRENT COMPONENT/PAGE/LAYOUT ####

	//#### OTHER ####
</script>

<Modal />

{#if $page.url.pathname != "/" && $page.error?.message != "Not Found"}
	<MainNavigation />
{/if}

<slot />
