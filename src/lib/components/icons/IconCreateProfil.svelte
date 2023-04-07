<script lang="ts">
	export let gradientColorStart: string = "rgb(var(--color-primary-500))";
	export let gradientColorEnd: string = "rgb(var(--color-success-500))";
	export let width: number = 32;
	export let height: number = 32;
</script>

<svg {width} {height} viewBox="0 0 49 49" fill="none">
	<path
		d="M44.6316 23.8919V5.64865C44.6316 4.68097 44.2573 3.75292 43.591 3.06866C42.9248 2.38441 42.0212 2 41.0789 2H5.55263C4.61042 2 3.70679 2.38441 3.04054 3.06866C2.37429 3.75292 2 4.68097 2 5.64865V42.1351C2 43.1028 2.37429 44.0309 3.04054 44.7151C3.70679 45.3994 4.61042 45.7838 5.55263 45.7838H23.3158M41.1382 34.8378V47M47 40.8581H35.1579"
		stroke="url(#paint0_linear_303_36)"
		stroke-width="2.66667"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M23.3158 22.6757C26.5859 22.6757 29.2369 19.9531 29.2369 16.5946C29.2369 13.2361 26.5859 10.5135 23.3158 10.5135C20.0457 10.5135 17.3948 13.2361 17.3948 16.5946C17.3948 19.9531 20.0457 22.6757 23.3158 22.6757Z"
		stroke="url(#paint1_linear_303_36)"
		stroke-width="2.66667"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M33.9737 32.4054C33.9737 27.0321 29.2014 22.6757 23.3159 22.6757C17.4303 22.6757 12.658 27.0321 12.658 32.4054"
		stroke="url(#paint2_linear_303_36)"
		stroke-width="2.66667"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<defs>
		<linearGradient
			id="paint0_linear_303_36"
			x1="47"
			y1="24.8947"
			x2="2"
			y2="24.8947"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={gradientColorEnd} />
			<stop offset="1" stop-color={gradientColorStart} />
		</linearGradient>
		<linearGradient
			id="paint1_linear_303_36"
			x1="29.2369"
			y1="16.7013"
			x2="17.3948"
			y2="16.7013"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={gradientColorEnd} />
			<stop offset="1" stop-color={gradientColorStart} />
		</linearGradient>
		<linearGradient
			id="paint2_linear_303_36"
			x1="33.9737"
			y1="27.6259"
			x2="12.658"
			y2="27.6259"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={gradientColorEnd} />
			<stop offset="1" stop-color={gradientColorStart} />
		</linearGradient>
	</defs>
</svg>
