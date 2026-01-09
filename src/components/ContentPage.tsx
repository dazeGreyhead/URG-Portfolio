import { PortableText } from "@portabletext/react";
import type { SanityDocument } from "@sanity/client";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BsLinkedin, BsShare, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaReddit } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import ReactPlayer from "react-player";
import { components } from "@/sanity/portableTextComponents";
import { urlFor } from "@/sanity/sanityImageUrl";
import { dateFormatter } from "@/utilities/dateFormatter";
import GrainyBackground from "./GrainyBackground";
import { RouterBreadcrumb } from "./RouterBreadcrumb";

type ContentPageProps = {
	content: SanityDocument;
};

export default function ContentPage({ content }: ContentPageProps) {
	const [currentUrl, setCurrentUrl] = useState("");

	const location = useLocation();

	useEffect(() => {
		const baseUrl = window.location.origin;
		setCurrentUrl(`${baseUrl}${location.href}`);
	}, [location.href]);

	const shareData = {
		title: content.title,
		text: content.description,
		url: currentUrl,
	};

	const handleUniversalShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share(shareData);
			} catch (err: any) {
				console.debug("Share cancelled");
			}
		} else {
			console.log("Share didn't work...");
		}
	};

	const shareToPlatform = (platform: string) => {
		const encodedUrl = encodeURIComponent(shareData.url);
		const encodedTitle = encodeURIComponent(shareData.title);
		const encodedText = encodeURIComponent(shareData.text);
		let shareUrl = "";

		switch (platform) {
			case "x":
				shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
				break;
			case "facebook":
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
				break;
			case "linkedin":
				shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
				break;
			case "reddit":
				shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
				break;
			case "email":
				shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`;
				break;
			default:
				return;
		}

		window.open(shareUrl, "_blank", "width=600,height=400,noopener,noreferrer");
	};

	const copyToClipboard = () => {
		try {
			navigator.clipboard.writeText(shareData.url);
			alert(`Copied the text: ${shareData.url}`);
		} catch (err: any) {
			alert("Failed to copy link.");
		}
	};
	return (
		<section className="px-9 py-12 xl:pt-25 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<RouterBreadcrumb />
			<div className="w-full flex justify-center">
				{content && (
					<div
						key={content._id}
						className="flex flex-row xl:flex-col w-full gap-5"
					>
						<div className="flex flex-row justify-between gap-10 h-auto items-center mb-10 border-urg-black">
							<div className="flex flex-col gap-6 ">
								<div className="flex flex-col gap-2">
									<h1 className="text-8xl ">{content.title}</h1>
									<p className="text-urg-orange p-big">
										{dateFormatter(content.publishedAt)}
									</p>
									<div className="flex flex-wrap gap-4">
										{content.tags.map((tag: string) => {
											return (
												<p key={tag} className="tag">
													{tag}
												</p>
											);
										})}
									</div>
								</div>

								<div className="flex gap-8">
									<button
										type="button"
										onClick={handleUniversalShare}
										className="group cursor-pointer p-4 rounded-full hover:bg-urg-black"
									>
										<BsShare className="size-8 text-urg-black group-hover:text-urg-white" />
									</button>
									<button
										type="button"
										onClick={copyToClipboard}
										className="group cursor-pointer p-4 rounded-full hover:bg-urg-black"
									>
										<LuLink className="size-8 text-urg-black group-hover:text-urg-white" />
									</button>
									<button
										type="button"
										onClick={() => shareToPlatform("facebook")}
										className="group cursor-pointer p-4 rounded-full hover:bg-urg-black"
									>
										<FaFacebookF className="size-8 text-urg-black group-hover:text-urg-white" />
									</button>
									<button
										type="button"
										onClick={() => shareToPlatform("linkedin")}
										className="group cursor-pointer p-4 rounded-full hover:bg-urg-black"
									>
										<BsLinkedin className="size-8 text-urg-black group-hover:text-urg-white" />
									</button>
									<button
										type="button"
										onClick={() => shareToPlatform("x")}
										className="group cursor-pointer p-4 rounded-full hover:bg-urg-black"
									>
										<BsTwitterX className="size-8 text-urg-black group-hover:text-urg-white" />
									</button>

									<button
										type="button"
										onClick={() => shareToPlatform("reddit")}
										className="group cursor-pointer p-4 rounded-full hover:bg-urg-black"
									>
										<FaReddit className="size-8 text-urg-black group-hover:text-urg-white" />
									</button>
									<button
										type="button"
										onClick={() => shareToPlatform("email")}
										className="group cursor-pointer p-4 rounded-full hover:bg-urg-black"
									>
										<MdEmail className="size-8 text-urg-black group-hover:text-urg-white" />
									</button>
								</div>
							</div>
							<figure className="h-[80px] w-[150px] xl:h-full xl:w-4/7 shrink-0 flex flex-col gap-2">
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
											src={urlFor(content.mainImage)
												.width(1000)
												.height(600)
												.url()}
											alt={content.mainImage.alt}
											className="grow h-auto w-full object-cover"
										/>
										{content.mainImage.caption && (
											<figcaption className="p-small uppercase text-urg-black-50 italic">
												{content.mainImage.caption}
											</figcaption>
										)}
									</div>
								)}
							</figure>
						</div>
						<div className="flex justify-center ">
							<article className="prose lg:prose-xl max-w-none w-[50%]">
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
