import { PortableText } from "@portabletext/react";
import type { SanityDocument } from "@sanity/client";
import { createFileRoute } from "@tanstack/react-router";
import ReactPlayer from "react-player";
import GrainyBackground from "@/components/GrainyBackground";
import { getIndividualProject } from "@/sanity/client";
import { components } from "@/sanity/portableTextComponents";
import { urlFor } from "@/sanity/sanityImageUrl";
import { dateFormatter } from "@/utilities/dateFormatter";

export const Route = createFileRoute("/portfolio-projects/$slug")({
	component: PortfolioProject,
	loader: async ({ params }) => await getIndividualProject(params.slug),
});

function PortfolioProject() {
	const portfolioProject: SanityDocument = Route.useLoaderData();

	return (
		<section className="px-9 py-12 xl:pt-25 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="w-full flex justify-center">
				{portfolioProject && (
					<div
						key={portfolioProject._id}
						className="flex flex-row xl:flex-col w-[60%] gap-5"
					>
						<div className="flex flex-col gap-1">
							<h2>{portfolioProject.title}</h2>
							<p className="text-urg-orange p-small">
								{dateFormatter(portfolioProject.publishedAt)}
							</p>
						</div>
						{portfolioProject.coverVideo ? (
							<ReactPlayer
								src={portfolioProject.coverVideo.url}
								style={{
									width: "100%",
									height: "auto",
									aspectRatio: 16 / 9,
									marginBottom: "24px",
								}}
							/>
						) : (
							<figure className="h-[80px] w-[150px] xl:h-auto xl:w-full aspect-video mb-6">
								<img
									src={urlFor(portfolioProject.mainImage)
										.width(1000)
										.height(600)
										.url()}
									alt={portfolioProject.title}
									className="h-full w-full object-cover"
								/>
							</figure>
						)}

						<div className="flex justify-center ">
							<article className="prose lg:prose-xl max-w-none w-[80%]">
								<PortableText
									value={portfolioProject.body}
									components={components}
								/>
							</article>
						</div>
					</div>
				)}
			</div>
			<GrainyBackground />
		</section>
	);
}
