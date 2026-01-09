import type { SanityDocument } from "@sanity/client";
import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import { getIndividualProject } from "@/sanity/client";

export const Route = createFileRoute("/portfolio-projects/$slug/")({
	component: PortfolioProject,
	loader: async ({ params }) => await getIndividualProject(params.slug),
});

function PortfolioProject() {
	const portfolioProject: SanityDocument = Route.useLoaderData();

	return <ContentPage content={portfolioProject} />;
}
