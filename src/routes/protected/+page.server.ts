import { DISCORD_WEBHOOK_URL } from "$env/static/private";

import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

import { contactSchema } from "$lib/server/contactSchema";
import { superValidate } from "sveltekit-superforms/server";

export const actions: Actions = {
	manageContactForm: async (event) => {
		const contactForm = await superValidate(event, contactSchema);

		if (!contactForm.valid) {
			return fail(400, { contactForm });
		}

		const contactName = contactForm.data.contactName;
		const wantsToBeContactedWith = contactForm.data.wantsToBeContactedWith;

		const contactInfo =
			wantsToBeContactedWith == "E-Mail"
				? contactForm.data.contactEmail
				: contactForm.data.contactPhoneNumber;

		const contactMessage = contactForm.data.contactMessage || "Keine Nachricht hinterlassen.";

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
