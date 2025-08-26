import type { siteContent } from "@/utilities/types";

type HomepageCreativeOutletProps = {
	featuredCreativeContent: siteContent;
	otherCreativeContent: siteContent[];
};

export default function HomepageCreativeOutlet({
	featuredCreativeContent,
	otherCreativeContent,
}: HomepageCreativeOutletProps) {
	return (
		<section className="pt-22 px-16 pb-35 h-fit bg-urg-black">
			<div className="flex justify-between">
				<div className="flex flex-col gap-4 w-[430px]">
					<h3 className="text-urg-white">My Creative Outlet</h3>
					<p className="text-urg-black-25">
						Sometimes inspiration strikes and you make something just for you.
					</p>
				</div>

				<div className="relative w-[190px] h-[190px] continuous-spin-circle-button cursor-pointer hover:scale-108 transition-transform duration-300">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 100 100"
						className="absolute overflow-visible continuous-spin-circle-animation"
						width={190}
						height={190}
					>
						<path
							stroke="none"
							fill="none"
							id="circle-text-path"
							d="M 50, 10 A 40,40 0 1,1 50,90 A 40,40 0 1,1 50,10"
						/>
						<text>
							<textPath
								className="spinning-text font-primary font-light text-[65%] fill-urg-black-50 creative-marquee"
								href="#circle-text-path"
							>
								Go to Creative Corner.
							</textPath>
							<textPath
								className="spinning-text font-primary font-light text-[65%] fill-urg-black-50 creative-marquee"
								href="#circle-text-path"
								startOffset={"50%"}
							>
								Go to Creative Corner.
							</textPath>
						</text>
					</svg>
					<svg
						width={70}
						height={70}
						viewBox="0 0 100 100"
						className="absolute fill-urg-black-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spinning-text"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M100 53.7935L85.9325 67.5917C85.9325 67.5917 74.1302 44.3708 84.4642 18.1735C45.0356 57.685 46.8281 74.2185 11.266 100L2 90.714C28.8093 53.4555 39.0941 57.606 81.3318 15.2795C54.6786 25.3332 31.088 13.7981 31.088 13.7981L45.1557 0C67.9494 22.3568 89.2606 7.20082 94.0571 3.26437L96.6301 5.78809C96.6301 5.78809 73.8922 28.1998 100 53.8073V53.7935Z" />
					</svg>
				</div>
			</div>
			<div className="flex flex-col items-center mt-8">
				<div className=" w-[84%] flex flex-col gap-24">
					<div className="flex  gap-6">
						<img
							src={featuredCreativeContent.featuredImage}
							alt={featuredCreativeContent.title}
							className="h-[600px] w-full object-cover"
						/>
						<div>
							<div className="flex flex-col gap-3">
								<div className="flex flex-col">
									<h2 className="text-urg-white">
										{featuredCreativeContent.title}
									</h2>
									<p className="text-urg-orange p-small">
										{featuredCreativeContent.dateCreated}
									</p>
								</div>
								<div className="flex flex-wrap gap-4">
									{featuredCreativeContent.tags.map((tag) => {
										return (
											<p key={tag} className="tag">
												{tag}
											</p>
										);
									})}
								</div>
								<p className="text-urg-black-25 p-big">
									{featuredCreativeContent.shortDescription}
								</p>
							</div>
							<button type="button" className="content-button text-urg-white">
								Read more
							</button>
						</div>
					</div>
					<div className="flex justify-between">
						{otherCreativeContent.map((content) => (
							<div key={content.title} className="flex flex-col w-3/10 gap-4">
								<img
									src={content.featuredImage}
									alt={content.title}
									className="h-[290px] w-full object-cover"
								/>
								<div>
									<div className="flex flex-col gap-2">
										<div className="flex flex-col">
											<h4 className="text-urg-white">{content.title}</h4>
											<p className="text-urg-orange p-small">
												{content.dateCreated}
											</p>
										</div>

										<p className="text-urg-black-25 p-big">
											{content.shortDescription}
										</p>
									</div>
									<button
										type="button"
										className="content-button text-urg-white"
									>
										Read more
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
