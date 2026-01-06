import { urgSocialMedia } from "@/utilities/data";

type SocialMediaIconsProps = {
	flexAndGap?: string;
	logoStyles?: string;
	size: number;
	color: string;
};

export default function SocialMediaIcons({
	flexAndGap,
	size,
	color,
	logoStyles,
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
						className={logoStyles}
						size={logo.sizeAdd ? logo.sizeAdd + size : size}
						color={color}
					/>
				</a>
			))}
		</div>
	);
}
