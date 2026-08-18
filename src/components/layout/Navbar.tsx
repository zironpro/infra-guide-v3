"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import logoSrc from "@/assets/logo/logo.svg";

import { cn } from "@/lib/utils";

export function Navbar() {
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="fixed top-0 z-50 w-full transition-all duration-500">
			{/* Animated Background Layer */}
			<div
				className={cn(
					"absolute inset-0 transition-all duration-500 ease-in-out",
					isScrolled
						? "border-border/40 border-b bg-background/95 opacity-100 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/60"
						: "opacity-0"
				)}
			/>

			<div
				className={`container relative z-10 flex items-center justify-between transition-all duration-500 ${isScrolled ? "py-3 md:py-4" : "py-6 md:py-8"}`}
			>
				<div className="flex items-center gap-8">
					<Link
						className={`relative flex aspect-2.5/1 shrink-0 items-center transition-all duration-500 hover:opacity-80 ${
							isScrolled ? "w-28 sm:w-32 md:w-36" : "w-36 sm:w-40 md:w-44"
						}`}
						href="/"
					>
						<Image
							alt="Shashi S. Piptan Logo"
							className="object-contain"
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 50vw"
							src={logoSrc}
						/>
					</Link>
					<div className="hidden gap-6 md:flex">
						<Link
							className="font-medium text-foreground/90 text-sm drop-shadow-sm transition-colors hover:text-primary"
							href="/"
						>
							Home
						</Link>
						<Link
							className="font-medium text-foreground/90 text-sm drop-shadow-sm transition-colors hover:text-primary"
							href="#insights"
						>
							Insights
						</Link>
						<Link
							className="font-medium text-foreground/90 text-sm drop-shadow-sm transition-colors hover:text-primary"
							href="#about"
						>
							About Us
						</Link>
						<Link
							className="font-medium text-foreground/90 text-sm drop-shadow-sm transition-colors hover:text-primary"
							href="#contact"
						>
							Contact
						</Link>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button className="bg-primary text-primary-foreground shadow-lg hover:bg-primary-hover">
						Get Started
					</Button>
				</div>
			</div>
		</nav>
	);
}
