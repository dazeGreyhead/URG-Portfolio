import { Slot } from "@radix-ui/react-slot";
import { BiSolidChevronRight } from "react-icons/bi";
import { IoEllipsisHorizontal } from "react-icons/io5";

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
	return (
		<nav
			aria-label="breadcrumb"
			data-slot="breadcrumb"
			className="mb-3"
			{...props}
		/>
	);
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
	return (
		<ol
			data-slot="breadcrumb-list"
			// Replaced text-muted-foreground with text-slate-500
			className={`text-urg-black-50 flex flex-wrap items-center gap-1.5 p-regular wrap-break-word sm:gap-2.5 ${className ?? ""}`}
			{...props}
		/>
	);
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={`inline-flex items-center gap-1.5 ${className ?? ""}`}
			{...props}
		/>
	);
}

function BreadcrumbLink({
	asChild,
	className,
	...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : "a";

	return (
		<Comp
			data-slot="breadcrumb-link"
			// Replaced hover:text-foreground with hover:text-slate-900
			className={`hover:text-urg-blue hover:underline hover:underline-offset-5 transition-colors ${className ?? ""}`}
			{...props}
		/>
	);
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="breadcrumb-page"
			role="link"
			aria-disabled="true"
			aria-current="page"
			// Replaced text-foreground with text-slate-950
			className={`text-slate-950 font-normal ${className ?? ""}`}
			{...props}
		/>
	);
}

function BreadcrumbSeparator({
	children,
	className,
	...props
}: React.ComponentProps<"li">) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			// size-3.5 is 14px. Replaced with w-3.5 h-3.5
			className={`[&>svg]:w-3.5 [&>svg]:h-3.5 ${className ?? ""}`}
			{...props}
		>
			{children ?? <BiSolidChevronRight className="text-urg-blue" />}
		</li>
	);
}

function BreadcrumbEllipsis({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			// size-9 is w-9 h-9
			className={`flex h-9 w-9 items-center justify-center ${className ?? ""}`}
			{...props}
		>
			<IoEllipsisHorizontal className="w-4 h-4" />
			<span className="sr-only">More</span>
		</span>
	);
}

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
};
