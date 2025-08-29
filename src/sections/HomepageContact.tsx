import type { socialMediaLinks } from "@/utilities/types";

type HomepageContactProps = {
	urgSocialMedia: socialMediaLinks[];
};

export default function HomepageContact({
	urgSocialMedia,
}: HomepageContactProps) {
	return (
		<section className="px-9 py-12 xl:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="flex flex-col gap-4 mb-14 xlm:mb-0 w-full xl:w-[430px]">
				<h3 className="text-urg-black">Let's Work Together</h3>
				<p className="text-urg-black-75">
					Now you've seen what I'm capable of, why don't we work together?
				</p>
			</div>
			<div className="flex items-center gap-20 lg:justify-between flex-col xl:flex-row w-full 2xl:w-[84%] h-fit">
				<div className="flex flex-col gap-8 w-full lg:w-[430px] items-center lg:items-start">
					<div className="flex flex-col items-center lg:items-start gap-5">
						<h2>Connect With Me</h2>
						<button
							className="primary-button text-2xl px-16 w-fit"
							type="button"
						>
							kedrite@gmail.com
						</button>
					</div>
					<div className="flex gap-10">
						{urgSocialMedia?.map((logo) => (
							<img
								key={logo.name}
								src={logo.icon}
								alt={logo.name}
								className="size-10 lg:size-16 object-contain"
							/>
						))}
					</div>
				</div>

				<form className="flex flex-col gap-10 w-full lg:w-fit items-center lg:items-start">
					<div className=" flex flex-col w-full lg:flex-row gap-10 lg:gap-20">
						<label>
							<h6 className="uppercase mb-1">Name</h6>
							<input
								type="text"
								placeholder="Enter Your Name..."
								className="p-big text-urg-black w-full lg:w-[340px] h-11 border-b-2 p-4"
							/>
						</label>

						<label>
							<h6 className="uppercase mb-1">Phone</h6>
							<input
								type="text"
								placeholder="Enter Your Phone number..."
								className="p-big text-urg-black w-full lg:w-[340px] h-11 border-b-2 p-4"
							/>
						</label>
					</div>

					<label className="w-full">
						<h6 className="uppercase mb-1">Email</h6>
						<input
							type="text"
							placeholder="example@gmail.com"
							className="p-big text-urg-black w-full lg:w-[500px] h-11 border-b-2 p-4"
						/>
					</label>

					<label className="w-full">
						<h6 className="uppercase mb-5 lg:mb-3">What do you need?</h6>
						<div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
							<label className="flex gap-2 items-center">
								<input
									type="radio"
									value="Website"
									className="b-2 border-urg-black size-6"
								/>
								<p className="p-big">Website</p>
							</label>
							<label className="flex gap-2 items-center">
								<input
									type="radio"
									value="Videos"
									className="b-2 border-urg-black size-6"
								/>
								<p className="p-big">Videos</p>
							</label>
							<label className="flex gap-2 items-center">
								<input
									type="radio"
									value="Graphic Design"
									className="b-2 border-urg-black size-6"
								/>
								<p className="p-big">Graphic Design</p>
							</label>
							<label className="flex gap-2 items-center">
								<input
									type="radio"
									value="Writing"
									className="b-2 border-urg-black size-6"
								/>
								<p className="p-big">Writing</p>
							</label>
							<label className="flex gap-2 items-center">
								<input
									type="radio"
									value="Other"
									className="b-2 border-urg-black size-6"
								/>
								<p className="p-big">Other</p>
							</label>
						</div>
					</label>

					<label className="w-full">
						<h6 className="uppercase mb-3">Your Message</h6>
						<input
							type="text"
							placeholder="Enter Your Phone number..."
							className="p-big text-urg-black w-full h-40 border-2 p-4 rounded-lg"
						/>
					</label>

					<button type="button" className="secondary-button">
						Send Me Your Message
					</button>
				</form>
			</div>
		</section>
	);
}
