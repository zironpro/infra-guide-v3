import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ChevronRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getBlogPost } from "@/lib/blogs";

interface BlogSlugPageProps {
	slug: string;
}

export const BlogSlugPage = ({ slug }: BlogSlugPageProps) => {
	const blog = getBlogPost(slug);

	if (!blog) {
		notFound();
	}

	return (
		<main className="min-h-screen w-full bg-background pt-12 pb-24 text-foreground">
			<div className="container max-w-5xl">
				<article>
					<header className="mb-12 border-primary/20 border-b pb-8">
						<nav aria-label="Breadcrumb" className="mb-8">
							<ol className="flex items-center space-x-2 font-medium text-foreground/60 text-xs uppercase tracking-wider">
								<li>
									<Link
										className="transition-colors hover:text-primary"
										href="/"
									>
										Home
									</Link>
								</li>
								<li>
									<ChevronRight className="h-3 w-3" />
								</li>
								<li>
									<Link
										className="transition-colors hover:text-primary"
										href="/blogs"
									>
										Blogs
									</Link>
								</li>
								<li>
									<ChevronRight className="h-3 w-3" />
								</li>
								<li
									aria-current="page"
									className="max-w-[200px] truncate text-primary sm:max-w-[400px]"
								>
									{blog.title}
								</li>
							</ol>
						</nav>
						<p className="mb-4 font-medium text-primary/80 uppercase tracking-[0.2em]">
							{blog.date}
						</p>
						<h1 className="mb-6 font-heading text-3xl text-heading uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl">
							{blog.title}
						</h1>
						{blog.quote && (
							<blockquote className="my-8 border-primary/50 border-l-2 pl-6 text-foreground/80 text-xl italic leading-relaxed">
								"{blog.quote}"
							</blockquote>
						)}
						{blog.author && (
							<p className="mt-4 font-medium text-primary text-sm uppercase tracking-wider">
								{blog.author}
							</p>
						)}
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

					<div className="prose prose-xl prose-invert prose-h2:mt-16 prose-h3:mt-10 prose-h2:mb-6 prose-h3:mb-3 prose-p:mb-8 max-w-none font-light prose-headings:font-heading prose-a:text-primary prose-h2:text-3xl prose-h2:text-primary prose-h3:text-primary prose-h3:text-xl text-foreground/80 prose-headings:uppercase leading-loose prose-headings:tracking-wide prose-a:underline marker:text-primary hover:prose-a:text-accent [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:text-primary [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:md:text-4xl [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:font-heading [&_h3]:text-primary [&_h3]:text-xl [&_h3]:uppercase [&_h3]:tracking-wide [&_h3]:md:text-2xl">
						<MDXRemote
							components={{
								a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
									<a
										{...props}
										className="underline decoration-primary/50 underline-offset-4 transition-all hover:decoration-primary"
										rel="noopener noreferrer"
										target="_blank"
									/>
								),
								blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
									<blockquote
										{...props}
										className="my-8 border-primary/50 border-l-2 pl-6 text-foreground/80 text-xl italic leading-relaxed"
									/>
								),
							}}
							source={blog.content}
						/>
					</div>
				</article>
			</div>
		</main>
	);
};
