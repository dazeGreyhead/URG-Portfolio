import React, { useEffect, useState, useRef } from "react";

function AnimatedBackground() {
	const interactiveBubble = React.useRef<HTMLDivElement>(null);

	const positions = [];
	for (let i = 0; i < 5; i++) {
		positions.push({
			top: `calc(${(Math.random() * 100).toFixed(2)}% - var(--circle-size) / 2)`,
			left: `calc(${(Math.random() * 100).toFixed(2)}% - var(--circle-size) / 2)`,
		});
	}

	const randomStartingBlobPositions = useRef(positions);

	// We use a ref to store the current position of the bubble.
	// Using a ref for these values prevents unnecessary re-renders during the animation loop.
	const curPos = useRef({ x: 0, y: 0 });

	// We use state to store the target coordinates, which are updated by the mouse move event.
	// This is a good use of state as it reflects a change in user input.
	const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

	// The `useEffect` hook handles the side effects of setting up the event listeners
	// and the animation loop.
	useEffect(() => {
		// This is the main animation function, called on every frame.
		const moveBubble = () => {
			// Get the current and target positions from the refs and state.
			const { x: curX, y: curY } = curPos.current;
			const { x: tgX, y: tgY } = targetPos;

			// Calculate the new position with a simple easing effect.
			const newX = curX + (tgX - curX) / 20;
			const newY = curY + (tgY - curY) / 20;

			// Update the ref with the new current position.
			curPos.current = { x: newX, y: newY };

			// Update the DOM element's position directly using a transform.
			if (interactiveBubble.current) {
				interactiveBubble.current.style.transform = `translate(${Math.round(newX)}px, ${Math.round(newY)}px)`;
			}

			// Schedule the next frame of the animation.
			animationFrameId = requestAnimationFrame(moveBubble);
		};

		// This event listener updates the target position state.
		const handleMouseMove = (event: MouseEvent) => {
			setTargetPos({ x: event.clientX, y: event.clientY });
		};

		// Add the mouse move event listener to the window.
		window.addEventListener("mousemove", handleMouseMove);

		// Start the animation loop.
		let animationFrameId = requestAnimationFrame(moveBubble);

		// The cleanup function runs when the component unmounts.
		// It's crucial for preventing memory leaks and stopping the animation loop.
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationFrameId);
		};
	}, [targetPos]); // The dependency array includes `targetPos` so the animation loop
	// has access to the most up-to-date mouse position.
	return (
		// The gradient background
		<div className="h-screen w-screen absolute -z-10 bg-urg-white overflow-hidden svg-filter-grain">
			{/* SVG blur and mix Filter */}
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
			{/* SVG grain filter */}
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
			{/* Gradients Container */}
			<div className="w-full h-full svg-filter-blur">
				{/* Gradient blobs */}
				{/* First blob */}
				<div
					className="animated-blob-1"
					style={randomStartingBlobPositions.current[0]}
				/>
				<div
					className="animated-blob-2"
					style={randomStartingBlobPositions.current[1]}
				/>
				<div
					className="animated-blob-3"
					style={randomStartingBlobPositions.current[2]}
				/>
				<div
					className="animated-blob-4"
					style={randomStartingBlobPositions.current[3]}
				/>
				<div
					className="animated-blob-5"
					style={randomStartingBlobPositions.current[4]}
				/>
				<div className="interactive" ref={interactiveBubble} />
			</div>
		</div>
	);
}

export default AnimatedBackground;
