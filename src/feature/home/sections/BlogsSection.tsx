"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import type { BlogMeta } from "@/lib/blogs";

interface BlogsSectionProps {
	blogs: BlogMeta[];
}

export const BlogsSection = ({ blogs }: BlogsSectionProps) => {

	return (
		<section className="relative w-full bg-background py-16 md:py-24" id="blogs">
			<div className="container">
				<motion.div
					className="mb-12 text-center md:mb-16"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<p className="mb-4 font-medium text-primary/80 uppercase tracking-[0.2em]">
						Latest Insights
					</p>
					<h2 className="font-heading font-light text-4xl text-heading uppercase tracking-wide md:text-5xl lg:text-6xl">
						From the{" "}
						<span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text font-bold text-transparent">
							Blog
						</span>
					</h2>
				</motion.div>

				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blogs.map((blog, index) => (
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							key={blog.slug}
							transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
							viewport={{ once: true, margin: "-50px" }}
							whileInView={{ opacity: 1, y: 0 }}
						>
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
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
