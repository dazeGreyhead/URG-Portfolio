import type { SanityDocument } from "@sanity/client";
import { Link } from "@tanstack/react-router";
import { urlFor } from "@/sanity/sanityImageUrl";
import { dateFormatter } from "@/utilities/dateFormatter";
import { ButtonType } from "@/utilities/types";
import URGButton from "./URGButton";

type FetchedProjectListProps = {
	projectList: SanityDocument[];
	highlightFeatured?: boolean;
};

//  This component displays the fetched list of projects.
export default function FetchedProjectList({
	projectList,
	highlightFeatured = false,
}: FetchedProjectListProps) {
	return (
		<div className="flex flex-col items-center mt-8">
			<div className="w-full xl:w-[84%] flex flex-col gap-16 xl:gap-24">
				{projectList.map((project) =>
					project.featured && highlightFeatured ? (
						<div
							key={project._id}
							className="flex flex-col xl:flex-row gap-8 group"
						>
							<Link
								to={
									project._type === "portfolio-projects"
										? "/portfolio-projects/$slug"
										: "/creative-corner/$slug"
								}
								params={{
									slug: project.slug.current,
								}}
							>
								<figure className="h-auto w-full aspect-video overflow-hidden shrink-0 ">
									<img
										src={urlFor(project.mainImage)
											.width(1000)
											.height(600)
											.url()}
										alt={project.title}
										className="h-auto w-full object-cover group-hover:brightness-75"
									/>
								</figure>
							</Link>
							<Link
								to="/creative-corner/$slug"
								params={{
									slug: project.slug.current,
								}}
							>
								<div className="flex flex-col">
									<div className="flex flex-col gap-3">
										<div className="flex flex-col gap-1">
											<h2 className="group-hover:text-urg-blue">
												{project.title}
											</h2>

											<p className="text-urg-orange p-small">
												{dateFormatter(project.publishedAt)}
											</p>
										</div>
										<div className="flex flex-wrap gap-4">
											{project.tags.map((tag: string) => {
												return (
													<p key={tag} className="tag">
														{tag}
													</p>
												);
											})}
										</div>
										<p className="text-urg-black-75 p-big">
											{project.description}
										</p>
									</div>

									<URGButton buttonType={ButtonType.expandArrow}>
										{project.coverVideo ? "Watch" : "Read more"}
									</URGButton>
								</div>
							</Link>
						</div>
					) : null,
				)}
				<div className="flex flex-col gap-8 xl:grid xl:grid-cols-3 xl:gap-24">
					{projectList.map((project) =>
						project.featured && highlightFeatured ? null : (
							<Link
								key={project._id}
								to={
									project._type === "portfolio-projects"
										? "/portfolio-projects/$slug"
										: "/creative-corner/$slug"
								}
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
						),
					)}
				</div>
			</div>
		</div>
	);
}
