<script lang="ts">
	import { onMount } from "svelte";

	let isLoaded: boolean = false;

	onMount(() => {
		isLoaded = true;
	});
</script>

{#if isLoaded}
	<slot />
{/if}
