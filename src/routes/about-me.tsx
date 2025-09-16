import { createFileRoute } from "@tanstack/react-router";
import GrainyBackground from "@/components/GrainyBackground";
import { urgThingsILove } from "@/utilities/data";

export const Route = createFileRoute("/about-me")({
	component: AboutMe,
});

function AboutMe() {
	return (
		<main className="px-9 py-12 xl:pt-32 xl:px-16 xl:pb-12 h-fit min-h-screen flex flex-col gap-16">
			<section className="flex justify-center items-center">
				<div className="mt-10 flex  gap-20 items-center">
					<div className="relative w-[400px] h-[600px] rounded-[50px] overflow-hidden ">
						<img
							className="absolute min-h-full w-auto h-full max-w-none block transform -translate-x-1/2 left-1/2 "
							src="/Umang-Photo.jpg"
							alt="Umang about me"
						/>
					</div>

					<div className="flex flex-col gap-8 w-[700px]">
						<p className="text-5xl">
							The name's&nbsp;
							<span className="text-5xl font-primary font-bold text-urg-blue">
								Umang Raj Gurung
							</span>
							. Could you tell?
						</p>
						<p className="p-big text-urg-black-75">
							As you probably read in the homepage, I'm a creative professional
							engaged in multiple disciplines: Web Development, Video
							Production, Graphic Design, Writing etc. I've had the creative bug
							bite me when I was a kid and I've tried to create things ever
							since. You can see some of what I make in my creative corner. The
							aim is to make a film somewhere in the timeline of my life. Gotta
							make it big and I ain't stoppin.
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-8">
				<h3>Here are some assortments of things I love</h3>
				<div className="grid grid-cols-3 gap-8">
					{urgThingsILove.map((lovelyThings) => {
						return (
							<div
								key={lovelyThings.title}
								className="relative w-full h-full aspect-video rounded-3xl overflow-hidden group"
							>
								<div className="absolute z-10 w-full h-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="absolute z-20 flex flex-col gap-2 left-6 right-6 bottom-6">
										<h4 className="text-urg-white">{lovelyThings.title}</h4>
										<p className=" text-urg-black-25 p-regular">
											{lovelyThings.shortDescription}
										</p>
									</div>
								</div>
								<img
									className="absolute z-0 w-full h-full object-cover"
									src={lovelyThings.featuredImage}
									alt={lovelyThings.altText}
								/>
							</div>
						);
					})}
				</div>
			</section>
			<GrainyBackground />
		</main>
	);
}
