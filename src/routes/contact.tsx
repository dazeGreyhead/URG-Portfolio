import { createFileRoute } from "@tanstack/react-router";
import GrainyBackground from "@/components/GrainyBackground";
import HomepageContact from "@/sections/HomepageContact";

export const Route = createFileRoute("/contact")({
	component: Contact,
	head: () => ({
		meta: [
			{
				name: "description",
				content:
					"Social Media links, Phone Number, Email Address to contact Umang Raj Gurung.",
			},
			{
				title: "Contact - Umang Raj Gurung",
			},
			{
				name: "keywords",
				content:
					"Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer",
			},

			{
				property: "og:title",
				content: "Contact - Umang Raj Gurung",
			},
			{
				property: "og:description",
				content:
					"Social Media links, Phone Number, Email Address to contact Umang Raj Gurung.",
			},
			{
				property: "og:image",
				content: "/Umang-Photo.jpg",
			},
			{
				property: "og:url",
				content: "https://www.umangrajgurung.com.np/contact",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "site_name",
				content: "Umang Raj Gurung Portfolio Website",
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: "Contact - Umang Raj Gurung",
			},
			{
				name: "twitter:description",
				content:
					"Social Media links, Phone Number, Email Address to contact Umang Raj Gurung.",
			},
			{
				name: "twitter:image",
				content: "/Umang-Photo.jpg",
			},
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.umangrajgurung.com.np/contact",
			},
		],
	}),
});

function Contact() {
	return (
		<>
			<HomepageContact isHomepage={false} />
			<GrainyBackground />
		</>
	);
}
