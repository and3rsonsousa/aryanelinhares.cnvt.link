import { ReactChild } from "react";

export default function Container({
	children,
	className,
}: {
	children: ReactChild;
	className?: string;
}) {
	return <div className={`container ${className}`}>{children}</div>;
}
