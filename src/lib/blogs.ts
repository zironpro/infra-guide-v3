import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "src/contents/blogs");

export interface BlogMeta {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	image: string;
	link: string;
}

export interface BlogPost extends BlogMeta {
	content: string;
}

/** Return all blog slugs (file names without extension) sorted newest-first by date field */
export function getAllBlogSlugs(): string[] {
	if (!fs.existsSync(BLOGS_DIR)) return [];
	return fs
		.readdirSync(BLOGS_DIR)
		.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
		.map((f) => f.replace(/\.mdx?$/, ""));
}

/** Return metadata for all blogs, sorted by date descending */
export function getAllBlogsMeta(): BlogMeta[] {
	const slugs = getAllBlogSlugs();
	const metas = slugs.map((slug) => getBlogMeta(slug)).filter(Boolean) as BlogMeta[];

	// Sort newest first using the date string (gray-matter parses it)
	metas.sort((a, b) => {
		const da = new Date(a.date).getTime();
		const db = new Date(b.date).getTime();
		return db - da;
	});

	return metas;
}

/** Return metadata-only for a single blog by slug */
export function getBlogMeta(slug: string): BlogMeta | null {
	const filePath = findBlogFile(slug);
	if (!filePath) return null;

	const raw = fs.readFileSync(filePath, "utf-8");
	const { data } = matter(raw);

	return {
		slug,
		title: data.title ?? slug,
		excerpt: data.excerpt ?? "",
		date: data.date ?? "",
		image: data.image ?? "",
		link: `/blogs/${slug}`,
	};
}

/** Return full blog post (meta + raw MDX string) for a single slug */
export function getBlogPost(slug: string): BlogPost | null {
	const filePath = findBlogFile(slug);
	if (!filePath) return null;

	const raw = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(raw);

	return {
		slug,
		title: data.title ?? slug,
		excerpt: data.excerpt ?? "",
		date: data.date ?? "",
		image: data.image ?? "",
		link: `/blogs/${slug}`,
		content,
	};
}

function findBlogFile(slug: string): string | null {
	for (const ext of [".mdx", ".md"]) {
		const p = path.join(BLOGS_DIR, `${slug}${ext}`);
		if (fs.existsSync(p)) return p;
	}
	return null;
}
