import { createClient, type SanityDocument } from "@sanity/client";

export const client = createClient({
	projectId: "j5zj3pm3",
	dataset: "sanitytry",
	apiVersion: "2025-09-13",
	useCdn: false,
});

export async function getCreativeContent() {
	try {
		const query = `*[_type == 'creative-content'] | order(_createdAt desc)`;
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
