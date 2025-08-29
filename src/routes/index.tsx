import Footer from "@/components/Footer";
import HomepageContact from "@/sections/HomepageContact";
import HomepageCreativeOutlet from "@/sections/HomepageCreativeOutlet";
import HomepageFeaturedWorks from "@/sections/HomepageFeaturedWorks";
import HomepageLanding from "@/sections/HomepageLanding";
import HomepageServices from "@/sections/HomepageServices";
import {
	featuredCreatives,
	featuredProjects,
	servicesProvided,
	urgSocialMedia,
} from "@/utilities/data";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main>
			<HomepageLanding />
			<HomepageFeaturedWorks
				sliderDuration={7000}
				featuredProjects={featuredProjects}
			/>
			<HomepageServices servicesProvided={servicesProvided} />
			<HomepageCreativeOutlet
				featuredCreativeContent={featuredCreatives[0]}
				otherCreativeContent={featuredCreatives.slice(1)}
			/>
			<HomepageContact urgSocialMedia={urgSocialMedia} />

			<Footer />
		</main>
	);
}
