import HomepageFeaturedWorks from "@/sections/HomepageFeaturedWorks";
import HomepageLanding from "@/sections/HomepageLanding";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function StickyContentWrapper() {
		// Ref for fading in the projects when scrolled into view.
		const container = useRef(null);
		const {scrollYProgress } = useScroll({
			target: container,
		})
	return (
		<div ref={container} className="relative">
			<HomepageLanding className="z-30" />
			<div className="h-[120vh] sticky bottom-0 -z-20">
			<HomepageFeaturedWorks
				className="sticky top-0 origin-top"
				sliderDuration={5000}
				scrollYProgress={scrollYProgress}
			/>
			
			</div>
		<div className="absolute w-full h-full bg-black -z-30 top-0"  />
		</div>
		
	);
}
