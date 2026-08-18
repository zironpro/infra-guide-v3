import Image from "next/image";
import { notFound } from "next/navigation";

import { BLOGS } from "@/constants/blogs";

interface BlogSlugPageProps {
	slug: string;
}

export const BlogSlugPage = ({ slug }: BlogSlugPageProps) => {
	const blog = BLOGS.find((b) => b.slug === slug);

	if (!blog) {
		notFound();
	}

	return (
		<main className="min-h-screen w-full bg-background pt-12 pb-24 text-foreground">
			<div className="container max-w-5xl">
				<article>
					<header className="mb-12 border-primary/20 border-b pb-8">
						<p className="mb-4 font-medium text-primary/80 uppercase tracking-[0.2em]">
							{blog.date}
						</p>
						<h1 className="mb-6 font-heading text-3xl text-heading uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl">
							{blog.title}
						</h1>
					</header>

					<div className="relative mb-12 aspect-video w-full overflow-hidden rounded-xl border border-primary/10 shadow-lg">
						<Image
							alt={blog.title}
							className="object-cover"
							fill
							priority
							src={blog.image}
						/>
					</div>

					<div className="prose prose-xl prose-invert prose-p:mb-8 max-w-none font-light prose-headings:font-heading prose-a:text-primary prose-headings:text-heading text-foreground/80 prose-headings:uppercase leading-loose prose-headings:tracking-wide marker:text-primary hover:prose-a:text-accent">
						{blog.content}
					</div>
				</article>
			</div>
		</main>
	);
};
