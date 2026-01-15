import { PortableText } from "@portabletext/react";
import type { SanityDocument } from "@sanity/client";

import ReactPlayer from "react-player";
import { components } from "@/sanity/portableTextComponents";
import { urlFor } from "@/sanity/sanityImageUrl";
import { dateFormatter } from "@/utilities/dateFormatter";
import ContentShareButtons from "./ContentShareButtons";
import GrainyBackground from "./GrainyBackground";
import { RouterBreadcrumb } from "./RouterBreadcrumb";

type ContentPageProps = {
	content: SanityDocument;
};

export default function ContentPage({ content }: ContentPageProps) {
	return (
		<section className="px-9 pt-16 pb-10 md:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<RouterBreadcrumb />
			<div className="w-full flex flex-col xl:flex-row justify-center">
				{content && (
					<div key={content._id} className="flex flex-col w-full gap-5">
						<div className="flex flex-col xl:flex-row xl:justify-between gap-5 xl:gap-10 h-auto items-center mb-0 xl:mb-10 border-urg-black">
							<div className="flex flex-col gap-3 xl:gap-6 ">
								<div className="flex flex-col gap-2">
									<h1 className="text-4xl md:text-6xl xl:text-8xl">
										{content.title}
									</h1>
									<p className="text-urg-orange p-normal xl:p-big">
										{dateFormatter(content.publishedAt)}
									</p>
									<p className="text-urg-black-75 p-big">
										{content.description}
									</p>
									<div className="flex flex-wrap gap-2 xl:gap-4">
										{content.tags.map((tag: string) => {
											return (
												<p key={tag} className="tag">
													{tag}
												</p>
											);
										})}
									</div>
								</div>
								<ContentShareButtons
									title={content.title}
									description={content.description}
									className="flex gap-4 md:gap-6 xl:gap-8 flex-row flex-wrap justify-center xl:justify-normal"
									buttonContainerStyles="group cursor-pointer p-2 md:p-3 xl:p-4 rounded-full hover:bg-urg-black"
									iconStyles="size-4.5 md:size-6 xl:size-8 text-urg-black group-hover:text-urg-white"
								/>
							</div>
							<figure className="h-auto w-full xl:w-[55%] overflow-hidden shrink-0 ">
								{content.coverVideo ? (
									<ReactPlayer
										src={content.coverVideo.url}
										style={{
											width: "100%",
											height: "auto",
											aspectRatio: 16 / 9,
											marginBottom: "24px",
										}}
									/>
								) : (
									<div>
										<img
											src={urlFor(content.mainImage).url()}
											alt={content.mainImage.alt}
											className="grow h-auto w-full "
										/>
										{content.mainImage.caption && (
											<figcaption className="p-small uppercase text-urg-black-50 mt-3 italic">
												{content.mainImage.caption}
											</figcaption>
										)}
									</div>
								)}
							</figure>
						</div>
						<div className="flex justify-center ">
							<article className="prose lg:prose-xl max-w-none w-full md:w-[80%] 2xl:w-[50%]">
								<PortableText value={content.body} components={components} />
							</article>
						</div>
					</div>
				)}
			</div>
			<GrainyBackground />
		</section>
	);
}
