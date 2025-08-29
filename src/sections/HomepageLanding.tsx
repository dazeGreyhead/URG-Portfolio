import AnimatedBackground from "@/components/AnimatedBackground";
import { useEffect, useRef } from "react";

export default function HomepageLanding() {
	// A ref to hold the <textPath> DOM element for animating the 'GO TO CREATIVE CORNER' text along the rectangular path.
	const textPathRef = useRef<SVGTextPathElement>(null);

	// A ref to store the animation frame ID for cleanup
	const animationRef = useRef<number>(0);

	useEffect(() => {
		// Current offset value for the animation
		let currentOffset = 0;

		// The animation loop function
		const animateText = () => {
			// Check if the ref has a current value
			if (textPathRef.current) {
				// Directly set the SVG attribute
				currentOffset = (currentOffset + 0.02) % 50; // This is what moves the text
				textPathRef.current.setAttribute("startOffset", `${currentOffset}%`);
			}

			// Schedule the next frame
			animationRef.current = requestAnimationFrame(animateText);
		};

		// Start the animation loop
		animationRef.current = requestAnimationFrame(animateText);

		// Cleanup function: runs when the component unmounts
		return () => {
			cancelAnimationFrame(animationRef.current);
		};
	}, []);
	return (
		<section className="flex flex-col justify-center items-center h-screen px-7 py-9 md:py-10 md:px-16 overflow-hidden">
			<div className="flex flex-col h-[77vh] sm:h-full w-full">
				<div className="flex flex-col items-center justify-center grow-1 gap-2 sm:pt-12 md:gap-12">
					<div className="font-primary font-bold text-5xl/15 text-urg-black md:text-[64px]/12 text-center">
						Hi! I'm Umang. I'm a
					</div>
					<div className="relative flex items-center justify-center h-40 md:h-49 w-[600px] hover:scale-105 transition-transform duration-300 cursor-pointer creative-button-with-marquee">
						<div className="absolute font-primary font-bold text-urg-black creative-text text-7xl md:text-9xl">
							Creative
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 163.97 43.97"
							className="overflow-visible w-[350px] md:w-[600px]"
						>
							<path
								stroke="none"
								fill="none"
								id="text-path"
								d="M156.79,43.84H7.17c-3.89,0-7.05-3.16-7.05-7.05V7.17C.12,3.28,3.28.12,7.17.12h149.62c3.89,0,7.05,3.16,7.05,7.05v29.62c0,3.89-3.16,7.05-7.05,7.05Z M156.79,43.84H7.17c-3.89,0-7.05-3.16-7.05-7.05V7.17C.12,3.28,3.28.12,7.17.12h149.62c3.89,0,7.05,3.16,7.05,7.05v29.62c0,3.89-3.16,7.05-7.05,7.05Z"
							/>
							<text>
								<textPath
									className="font-primary font-light text-[9.1px] fill-urg-black-50 creative-marquee"
									href="#text-path"
									ref={textPathRef}
								>
									Go to Creative Corner. Go to Creative Corner. Go to Creative
									Corner. Go to Creative Corner.
								</textPath>
							</text>
						</svg>
					</div>
					<ul className="flex gap-12 font-primary text-5xl text-urg-black mt-2">
						{/* <li>Web Developer</li> */}
						<li className="text-center">Graphic Designer</li>
						{/* <li>Video Producer</li> */}
					</ul>
				</div>

				<div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0 md:items-end ">
					<button className="primary-button text-2xl px-16" type="button">
						kedrite@gmail.com
					</button>
					<h6 className="font-normal">My Featured Works</h6>
				</div>
			</div>

			<AnimatedBackground />
		</section>
	);
}
