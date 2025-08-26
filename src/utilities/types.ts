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
	icon: string;
	link: string;
};
