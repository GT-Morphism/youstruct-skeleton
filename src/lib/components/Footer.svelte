<script lang="ts">
	import LogoY from "./LogoY.svelte";
	import IconInstagram from "./icons/IconInstagram.svelte";
	import IconTikTok from "./icons/IconTikTok.svelte";

	import modalContact from "$lib/importContactModal";
</script>

<footer
	class="mx-auto grid max-w-[100rem] grid-cols-4 place-items-center border-t-2 border-surface-600 p-8"
>
	<!-- LOGO -->
	<div class="flex flex-col items-center justify-center gap-y-4">
		<a href="/protected" class="transition-transform duration-200 hover:scale-95">
			<LogoY width={200} height={200} /></a
		>
		<p class=" !text-sm !text-gray-400">
			© {new Date().getFullYear()}
			<span class="gradient-text-color-success me-1 ms-1">YouStruct</span>
			<span class="me-1">|</span> Alle Rechte vorbehalten
		</p>
	</div>
	<!-- ABOUT THE BUSINESS -->
	<div>
		<h3 class="gradient-text-color-success">Das sind wir</h3>
		<ul class="flex flex-col gap-y-2">
			<li class="w-fit">
				<a
					class="gradient-color-on-hover gradient-underline-on-hover unstyled"
					href="/protected/karriere">Karriere</a
				>
			</li>
			<li class="w-fit">
				<a
					class="gradient-color-on-hover gradient-underline-on-hover unstyled"
					href="/protected/ueber-uns">Über Uns</a
				>
			</li>
			<li class="w-fit">
				<a
					class="gradient-color-on-hover gradient-underline-on-hover unstyled"
					href="/protected/presse">Presse</a
				>
			</li>
		</ul>
	</div>
	<!-- ABOUT OUR SERVICES -->
	<div>
		<h3 class="gradient-text-color-success">Das bieten wir</h3>
		<ul class="flex flex-col gap-y-2">
			<li class="w-fit">
				<a
					class="gradient-color-on-hover gradient-underline-on-hover unstyled"
					href="/protected/fuer-azubis">Für Azubis</a
				>
			</li>
			<li class="w-fit">
				<a
					class="gradient-color-on-hover gradient-underline-on-hover unstyled"
					href="/protected/fuer-studenten">Für Studenten</a
				>
			</li>
			<li class="w-fit">
				<a
					class="gradient-color-on-hover gradient-underline-on-hover unstyled"
					href="/protected/fuer-unternehmen">Für Unternehmen</a
				>
			</li>
		</ul>
	</div>
	<!-- SOCIAL -->
	<div>
		<h3 class="gradient-text-color-success text-center">Wir sind für Dich da</h3>
		<ul class="flex items-center justify-center gap-x-8">
			<li>
				<button class="focus-primary btn variant-ghost-primary" on:click={modalContact}
					>Kontakt</button
				>
			</li>
			<li>
				<a
					class="unstyled gradient-color-on-hover gradient-underline-on-hover flex flex-col items-center text-gray-400"
					href="https://www.instagram.com/"
					><IconInstagram /><span class="mt-1 !text-xs">Instagram</span></a
				>
			</li>
			<li>
				<a
					class="unstyled gradient-color-on-hover gradient-underline-on-hover flex flex-col items-center text-gray-400"
					href="https://www.tiktok.com/"><IconTikTok /><span class="mt-1 !text-xs">TikTok</span></a
				>
			</li>
		</ul>
	</div>
</footer>

<style lang="postcss">
	a {
		@apply no-underline;
	}

	h3 {
		@apply mb-4 !text-base;
	}
</style>
