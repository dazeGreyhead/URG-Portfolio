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
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [prevProjectIndex, setPrevProjectIndex] = useState<number | null>(null);

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

	const paginate = (newDirection: number) => {
		if (loading) return;
		setPrevProjectIndex(currentProjectIndex);
		setCurrentProjectIndex(
			(prev) =>
				(prev + newDirection + portfolioProjects.length) %
				portfolioProjects.length,
		);
	};

	// Autoplay Logic
	useEffect(() => {
		if (loading || portfolioProjects.length === 0) return;
		const timer = setInterval(() => {
			paginate(1);
		}, sliderDuration);
		return () => clearInterval(timer);
	}, [currentProjectIndex, loading, portfolioProjects]);

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
			<div className="relative flex w-screen h-screen z-0">
				{portfolioProjects.map((project, index) => {
					const isActive = index === currentProjectIndex;
					const wasActive = index === prevProjectIndex;
					const zIndex = isActive ? 2 : wasActive ? 1 : 0;
					return (
						<motion.div
							key={project.title}
							className={`absolute inset-0 h-full w-screen overflow-hidden`}
							initial={false}
							animate={
								{
									WebkitMaskImage: isActive
										? "linear-gradient(120deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 110%)"
										: "linear-gradient(120deg, rgba(0,0,0,1) -10%, rgba(0,0,0,0) 0%)",
								} as any
							}
							transition={
								{
									WebkitMaskImage: { duration: 3, ease: "linear" },
								} as any
							}
							style={{
								zIndex,
								WebkitMaskSize: "200% 100%",
								maskSize: "200% 100%",
								WebkitMaskRepeat: "no-repeat",
								maskRepeat: "no-repeat",
							}}
						>
							<div className="absolute z-20 left-9 top-30 sm:left-16 sm:bottom-25 sm:top-auto flex flex-col gap-4 w-[345px] sm:w-[1200px]">
								<h1 className="text-urg-white text-6xl">{project.title}</h1>

								<p className="text-urg-white text-2xl">{project.description}</p>
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
							<div className="h-full w-4/5 sm:w-full absolute z-10 bg-radial-[at_60%_30%] from-black/0 from-35% to-black/80 to-100%" />
							{project.localIntroVideo ? (
								<video
									src={`/${project.localIntroVideo}`}
									autoPlay
									muted
									loop
									className=" h-full w-full object-cover"
								/>
							) : (
								<figure className="absolute z-0 h-full w-full">
									<img
										className=" h-full w-full object-cover"
										src={urlFor(project.mainImage).url()}
										alt={project.mainImage.alt || "Project Image"}
									/>
								</figure>
							)}
						</motion.div>
					);
				})}
				<div className="absolute bottom-0 left-0 w-full h-2 z-40 bg-white/10">
					<motion.div
						key={`bar-${currentProjectIndex}`}
						initial={{ width: "0%" }}
						animate={{ width: "100%" }}
						transition={{ duration: sliderDuration / 1000, ease: "linear" }}
						className="h-full bg-urg-blue shadow-[0_0_10px_rgba(32,156,218,0.5)]"
					/>
				</div>
				<div className="absolute bottom-12 right-9 sm:right-16 z-50 flex items-center gap-2">
					<button
						onClick={() => paginate(-1)}
						className="p-4 hover:bg-white/10 text-white transition-colors border border-white/10 rounded-full backdrop-blur-sm cursor-pointer"
						type="button"
					>
						Left
					</button>
					<button
						onClick={() => paginate(1)}
						className="p-4 hover:bg-white/10 text-white transition-colors border border-white/10 rounded-full backdrop-blur-sm cursor-pointer"
						type="button"
					>
						Right
					</button>
				</div>

				<div className="absolute top-12 left-9 sm:left-16 z-50 overflow-hidden h-12">
					<motion.div
						key={currentProjectIndex}
						initial={{ y: 40 }}
						animate={{ y: 0 }}
						className="text-white font-bold text-4xl"
					>
						0{currentProjectIndex + 1}
						<span className="text-white/20 text-lg ml-2">
							/ 0{portfolioProjects.length}
						</span>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
