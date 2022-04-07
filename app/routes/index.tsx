import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { getAppData } from "~/lib/app.server";

import { App, Container, Footer, Header, ButtonLinks } from "~/components";
import { AppDataType, ItemType } from "~/types";

export const meta: MetaFunction = ({ data }: { data: AppDataType }) => {
	return { title: data.app.name || "cnvt.link" };
};

export const loader: LoaderFunction = async () => {
	let data = getAppData();
	return data;
};

export default function Index() {
	let { app, container, backdrop, header, links } =
		useLoaderData<AppDataType>();

	let mainLinks: Array<ItemType> = [];
	let footerLinks: Array<ItemType> = [];

	links.map((link) => {
		if (link.footer) {
			footerLinks.push(link);
		} else {
			mainLinks.push(link);
		}
		return link;
	});

	return (
		<App className={app.className}>
			<Container className={container && container.className}>
				<>
					<div className="content">
						<Header {...header}></Header>
						<ButtonLinks links={mainLinks} />
						<Footer links={footerLinks} />
					</div>
				</>
			</Container>
		</App>
	);
}
