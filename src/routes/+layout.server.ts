import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";
import type { LayoutServerLoad } from "./$types";

const contactSchema = z.object({
	contactName: z.string().min(5),
	contactEmail: z.string().email(),
	wantsToBeContactedWith: z.enum(["E-Mail", "Telefonnummer"]),
	contactPhoneNumber: z.string(),
	contactMessage: z.string().optional(),
});

export const load: LayoutServerLoad = async (event) => {
	const contactForm = await superValidate(event, contactSchema);

	return { contactForm };
};
