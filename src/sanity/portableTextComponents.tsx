import type { PortableTextComponents } from "@portabletext/react";
import { Link } from "@tanstack/react-router";
import ReactPlayer from "react-player";
import { urlFor } from "./sanityImageUrl";

export const components: PortableTextComponents = {
	types: {
		image: (props) =>
			props.value ? (
				<figure className="py-6">
					<img
						className="rounded-lg not-prose w-full h-auto"
						src={urlFor(props.value).quality(80).auto("format").url()}
						alt={props?.value?.alt || ""}
						width="100%"
						height="auto"
					/>
					<figcaption className="p-small text-urg-black-50 mt-1 italic">
						{props.value?.caption}
					</figcaption>
				</figure>
			) : null,

		youtube: ({ value }) => {
			const { url } = value || {};
			return url ? (
				<ReactPlayer
					src={url}
					controls={false}
					playing={true}
					loop={true}
					height={500}
					width={1000}
				/>
			) : null;
		},
	},
	marks: {
		link: ({ value }) => {
			return (
				<a
					href={value.href}
					target={"_blank"}
					rel="noopener noreferrer"
					className="text-urg-blue visited:text-urg-blue-dark hover:underline no-underline"
				>
					{value.href}
				</a>
			);
		},
	},
};
