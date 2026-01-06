import type { SanityDocument } from "@sanity/client";
import { Link } from "@tanstack/react-router";
import type { MotionValue } from "motion/react";
import { AnimatePresence, motion, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import FancyArrow from "@/assets/svg/FancyArrow";
import PlayButton from "@/components/PlayPauseButton";
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

	// State for pausing the autoplay
	const [isPaused, setIsPaused] = useState(false);
	// Ref to track video elements
	const videoRefs = useRef<HTMLVideoElement[]>([]);

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

	// 2. Play/Pause Control Logic for Videos
	useEffect(() => {
		if (loading) return;

		videoRefs.current.forEach((video: HTMLVideoElement, index: number) => {
			if (!video) return;

			if (index === currentProjectIndex && !isPaused) {
				video.play().catch(() => {
					// Browser may block autoplay until user interaction
					console.log("Autoplay blocked");
				});
			} else {
				video.pause();
			}
		});
	}, [currentProjectIndex, isPaused, loading]);

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
		if (loading || isPaused || portfolioProjects.length === 0) return;
		const timer = setInterval(() => {
			paginate(1);
		}, sliderDuration);
		return () => clearInterval(timer);
	}, [currentProjectIndex, loading, isPaused, portfolioProjects]);

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
			<h3 className="absolute z-10 left-9 top-12 sm:left-16 sm:top-25 text-urg-white">
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
								WebkitMaskSize: "300% 100%",
								maskSize: "300% 100%",
								WebkitMaskRepeat: "no-repeat",
								maskRepeat: "no-repeat",
							}}
						>
							<motion.div
								animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
								transition={{ delay: 0.8, duration: 1.2 }}
								className="absolute z-20 left-9 top-30 sm:left-16 sm:bottom-35 sm:top-auto flex flex-col gap-4 min-w-0 max-w-[345px] w-fit sm:max-w-[1000px] "
							>
								<Link
									to="/portfolio-projects/$slug"
									params={{
										slug: project.slug.current,
									}}
								>
									<div className="group">
										<div className="flex gap-2 items-center">
											<h1 className="text-urg-white text-6xl uppercase group-hover:underline">
												{project.title}
											</h1>

											<div className="relative size-[120px] xl:size-[140px] cursor-pointer group-hover:scale-108 transition-transform duration-300 shrink-0">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 100 100"
													className="absolute overflow-visible continuous-spin-circle-animation size-[120px] xl:size-[140px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
															className="spinning-text-button font-primary font-light text-[65%] fill-urg-white group-hover:fill-urg-blue"
															href="#circle-text-path"
														>
															Open the Project Page.
														</textPath>
														<textPath
															className="spinning-text-button font-primary font-light text-[65%] fill-urg-white group-hover:fill-urg-blue"
															href="#circle-text-path"
															startOffset={"50%"}
														>
															Open the Project Page.
														</textPath>
													</text>
												</svg>
												<FancyArrow className="absolute fill-urg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spinning-text-button size-[40px] xl:size-[70px] rotate-45 group-hover:fill-urg-blue" />
											</div>
										</div>
										<p className="text-urg-white text-2xl">
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
								</Link>
							</motion.div>
							<div className="h-full w-4/5 sm:w-full absolute z-10 bg-radial-[at_60%_30%] from-black/10 from-35% to-black/80 to-100%" />
							{project.localIntroVideo ? (
								<video
									src={`/${project.localIntroVideo}`}
									ref={(videRef) => {
										if (videRef) videoRefs.current[index] = videRef;
									}}
									autoPlay
									muted
									loop
									className=" h-full w-full object-cover"
								/>
							) : (
								<figure className="absolute z-0 h-full w-full">
									<motion.img
										initial={{ scale: isActive ? 1.2 : 1 }}
										animate={{ scale: isActive ? 1 : 1.2 }}
										transition={{ duration: 11, ease: "linear" }}
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
						animate={{ width: isPaused ? "0%" : "100%" }}
						transition={{
							duration: isPaused ? 0 : sliderDuration / 1000,
							ease: "linear",
						}}
						className="h-full bg-urg-blue shadow-[0_0_10px_rgba(32,156,218,0.5)]"
					/>
				</div>
				<div className="absolute bottom-10 left-16 z-50 flex gap-20 items-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentProjectIndex}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.8 }}
							className="text-white font-bold text-5xl font-secondary min-w-[100px]"
						>
							{currentProjectIndex + 1}
							<span className="text-white/20 text-2xl ml-2 font-secondary">
								/ {portfolioProjects.length}
							</span>
						</motion.div>
					</AnimatePresence>
					<div className="flex gap-5">
						<button
							onClick={() => paginate(-1)}
							className="px-10 py-2 hover:bg-white/10 text-white transition-colors border border-white/10 rounded-2xl backdrop-blur-sm cursor-pointer"
							type="button"
						>
							<FancyArrow className="size-11 -rotate-90 fill-urg-white" />
						</button>
						<button
							onClick={() => paginate(1)}
							className="px-10 py-2 hover:bg-white/10 text-white transition-colors border border-white/10 rounded-2xl backdrop-blur-sm cursor-pointer"
							type="button"
						>
							<FancyArrow className="size-11 rotate-90 fill-urg-white" />
						</button>
						<button
							onClick={() => setIsPaused(!isPaused)}
							className="px-10 py-2 hover:bg-white/10 text-white transition-colors border border-white/10 rounded-2xl backdrop-blur-sm cursor-pointer"
							type="button"
						>
							<PlayButton
								className="size-9 fill-urg-white"
								playVideo={!isPaused}
							/>
						</button>
					</div>
				</div>

				<div className="absolute bottom-10 right-16 z-50 flex gap-4">
					<motion.div
						animate={{
							y: [8, -8, 8],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<FancyArrow className="size-10 rotate-180 fill-urg-white" />
					</motion.div>
					<h5 className="font-normal text-urg-white">Testimonials</h5>
				</div>
			</div>
		</motion.section>
	);
}
