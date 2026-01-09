import type { SanityDocument } from "@sanity/client";
import { createFileRoute } from "@tanstack/react-router";

import ContentPage from "@/components/ContentPage";
import { getIndividualCreativeContent } from "@/sanity/client";

export const Route = createFileRoute("/creative-corner/$slug/")({
	component: CreativeCornerContent,
	loader: async ({ params }) => await getIndividualCreativeContent(params.slug),
});

function CreativeCornerContent() {
	const creativeContentPost: SanityDocument = Route.useLoaderData();

	return <ContentPage content={creativeContentPost} />;
}
