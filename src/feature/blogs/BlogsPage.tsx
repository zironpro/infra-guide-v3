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
						The <span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text font-bold text-transparent">Blog</span>
					</h1>
					<p className="max-w-2xl text-lg text-foreground/70 sm:text-xl lg:text-2xl">
						Dive into our latest articles on infrastructure investment, urban
						planning, and the evolving landscape of global real estate.
					</p>
				</header>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blogs.map((blog) => (
						<div key={blog.slug}>
							<Card className="group flex h-full flex-col overflow-hidden border-primary/10 bg-section/50 transition-colors duration-300 hover:border-primary/30">
								<div className="relative aspect-[16/9] w-full overflow-hidden">
									<Image
										alt={blog.title}
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										fill
										src={blog.image}
									/>
									<div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
								</div>
								<CardHeader>
									<CardDescription className="text-primary/70">
										{blog.date}
									</CardDescription>
									<CardTitle className="font-heading text-2xl text-heading leading-tight transition-colors group-hover:text-primary">
										{blog.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="grow">
									<p className="text-foreground/70 text-base leading-relaxed">
										{blog.excerpt}
									</p>
								</CardContent>
								<CardFooter>
									<Link
										className="inline-flex items-center gap-2 font-medium text-primary text-sm uppercase tracking-wider transition-colors hover:text-accent"
										href={blog.link}
									>
										Read Article
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Link>
								</CardFooter>
							</Card>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};
