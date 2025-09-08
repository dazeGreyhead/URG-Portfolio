import Footer from "@/components/Footer";
import HomepageContact from "@/sections/HomepageContact";
import HomepageCreativeOutlet from "@/sections/HomepageCreativeOutlet";
import HomepageLanding from "@/sections/HomepageLanding";

import HomepageServices from "@/sections/HomepageServices";
import StickyContentWrapper from "@/sections/StickyContentWrapper";

import {
	featuredCreatives,
	featuredProjects,
	servicesProvided,
	urgSocialMedia,
} from "@/utilities/data";
import { createFileRoute } from "@tanstack/react-router";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";

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
			<HomepageLanding />
			<StickyContentWrapper />
			<HomepageServices servicesProvided={servicesProvided} />

			<HomepageCreativeOutlet
				featuredCreativeContent={featuredCreatives[0]}
				otherCreativeContent={featuredCreatives.slice(1)}
			/>
			<HomepageContact urgSocialMedia={urgSocialMedia} />
		</main>
	);
}
