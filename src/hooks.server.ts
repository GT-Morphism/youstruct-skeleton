import { SHARE_USERNAME, SHARE_PASSWORD } from "$env/static/private";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = (async ({ event, resolve }) => {
	const shareUsername = event.cookies.get("shareUsername");
	const sharePassword = event.cookies.get("sharePassword");

	if (event.url.pathname.startsWith("/protected")) {
		if (shareUsername != SHARE_USERNAME || sharePassword != SHARE_PASSWORD) {
			throw redirect(303, "/");
		}
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;
