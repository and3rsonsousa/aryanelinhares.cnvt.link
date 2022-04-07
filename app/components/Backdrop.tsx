import { BackdropType } from "~/types";

export default function Backdrop({ className, file }: BackdropType) {
	return (
		<div className={`backdrop ${className ? className : ""}`}>
			{file && <img src={file.path} className={file.className} alt="" />}
		</div>
	);
}
