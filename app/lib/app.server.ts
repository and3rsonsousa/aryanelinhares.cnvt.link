import { AppDataType } from "~/types";

export function getAppData() {
	let appData: AppDataType = {
		app: {
			name: "Aryane Linhares",
			className:
				"font-light text-brand-3 antialiased bg-gradient-to-br from-brand-1 to-brand-2",
		},
		header: {
			logo: {
				url: "/logo.png",
				component: undefined,
				className: "w-36 mx-auto",
			},
		},
		links: [
			{
				name: "Pedir pelo WhatsApp",
				url: "whatsapp",
				redirect:
					"https://api.whatsapp.com/send/?phone=5588992358601&text&app_absent=0",
				type: "primary",
			},
			{
				name: "Menu da Páscoa 2022",
				url: "menu-pascoa-2022.pdf",
				download: true,
				type: "alternative",
			},
			{
				name: "Encomenda da Páscoa",
				url: "pascoa-2022",
				redirect:
					"https://api.whatsapp.com/send/?phone=5588992476767&text&app_absent=0",
			},
			{
				name: "Faça sua Encomenda",
				url: "encomenda",
			},
			{
				name: "Onde Estamos ( Mapa )",
				url: "onde-estamos",
				redirect: "https://g.page/aryanelinhares",
			},
			{
				icon: "instagram",
				url: "https://instagram.com/aryanelinhares",
				footer: true,
			},
		],
	};

	return appData;
}
