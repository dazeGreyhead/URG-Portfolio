import type { SanityDocument } from "@sanity/client";
import { createFileRoute } from "@tanstack/react-router";

import ContentPage from "@/components/ContentPage";
import { getIndividualCreativeContent } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";

export const Route = createFileRoute("/creative-corner/$slug/")({
	component: CreativeCornerContent,
	loader: async ({ params }) => await getIndividualCreativeContent(params.slug),
	head: ({ params, loaderData }) => {
		// 1. Check if loaderData exists AND isn't an array
		const project =
			loaderData && !Array.isArray(loaderData) ? loaderData : null;
		// Only generate the Sanity URL if both project and mainImage exist
		const imageUrl = project?.mainImage
			? urlFor(project.mainImage).url()
			: "/Urg Website Landing Page.png";

		const title = `${project ? project.title : "Creative Content"} - Umang Raj Gurung`;
		const description = project
			? project.description
			: "Creative works of Umang Raj Gurung.";

		const keywords = project ? project.tags?.join(", ") : "";
		const url = `https://www.umangrajgurung.com.np/creative-corner/${params.slug}`;

		return {
			meta: [
				{
					title: title,
				},
				{
					name: "description",
					content: description,
				},

				{
					name: "keywords",
					content: keywords,
				},

				{
					property: "og:title",
					content: title,
				},
				{
					property: "og:description",
					content: description,
				},
				{
					property: "og:image",
					content: imageUrl,
				},
				{
					property: "og:url",
					content: url,
				},
				{
					property: "og:type",
					content: "article",
				},
				{
					property: "site_name",
					content: "Umang Raj Gurung Portfolio Website",
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: title,
				},
				{
					name: "twitter:description",
					content: description,
				},
				{
					name: "twitter:image",
					content: imageUrl,
				},
			],
			links: [
				{
					rel: "canonical",
					href: url,
				},
			],
		};
	},
});

function CreativeCornerContent() {
	const creativeContentPost: SanityDocument = Route.useLoaderData();

	return <ContentPage content={creativeContentPost} />;
}
