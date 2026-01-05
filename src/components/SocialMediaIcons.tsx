import { urgSocialMedia } from "@/utilities/data";

type SocialMediaIconsProps = {
	flexAndGap: string;
	size: number;
	color: string;
};

export default function SocialMediaIcons({
	flexAndGap,
	size,
	color,
}: SocialMediaIconsProps) {
	return (
		<div className={flexAndGap}>
			{urgSocialMedia?.map((logo) => (
				<a
					key={logo.name}
					href={logo.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<logo.icon
						size={logo.sizeAdd ? logo.sizeAdd + size : size}
						color={color}
					/>
				</a>
			))}
		</div>
	);
}
