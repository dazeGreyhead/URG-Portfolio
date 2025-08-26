import type { serviceCardData } from "@/utilities/types";

type HomepageServicesProps = {
	servicesProvided: serviceCardData[];
};

export default function HomepageServices({
	servicesProvided,
}: HomepageServicesProps) {
	return (
		<section className="h-fit pt-22 pb-48 px-16">
			<h3>Services</h3>
			<div className="flex justify-center mt-18">
				<div className="flex flex-wrap justify-between w-[84%] gap-y-17">
					{servicesProvided.map((service, index) => {
						return (
							<div
								key={service.title}
								className="bg-urg-white/0 border border-b-8 flex flex-col items-center gap-12 w-[430px] px-4 pb-6 pt-4 rounded-xl button-hover-shadow hover:scale-102 transition-transform duration-300 hover:cursor-pointer"
								style={{ borderColor: service.representingColor }}
							>
								<div className="flex flex-col items-end gap-2">
									<img
										src="/goToLinkButton.svg"
										alt="Button that takes to link"
										className="h-15 w-15"
									/>
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
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
