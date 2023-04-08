<script lang="ts">
	export let gradientColorStart: string = "rgb(var(--color-primary-500))";
	export let gradientColorEnd: string = "rgb(var(--color-success-500))";
	export let width: number = 32;
	export let height: number = 32;
</script>

<svg {width} {height} viewBox="0 0 144 222" fill="none">
	<path d="M67 55.3V110.6L0 55.3V7.62939e-06L67 55.3Z" fill="url(#paint0_linear_314_21)" />
	<path
		d="M143.4 7.62939e-06V54.7L75.7 110.6V55.9L143.4 7.62939e-06Z"
		fill="url(#paint1_linear_314_21)"
	/>
	<path
		d="M143.4 111.199V165.3L75.7 221.1V165.899L142.7 110.6L143.4 111.199Z"
		fill="url(#paint2_linear_314_21)"
	/>
	<path
		opacity="0.84"
		d="M109.2 82.9L142.7 110.6L109.2 138.199L75.7 110.6L109.2 82.9Z"
		fill="url(#paint3_linear_314_21)"
	/>
	<defs>
		<linearGradient
			id="paint0_linear_314_21"
			x1="67"
			y1="56.27"
			x2="-2.48809e-08"
			y2="56.27"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={gradientColorEnd} />
			<stop offset="1" stop-color={gradientColorStart} />
		</linearGradient>
		<linearGradient
			id="paint1_linear_314_21"
			x1="143.4"
			y1="56.27"
			x2="75.7"
			y2="56.27"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={gradientColorEnd} />
			<stop offset="1" stop-color={gradientColorStart} />
		</linearGradient>
		<linearGradient
			id="paint2_linear_314_21"
			x1="143.4"
			y1="166.819"
			x2="75.7"
			y2="166.819"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={gradientColorEnd} />
			<stop offset="1" stop-color={gradientColorStart} />
		</linearGradient>
		<linearGradient
			id="paint3_linear_314_21"
			x1="142.7"
			y1="111.034"
			x2="75.7"
			y2="111.034"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={gradientColorEnd} />
			<stop offset="1" stop-color={gradientColorStart} />
		</linearGradient>
	</defs>
</svg>
