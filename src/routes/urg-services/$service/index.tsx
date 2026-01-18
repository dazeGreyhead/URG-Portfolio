import type { SanityDocument } from "@sanity/client";
import { createFileRoute, Link } from "@tanstack/react-router";
import FetchedProjectList from "@/components/FetchedProjectList";
import GrainyBackground from "@/components/GrainyBackground";
import URGButton from "@/components/URGButton";
import { getContentByCategory } from "@/sanity/client";
import { servicesProvided } from "@/utilities/data";
import { ButtonType } from "@/utilities/types";

export const Route = createFileRoute("/urg-services/$service/")({
	component: Service,
	loader: async ({ params }) => {
		return await getContentByCategory(params.service);
	},
	head: ({ params }) => {
		const serviceData = servicesProvided.find(
			(item) => item.slug === params.service,
		);
		return {
			meta: [
				{
					title: `${serviceData?.title || "Service"} - Umang Raj Gurung`,
				},
				{
					name: "description",
					content:
						serviceData?.description ||
						"Services provided by Umang Raj Gurung.",
				},

				{
					name: "keywords",
					content:
						"Umang Raj Gurung, Umang Gurung, URG, Web Developer, Tourist Guide, Video Producer, Nepal Tour Guide, Freelance Web Developer, Creative, Portfolio, Services, Writer, Director, Designer",
				},

				{
					property: "og:title",
					content: `${serviceData?.title || "Service"} - Umang Raj Gurung`,
				},
				{
					property: "og:description",
					content:
						serviceData?.description ||
						"Services provided by Umang Raj Gurung.",
				},
				{
					property: "og:image",
					content: "/Urg Website Landing Page.png",
				},
				{
					property: "og:url",
					content: `https://www.umangrajgurung.com.np/urg-services/${params.service}`,
				},
				{
					property: "og:type",
					content: "article",
				},
				{
					property: "site_name",
					content: "Umang Raj Gurung Portfolio Website",
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: `${serviceData?.title || "Service"} - Umang Raj Gurung`,
				},
				{
					name: "twitter:description",
					content:
						serviceData?.description ||
						"Services provided by Umang Raj Gurung.",
				},
				{
					name: "twitter:image",
					content: "/Urg Website Landing Page.png",
				},
			],
			links: [
				{
					rel: "canonical",
					href: `https://www.umangrajgurung.com.np/urg-services/${params.service}`,
				},
			],
		};
	},
});

function Service() {
	const categoryProjects: SanityDocument[] = Route.useLoaderData();

	// 1. Get the dynamic slug from the URL
	const { service: serviceSlug } = Route.useParams();

	// 2. Find the matching data in your array
	const serviceData = servicesProvided.find(
		(item) => item.slug === serviceSlug,
	);

	if (!serviceData) {
		// 3. Handle the "Not Found" case
		return (
			<section className="px-9 py-12">
				<h1 className="text-2xl font-bold">Service Not Found</h1>
				<p>We couldn't find the service: {serviceSlug}</p>
			</section>
		);
	}

	return (
		<section className="px-9 py-18 md:pt-22 xl:px-16  h-fit min-h-screen">
			<div className="flex flex-row justify-center">
				<div
					className="flex flex-col lg:flex-row gap-6 lg:gap-15 p-6 lg:p-10 w-full lg:w-[84%] border border-b-8 rounded-xl mt-6 items-center"
					style={{
						borderColor: serviceData.representingColor,
					}}
				>
					<div className="flex flex-col items-center gap-5 xl:gap-8 w-[40%]">
						<img
							src={serviceData.icon}
							alt={serviceData.title}
							className="h-22 w-[102px]"
						/>
						<h3 className="text-urg-black uppercase text-center">
							{serviceData.title}
						</h3>
					</div>
					<div className="flex flex-col gap-13">
						<p className="p-big text-trim">{serviceData.description}</p>
						{serviceData.softwareKnowledgeLogos && (
							<div className="flex flex-col xl:flex-row items-center gap-10">
								<h5 className="text-trim">Tools I Use: </h5>
								<div className="flex justify-center flex-row flex-wrap gap-10">
									{serviceData.softwareKnowledgeLogos?.map((logo) => (
										<img
											key={logo}
											src={logo}
											alt={logo}
											className="size-15 object-contain"
										/>
									))}
								</div>
							</div>
						)}
						<div className="flex justify-center xl:justify-end gap-10">
							<Link to="/contact">
								<URGButton buttonType={ButtonType.secondary}>
									Contact me about this!
								</URGButton>
							</Link>
							{serviceData.externalLink && (
								<a
									href={serviceData.externalLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<URGButton buttonType={ButtonType.primary}>
										Check this out: {serviceData.externalLink}
									</URGButton>
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col mt-10">
				<h4 className="pl-0 xl:pl-[7.5vw]">
					Projects that involve:{" "}
					<span style={{ color: serviceData.representingColor }}>
						{serviceData.title}
					</span>
				</h4>
				<FetchedProjectList projectList={categoryProjects} />
			</div>
			<GrainyBackground />
		</section>
	);
}
