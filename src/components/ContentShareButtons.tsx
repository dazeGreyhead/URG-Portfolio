import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BsLinkedin, BsShare, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaReddit } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

type ContentShareButtonProps = {
	title: string;
	description: string;
	buttonContainerStyles?: string;
	iconStyles?: string;
	className?: string;
};

export default function ContentShareButtons({
	title,
	description,
	buttonContainerStyles,
	iconStyles,
	className,
}: ContentShareButtonProps) {
	const [currentUrl, setCurrentUrl] = useState("");

	const location = useLocation();

	useEffect(() => {
		const baseUrl = window.location.origin;
		setCurrentUrl(`${baseUrl}${location.href}`);
	}, [location.href]);

	const shareData = {
		title: title,
		text: description,
		url: currentUrl,
	};

	const handleUniversalShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share(shareData);
			} catch (err: any) {
				console.debug("Share cancelled");
			}
		} else {
			console.log("Share didn't work...");
		}
	};

	const shareToPlatform = (platform: string) => {
		const encodedUrl = encodeURIComponent(shareData.url);
		const encodedTitle = encodeURIComponent(shareData.title);
		const encodedText = encodeURIComponent(shareData.text);
		let shareUrl = "";

		switch (platform) {
			case "x":
				shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
				break;
			case "facebook":
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
				break;
			case "linkedin":
				shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
				break;
			case "reddit":
				shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
				break;
			case "email":
				shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`;
				break;
			default:
				return;
		}

		window.open(shareUrl, "_blank", "width=600,height=400,noopener,noreferrer");
	};

	const copyToClipboard = () => {
		try {
			navigator.clipboard.writeText(shareData.url);
			alert(`Copied the text: ${shareData.url}`);
		} catch (err: any) {
			alert("Failed to copy link.");
		}
	};

	return (
		<div className={className}>
			<button
				type="button"
				onClick={handleUniversalShare}
				className={buttonContainerStyles}
			>
				<BsShare className={iconStyles} />
			</button>
			<button
				type="button"
				onClick={copyToClipboard}
				className={buttonContainerStyles}
			>
				<LuLink className={iconStyles} />
			</button>
			<button
				type="button"
				onClick={() => shareToPlatform("facebook")}
				className={buttonContainerStyles}
			>
				<FaFacebookF className={iconStyles} />
			</button>
			<button
				type="button"
				onClick={() => shareToPlatform("linkedin")}
				className={buttonContainerStyles}
			>
				<BsLinkedin className={iconStyles} />
			</button>
			<button
				type="button"
				onClick={() => shareToPlatform("x")}
				className={buttonContainerStyles}
			>
				<BsTwitterX className={iconStyles} />
			</button>

			<button
				type="button"
				onClick={() => shareToPlatform("reddit")}
				className={buttonContainerStyles}
			>
				<FaReddit className={iconStyles} />
			</button>
			<button
				type="button"
				onClick={() => shareToPlatform("email")}
				className={buttonContainerStyles}
			>
				<MdEmail className={iconStyles} />
			</button>
		</div>
	);
}
