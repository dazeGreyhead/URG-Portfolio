import type { siteContent } from "@/utilities/types";
import { useEffect, useState } from "react";

type HomepageFeaturedWorksProps = {
	featuredProjects: siteContent[];
	sliderDuration: number;
};

export default function HomepageFeaturedWorks({
	featuredProjects,
	sliderDuration = 3000,
}: HomepageFeaturedWorksProps) {
	const [projectIndex, setProjectIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProjectIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
		}, sliderDuration);

		return () => clearInterval(timer); // cleanup on unmount
	}, [featuredProjects.length, sliderDuration]);

	return (
		<section className="relative h-screen overflow-hidden">
			<h3 className="absolute z-10 left-16 top-22 text-urg-white">
				My Featured Works
			</h3>
			<div className="relative flex w-fit h-full z-0">
				{featuredProjects.map((project, index) => {
					return (
						<div
							key={project.title}
							className={`absolute h-full w-screen switch-project ${index === projectIndex ? "active" : ""}`}
						>
							<div className="absolute z-20 left-16 top-50 flex flex-col gap-16 w-[434px]">
								<div className="flex flex-col gap-4">
									<h5 className="text-urg-white">{project.title}</h5>
									<div className="flex flex-wrap gap-4">
										{project.tags.map((tag) => {
											return (
												<p key={tag} className="tag">
													{tag}
												</p>
											);
										})}
									</div>
									<p className="text-urg-white">{project.shortDescription}</p>
								</div>
							</div>
							<div className="h-full w-1/2 absolute z-10 bg-linear-to-r from-urg-black/50 to-urg-black/0" />
							<img
								className="absolute h-full w-full object-cover z-0"
								src={project.featuredImage}
								alt={project.title}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
}
