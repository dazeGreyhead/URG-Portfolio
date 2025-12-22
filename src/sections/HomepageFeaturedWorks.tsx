import type { SanityDocument } from "@sanity/client";
import type { MotionValue } from "motion/react";
import { motion, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { getHomepagePortfolioProjects } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";

type HomepageFeaturedWorksProps = {
	sliderDuration: number;
	className: string;
	scrollYProgress: MotionValue<number>;
};

export default function HomepageFeaturedWorks({
	sliderDuration = 3000,
	className,
	scrollYProgress,
}: HomepageFeaturedWorksProps) {
	// Implements carousel of featured projects.
	// Stores the index of project that is to be shown.
	const [projectIndex, setProjectIndex] = useState(0);

	// State to hold the fetched data
	const [portfolioProjects, setPortfolioProjects] = useState<SanityDocument[]>(
		[],
	);
	// State to manage the loading status
	const [loading, setLoading] = useState(true);

	const [error, setError] = useState<string | null>(null);

	// animates the opacity of the section based on scroll progress
	const opacity = useTransform(scrollYProgress, [0.05, 0.6], [0, 1]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getHomepagePortfolioProjects();
				setPortfolioProjects(data);
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

	useEffect(() => {
		// Increments the index of the project to be shown according to the duration of sliderDuration.
		const timer = setInterval(() => {
			setProjectIndex(
				(prevIndex) => (prevIndex + 1) % portfolioProjects.length,
			);
		}, sliderDuration);

		return () => clearInterval(timer); // cleanup on unmount
	}, [portfolioProjects.length, sliderDuration]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
				<p className="text-xl text-gray-700 animate-pulse">
					Loading projects...
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
		<motion.section
			style={{ opacity }}
			className={`relative h-screen overflow-hidden ${className}`}
		>
			<h3 className="absolute z-10 left-9 top-12 sm:left-16 sm:top-22 text-urg-white">
				My Featured Works
			</h3>
			<div className="relative flex w-fit h-full z-0">
				{portfolioProjects.map((project, index) => {
					return (
						<div
							key={project.title}
							className={`absolute h-full w-screen switch-project ${index === projectIndex ? "active" : ""}`}
						>
							<div className="absolute z-20 left-9 top-30 sm:left-16 sm:top-140 flex flex-col gap-16 w-[345px] sm:w-[1200px]">
								<div className="flex flex-col gap-4">
									<h1 className="text-urg-white uppercase text-7xl">
										{project.title}
									</h1>

									<p className="text-urg-white text-3xl">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag: string) => {
											return (
												<p key={tag} className="tag">
													{tag}
												</p>
											);
										})}
									</div>
								</div>
							</div>
							<div className="h-full w-4/5 sm:w-full absolute z-10 bg-radial-[at_60%_30%] from-black/0 from-40% to-black/80 to-78% " />
							<figure className="absolute z-0 h-full w-full">
								<img
									className=" h-full w-full object-cover"
									src={urlFor(project.mainImage).url()}
									alt={project.mainImage.alt || "Project Image"}
								/>
							</figure>
						</div>
					);
				})}
			</div>
		</motion.section>
	);
}
