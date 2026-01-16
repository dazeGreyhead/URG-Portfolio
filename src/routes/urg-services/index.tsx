import { createFileRoute } from "@tanstack/react-router";
import GrainyBackground from "@/components/GrainyBackground";
import HomepageServices from "@/sections/HomepageServices";
import { servicesProvided } from "@/utilities/data";

export const Route = createFileRoute("/urg-services/")({
	component: Services,
});

function Services() {
	return (
		<div>
			<HomepageServices
				servicesProvided={servicesProvided}
				isHomepage={false}
			/>
			<GrainyBackground />
		</div>
	);
}
