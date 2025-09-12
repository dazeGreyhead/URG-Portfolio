import type { ButtonType } from "@/utilities/types";
import type { ReactNode } from "react";

export type URGButtonProps = {
	buttonType: ButtonType;
	className?: string;
	children: ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
};

export default function URGButton({
	buttonType,
	className,
	children,
	type,
}: URGButtonProps) {
	return (
		<button
			className={`${buttonType} ${className}`}
			type={type ? type : "button"}
		>
			{children}
		</button>
	);
}
