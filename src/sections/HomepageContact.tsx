import type { socialMediaLinks } from "@/utilities/types";

type HomepageContactProps = {
	urgSocialMedia: socialMediaLinks[];
};

export default function HomepageContact({
	urgSocialMedia,
}: HomepageContactProps) {
	return (
		<section className="pt-22 px-16 pb-35 min-h-screen">
			<div className="flex flex-col gap-4 w-[430px]">
				<h3 className="text-urg-black">Let's Work Together</h3>
				<p className="text-urg-black-75">
					Now you've seen what I'm capable of, why don't we work together?
				</p>
			</div>
			<div className="flex items-center justify-between w-[84%] h-fit">
				<div className="flex flex-col gap-10 w-[430px]">
					<div className="flex flex-col gap-5">
						<h2>Email me</h2>
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
								className="h-16 w-16 object-contain"
							/>
						))}
					</div>
				</div>
				<div>
					<form>
						<div className="mb-10">
							<label>
								<h5 className="uppercase mb-1">Name</h5>
								<input
									type="text"
									placeholder="Enter Your Name..."
									className="p-big text-urg-black-50 w-[580px] h-11 border-b-2 "
								/>
							</label>
						</div>
						<div className="mb-10">
							<label>
								<h5 className="uppercase mb-1">Email</h5>
								<input
									type="text"
									placeholder="example@gmail.com"
									className="p-big text-urg-black-50 w-[580px] h-11 border-b-2 "
								/>
							</label>
						</div>
						<div className="mb-10">
							<label>
								<h5 className="uppercase mb-1">Phone</h5>
								<input
									type="text"
									placeholder="Enter Your Phone number..."
									className="p-big text-urg-black-50 w-[580px] h-11 border-b-2 "
								/>
							</label>
						</div>
						<div className="mb-10">
							<label>
								<h5 className="uppercase mb-1">What do you need?</h5>
								<div className="flex gap-16">
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
						</div>
						<div className="mb-10">
							<label>
								<h5 className="uppercase mb-3">Your Message</h5>
								<input
									type="text"
									placeholder="Enter Your Phone number..."
									className="p-big text-urg-black-50 w-[580px] h-40 border-2 "
								/>
							</label>
						</div>
						<button type="button" className="secondary-button">
							Send Me Your Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
