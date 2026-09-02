import type { Metadata } from "next";

import { BlogSlugPage as BlogSlugFeature } from "@/feature/blogs/slug/BlogSlugPage";
import { getAllBlogSlugs, getBlogMeta } from "@/lib/blogs";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateStaticParams() {
	return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const meta = getBlogMeta(slug);

	if (!meta) {
		return {
			title: "Blog | InfraGuide UAE",
		};
	}

	return {
		title: `${meta.title} | InfraGuide UAE Blog`,
		description: meta.excerpt,
		openGraph: {
			title: meta.title,
			description: meta.excerpt,
			images: [{ url: meta.image }],
		},
	};
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	return <BlogSlugFeature slug={slug} />;
}
