import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { getAllBlogsMeta } from "@/lib/blogs";

import { BlogList } from "./BlogList";

export const BlogsPage = () => {
	const blogs = getAllBlogsMeta();

	return (
		<main className="min-h-screen w-full bg-background pt-12 pb-24 text-foreground">
			<div className="container">
				{/* Back to Home Link */}
				<Link
					className="mb-8 inline-flex items-center gap-2 font-medium text-primary text-sm transition-colors hover:underline"
					href="/"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to Home
				</Link>

				<header className="mb-12 flex flex-col items-center border-primary/20 border-b pb-8 text-center">
					<p className="mb-4 font-medium text-primary/80 uppercase tracking-[0.2em]">
						Latest Insights
					</p>
					<h1 className="mb-4 font-heading text-4xl text-heading uppercase tracking-wide sm:text-5xl lg:text-6xl">
						The{" "}
						<span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text font-bold text-transparent">
							Blog
						</span>
					</h1>
					<p className="max-w-2xl text-foreground/70 text-lg sm:text-xl lg:text-2xl">
						Dive into our latest articles on infrastructure investment, urban
						planning, and the evolving landscape of global real estate.
					</p>
				</header>

				<BlogList blogs={blogs} />
			</div>
		</main>
	);
};
