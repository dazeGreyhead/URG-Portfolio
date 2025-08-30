import FancyArrow from "@/assets/svg/FancyArrow";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "motion/react";

export default function HomepageLanding() {
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
					<div className=" w-[600px] h-[60px] overflow-clip flex justify-center items-center mask-gradient">
						<ul className="flex gap-12 h-full font-primary text-5xl text-urg-black mt-2 whitespace-nowrap">
							<li>Writer</li>
							<li>Graphic Designer</li>
							<li>Web Developer</li>
							<li>Video Producer</li>
							<li>Director</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0 md:items-end ">
					<button className="secondary-button text-2xl px-16" type="button">
						kedrite@gmail.com
					</button>
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
