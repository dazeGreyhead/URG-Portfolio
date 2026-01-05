import type { SanityDocument } from "@sanity/client";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import FancyArrow from "@/assets/svg/FancyArrow";
import URGButton from "@/components/URGButton";
import { getHomepageCreativeContent } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";
import { dateFormatter } from "@/utilities/dateFormatter";
import { ButtonType } from "@/utilities/types";

export default function HomepageCreativeOutlet() {
	// State to hold the fetched data
	const [creativeContent, setCreativeContent] = useState<SanityDocument[]>([]);
	// State to manage the loading status
	const [loading, setLoading] = useState(true);

	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getHomepageCreativeContent();
				setCreativeContent(data);
			} catch (e: unknown) {
				// Step 4: Handle and set the error state
				// Use a type guard to ensure 'e' is an Error object before accessing '.message'
				if (e instanceof Error) {
					console.error("Failed to fetch data: ", e);
					setError(e.message);
				} else {
					console.error("An unknown error occurred");
					setError("An unknown error occurred");
				}
			} finally {
				// Step 5: Always set loading to false after the operation completes
				setLoading(false);
			}
		};
		fetchData();

		// The empty dependency array [] ensures this effect runs only once after the initial render.
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
				<p className="text-xl text-gray-700 animate-pulse">
					Loading creative content...
				</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
				<p className="text-xl text-red-500">Error: {error}</p>
			</div>
		);
	}

	return (
		<section className="px-9 py-12 xl:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen bg-urg-black">
			<div className="flex flex-col gap-6 xl:flex-row items-center xl:justify-between">
				<div className="flex flex-col gap-4 w-full xl:w-[430px]">
					<h3 className="text-urg-white">My Creative Outlet</h3>
					<p className="text-urg-black-25">
						Sometimes inspiration strikes and you make something just for you.
					</p>
				</div>

				<Link to="/creative-corner">
					<div className="relative size-[120px] xl:size-[190px] continuous-spin-circle-button cursor-pointer group hover:scale-108 transition-transform duration-300">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 100 100"
							className="absolute overflow-visible continuous-spin-circle-animation size-[120px] xl:size-[190px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						>
							<title>Spinning Circle Text</title>
							<path
								stroke="none"
								fill="none"
								id="circle-text-path"
								d="M 50, 10 A 40,40 0 1,1 50,90 A 40,40 0 1,1 50,10"
							/>
							<text>
								<textPath
									className="spinning-text-button font-primary font-light text-[65%] fill-urg-black-50 creative-marquee group-hover:fill-urg-blue"
									href="#circle-text-path"
								>
									Go to Creative Corner.
								</textPath>
								<textPath
									className="spinning-text-button font-primary font-light text-[65%] fill-urg-black-50 creative-marquee group-hover:fill-urg-blue"
									href="#circle-text-path"
									startOffset={"50%"}
								>
									Go to Creative Corner.
								</textPath>
							</text>
						</svg>
						<FancyArrow className="absolute fill-urg-black-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spinning-text-button size-[40px] xl:size-[90px] rotate-45 group-hover:fill-urg-blue" />
					</div>
				</Link>
			</div>
			<div className="flex flex-col items-center mt-8">
				<div className="w-full xl:w-[84%] flex flex-col gap-16 xl:gap-24">
					{creativeContent.map((content) =>
						content.featured ? (
							<div
								key={content._id}
								className="flex flex-col xl:flex-row gap-8 group "
							>
								<figure className="h-[400px] xl:h-auto w-[65%] aspect-video overflow-hidden shrink-0 ">
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
											className="h-auto w-full object-cover group-hover:brightness-75"
										/>
									</Link>
								</figure>
								<Link
									to="/creative-corner/$slug"
									params={{
										slug: content.slug.current,
									}}
								>
									<div className="flex flex-col ">
										<div className="flex flex-col gap-3 ">
											<div className="flex flex-col gap-1">
												<h2 className="text-urg-white group-hover:text-urg-blue">
													{content.title}
												</h2>

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
											<p className="text-urg-black-25 p-big">
												{content.description}
											</p>
										</div>

										<URGButton
											className="text-urg-white"
											buttonType={ButtonType.expandArrow}
										>
											{content.coverVideo ? "Watch" : "Read more"}
										</URGButton>
									</div>
								</Link>
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
													<h4 className="text-urg-white group-hover:text-urg-blue">
														{content.title}
													</h4>

													<p className="text-urg-orange p-small">
														{dateFormatter(content.publishedAt)}
													</p>
												</div>

												<p className="text-urg-black-25 xl:p-big">
													{content.description}
												</p>
											</div>
											<URGButton
												className="text-urg-white"
												buttonType={ButtonType.expandArrow}
											>
												{content.coverVideo ? "Watch" : "Read more"}
											</URGButton>
										</div>
									</div>
								</Link>
							),
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
