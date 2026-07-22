"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import logoSrc from "@/assets/logo/logo.svg";

export function Footer() {
	return (
		<footer className="w-full overflow-hidden rounded-2xl border-primary/20 border-t bg-background pt-20 pb-8">
			<motion.div
				className="container mx-auto px-4"
				initial={{ opacity: 0, y: 40 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true, margin: "-50px" }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<div className="flex flex-col items-center justify-center text-center">
					<Link
						className="inline-block transition-opacity hover:opacity-80"
						href="/"
					>
						<Image
							alt="Shashi S. Piptan"
							className="object-contain"
							height={48}
							src={logoSrc}
							width={140}
						/>
					</Link>
					<p className="mt-6 max-w-md text-base text-foreground/70 leading-relaxed">
						Discover authoritative insights on urban development,
						infrastructure investment, and sustainable growth that are shaping
						the future of the UAE.
					</p>

					{/* Social Icons */}
					<div className="mt-8 flex items-center gap-4 text-foreground/50">
						<a
							aria-label="Instagram"
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-section transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
							href="https://instagram.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<svg
								fill="none"
								height="18"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="18"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
								<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
							</svg>
						</a>
						<a
							aria-label="Facebook"
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-section transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
							href="https://facebook.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<svg
								fill="none"
								height="18"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="18"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
							</svg>
						</a>
						<a
							aria-label="LinkedIn"
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-section transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
							href="https://linkedin.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							<svg
								fill="none"
								height="18"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								width="18"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect height="12" width="4" x="2" y="9" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</a>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-20 flex flex-col items-center justify-between gap-4 border-primary/10 border-t pt-8 md:flex-row">
					<p className="text-foreground/50 text-sm">
						&copy; {new Date().getFullYear()} Shashi S. Piptan. All rights
						reserved.
					</p>
					<p className="text-foreground/50 text-sm">
						Designed and developed by{" "}
						<a
							className="font-medium text-primary transition-all hover:underline"
							href="https://zironpro.ae"
							rel="noopener noreferrer"
							target="_blank"
						>
							Ziron Pro
						</a>
					</p>
				</div>
			</motion.div>
		</footer>
	);
}
