import { createClient, type SanityDocument } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION;

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
});

// Function to fetch all creative content documents
export async function getCreativeContent() {
	try {
		const query = `*[_type == 'creative-content'] | order(publishedAt desc)`;
		const data = await client.fetch<SanityDocument[]>(query);

		// Check if the returned data is an array and has items
		if (!data || data.length === 0) {
			console.log("No creative content found.");
		}

		return data;
	} catch (error) {
		console.error("Failed to fetch creative content:", error);
		// Return an empty array to prevent the app from crashing
		return [];
	}
}

// Function to fetch featured and recent creative content for the homepage
export async function getHomepageCreativeContent() {
	try {
		const query = `[*[_type == "creative-content" && featured == true][0],
  ...*[_type == "creative-content" && (!defined(featured) || featured != true)] | order(publishedAt desc)[0...3]]

`;
		const data = await client.fetch<SanityDocument[]>(query);

		// Check if the returned data is an array and has items
		if (!data || data.length === 0) {
			console.log("No creative content found.");
		}

		return data;
	} catch (error) {
		console.error("Failed to fetch creative content:", error);
		// Return an empty array to prevent the app from crashing
		return [];
	}
}

// Function to fetch a single creative content document by its slug
export async function getIndividualCreativeContent(slug: string) {
	try {
		const query = `*[_type == 'creative-content' && slug.current == $slug]{
    _createdAt,
    _id,
    title,
    mainImage,
    tags,
	coverVideo,
    publishedAt,
    body,
  }[0]`;
		const data = await client.fetch<SanityDocument>(query, { slug });

		// Check if the returned data is an array and has items
		if (!data || data.length === 0) {
			console.log("No creative content found.");
		}

		return data;
	} catch (error) {
		console.error("Failed to fetch creative content:", error);
		// Return an empty array to prevent the app from crashing
		return [];
	}
}

// Function to fetch featured portfolio projects for the homepage
export async function getHomepagePortfolioProjects() {
	try {
		const query = `*[_type == "portfolio-projects" || _type == "creative-content" && featured == true][0...6] | order(publishedAt desc)`;
		const data = await client.fetch<SanityDocument[]>(query);

		// Check if the returned data is an array and has items
		if (!data || data.length === 0) {
			console.log("No portfolio projects found.");
		}

		return data;
	} catch (error) {
		console.error("Failed to fetch portfolio projects:", error);
		// Return an empty array to prevent the app from crashing
		return [];
	}
}

// Function to fetch portfolio projects for the portfolio page.
export async function getPortfolioProjects() {
	try {
		const query = `*[_type == "portfolio-projects"] | order(publishedAt desc)`;
		const data = await client.fetch<SanityDocument[]>(query);

		// Check if the returned data is an array and has items
		if (!data || data.length === 0) {
			console.log("No portfolio projects found.");
		}

		return data;
	} catch (error) {
		console.error("Failed to fetch portfolio projects:", error);
		// Return an empty array to prevent the app from crashing
		return [];
	}
}

// Function to fetch a single portfolio project document by its slug
export async function getIndividualProject(slug: string) {
	try {
		const query = `*[_type == 'portfolio-projects' && slug.current == $slug][0]`;
		const data = await client.fetch<SanityDocument>(query, { slug });

		// Check if the returned data is an array and has items
		if (!data || data.length === 0) {
			console.log("No portfolio project found.");
		}

		return data;
	} catch (error) {
		console.error("Failed to fetch portfolio project:", error);
		// Return an empty array to prevent the app from crashing
		return [];
	}
}
