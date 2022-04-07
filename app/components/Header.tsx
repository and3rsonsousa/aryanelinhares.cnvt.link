import { HeaderType } from "~/types";

export default function Header({ name, logo, className, excerpt }: HeaderType) {
	return (
		<div className={`header ${className}`}>
			{logo && (
				<div className={logo.className}>
					{logo.url ? (
						<img
							src={logo.url}
							alt={typeof name === "string" ? name : "Logotipo"}
						/>
					) : (
						logo.component
					)}
				</div>
			)}
			{name &&
				(/<.*>/.test(name.title) ? (
					<h1 dangerouslySetInnerHTML={{ __html: name.title }}></h1>
				) : (
					<h1 className={name.className}>{name.title}</h1>
				))}
			{excerpt &&
				(/<.*>/.test(excerpt) ? (
					<h3 dangerouslySetInnerHTML={{ __html: excerpt }}></h3>
				) : (
					<h3>{excerpt}</h3>
				))}
		</div>
	);
}
