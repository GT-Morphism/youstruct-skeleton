<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";

	export let testimonialName: string;
	export let testimonialAge: number;
	export let testimonialPosition: string;
	export let testimonialOpinionSummary: string;
	export let testimonialOpinionContent: string;
</script>

<div class="card grid h-full grid-rows-[auto_1fr] place-items-center p-4">
	<header>
		<Avatar
			src="https://source.unsplash.com/random/1280x540?skeleton"
			alt="Post"
			width="max-w-[12rem]"
			border="border-2 border-primary-500 hover:border-success-500 transition-colors"
		/>
	</header>
	<div class="flex flex-col p-4">
		<div class="mb-4 text-center">
			<h6 class="mb-2 text-success-500">
				{testimonialName}, {testimonialAge}, {testimonialPosition}
			</h6>
			<h3 class="text-primary-500">{testimonialOpinionSummary}</h3>
		</div>
		<article class="text-center">
			<p class="!text-xl">
				{testimonialOpinionContent}
			</p>
		</article>
	</div>
</div>
