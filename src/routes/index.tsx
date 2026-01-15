import { createFileRoute } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
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
			<HomepageServices servicesProvided={servicesProvided} />

			<HomepageCreativeOutlet />
			<HomepageContact />
			<Analytics />
		</main>
	);
}
