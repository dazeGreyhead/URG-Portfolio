import type { IconType } from "react-icons";

export type siteContent = {
	title: string;
	shortDescription: string;
	dateCreated: string;
	tags: string[];
	featuredImage: string;
	content?: string;
};

export type serviceCardData = {
	title: string;
	description: string;
	icon: string; // Assuming icon is a string representing the icon's name or path
	softwareKnowledgeLogos?: string[]; // The logos of the software used in the service
	representingColor: string; // The color representing the service
};

export type socialMediaLinks = {
	name: string;
	icon: IconType;
	link: string;
	sizeAdd?: number;
};

export type thingsILove = {
	title: string;
	shortDescription: string;
	featuredImage: string;
	altText: string;
};

export enum ButtonType {
	primary = "primary-button",
	secondary = "secondary-button",
	expandArrow = "arrow-expand-button",
}

export type workHistory = {
	companyName: string;
	position: string;
	startDate: string;
	endDate: string;
	jobDescription: string;
};

export type educationHistory = {
	schoolName: string;
	degree: string;
	startDate: string;
	endDate: string;
};

export type softwareProficiency = {
	softwareName: string;
	logo: string;
};

export type testimonials = {
	clientName: string;
	clientPosition: string;
	companyName?: string;
	companyLogo?: string;
	stars: number;
	review: string;
	clientPhoto?: string;
};
