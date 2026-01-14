import { createFileRoute } from "@tanstack/react-router";
import FetchedProjectList from "@/components/FetchedProjectList";
import GrainyBackground from "@/components/GrainyBackground";
import { getCreativeContent } from "@/sanity/client";

export const Route = createFileRoute("/creative-corner/")({
	component: CreativeCorner,
	loader: getCreativeContent,
});

function CreativeCorner() {
	const creativeContent = Route.useLoaderData();

	return (
		<section className="px-9 py-18 md:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="flex flex-col gap-6 xl:flex-row items-center xl:justify-between">
				<div className="flex flex-col gap-4 w-full xl:w-[430px]">
					<h3>My Creative Outlet</h3>
					<p className="text-urg-black-75">
						Sometimes inspiration strikes and you make something just for you.
					</p>
				</div>
			</div>
			<FetchedProjectList
				projectList={creativeContent}
				highlightFeatured={true}
			/>
			<GrainyBackground />
		</section>
	);
}
