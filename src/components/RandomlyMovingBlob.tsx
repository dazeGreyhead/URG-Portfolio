import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export default function RandomlyMovingBlob({
	className,
}: { className: string }) {
	const controls = useAnimation();

	// Generate random initial position
	const initialX = Math.random() * 100;
	const initialY = Math.random() * 100;

	useEffect(() => {
		const animateRandomly = async () => {
			while (true) {
				const newX = Math.random() * 100;
				const newY = Math.random() * 100;

				await controls.start({
					top: `calc(${newY}% - var(--circle-size) / 2)`,
					left: `calc(${newX}% - var(--circle-size) / 2)`,
					transition: {
						duration: Math.floor(Math.random() * (15 - 5 + 1)) + 5,
						ease: "anticipate",
					},
				});
			}
		};

		animateRandomly();
	}, [controls]);

	return (
		<motion.div
			initial={{
				top: `calc(${initialY}% - var(--circle-size) / 2)`,
				left: `calc(${initialY}% - var(--circle-size) / 2)`,
			}}
			animate={controls}
			className={className}
		/>
	);
}
