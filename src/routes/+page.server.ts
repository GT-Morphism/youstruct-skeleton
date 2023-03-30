import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	verifyForShare: async ({ cookies, request }) => {
		const data = await request.formData();
		cookies.set("shareUsername", `${data.get("shareUsername")}`, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		});

		cookies.set("sharePassword", `${data.get("sharePassword")}`, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		});
		throw redirect(303, "/protected");
	},
};
