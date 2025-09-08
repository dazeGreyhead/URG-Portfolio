import HomepageFeaturedWorks from "@/sections/HomepageFeaturedWorks";

import { featuredProjects } from "@/utilities/data";

export default function StickyContentWrapper() {
	return (
		<div className="h-[120vh]">
			<HomepageFeaturedWorks
				featuredProjects={featuredProjects}
				className="sticky top-0 origin-top"
				sliderDuration={5000}
			/>
		</div>
	);
}
