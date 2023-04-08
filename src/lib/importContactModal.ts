import { modalStore } from "@skeletonlabs/skeleton";
import type { ModalComponent, ModalSettings } from "@skeletonlabs/skeleton";
import ModalContact from "$lib/components/ModalContact.svelte";

export default function modalContact(): void {
	const c: ModalComponent = { ref: ModalContact };
	const d: ModalSettings = {
		type: "component",
		component: c,
	};
	modalStore.trigger(d);
}
