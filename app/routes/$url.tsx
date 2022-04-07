import { LoaderFunction, redirect } from "remix";
import { getAppData } from "~/lib/app.server";
import { AppDataType } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
	let data: AppDataType = await getAppData();
	let link = data.links.filter((link) => link.url === params.url)[0];

	if (!link) throw new Error("Não existe Link");
	if (!link.redirect) throw new Error("Não existe Redirect");
	return redirect(link.redirect);
};
