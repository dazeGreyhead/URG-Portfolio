import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creative-corner")({
	staticData: { breadcrumb: "Creative Corner" },
});
