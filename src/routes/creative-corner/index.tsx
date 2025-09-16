import { createFileRoute, Link } from "@tanstack/react-router";
import GrainyBackground from "@/components/GrainyBackground";
import URGButton from "@/components/URGButton";
import { getCreativeContent } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";
import { dateFormatter } from "@/utilities/dateFormatter";
import { ButtonType } from "@/utilities/types";

export const Route = createFileRoute("/creative-corner/")({
	component: CreativeCorner,
	loader: getCreativeContent,
});

function CreativeCorner() {
	const creativeContent = Route.useLoaderData();

	return (
		<section className="px-9 py-12 xl:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="flex flex-col gap-6 xl:flex-row items-center xl:justify-between">
				<div className="flex flex-col gap-4 w-full xl:w-[430px]">
					<h3>My Creative Outlet</h3>
					<p className="text-urg-black-75">
						Sometimes inspiration strikes and you make something just for you.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center mt-8">
				<div className="w-full xl:w-[84%] flex flex-col gap-16 xl:gap-24">
					{creativeContent.map((content) =>
						content.featured ? (
							<div
								key={content._id}
								className="flex flex-col xl:flex-row gap-8"
							>
								<figure className="h-[400px] xl:h-auto w-[65%] aspect-video overflow-hidden shrink-0 hover:brightness-75">
									<Link
										to="/creative-corner/$slug"
										params={{
											slug: content.slug.current,
										}}
									>
										<img
											src={urlFor(content.mainImage)
												.width(1000)
												.height(600)
												.url()}
											alt={content.title}
											className="h-auto w-full object-cover"
										/>
									</Link>
								</figure>

								<div className="flex flex-col">
									<div className="flex flex-col gap-3">
										<div className="flex flex-col gap-1">
											<Link
												to="/creative-corner/$slug"
												params={{
													slug: content.slug.current,
												}}
											>
												<h2 className="hover:text-urg-blue">{content.title}</h2>
											</Link>
											<p className="text-urg-orange p-small">
												{dateFormatter(content.publishedAt)}
											</p>
										</div>
										<div className="flex flex-wrap gap-4">
											{content.tags.map((tag: string) => {
												return (
													<p key={tag} className="tag">
														{tag}
													</p>
												);
											})}
										</div>
										<p className="text-urg-black-75 p-big">
											{content.description}
										</p>
									</div>
									<Link
										to="/creative-corner/$slug"
										params={{
											slug: content.slug.current,
										}}
									>
										<URGButton buttonType={ButtonType.expandArrow}>
											Read more
										</URGButton>
									</Link>
								</div>
							</div>
						) : null,
					)}
					<div className="flex flex-wrap gap-8 xl:grid xl:grid-cols-3 xl:gap-24">
						{creativeContent.map((content) =>
							content.featured ? null : (
								<Link
									key={content._id}
									to="/creative-corner/$slug"
									params={{
										slug: content.slug.current,
									}}
								>
									<div className="flex flex-row xl:flex-col w-full gap-5 group">
										<figure className="h-[80px] w-[150px] xl:h-auto xl:w-full aspect-video overflow-hidden group-hover:brightness-75">
											<img
												src={urlFor(content.mainImage)
													.width(500)
													.height(290)
													.url()}
												alt={content.title}
												className="h-full w-full object-cover"
											/>
										</figure>
										<div className="w-full">
											<div className="flex flex-col gap-2">
												<div className="flex flex-col gap-1">
													<h4 className="group-hover:text-urg-blue">
														{content.title}
													</h4>

													<p className="text-urg-orange p-small">
														{dateFormatter(content.publishedAt)}
													</p>
												</div>

												<p className="text-urg-black-75 xl:p-big">
													{content.description}
												</p>
											</div>
											<URGButton buttonType={ButtonType.expandArrow}>
												Read more
											</URGButton>
										</div>
									</div>
								</Link>
							),
						)}
					</div>
				</div>
			</div>
			<GrainyBackground />
		</section>
	);
}
