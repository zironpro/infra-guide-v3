"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";

export const SideProgress = () => {
	const { scrollYProgress } = useScroll();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	// Rotate the text tied to scroll for a dynamic effect
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

	// Format scroll progress to 0-100
	const progressNumber = useTransform(scrollYProgress, (val) => {
		const num = Math.round(val * 100);
		// Ensure it's always 2 digits (e.g. 05, 16)
		return num.toString().padStart(2, "0");
	});

	if (!mounted) return null;

	return (
		<div className="pointer-events-none fixed top-0 left-4 z-50 hidden h-screen w-24 flex-col items-center justify-between py-12 text-white mix-blend-difference md:flex">
			{/* Top: Circular Logo */}
			<Link
				className="pointer-events-auto relative flex cursor-pointer items-center justify-center transition-transform hover:scale-105 active:scale-95"
				href="/"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				<motion.div className="relative h-[72px] w-[72px]" style={{ rotate }}>
					<svg className="h-full w-full" viewBox="0 0 100 100">
						<path
							d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
							fill="none"
							id="circle-path"
						/>
						<text className="fill-current font-bold text-[12.5px] uppercase tracking-[0.2em]">
							<textPath href="#circle-path" startOffset="0%">
								URBAN EVOLUTION • URBAN EVOLUTION •
							</textPath>
						</text>
					</svg>
				</motion.div>
				<div className="absolute inset-0 flex items-center justify-center">
					<svg className="h-8 w-8" viewBox="0 0 24 24">
						<text
							className="fill-current font-heading font-medium text-[22px]"
							dominantBaseline="central"
							textAnchor="middle"
							x="50%"
							y="50%"
						>
							P
						</text>
					</svg>
				</div>
			</Link>

			{/* Middle: Progress Bar */}
			<div className="flex flex-1 flex-col items-center gap-6 py-12">
				{/* Top line */}
				<div className="h-8 w-[1px] bg-white/40" />

				{/* Number */}
				<motion.span className="font-bold font-heading text-xl tracking-widest">
					{progressNumber}
				</motion.span>

				{/* Track */}
				<div className="relative w-[1px] flex-1 bg-white/20">
					{/* Fill */}
					<motion.div
						className="absolute top-0 w-full origin-top bg-white"
						style={{ scaleY: scrollYProgress }}
					/>
				</div>
			</div>

			{/* Bottom: Scroll Text & Arrow */}
			<div className="flex flex-col items-center gap-6">
				<span
					className="font-bold text-white/80 text-xs uppercase tracking-[0.3em]"
					style={{ writingMode: "vertical-rl" }}
				>
					Scroll
				</span>
				{/* Animated Arrow */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					className="flex flex-col items-center"
					transition={{
						duration: 2,
						ease: "easeInOut",
						repeat: Number.POSITIVE_INFINITY,
					}}
				>
					<div className="h-10 w-[1px] bg-white/80" />
					<svg className="mt-1 h-3 w-3 fill-white/80" viewBox="0 0 24 24">
						<path d="M7 10l5 5 5-5z" />
					</svg>
				</motion.div>
			</div>
		</div>
	);
};
