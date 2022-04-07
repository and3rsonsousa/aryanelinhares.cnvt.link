import { ReactChild } from "react";

export default function App({
	children,
	className,
}: {
	children: ReactChild;
	className?: string;
}) {
	return <div className={`app ${className}`}>{children}</div>;
}
