import type { Metadata } from "next";

import { BlogSlugPage as BlogSlugFeature } from "@/feature/blogs/slug/BlogSlugPage";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	// Format slug for title (e.g., "the-future" -> "The Future")
	const title = slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return {
		title: `${title} | InfraGuide UAE Blog`,
		description: `Read our latest insights on ${title}.`,
	};
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	return <BlogSlugFeature slug={slug} />;
}
