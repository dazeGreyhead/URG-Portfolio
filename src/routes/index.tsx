import { createFileRoute } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";
import HomepageContact from "@/sections/HomepageContact";
import HomepageCreativeOutlet from "@/sections/HomepageCreativeOutlet";
import HomepageServices from "@/sections/HomepageServices";
import HomepageTestimonials from "@/sections/HomepageTestimonials";
import StickyContentWrapper from "@/sections/StickyContentWrapper";
import { servicesProvided, urgTestimonials } from "@/utilities/data";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({
		meta: [
			{
				name: "description",
				content:
					"Hi!, I'm Umang. I'm a creative web developer, tourist guide, video producer and much more!",
			},
			{
				title: "Umang Raj Gurung Portfolio Website",
			},
			{
				name: "keywords",
				content:
					"Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer",
			},

			{
				property: "og:title",
				content: "Umang Raj Gurung Portfolio Website",
			},
			{
				property: "og:description",
				content:
					"Hi!, I'm Umang. I'm a creative web developer, tourist guide, video producer and much more!",
			},
			{
				property: "og:image",
				content: "/Urg Website Landing Page.png",
			},
			{
				property: "og:url",
				content: "https://www.umangrajgurung.com.np/",
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
				content: "Umang Raj Gurung Portfolio Website",
			},
			{
				name: "twitter:description",
				content:
					"Hi!, I'm Umang. I'm a creative web developer, tourist guide, video producer and much more!",
			},
			{
				name: "twitter:image",
				content: "/Urg Website Landing Page.png",
			},
		],
		links: [
			{
				rel: "canonical",
				href: "https://www.umangrajgurung.com.np/",
			},
		],
	}),
});

function App() {
	const lenisRef = useRef<LenisRef>(null);

	useEffect(() => {
		function update(data: { timestamp: number }) {
			const time = data.timestamp;
			lenisRef.current?.lenis?.raf(time);
		}

		frame.update(update, true);

		return () => cancelFrame(update);
	}, []);

	return (
		<main>
			<ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

			<StickyContentWrapper />
			<HomepageTestimonials urgTestimonials={urgTestimonials} />
			<HomepageServices isHomepage={true} servicesProvided={servicesProvided} />

			<HomepageCreativeOutlet />
			<HomepageContact isHomepage={true} />
			<SpeedInsights />
			<Analytics />
		</main>
	);
}
