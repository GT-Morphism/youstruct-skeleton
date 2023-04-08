<script lang="ts">
	export let ariaLabel: string;
</script>

<section class="mb-48 grid grid-cols-2 place-items-center gap-x-8" aria-label={ariaLabel}>
	<slot name="leftColumn" />
	<slot name="rightColumn" />
</section>
