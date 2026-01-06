import { motion, stagger } from "motion/react";
import FancyArrow from "@/assets/svg/FancyArrow";
import type { serviceCardData } from "@/utilities/types";

type HomepageServicesProps = {
	servicesProvided: serviceCardData[];
};

// Container variants to coordinate the staggering of children
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: stagger(0.5), // Delay between each child animation
		},
	},
};

// Individual card variants
const cardVariants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeInOut",
		},
	},
} as const;

export default function HomepageServices({
	servicesProvided,
}: HomepageServicesProps) {
	return (
		<section className="min-h-screen px-9 pt-12 pb-18 sm:pt-22 sm:pb-48 sm:px-16">
			<h3>Services</h3>
			<div className="flex justify-center mt-10 sm:mt-18">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{
						once: true,
						amount: 0.2,
					}}
					className="flex flex-wrap gap-x-25 w-full sm:w-[84%] gap-y-17"
				>
					{servicesProvided.map((service) => {
						return (
							<motion.div
								key={service.title}
								variants={cardVariants}
								whileHover={{
									scale: 1.03,
									boxShadow: `0px 4px 4px 0px ${service.shadowColor}, 0px 8px 22.2px 0px ${service.shadowColor}`,
									transition: { duration: 0.3 },
								}}
								className="bg-white border border-b-8 flex flex-col items-center gap-12 w-[430px] px-4 pb-6 pt-4 rounded-xl hover:cursor-pointer"
								style={{
									borderColor: service.representingColor,
								}}
							>
								<div className="flex flex-col items-end gap-2">
									<div className="p-2 rounded-xl bg-urg-black">
										<FancyArrow className="size-13 rotate-45 fill-urg-white" />
									</div>
									<div className="flex flex-col gap-8 items-center">
										<img
											src={service.icon}
											alt={service.title}
											className="h-22 w-[102px]"
										/>
										<div className="flex flex-col gap-4 items-center">
											<h4 className="text-urg-black uppercase">
												{service.title}
											</h4>
											<p className="text-center">{service.description}</p>
										</div>
									</div>
								</div>

								<div className="flex gap-6">
									{service.softwareKnowledgeLogos?.map((logo) => (
										<img
											key={logo}
											src={logo}
											alt={logo}
											className="h-12 w-12 object-contain"
										/>
									))}
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
