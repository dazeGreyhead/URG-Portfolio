import { createFileRoute } from "@tanstack/react-router";
import GrainyBackground from "@/components/GrainyBackground";
import {
	urgEducationHistory,
	urgSoftwareProficiencies,
	urgWorkHistory,
} from "@/utilities/data";

export const Route = createFileRoute("/experience")({
	component: Experience,
});

function Experience() {
	return (
		<main className="px-9 py-18 md:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="flex flex-col gap-6 xl:flex-row items-center xl:justify-between">
				<div className="flex flex-col gap-4 w-full xl:w-[430px]">
					<h3>Curriculum Vitae</h3>
					<p className="text-urg-black-75">
						You'll notice I've bounced around a lot of places.
					</p>
				</div>
			</div>
			<section className="flex mt-12 flex-col gap-24">
				<div className="flex flex-col xl:flex-row items-stretch">
					<div className="w-full xl:w-[580px] pb-6 xl:pb-27">
						<h2 className="static xl:sticky xl:top-30 ">Work History</h2>
					</div>

					<div className="flex flex-col gap-10 ">
						{urgWorkHistory.map((workplace) => {
							return (
								<div
									className="flex flex-col gap-2"
									key={workplace.companyName}
								>
									<h4 className="text-urg-orange">{workplace.companyName}</h4>
									<h6 className="text-urg-black-75">{workplace.position}</h6>
									<p className="p-big text-urg-black-75">{`${workplace.startDate} - ${workplace.endDate}`}</p>
									<p className="text-urg-black-75">
										{workplace.jobDescription}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-col xl:flex-row items-stretch">
					<div className="w-full xl:w-[580px] pb-6 xl:pb-27">
						<h2 className="static xl:sticky xl:top-30 ">Education</h2>
					</div>
					<div className="flex flex-col gap-10">
						{urgEducationHistory.map((school) => {
							return (
								<div className="flex flex-col gap-2" key={school.schoolName}>
									<h4 className="text-urg-orange">{school.schoolName}</h4>
									<h6 className="text-urg-black-75">{school.degree}</h6>
									<p className="p-big text-urg-black-75">{`${school.startDate} - ${school.endDate}`}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-col xl:flex-row items-stretch">
					<div className="w-full xl:w-[580px] pb-15 xl:pb-27">
						<h2 className="static xl:sticky xl:top-30 ">
							Software Proficiency
						</h2>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-13 gap-x-2 sm:gap-x-30 sm:gap-y-23">
						{urgSoftwareProficiencies.map((software) => {
							return (
								<div
									className="flex flex-col gap-6 items-center"
									key={software.softwareName}
								>
									<img
										src={software.logo}
										alt={software.softwareName}
										className="size-13 sm:size-20 object-contain"
									/>
									<h5 className="text-lg text-center sm:text-xl">
										{software.softwareName}
									</h5>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<GrainyBackground />
		</main>
	);
}
