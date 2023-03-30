import { redirect, type Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
	const shareUsername = event.cookies.get("shareUsername");
	const sharePassword = event.cookies.get("sharePassword");

	if (event.url.pathname.startsWith("/protected")) {
		if (shareUsername != "giuseppe" || sharePassword != "giuseppe") {
			console.log("redirecting");
			throw redirect(303, "/");
		}
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;
