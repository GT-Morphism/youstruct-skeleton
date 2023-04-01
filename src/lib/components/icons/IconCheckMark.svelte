<script lang="ts">
	export let size: number = 32;
	export let fillColor: string = "currentColor";
	export let innerColor: string = "currentColor";
	let width: number = size,
		height: number = size;
</script>

<svg {width} {height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
	><path
		fill={fillColor}
		d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
	/><path
		fill={innerColor}
		d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"
	/></svg
>
