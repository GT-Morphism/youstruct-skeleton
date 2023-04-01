<script lang="ts">
	import type { ComponentProps } from "svelte";
	//interface $$Props extends ComponentProps<IconCheckMark> {}
	import IconCheckMark from "./icons/IconCheckMark.svelte";

	export let Icon = IconCheckMark;
	export let fillColor: string = "currentColor";
	export let innerColor: string = "currentColor";
	export let size: number = 32;
	export let text: string = "Default Text";
</script>

<div class="flex items-center gap-x-2">
	<Icon {fillColor} {size} {innerColor} />
	<p>{text}</p>
</div>
