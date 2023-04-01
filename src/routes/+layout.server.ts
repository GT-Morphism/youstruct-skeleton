import { contactSchema } from "$lib/server/contactSchema";
import { superValidate } from "sveltekit-superforms/server";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
	const contactForm = await superValidate(event, contactSchema);

	return { contactForm };
};
