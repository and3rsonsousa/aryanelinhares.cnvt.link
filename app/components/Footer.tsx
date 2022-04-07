import {
	FaFacebookF as Facebook,
	FaInstagram as Instagram,
	FaTiktok as TikTok,
	FaWhatsapp as WhatsApp,
} from "react-icons/fa";
import { HiOutlineMail as Email } from "react-icons/hi";
import { ItemType } from "~/types";
import { ButtonLink } from "./ButtonLinks";

export default function Footer({ links }: { links: ItemType[] }) {
	return (
		<div className="footer">
			{links.map((icon, index) =>
				// <IconLink icon={icon.icon} url={icon.url} key={index} />
				icon.icon ? (
					<ButtonLink
						{...icon}
						name={icons[icon.icon]}
						key={index}
						className={`icon-link`}
					/>
				) : null
			)}
		</div>
	);
}

let icons = {
	tiktok: <TikTok />,
	facebook: <Facebook />,
	instagram: <Instagram />,
	email: <Email />,
	whatsapp: <WhatsApp />,
};
