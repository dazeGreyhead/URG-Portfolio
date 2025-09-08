import FilterGoo from "@/assets/svg/FilterGoo";
import FilterGrain from "@/assets/svg/FilterGrain";
import { MotionConfig, motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import RandomlyMovingBlob from "./RandomlyMovingBlob";

function AnimatedBackground() {
	// Framer Motion's way to track and animate the mouse position.
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// useSpring provides a smooth, spring-based animation.
	const springX = useSpring(mouseX, { stiffness: 60, damping: 40 });
	const springY = useSpring(mouseY, { stiffness: 60, damping: 40 });

	useEffect(() => {
		// This event listener updates the motion values on mouse move.
		const handleMouseMove = (event) => {
			mouseX.set(event.clientX);
			mouseY.set(event.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [mouseX, mouseY]);

	return (
		<div className="h-screen w-full absolute -z-10 bg-linear-to-r from-[#FFFFFF] to-[#DEE2EA] svg-filter-grain overflow-hidden ">
			<FilterGoo className="fixed top-0 left-0 w-0 h-0" />
			<FilterGrain className="fixed top-0 left-0 w-0 h-0" />

			<div className="w-full h-full relative svg-filter-blur overflow-hidden">
				{[...Array(5)].map((_, index) => (
					<RandomlyMovingBlob
						key={`animated-blob-${index + 1}`}
						className={`animated-blob-${index + 1}`}
					/>
				))}
				{/* Use Framer Motion for the interactive bubble */}
				<motion.div
					className="interactive"
					style={{ x: springX, y: springY }}
				/>
			</div>
		</div>
	);
}

export default AnimatedBackground;
