<script lang="ts">
	import { fly } from "svelte/transition";
</script>

<form
	transition:fly={{
		duration: 500,
	}}
	class="card mx-auto flex w-full max-w-xs flex-col gap-y-8 p-10 outline outline-2 outline-primary-500"
	action="?/verifyForShare"
	method="POST"
>
	<div class="text-primary-300">
		<label class="text-sm" for="shareUsername"> Nutzername </label>
		<input
			class="w-full bg-surface-900 px-2 py-1 outline outline-2 outline-primary-500 rounded-container-token"
			type="text"
			name="shareUsername"
			id="shareUsername"
		/>
	</div>
	<div class="text-primary-300">
		<label class="text-sm" for="sharePassword"> Passwort </label>
		<input
			class="w-full bg-surface-900 px-2 py-1 outline outline-2 outline-primary-500 rounded-container-token"
			type="password"
			name="sharePassword"
			id="sharePassword"
		/>
	</div>
	<button type="submit" class="btn variant-ghost-success"> Tamam Bruder, zeig mal. </button>
</form>
