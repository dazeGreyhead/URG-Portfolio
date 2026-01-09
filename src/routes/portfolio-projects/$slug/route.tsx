import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio-projects/$slug")({
	staticData: {
		breadcrumb: (match) => {
			console.log(match);
			return match.params.slug
				.split("-")
				.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
		},
	},
});
