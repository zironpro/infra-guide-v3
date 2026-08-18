"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import logoSrc from "@/assets/logo/logo.svg";

export function Footer() {
	return (
		<footer className="w-full overflow-hidden border-primary/20 border-t bg-background pt-20 pb-8">
			<motion.div
				className="container"
				initial={{ opacity: 0, y: 40 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true, margin: "-50px" }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
					{/* Left Section */}
					<div className="flex flex-col items-start text-left lg:col-span-5">
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
						
						<h2 className="mt-10 font-heading text-3xl uppercase leading-tight tracking-wide text-heading sm:text-4xl md:text-5xl">
							Discover authoritative insights on <span className="text-primary">urban development.</span>
						</h2>
						
						<p className="mt-6 max-w-md text-base text-foreground/70 leading-relaxed">
							Infrastructure investment and sustainable growth that are shaping
							the future of the UAE.
						</p>


					</div>

					{/* Right Section Grid */}
					<div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-4 lg:pt-10">
						{/* General Column */}
						<div className="flex flex-col gap-4">
							<h4 className="font-heading text-sm uppercase tracking-[0.2em] text-primary">General</h4>
							<Link className="text-foreground/70 transition-colors hover:text-primary" href="/">Home</Link>
							<Link className="text-foreground/70 transition-colors hover:text-primary" href="/#about">About</Link>
							<Link className="text-foreground/70 transition-colors hover:text-primary" href="/blogs">Blog</Link>
							<Link className="text-foreground/70 transition-colors hover:text-primary" href="/#contact">Contact</Link>
						</div>

						{/* Support Column */}
						<div className="flex flex-col gap-4">
							<h4 className="font-heading text-sm uppercase tracking-[0.2em] text-primary">Support</h4>
							<Link className="text-foreground/70 transition-colors hover:text-primary" href="/privacy-policy">Privacy Policy</Link>
						</div>

						{/* Social Column */}
						<div className="flex flex-col gap-4">
							<h4 className="font-heading text-sm uppercase tracking-[0.2em] text-primary">Social</h4>
							<a className="text-foreground/70 transition-colors hover:text-primary" href="https://www.linkedin.com/company/shashi-piptan/home/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
							<a className="text-foreground/70 transition-colors hover:text-primary" href="https://www.instagram.com/shashipiptan" target="_blank" rel="noopener noreferrer">Instagram</a>
							<a className="text-foreground/70 transition-colors hover:text-primary" href="https://facebook.com/shashi-piptan" target="_blank" rel="noopener noreferrer">Facebook</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-20 flex flex-col items-center justify-between gap-4 border-primary/10 border-t pt-8 md:flex-row">
					<p className="text-foreground/50 text-sm">
						&copy; 2026 Piptan Investment &amp; Securities, All rights reserved
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
