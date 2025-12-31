import type { ReactNode } from "react";
import FancyArrowHead from "@/assets/svg/FancyArrowHead";
import FancyArrowStalk from "@/assets/svg/FancyArrowStalk";
import { ButtonType } from "@/utilities/types";

export type URGButtonProps = {
	buttonType: ButtonType;
	className?: string;
	children?: ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
	arrowSpinned?: boolean;
	onClick?: () => void;
};

export default function URGButton({
	buttonType,
	className,
	children,
	type,
	arrowSpinned = false,
	onClick,
}: URGButtonProps) {
	return (
		<button
			className={`${buttonType} ${className} flex items-center gap-3 group`}
			type={type ? type : "button"}
			onClick={onClick}
		>
			{children}
			{buttonType === ButtonType.expandArrow ? (
				<div
					className={`relative h-[40px] w-[40px] ${arrowSpinned ? "rotate-180" : ""}`}
				>
					<FancyArrowHead className="absolute rotate-90 size-10 fill-urg-blue z-10 -left-[60%] group-hover:left-0 duration-200" />
					<FancyArrowStalk className="absolute rotate-90 size-10 fill-urg-blue z-0 -left-[40%] group-hover:left-0 opacity-0 group-hover:opacity-100 duration-200" />
				</div>
			) : null}
		</button>
	);
}
