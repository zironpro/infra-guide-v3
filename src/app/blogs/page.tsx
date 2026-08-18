import type { Metadata } from "next";

import { BlogsPage as BlogsFeature } from "@/feature/blogs/BlogsPage";

export const metadata: Metadata = {
	title: "Blogs & Insights | InfraGuide UAE",
	description:
		"Read the latest insights and news about Dubai's infrastructure and urban development.",
	keywords: [
		"InfraGuide UAE blogs",
		"Dubai infrastructure insights",
		"urban development news",
	],
	robots: {
		index: true,
		follow: true,
	},
};

export default function BlogsPage() {
	return <BlogsFeature />;
}
