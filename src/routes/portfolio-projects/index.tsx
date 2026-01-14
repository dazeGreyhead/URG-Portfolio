import { createFileRoute } from "@tanstack/react-router";
import FetchedProjectList from "@/components/FetchedProjectList";
import GrainyBackground from "@/components/GrainyBackground";
import { getPortfolioProjects } from "@/sanity/client";

export const Route = createFileRoute("/portfolio-projects/")({
	component: PortfolioProjects,
	loader: getPortfolioProjects,
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
