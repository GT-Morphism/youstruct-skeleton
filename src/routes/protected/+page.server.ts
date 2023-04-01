import { DISCORD_WEBHOOK_URL } from "$env/static/private";

import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";

const contactSchema = z.object({
	contactName: z
		.string({ required_error: "Sie müssen einen Namen angeben." })
		.min(1, { message: "Ihr Name muss mindestens einen Buchstaben enthalten." }),
	contactEmail: z
		.string({ required_error: "Sie müssen eine E-Mail Adresse angeben." })
		.trim()
		.email({ message: "Überprüfen Sie Ihre E-Mail Adresse; etwas scheint nicht zu stimmen." })
		.optional(),
	wantsToBeContactedWith: z.enum(["E-Mail", "Telefonnummer"]),
	contactPhoneNumber: z
		.string({ required_error: "Sie müssen eine gültige Telefonnummer angeben." })
		.trim()
		.refine((phoneString) => isPhoneNumberTooShort(phoneString), {
			message: "Überprüfen Sie Ihre Telefonnummer; sie scheint zu kurz zu sein.",
		})
		.refine((phoneString) => isPhoneNumberTooLong(phoneString), {
			message: "Überprüfen Sie Ihre Telefonnummer; sie scheint zu lang zu sein.",
		})
		.refine((phoneString) => doesPhoneNumberContainOnlyNumbers(phoneString), {
			message: "Überprüfen Sie Ihre Telefonnummer; sie enthält ungültige Zeichen.",
		})
		.optional(),
	contactMessage: z.string().optional(),
});

function isPhoneNumberTooShort(phoneString: string): boolean {
	return getPhoneStringLength(phoneString) >= 7;
}

function isPhoneNumberTooLong(phoneString: string): boolean {
	return getPhoneStringLength(phoneString) <= 15;
}

function getPhoneStringLength(phoneString: string): number {
	return getRidOfWhiteSpace(phoneString).length;
}

function getRidOfWhiteSpace(phoneString: string): string {
	return phoneString.split(" ").join("").split("+").join("");
}

function doesPhoneNumberContainOnlyNumbers(phoneString: string): boolean {
	return /^\d+$/.test(getRidOfWhiteSpace(phoneString));
}

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
