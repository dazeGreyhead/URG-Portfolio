import HomepageFeaturedWorks from "@/sections/HomepageFeaturedWorks";

export default function StickyContentWrapper() {
	return (
		<div className="h-[120vh]">
			<HomepageFeaturedWorks
				className="sticky top-0 origin-top"
				sliderDuration={5000}
			/>
		</div>
	);
}
