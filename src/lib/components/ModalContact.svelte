<script lang="ts">
	export let parent;
	import { fly } from "svelte/transition";
	import { superForm } from "sveltekit-superforms/client";
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
	import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
	import { enhance } from "$app/forms";

	let wantsToBeContactedWith: string = "E-Mail";

	const { form } = superForm(parent.data);
</script>

<form
	transition:fly={{
		duration: 500,
	}}
	class="card mx-auto flex w-full max-w-2xl flex-col gap-y-4 p-10 outline outline-1 outline-primary-500"
	action="?/manageContactForm"
	method="POST"
	use:enhance
>
	<h2 class="text-center !text-5xl">
		<span class="text-primary-500"> Bautalente </span> sind ein Gespräch entfernt
	</h2>
	<p class="mb-8 self-center text-center">Schreiben Sie uns und wir übernehmen den Rest.</p>
	<p class="!text-sm text-gray-400">
		Mit <code>Esc</code> können Sie dieses Fenster schließen.
	</p>
	<!-- ACTUAL FORM -->
	<div class="card flex flex-col gap-y-8 p-8">
		<div class="text-primary-300">
			<label class="mb-2 text-sm" for="contactName"> Ihr Name </label>
			<input
				class="w-full rounded-full bg-surface-900 p-3 outline outline-2 outline-primary-500"
				type="text"
				required
				bind:value={$form.contactName}
				aria-required="true"
				placeholder="Max Mustermann"
				name="contactName"
				id="contactName"
			/>
		</div>
		<div class="flex items-center justify-between text-primary-300">
			<p class="text-sm">Wie möchten Sie kontaktiert werden?</p>
			<RadioGroup
				padding="px-4 py-2"
				active="variant-filled-success"
				hover="hover:variant-soft-success"
			>
				<RadioItem
					bind:group={wantsToBeContactedWith}
					name="wantsToBeContactedWith"
					value="E-Mail"
					title="Per E-mail">Per E-Mail</RadioItem
				>
				<RadioItem
					bind:group={wantsToBeContactedWith}
					name="wantsToBeContactedWith"
					value="Telefonnummer"
					title="Per Anruf">Per Anruf</RadioItem
				>
			</RadioGroup>
		</div>
		{#if wantsToBeContactedWith == "E-Mail"}
			<div class="text-primary-300">
				<label class="mb-2 text-sm" for="contactEmail"> Ihre E-Mail Adresse </label>
				<input
					class="w-full rounded-full bg-surface-900 p-3 outline outline-2 outline-primary-500"
					type="email"
					required
					bind:value={$form.contactEmail}
					aria-required="true"
					placeholder="max@mustermann.de"
					name="contactEmail"
					id="contactEmail"
				/>
			</div>
		{:else}
			<div class="text-primary-300">
				<label class="mb-2 text-sm" for="contactPhoneNumber"> Ihre Telefonnummer </label>
				<input
					class="w-full rounded-full bg-surface-900 p-3 outline outline-2 outline-primary-500"
					type="tel"
					required
					bind:value={$form.contactPhoneNumber}
					aria-required="true"
					placeholder="+49 36843 60 26"
					name="contactPhoneNumber"
					id="contactPhoneNumber"
				/>
			</div>
		{/if}

		<div class="text-primary-300">
			<label class="mb-2 text-sm" for="contactMessage"> Ihre Nachricht </label>
			<textarea
				class="w-full bg-surface-900 p-3 outline outline-2 outline-primary-500 rounded-container-token"
				placeholder="Ich möchte endlich solide Handwerker in meinem Team haben."
				rows="5"
				bind:value={$form.contactMessage}
				name="contactMessage"
				id="contactMessage"
			/>
		</div>
	</div>
	<button type="submit" class="btn variant-ghost-success self-center"> Ich bin gespannt </button>
</form>

<style lang="postcss">
	input:focus-visible,
	textarea:focus-visible {
		@apply outline outline-2 outline-success-500;
	}
</style>
