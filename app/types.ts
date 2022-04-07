export type BackdropType = {
	className?: string;
	// className?: string | JSX.Element;
	file?: { path: string; className: string };
};
export type NameType = { title: string; className: string };
export type LogoType = {
	url?: string;
	component?: JSX.Element;
	className?: string;
};
export type HeaderType = {
	name?: NameType;
	excerpt?: string;
	logo?: LogoType;
	className?: string;
};

export type ItemType = {
	name?: string | JSX.Element;
	className?: string;
	download?: true;
	type?: "primary" | "alternative";
	url?: string;
	redirect?: string;
	footer?: true;
	icon?: "tiktok" | "instagram" | "facebook" | "email" | "whatsapp";
	group?: ItemType[];
	spaceless?: true;
};

export type AppDataType = {
	app: { className: string; name: string };
	backdrop?: BackdropType;
	container?: { className: string };
	header: HeaderType;
	links: ItemType[];
};
