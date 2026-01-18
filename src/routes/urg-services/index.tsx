import { createFileRoute } from "@tanstack/react-router";
import GrainyBackground from "@/components/GrainyBackground";
import HomepageServices from "@/sections/HomepageServices";
import { servicesProvided } from "@/utilities/data";

export const Route = createFileRoute("/urg-services/")({
	component: Services,
	head: () => ({
		meta: [
			{
				title: "Services - Umang Raj Gurung",
			},
			{
				name: "description",
				content: "Services provided by Umang Raj Gurung.",
			},

			{
				name: "keywords",
				content:
					"Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer",
			},

			{
				property: "og:title",
				content: "Services - Umang Raj Gurung",
			},
			{
				property: "og:description",
				content: "Services provided by Umang Raj Gurung.",
			},
			{
				property: "og:image",
				content: "/Urg Website Landing Page.png",
			},
			{
				property: "og:url",
				content: "https://www.umangrajgurung.com.np/urg-services",
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
				content: "Services - Umang Raj Gurung",
			},
			{
				name: "twitter:description",
				content: "Services provided by Umang Raj Gurung.",
			},
			{
				name: "twitter:image",
				content: "/Urg Website Landing Page.png",
			},
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.umangrajgurung.com.np/urg-services",
			},
		],
	}),
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
