import FancyArrow from "@/assets/svg/FancyArrow";
import AnimatedBackground from "@/components/AnimatedBackground";
import URGButton from "@/components/URGButton";
import { ButtonType } from "@/utilities/types";
import { easeInOut, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function HomepageLanding() {
	const urgDisciplines = [
		"Writer",
		"Graphic Designer",
		"Web Developer",
		"Video Producer",
		"Director",
	];

	const disciplinesPosition = [
		"outLeft",
		"left",
		"center",
		"right",
		"outRight",
		"botOutRight",
		"botRight",
		"botCenter",
		"botLeft",
		"botOutLeft",
	];

	const disciplinesAnimationVariants = {
		center: { x: "0%", scale: 1, y: "0%", color: "var(--color-urg-black)" },
		left: {
			x: "-100%",
			scale: 0.6,
			y: "0%",
			color: "var(--color-urg-black-75)",
		},
		outLeft: {
			x: "-200%",
			scale: 0.6,
			y: "0%",
			color: "var(--color-urg-black-75)",
		},
		right: {
			x: "100%",
			scale: 0.6,
			y: "0%",
			color: "var(--color-urg-black-75)",
		},
		outRight: {
			x: "200%",
			scale: 0.6,
			y: "0%",
			color: "var(--color-urg-black-75)",
		},
		botCenter: {
			x: "0%",
			scale: 0.6,
			y: "200%",
			color: "var(--color-urg-black-75)",
		},
		botLeft: {
			x: "-100%",
			scale: 0.6,
			y: "200%",
			color: "var(--color-urg-black-75)",
		},
		botOutLeft: {
			x: "-200%",
			scale: 0.6,
			y: "200%",
			color: "var(--color-urg-black-75)",
		},
		botRight: {
			x: "100%",
			scale: 0.6,
			y: "200%",
			color: "var(--color-urg-black-75)",
		},
		botOutRight: {
			x: "200%",
			scale: 0.6,
			y: "200%",
			color: "var(--color-urg-black-75)",
		},
	};

	const [disciplineIndexes, setDisciplineIndexes] = useState(() => {
		const initialIndexes = [];
		for (let i = 0; i < disciplinesPosition.length; i++) {
			initialIndexes.push(i);
		}
		return initialIndexes;
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setDisciplineIndexes((prevIndexes) => {
				const updatedIndexes = prevIndexes.map(
					(prevIndex) => (prevIndex + 1) % disciplinesPosition.length,
				);
				return updatedIndexes;
			});
		}, 2000);

		return () => clearInterval(interval);
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
							<motion.text>
								{/* This is what animates the text along the path of svg. Offset
								goes from 0 to 50% because the path is doubled as the text would
								clip out */}
								<motion.textPath
									className="font-primary font-light text-[9.1px] fill-urg-black-50 creative-marquee"
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
					<div className="h-[80px] w-[1400px] mask-gradient">
						<ul className="flex h-[50px] justify-center items-center font-primary text-4xl md:text-6xl text-urg-white whitespace-nowrap relative mt-4">
							{[...urgDisciplines, ...urgDisciplines].map(
								(discipline, index) => (
									<motion.li
										key={`${discipline} ${index}`}
										className="w-[450px] text-center absolute"
										initial={disciplinesPosition[disciplineIndexes[index]]}
										animate={disciplinesPosition[disciplineIndexes[index]]}
										variants={disciplinesAnimationVariants}
										transition={{ duration: 0.5 }}
									>
										{discipline}
									</motion.li>
								),
							)}
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
