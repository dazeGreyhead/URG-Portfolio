import { createFileRoute } from "@tanstack/react-router";
import GrainyBackground from "@/components/GrainyBackground";
import HomepageContact from "@/sections/HomepageContact";

export const Route = createFileRoute("/contact")({
	component: Contact,
});

function Contact() {
	return (
		<>
			<HomepageContact isHomepage={false} />
			<GrainyBackground />
		</>
	);
}
