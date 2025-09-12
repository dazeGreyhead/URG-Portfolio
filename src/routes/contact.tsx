import GrainyBackground from "@/components/GrainyBackground";
import HomepageContact from "@/sections/HomepageContact";
import { urgSocialMedia } from "@/utilities/data";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
	component: Contact,
});

function Contact() {
	return (
		<>
			<HomepageContact urgSocialMedia={urgSocialMedia} />
			<GrainyBackground />
		</>
	);
}
