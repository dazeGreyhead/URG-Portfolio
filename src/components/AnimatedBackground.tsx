import React, { useEffect, useState, useRef } from "react";

function AnimatedBackground() {
	// This is the blob that follows the mouse cursor.
	const interactiveBubble = React.useRef<HTMLDivElement>(null);

	// This is the array of random positions that the blobs will start out animating from at each reload of the website.
	// Using a normal js variable beacuse useRef doesn't have a fuction version of an initializer. Also not using useState because it doesn't change state.
	const positions = [];
	for (let i = 0; i < 5; i++) {
		positions.push({
			top: `calc(${(Math.random() * 100).toFixed(2)}% - var(--circle-size) / 2)`,
			left: `calc(${(Math.random() * 100).toFixed(2)}% - var(--circle-size) / 2)`,
		});
	}

	// Putting the initial starting positions in a useRef because the positions variable would change at each rerender. The blobs would keep rerendering.
	const randomStartingBlobPositions = useRef(positions);

	// We use a ref to store the current position of the interactive bubble and prevent unecessary rerenders.
	const curPos = useRef({ x: 0, y: 0 });

	// State variable that tracks the position of the mouse cursor.
	const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		// The function that animates the interactive bubble to the mouse position.
		const moveBubble = () => {
			// Get the current and target positions from the refs and state.
			const { x: curX, y: curY } = curPos.current;
			const { x: tgX, y: tgY } = targetPos;

			// Calculate the new position that the interactive bubble has to move to with a simple easing effect.
			const newX = curX + (tgX - curX) / 20;
			const newY = curY + (tgY - curY) / 20;

			// Update the ref with the new current position.
			curPos.current = { x: newX, y: newY };

			// Update the DOM element's position directly using a transform. Set's the interactive bubble's position to be at the calculated new position.
			if (interactiveBubble.current) {
				interactiveBubble.current.style.transform = `translate(${Math.round(newX)}px, ${Math.round(newY)}px)`;
			}

			// Schedule the next frame of the animation.
			animationFrameId = requestAnimationFrame(moveBubble);
		};

		// This event listener updates the target position state or in other words tracks the position of the mouse.
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
		<div className="h-screen w-full absolute -z-10 bg-linear-to-r from-[#FFFFFF] to-[#DEE2EA] svg-filter-grain overflow-hidden">
			{/* SVG blur and mix Filter. This is what makes the bubbles fill together. */}
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
			<div className="w-full h-full relative svg-filter-blur overflow-hidden">
				{/* Gradient blobs */}
				{/* First blob */}
				<div
					className="animated-blob-1 "
					style={randomStartingBlobPositions.current[0]}
				/>
				<div
					className="animated-blob-2 "
					style={randomStartingBlobPositions.current[1]}
				/>
				<div
					className="animated-blob-3 "
					style={randomStartingBlobPositions.current[2]}
				/>
				<div
					className="animated-blob-4 "
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
