import { DISCORD_WEBHOOK_URL } from "$env/static/private";

import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";

const contactSchema = z.object({
	contactName: z.string().min(5),
	contactEmail: z.string().email().optional(),
	wantsToBeContactedWith: z.enum(["E-Mail", "Telefonnummer"]),
	contactPhoneNumber: z.string().optional(),
	contactMessage: z.string().optional(),
});

export const actions: Actions = {
	manageContactForm: async (event) => {
		const contactForm = await superValidate(event, contactSchema);

		if (!contactForm.valid) {
			console.log("Inside !contactForm.valid");
			console.log(contactForm);
			return fail(400, { contactForm });
		}

		const contactName = contactForm.data.contactName;
		const wantsToBeContactedWith = contactForm.data.wantsToBeContactedWith;

		const contactInfo =
			wantsToBeContactedWith == "E-Mail"
				? contactForm.data.contactEmail
				: contactForm.data.contactPhoneNumber;

		const contactMessage = contactForm.data.contactMessage;

		const embed = {
			color: 5351105,
			title: "Neue Anfrage von YouStruct Website",
			fields: [
				{ name: `Name der Person`, value: contactName },
				{ name: `${wantsToBeContactedWith}`, value: contactInfo },
				{ name: `Nachricht der Person`, value: contactMessage },
			],
		};

		await fetch(DISCORD_WEBHOOK_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				content: "@everyone",
				embeds: [embed],
			}),
		});

		return { contactForm };
	},
};
