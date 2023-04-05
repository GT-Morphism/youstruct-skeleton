<script lang="ts">
	export let ariaLabel: string;
	export let role: string = "contentinfo";
</script>

<section class="mb-48 grid grid-cols-2 place-items-center gap-x-8" {role} aria-label={ariaLabel}>
	<slot name="leftColumn" />
	<slot name="rightColumn" />
</section>
