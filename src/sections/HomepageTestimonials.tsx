import { motion, stagger } from "motion/react";
import StarRating from "@/components/StarRating";
import URGButton from "@/components/URGButton";
import { ButtonType, type testimonials } from "@/utilities/types";

type HomepageTestimonialsProps = {
	urgTestimonials?: testimonials[];
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

export default function HomepageTestimonials({
	urgTestimonials,
}: HomepageTestimonialsProps) {
	return (
		<section className="min-h-screen px-9 pt-12 pb-12 sm:pt-22 sm:pb-22 sm:px-16 ">
			<div className="flex flex-col gap-4 w-full xl:w-[430px]">
				<h3 className="text-urg-black">Testimonials</h3>
				<p className="text-urg-black-75">
					Some kind words from my amazing clients.
				</p>
			</div>
			<div className="flex justify-center mt-10 sm:mt-18">
				{urgTestimonials && urgTestimonials.length > 0 ? (
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{
							once: true,
							amount: 0.4,
						}}
						className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-10"
					>
						{urgTestimonials.map((testimonial) => (
							<motion.div
								key={testimonial.clientName}
								variants={cardVariants}
								className="p-0 sm:p-6"
							>
								<div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-7 gap-y-4">
									<figure className="relative w-30 h-40 sm:w-50 sm:h-60 rounded-xl overflow-hidden row-span-1 xl:row-span-2">
										<img
											src={testimonial.clientPhoto}
											alt={testimonial.clientName}
											className="absolute h-auto w-full block transform -translate-x-1/2 left-1/2"
										/>
									</figure>
									<div className="flex flex-col gap-4 ">
										<div className="flex flex-col  xl:flex-row justify-between items-start gap-4 xl:items-center">
											<div className="flex flex-col gap-2">
												<h5 className=" font-bold">{testimonial.clientName}</h5>

												<h6 className=" text-urg-blue-dark text-lg">
													{testimonial.clientPosition}
													{testimonial.companyName
														? ` at ${testimonial.companyName}`
														: ""}
												</h6>
											</div>
											{testimonial.companyLogo && (
												<img
													src={testimonial.companyLogo}
													alt={testimonial.companyName}
													className="w-auto h-8"
												/>
											)}
										</div>

										<StarRating rating={testimonial.stars} />
									</div>
									<p className="text-urg-black-75 p-big col-span-2 xl:col-span-1">
										{testimonial.review}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				) : (
					<p>No testimonials available.</p>
				)}
			</div>
			<div className="flex flex-col items-center xl:flex-row gap-8 xl:gap-20 justify-center mt-18">
				<a
					href="https://share.google/YSool0AaGfAFVlPpM"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full xl:w-fit"
				>
					<URGButton
						buttonType={ButtonType.secondary}
						className="text-2xl xl:px-16 w-full xl:w-fit flex justify-center"
					>
						See More Reviews
					</URGButton>
				</a>
				<a
					href="https://g.page/r/CSt2uV8IbIEvEBM/review"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full xl:w-fit"
				>
					<URGButton
						buttonType={ButtonType.primary}
						className="text-2xl xl:px-16 w-full xl:w-fit flex justify-center"
					>
						Write a Review
					</URGButton>
				</a>
			</div>
		</section>
	);
}
