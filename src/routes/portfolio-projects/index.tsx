import { createFileRoute } from "@tanstack/react-router";
import FetchedProjectList from "@/components/FetchedProjectList";
import GrainyBackground from "@/components/GrainyBackground";
import { getPortfolioProjects } from "@/sanity/client";

export const Route = createFileRoute("/portfolio-projects/")({
	component: PortfolioProjects,
	loader: getPortfolioProjects,
	head: () => ({
		meta: [
			{
				title: "Portfolio Projects - Umang Raj Gurung",
			},
			{
				name: "description",
				content: "Portfolio projects of Umang Raj Gurung.",
			},

			{
				name: "keywords",
				content:
					"Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer",
			},

			{
				property: "og:title",
				content: "Portfolio Projects - Umang Raj Gurung",
			},
			{
				property: "og:description",
				content: "Portfolio projects of Umang Raj Gurung.",
			},
			{
				property: "og:image",
				content: "/Urg Website Landing Page.png",
			},
			{
				property: "og:url",
				content: "https://www.umangrajgurung.com.np/portfolio-projects",
			},
			{
				property: "og:type",
				content: "website",
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
				content: "Portfolio Projects - Umang Raj Gurung",
			},
			{
				name: "twitter:description",
				content: "Portfolio projects of Umang Raj Gurung.",
			},
			{
				name: "twitter:image",
				content: "/Urg Website Landing Page.png",
			},
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.umangrajgurung.com.np/portfolio-projects",
			},
		],
	}),
});

function PortfolioProjects() {
	const portfolioProjects = Route.useLoaderData();

	return (
		<section className="px-9 py-18 md:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="flex flex-col gap-6 xl:flex-row items-center xl:justify-between">
				<div className="flex flex-col gap-4 w-full xl:w-[430px]">
					<h3>My Portfolio Projects</h3>
					<p className="text-urg-black-75">
						Here's some of the projects I've worked on over the years.
					</p>
				</div>
			</div>
			<FetchedProjectList projectList={portfolioProjects} />
			<GrainyBackground />
		</section>
	);
}
