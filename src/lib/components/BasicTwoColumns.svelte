<script lang="ts">
	export let ariaLabel: string = "";
	export let marginBottom: string = "mb-48";
	export let columnGap: string = "gap-x-8";
</script>

<section
	class="{marginBottom} grid grid-cols-2 place-items-center {columnGap}"
	aria-label={ariaLabel}
>
	<slot name="leftColumn" />
	<slot name="rightColumn" />
</section>
