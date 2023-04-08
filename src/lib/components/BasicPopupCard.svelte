<script lang="ts">
	import { fade } from "svelte/transition";

	import modalContact from "$lib/importContactModal";
	import IconCreateProfil from "./icons/IconCreateProfil.svelte";

	export let CardIcon: typeof IconCreateProfil | undefined = IconCreateProfil;
	export let buttonDescription: string = "Erfahre mehr";
	export let popupContent: string = "Hier stehen weitere Informationen.";

	let isPopupVisible: boolean = false;

	function onKeyDown(event: KeyboardEvent): void {
		if (event.code == "Escape") {
			closePopup();
		}
	}

	function onBackdropInteraction(event: MouseEvent | TouchEvent): void {
		const overlayTarget = event.target as HTMLDivElement;
		if (overlayTarget.classList.contains("overview-popup-overlay")) {
			closePopup();
		}
	}

	function togglePopup(): void {
		isPopupVisible = !isPopupVisible;
	}

	function closePopup(): void {
		isPopupVisible = false;
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<div on:mousedown={onBackdropInteraction}>
	<div class="flex flex-col items-center gap-y-12">
		<CardIcon width={100} height={100} />
		<button
			class="focus-success btn variant-ghost-primary transition-all hover:variant-ghost-success"
			on:click={togglePopup}>{buttonDescription}</button
		>
	</div>
	{#if isPopupVisible}
		<div class="overview-popup-overlay fixed inset-0" />
		<div transition:fade class="absolute bottom-0 left-[50%] top-0 -translate-x-[50%]">
			<div
				class="flex min-h-[30rem] max-w-[60rem] flex-col items-center justify-center gap-y-8 bg-surface-800 p-24 text-center outline outline-2 outline-surface-600 rounded-container-token"
			>
				<h3 class="gradient-text-color-success !text-4xl">{buttonDescription}</h3>
				<p class="!text-xl">{popupContent}</p>
				{#if buttonDescription == "Profil erstellen"}
					<button class="btn variant-ghost-success">Ich möchte das sehen</button>
				{/if}
				{#if buttonDescription == "Teile Deine Erfahrung"}
					<button class="focus-primary btn variant-ghost-primary" on:click={modalContact}
						>Kontakt</button
					>
				{/if}
				<p class="!text-sm text-gray-400">
					Mit <code>Esc</code> kann dieses Popup geschlossen werden.
				</p>
			</div>
		</div>
	{/if}
</div>
