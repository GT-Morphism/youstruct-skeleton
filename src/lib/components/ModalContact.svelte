<script lang="ts">
	export let parent;
	import { fly } from "svelte/transition";
	import { superForm } from "sveltekit-superforms/client";
	import { RadioGroup, RadioItem, modalStore } from "@skeletonlabs/skeleton";

	let wantsToBeContactedWith: string = "E-Mail";

	let { form, enhance, errors } = superForm(parent.data, {
		onUpdated({ form }) {
			if (form.valid) {
				form.data = {};
				modalStore.close();
			}
		},
	});
</script>

<form
	transition:fly={{
		duration: 500,
	}}
	class="card mx-auto flex w-full max-w-2xl flex-col gap-y-4 p-10 outline outline-1 outline-primary-500"
	action="/protected?/manageContactForm"
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
		<div class:invalid={$errors.contactName} data-isRequired class="text-primary-300">
			<label class="mb-2 text-sm" for="contactName"> Ihr Name </label>
			<input
				class="w-full rounded-full bg-surface-900 p-3 outline outline-2 outline-primary-500"
				type="text"
				minlength="1"
				required
				bind:value={$form.contactName}
				aria-required="true"
				placeholder="Max Mustermann"
				name="contactName"
				id="contactName"
			/>
			{#if $errors.contactName}
				<p>{$errors.contactName}</p>
			{/if}
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
			<div class:invalid={$errors.contactEmail} data-isRequired class="text-primary-300">
				<label class="mb-2 text-sm" for="contactEmail"> Ihre E-Mail Adresse </label>
				<input
					class="w-full rounded-full bg-surface-900 p-3 outline outline-2 outline-primary-500"
					type="email"
					required
					bind:value={$form.contactEmail}
					data-invalid={$errors.contactEmail}
					aria-required="true"
					placeholder="max@mustermann.de"
					name="contactEmail"
					id="contactEmail"
				/>
				{#if $errors.contactEmail}
					<p>{$errors.contactEmail}</p>
				{/if}
			</div>
		{:else}
			<div class:invalid={$errors.contactPhoneNumber} data-isRequired class="text-primary-300">
				<label class="mb-2 text-sm" for="contactPhoneNumber"> Ihre Telefonnummer </label>
				<input
					class="w-full rounded-full bg-surface-900 p-3 outline outline-2 outline-primary-500"
					type="tel"
					required
					bind:value={$form.contactPhoneNumber}
					data-invalid={$errors.contactPhoneNumber}
					aria-required="true"
					placeholder="+49 305 80885027"
					name="contactPhoneNumber"
					id="contactPhoneNumber"
				/>
				{#if $errors.contactPhoneNumber}
					<p>{$errors.contactPhoneNumber}</p>
				{/if}
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

	[data-isRequired] > label::after {
		content: " ( erforderlich )";
		@apply text-xs text-gray-400;
	}
</style>
