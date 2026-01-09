import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio-projects")({
	staticData: { breadcrumb: "Portfolio Projects" },
});
