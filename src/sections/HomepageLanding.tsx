import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import FancyArrow from "@/assets/svg/FancyArrow";
import AnimatedBackground from "@/components/AnimatedBackground";
import URGButton from "@/components/URGButton";
import { ButtonType } from "@/utilities/types";

const urgDisciplines = [
	"Writer",
	"Graphic Designer",
	"Web Developer",
	"Video Producer",
	"Director",
	"Tourist Guide",
];

const TOTAL_ITEMS = urgDisciplines.length; // Total number of items (Dynamically set based on TEXTS)
const ITEM_WIDTH = 450; // Width of a single item slot (450px)

const CYCLE_MS = 2000; // Time for a full cycle (2 seconds)
const TRANSITION_DURATION = 0.7; // Duration of the sliding animation (in seconds)

type HomepageLandingProps = {
	className: string;
};

export default function HomepageLanding({ className }: HomepageLandingProps) {
	// offsetStep tracks the number of slots the carousel has moved left.
	// It cycles from 0 to TOTAL_ITEMS - 1.
	const [offsetStep, setOffsetStep] = useState(0);

	// 1. Setup the automatic cycle timer
	useEffect(() => {
		// Interval fires every 2 seconds to initiate the next step
		const interval = setInterval(() => {
			setOffsetStep((prev) => (prev + 1) % TOTAL_ITEMS);
		}, CYCLE_MS);
		return () => clearInterval(interval);
	}, []);

	// 2. Utility to calculate the item's current visual slot (0 to TOTAL_ITEMS - 1)
	// Slot 1 is the first visible item (x=0). Slot 0 is off-screen left (x=-ITEM_WIDTH).
	const calculateItemSlot = (itemIndex: number, currentOffset: number) => {
		// Uses modulo arithmetic to achieve the infinite loop effect
		return (currentOffset - itemIndex + TOTAL_ITEMS) % TOTAL_ITEMS;
	};

	return (
		<section
			className={`flex flex-col justify-center items-center h-screen px-7 py-9 md:py-10 md:px-16 overflow-hidden ${className}`}
		>
			<div className="flex flex-col h-[77vh] sm:h-full w-full">
				<div className="flex flex-col items-center justify-center grow-1 gap-2 sm:pt-12 md:gap-12">
					<div className="font-primary font-bold text-5xl/15 text-urg-black md:text-[64px]/12 text-center">
						Hi! I'm Umang. I'm a
					</div>
					<Link to="/creative-corner">
						<div className="relative flex items-center justify-center h-40 md:h-49 w-[600px] hover:scale-105 transition-transform duration-300 cursor-pointer group">
							<div className="absolute font-primary font-bold text-urg-black creative-text text-7xl md:text-9xl group-hover:text-urg-blue-dark">
								Creative
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 163.97 43.97"
								className="overflow-visible w-[350px] md:w-[600px]"
							>
								<title>Text circling on Creative word</title>
								<path
									stroke="none"
									fill="none"
									id="text-path"
									d="M156.79,43.84H7.17c-3.89,0-7.05-3.16-7.05-7.05V7.17C.12,3.28,3.28.12,7.17.12h149.62c3.89,0,7.05,3.16,7.05,7.05v29.62c0,3.89-3.16,7.05-7.05,7.05Z M156.79,43.84H7.17c-3.89,0-7.05-3.16-7.05-7.05V7.17C.12,3.28,3.28.12,7.17.12h149.62c3.89,0,7.05,3.16,7.05,7.05v29.62c0,3.89-3.16,7.05-7.05,7.05Z"
								/>
								<motion.text>
									{/* This is what animates the text along the path of svg. Offset
								goes from 0 to 50% because the path is doubled as the text would
								clip out */}
									<motion.textPath
										className="font-primary font-light text-[9.1px] fill-urg-black-50 group-hover:fill-urg-blue-dark"
										href="#text-path"
										initial={{ startOffset: "0%" }}
										animate={{ startOffset: "50%" }}
										transition={{
											duration: 30,
											repeat: Infinity,
											ease: "linear",
										}}
									>
										Go to Creative Corner. Go to Creative Corner. Go to Creative
										Corner. Go to Creative Corner.
									</motion.textPath>
								</motion.text>
							</svg>
						</div>
					</Link>
					<div className="h-[80px] w-[1400px] mask-gradient">
						<ul className="flex h-[50px] justify-center items-center font-primary text-4xl md:text-6xl text-urg-white whitespace-nowrap mt-4 relative">
							{urgDisciplines.map((discipline, index) => {
								// Calculate the item's virtual slot based on the current offset
								const slot = calculateItemSlot(index, offsetStep);

								// Check if the current item is the designated center slot (e.g., slot 3)
								const isCenter = slot === 2;

								// Base X position: Slot 1 is the start of the visible area (X=0).
								const x = (slot - 2) * 100;

								// Calculate visual styles (scale and opacity)
								const scale = isCenter ? 1 : 0.6;
								// Hide the item that has just wrapped (slot === TOTAL_ITEMS - 1).
								const opacity = slot === 0 || slot === TOTAL_ITEMS - 1 ? 0 : 1;
								console.log(`${discipline} ${index}`);
								return (
									<motion.li
										key={`${discipline} ${index}`}
										className="absolute text-center"
										style={{
											width: ITEM_WIDTH,
											color: isCenter
												? "var(--color-urg-black)"
												: "var(--color-urg-black-75)",
										}}
										initial={false}
										animate={{
											x: `${x}%`,
											scale,
											opacity,
										}}
										transition={{ duration: TRANSITION_DURATION }}
									>
										{discipline}
									</motion.li>
								);
							})}
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0 md:items-end ">
					<URGButton
						buttonType={ButtonType.secondary}
						className="text-2xl px-16"
					>
						kedrite@gmail.com
					</URGButton>

					<div className="flex  gap-4">
						<motion.div
							animate={{
								y: [8, -8, 8],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							<FancyArrow className="size-10 rotate-180" />
						</motion.div>
						<h5 className="font-normal">My Featured Works</h5>
					</div>
				</div>
			</div>

			<AnimatedBackground />
		</section>
	);
}
