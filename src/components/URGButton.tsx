import type { ButtonType } from "@/utilities/types";
import type { ReactNode } from "react";

export type URGButtonProps = {
	buttonType: ButtonType;
	className?: string;
	children: ReactNode;
};

export default function URGButton({
	buttonType,
	className,
	children,
}: URGButtonProps) {
	return (
		<button className={`${buttonType} ${className}`} type="button">
			{children}
		</button>
	);
}
