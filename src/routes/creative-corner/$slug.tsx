import { PortableText } from "@portabletext/react";
import type { SanityDocument } from "@sanity/client";
import { createFileRoute } from "@tanstack/react-router";
import ReactPlayer from "react-player";
import GrainyBackground from "@/components/GrainyBackground";
import { getIndividualCreativeContent } from "@/sanity/client";
import { components } from "@/sanity/portableTextComponents";
import { urlFor } from "@/sanity/sanityImageUrl";
import { dateFormatter } from "@/utilities/dateFormatter";

export const Route = createFileRoute("/creative-corner/$slug")({
	component: CreativeCornerContent,
	loader: async ({ params }) => await getIndividualCreativeContent(params.slug),
});

function CreativeCornerContent() {
	const creativeContentPost: SanityDocument = Route.useLoaderData();

	return (
		<section className="px-9 py-12 xl:pt-25 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="w-full flex justify-center">
				{creativeContentPost && (
					<div
						key={creativeContentPost._id}
						className="flex flex-row xl:flex-col w-[60%] gap-5"
					>
						<div className="flex flex-col gap-1">
							<h2>{creativeContentPost.title}</h2>
							<p className="text-urg-orange p-small">
								{dateFormatter(creativeContentPost.publishedAt)}
							</p>
						</div>
						{creativeContentPost.coverVideo ? (
							<ReactPlayer
								src={creativeContentPost.coverVideo.url}
								style={{ width: "100%", height: "auto", aspectRatio: 16 / 9 }}
							/>
						) : (
							<figure className="h-[80px] w-[150px] xl:h-auto xl:w-full aspect-video mb-6">
								<img
									src={urlFor(creativeContentPost.mainImage)
										.width(1000)
										.height(600)
										.url()}
									alt={creativeContentPost.title}
									className="h-full w-full object-cover"
								/>
							</figure>
						)}

						<div className="flex justify-center ">
							<article className="prose lg:prose-xl max-w-none w-[80%]">
								<PortableText
									value={creativeContentPost.body}
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
