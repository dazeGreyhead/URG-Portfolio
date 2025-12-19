import { createFileRoute, Link } from "@tanstack/react-router";
import GrainyBackground from "@/components/GrainyBackground";
import URGButton from "@/components/URGButton";
import { getPortfolioProjects } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";
import { dateFormatter } from "@/utilities/dateFormatter";
import { ButtonType } from "@/utilities/types";

export const Route = createFileRoute("/portfolio-projects/")({
	component: PortfolioProjects,
	loader: getPortfolioProjects,
});

function PortfolioProjects() {
	const portfolioProjects = Route.useLoaderData();

	return (
		<section className="px-9 py-12 xl:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="flex flex-col gap-6 xl:flex-row items-center xl:justify-between">
				<div className="flex flex-col gap-4 w-full xl:w-[430px]">
					<h3>My Portfolio Projects</h3>
					<p className="text-urg-black-75">
						Here's some of the projects I've worked on over the years.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center mt-8">
				<div className="w-full xl:w-[84%] flex flex-col gap-16 xl:gap-24">
					<div className="flex flex-wrap gap-8 xl:grid xl:grid-cols-3 xl:gap-24">
						{portfolioProjects.map((project) => (
							<Link
								key={project._id}
								to="/portfolio-projects/$slug"
								params={{
									slug: project.slug.current,
								}}
							>
								<div className="flex flex-row xl:flex-col w-full gap-5 group">
									<figure className="h-[80px] w-[150px] xl:h-auto xl:w-full aspect-video overflow-hidden group-hover:brightness-75">
										<img
											src={urlFor(project.mainImage)
												.width(500)
												.height(290)
												.url()}
											alt={project.title}
											className="h-full w-full object-cover"
										/>
									</figure>
									<div className="w-full">
										<div className="flex flex-col gap-2">
											<div className="flex flex-col gap-1">
												<h4 className="group-hover:text-urg-blue">
													{project.title}
												</h4>

												<p className="text-urg-orange p-small">
													{dateFormatter(project.publishedAt)}
												</p>
											</div>

											<p className="text-urg-black-75 xl:p-big">
												{project.description}
											</p>
										</div>
										<URGButton buttonType={ButtonType.expandArrow}>
											{project.coverVideo ? "Watch" : "Read more"}
										</URGButton>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
			<GrainyBackground />
		</section>
	);
}
