"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { BlogMeta } from "@/lib/blogs";

interface BlogListProps {
	blogs: BlogMeta[];
}

export const BlogList = ({ blogs }: BlogListProps) => {
	const [selectedLabel, setSelectedLabel] = useState<string>("All");
	const [searchQuery, setSearchQuery] = useState("");

	// Extract unique labels
	const labels = useMemo(() => {
		const uniqueLabels = new Set<string>();
		blogs.forEach((blog) => {
			if (blog.label) {
				uniqueLabels.add(blog.label);
			}
		});
		return ["All", ...Array.from(uniqueLabels)];
	}, [blogs]);

	// Filter blogs
	const filteredBlogs = useMemo(() => {
		return blogs.filter((blog) => {
			const matchesLabel = selectedLabel === "All" || blog.label === selectedLabel;
			const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesLabel && matchesSearch;
		});
	}, [blogs, selectedLabel, searchQuery]);

	return (
		<div>
			{/* Filters & Search Row */}
			<div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row rounded-lg bg-section/50 p-4 border border-primary/10 shadow-sm">
				{/* Label Filters */}
				<div className="flex flex-wrap items-center gap-2">
					{labels.map((label) => (
						<button
							key={label}
							onClick={() => setSelectedLabel(label)}
							className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
								selectedLabel === label
									? "border-primary bg-primary text-background"
									: "border-primary/20 bg-transparent text-primary hover:border-primary/50"
							}`}
						>
							{label}
						</button>
					))}
				</div>

				{/* Search Bar */}
				<div className="relative w-full md:w-72">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-primary/50">
						<Search className="h-4 w-4" />
					</div>
					<Input
						type="text"
						placeholder="Search blogs..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="pl-9 border-primary/20 bg-section/50 text-foreground placeholder:text-primary/40 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
					/>
				</div>
			</div>

			{/* Blog Grid */}
			{filteredBlogs.length > 0 ? (
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{filteredBlogs.map((blog) => (
						<div key={blog.slug}>
							<Link className="group block h-full" href={blog.link}>
								<Card className="flex h-full flex-col overflow-hidden border-primary/10 bg-section/50 pt-0 transition-colors duration-300 group-hover:border-primary/30">
									<div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl">
										<Image
											alt={blog.title}
											className="object-cover transition-transform duration-500 group-hover:scale-105"
											fill
											src={blog.image}
										/>
										<div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
									</div>
									<CardHeader>
										<div className="mb-2 flex items-center gap-2">
											{blog.label && (
												<>
													<span className="text-xs font-semibold text-primary uppercase tracking-wider">
														{blog.label}
													</span>
													<span className="text-primary/40 text-xs">•</span>
												</>
											)}
											<CardDescription className="flex items-center gap-2 text-primary/70">
												<span>{blog.date}</span>
												{blog.readTime && (
													<>
														<span className="text-primary/40 text-xs">•</span>
														<span>{blog.readTime}</span>
													</>
												)}
											</CardDescription>
										</div>
										<CardTitle className="font-heading text-2xl text-heading leading-tight transition-colors group-hover:text-primary">
											{blog.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="grow">
										<p className="text-base text-foreground/70 leading-relaxed">
											{blog.excerpt}
										</p>
									</CardContent>
									<CardFooter>
										<span className="inline-flex items-center gap-2 font-medium text-primary text-sm uppercase tracking-wider transition-colors group-hover:text-accent">
											Read Article
											<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
										</span>
									</CardFooter>
								</Card>
							</Link>
						</div>
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center py-20 text-center">
					<p className="text-xl font-medium text-foreground/70">No blogs found.</p>
					<p className="mt-2 text-foreground/50">Try adjusting your filters or search query.</p>
				</div>
			)}
		</div>
	);
};
