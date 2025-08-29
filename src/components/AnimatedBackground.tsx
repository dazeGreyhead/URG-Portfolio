import { MotionConfig, motion, useMotionValue, useSpring } from "motion/react";
import React, { useEffect, useState } from "react";

function AnimatedBackground() {
	const [randomBlobPositions, setRandomBlobPositions] = useState(() => {
		const positions = [];
		for (let i = 0; i < 5; i++) {
			positions.push({
				x: Math.round(Math.random() * 100),
				y: Math.round(Math.random() * 100),
			});
		}
		return positions;
	});

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
		<div className="h-screen w-full absolute -z-10 bg-linear-to-r from-[#FFFFFF] to-[#DEE2EA] svg-filter-grain overflow-hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="fixed top-0 left-0 w-0 h-0"
			>
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation={10}
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
			<svg className="fixed top-0 left-0 w-0 h-0">
				<filter id="grainy">
					<feTurbulence
						type="turbulence"
						baseFrequency="2.58"
						numOctaves="4"
						result="colorNoise"
					/>
					<feColorMatrix
						in="colorNoise"
						type="saturate"
						values="0"
						result="grayscaleNoise"
					/>
					<feComponentTransfer
						in="grayscaleNoise"
						result="opacityAdjustedTexture"
					>
						<feFuncA type="linear" slope="0.6" />
					</feComponentTransfer>
					<feBlend
						in="SourceGraphic"
						in2="opacityAdjustedTexture"
						mode="color-dodge"
					/>
				</filter>
			</svg>
			<MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
				<div className="w-full h-full relative svg-filter-blur overflow-hidden">
					{randomBlobPositions.map((position, index) => (
						<motion.div
							key={`animated-blob-${index + 1}`} // Add a key for list rendering
							className={`animated-blob-${index + 1}`}
							initial={{
								top: `calc(${position.y}% - var(--circle-size) / 2)`,
								left: `calc(${position.x}% - var(--circle-size) / 2)`,
							}}
							animate={{
								top: `calc(${position.y}% - var(--circle-size) / 2)`,
								left: `calc(${position.x}% - var(--circle-size) / 2)`,
							}}
							transition={{
								duration: Math.floor(Math.random() * (15 - 5 + 1)) + 5,
								ease: "anticipate",
							}}
							onAnimationComplete={() => {
								// Correct immutable update of the state array
								setRandomBlobPositions((prevPositions) =>
									prevPositions.map((blobPos, i) =>
										i === index
											? {
													x: Math.round(Math.random() * 100),
													y: Math.round(Math.random() * 100),
												}
											: blobPos,
									),
								);
							}}
						/>
					))}
					{/* Use Framer Motion for the interactive bubble */}
					<motion.div
						className="interactive"
						style={{ x: springX, y: springY }}
					/>
				</div>
			</MotionConfig>
		</div>
	);
}

export default AnimatedBackground;
