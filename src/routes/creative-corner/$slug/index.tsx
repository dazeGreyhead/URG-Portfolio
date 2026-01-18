import type { SanityDocument } from "@sanity/client";
import { createFileRoute } from "@tanstack/react-router";

import ContentPage from "@/components/ContentPage";
import { getIndividualCreativeContent } from "@/sanity/client";

export const Route = createFileRoute("/creative-corner/$slug/")({
	component: CreativeCornerContent,
	loader: async ({ params }) => await getIndividualCreativeContent(params.slug),
	head: ({ params, loaderData }) => {
		return {
			meta: [
				{
					title: `${loaderData ? loaderData.title : "Creative Content"} - Umang Raj Gurung`,
				},
				{
					name: "description",
					content: loaderData
						? loaderData.description
						: "Creative works of Umang Raj Gurung.",
				},

				{
					name: "keywords",
					content: loaderData ? loaderData.tags?.join(", ") : "",
				},

				{
					property: "og:title",
					content: `${loaderData ? loaderData.title : "Creative Content"} - Umang Raj Gurung`,
				},
				{
					property: "og:description",
					content: loaderData
						? loaderData.description
						: "Creative works of Umang Raj Gurung.",
				},
				{
					property: "og:image",
					content: loaderData
						? loaderData.mainImage?.url
						: "/Urg Website Landing Page.png",
				},
				{
					property: "og:url",
					content: `https://www.umangrajgurung.com.np/creative-corner/${params.slug}`,
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
					content: `${loaderData ? loaderData.title : "Creative Content"} - Umang Raj Gurung`,
				},
				{
					name: "twitter:description",
					content: loaderData
						? loaderData.description
						: "Creative works of Umang Raj Gurung.",
				},
				{
					name: "twitter:image",
					content: loaderData
						? loaderData.mainImage?.url
						: "/Urg Website Landing Page.png",
				},
			],
			links: [
				{
					rel: "canonical",
					href: `https://www.umangrajgurung.com.np/creative-corner/${params.slug}`,
				},
			],
		};
	},
});

function CreativeCornerContent() {
	const creativeContentPost: SanityDocument = Route.useLoaderData();

	return <ContentPage content={creativeContentPost} />;
}
