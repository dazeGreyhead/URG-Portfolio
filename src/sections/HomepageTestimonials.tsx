import StarRating from "@/components/StarRating";
import URGButton from "@/components/URGButton";
import { ButtonType, type testimonials } from "@/utilities/types";

type HomepageTestimonialsProps = {
	urgTestimonials?: testimonials[];
};

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
					<div className="grid grid-cols-2 gap-10">
						{urgTestimonials.map((testimonial) => (
							<div key={testimonial.clientName} className="p-6">
								<div className="flex gap-7">
									<figure className="relative w-50 h-60 rounded-xl flex-shrink-0 overflow-hidden">
										<img
											src={testimonial.clientPhoto}
											alt={testimonial.clientName}
											className="absolute h-auto w-full block transform -translate-x-1/2 left-1/2"
										/>
									</figure>
									<div className="flex flex-col gap-4">
										<div className="flex justify-between items-center">
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
										<p className="text-urg-black-75 p-big">
											{testimonial.review}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<p>No testimonials available.</p>
				)}
			</div>
			<div className="flex gap-20 justify-center mt-18">
				<a
					href="https://share.google/YSool0AaGfAFVlPpM"
					target="_blank"
					rel="noopener noreferrer"
				>
					<URGButton
						buttonType={ButtonType.secondary}
						className="text-2xl px-16"
					>
						See More Reviews
					</URGButton>
				</a>
				<a
					href="https://g.page/r/CSt2uV8IbIEvEBM/review"
					target="_blank"
					rel="noopener noreferrer"
				>
					<URGButton buttonType={ButtonType.primary} className="text-2xl px-16">
						Write a Review
					</URGButton>
				</a>
			</div>
		</section>
	);
}
