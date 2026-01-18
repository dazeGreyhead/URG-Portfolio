import type { SanityDocument } from "@sanity/client";
import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import { getIndividualProject } from "@/sanity/client";

export const Route = createFileRoute("/portfolio-projects/$slug/")({
	component: PortfolioProject,
	loader: async ({ params }) => await getIndividualProject(params.slug),
	head: ({ params, loaderData }) => {
		return {
			meta: [
				{
					title: `${loaderData ? loaderData.title : "Portfolio Projects"} - Umang Raj Gurung`,
				},
				{
					name: "description",
					content: loaderData
						? loaderData.description
						: "Portfolio projects of Umang Raj Gurung.",
				},

				{
					name: "keywords",
					content: loaderData ? loaderData.tags?.join(", ") : "",
				},

				{
					property: "og:title",
					content: `${loaderData ? loaderData.title : "Portfolio Projects"} - Umang Raj Gurung`,
				},
				{
					property: "og:description",
					content: loaderData
						? loaderData.description
						: "Portfolio projects of Umang Raj Gurung.",
				},
				{
					property: "og:image",
					content: loaderData
						? loaderData.mainImage?.url
						: "/Urg Website Landing Page.png",
				},
				{
					property: "og:url",
					content: `https://www.umangrajgurung.com.np/portfolio-projects/${params.slug}`,
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
					content: `${loaderData ? loaderData.title : "Portfolio Projects"} - Umang Raj Gurung`,
				},
				{
					name: "twitter:description",
					content: loaderData
						? loaderData.description
						: "Portfolio projects of Umang Raj Gurung.",
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
					href: `https://www.umangrajgurung.com.np/portfolio-projects/${params.slug}`,
				},
			],
		};
	},
});

function PortfolioProject() {
	const portfolioProject: SanityDocument = Route.useLoaderData();

	return <ContentPage content={portfolioProject} />;
}
