<script lang="ts">
	export let imageUrl: string = "https://source.unsplash.com/random/1280x540?skeleton";
	export let navCardHeading: string = "This is your heading";
	export let navCardDescription: string = "This is your description";
	export let navCardUrl: string = "/";
	export let outlineColor: string = "outline-primary-900";
</script>

<a
	class="card card-hover block overflow-hidden bg-primary-500 text-center outline outline-2 {outlineColor}"
	href={navCardUrl}
>
	<header>
		<img src={imageUrl} class="bg-black/50" alt="Post" />
	</header>
	<div class="space-y-4 p-4">
		<h3>{navCardHeading}</h3>
		<article>
			<p>
				{navCardDescription}
			</p>
		</article>
	</div>
</a>
