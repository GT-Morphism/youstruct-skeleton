import { DISCORD_WEBHOOK_URL } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	manageContactForm: async ({ request }) => {
		const formData = await request.formData();

		const contactName = formData.get("contactName");
		const wantsToBeContactedWith = formData.get("wantsToBeContactedWith");

		const contactInfo =
			wantsToBeContactedWith == "email"
				? formData.get("contactEmail")
				: formData.get("contactPhoneNumber");

		const contactMessage = formData.get("contactMessage");

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

		throw redirect(303, "/protected");
	},
};
