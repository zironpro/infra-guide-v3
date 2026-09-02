import type { MetadataRoute } from "next";

import { getAllBlogsMeta } from "@/lib/blogs";

const BASE_URL = "https://www.infraguideuae.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const blogs = getAllBlogsMeta();
	const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
		url: `${BASE_URL}/blogs/${blog.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1.0,
		},
		{
			url: `${BASE_URL}/blogs`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		...blogEntries,
	];
}
