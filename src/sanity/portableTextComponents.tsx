import type { PortableTextComponents } from "@portabletext/react";
import ReactPlayer from "react-player";
import { urlFor } from "./sanityImageUrl";

export const components: PortableTextComponents = {
	types: {
		image: (props) =>
			props.value ? (
				<img
					className="rounded-lg not-prose w-full h-auto"
					src={urlFor(props.value)
						.width(600)
						.height(400)
						.quality(80)
						.auto("format")
						.url()}
					alt={props?.value?.alt || ""}
					width="600"
					height="400"
				/>
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
};
