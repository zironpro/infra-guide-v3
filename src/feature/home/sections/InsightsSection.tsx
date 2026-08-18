"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
	Award,
	BarChart3,
	Compass,
	Landmark,
	TrendingUp,
	Users,
} from "lucide-react";

export const InsightsSection = () => {
	const ref = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	// Extremely buttery, inertia-based Apple scroll feel
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 40,
		damping: 20,
		mass: 0.5,
		restDelta: 0.001,
	});

	// Desktop: 4 screens (100vw each) -> 400vw total track width.
	const xDesktop = useTransform(
		smoothProgress,
		[0.05, 0.85],
		["0vw", "-300vw"]
	);

	// Mobile: 7 screens (100vw each) -> 700vw total track width (1 title + 6 single items).
	const xMobile = useTransform(smoothProgress, [0.05, 0.85], ["0vw", "-600vw"]);

	// Mobile background horizontal parallax translation (pans horizontally with scroll)
	const bgXMobile = useTransform(smoothProgress, [0.05, 0.85], ["0%", "-35%"]);

	const insights = [
		{
			title: "Investment-Focused Insights",
			description:
				"Learn where the real opportunities for high returns lie in Dubai's evolving infrastructure landscape.",
			icon: TrendingUp,
		},
		{
			title: "Expert Contributions",
			description:
				"Gain perspectives from industry leaders, real estate professionals, and urban planners actively shaping Dubai's future.",
			icon: Users,
		},
		{
			title: "Data-Driven Analysis",
			description:
				"Explore well-researched case studies, statistics, and trends that drive smart investment decisions.",
			icon: BarChart3,
		},
		{
			title: "Covers Regulatory Frameworks",
			description:
				"Navigate Dubai's investor-friendly policies, legal systems, and development codes with clarity.",
			icon: Landmark,
		},
		{
			title: "Future-Ready Forecasts",
			description:
				"Discover what's next for Dubai and where new growth corridors and emerging sectors are headed.",
			icon: Compass,
		},
		{
			title: "Written by a Seasoned Insider",
			description:
				"Authored by a global investment advisor with firsthand experience in infrastructure and corporate liaisoning.",
			icon: Award,
		},
	];

	return (
		<section
			className="relative h-[600vh] bg-background"
			id="insights"
			ref={ref}
		>
			{/* Sticky container pins for the duration of the scroll */}
			<div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
				{/* Background Image - Mobile Horizontal Parallax */}
				<motion.div
					className="pointer-events-none absolute inset-0 -z-10 h-full w-[160%] md:hidden"
					style={{ x: bgXMobile }}
				>
					<Image
						alt="Insights Mobile Background"
						className="object-cover"
						fill
						priority
						src="/parallex/hero-bg.png"
					/>
					<div className="absolute inset-0 bg-background/60" />
				</motion.div>

				{/* Background Image - Desktop */}
				<div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
					<Image
						alt="Insights Background"
						className="object-cover"
						fill
						src="/images/insight-bg.png"
					/>
					<div className="absolute inset-0 bg-background/60" />
				</div>

				{/* Mobile Horizontal Scroll Track (1 item per slide) */}
				<motion.div className="flex h-full md:hidden" style={{ x: xMobile }}>
					{/* Slide 1: Title */}
					<div className="flex h-screen w-screen shrink-0 flex-col items-center justify-center p-6 text-center">
						<p className="mb-4 font-medium text-primary/80 text-xs uppercase tracking-[0.2em]">
							Why it's an
						</p>
						<h2 className="font-heading font-light text-5xl text-heading uppercase tracking-wide sm:text-6xl">
							Essential Read
						</h2>
						<p className="mt-6 max-w-xs text-foreground/70 text-lg leading-relaxed sm:text-xl">
							What makes "The Urban Evolution of Dubai: A Blueprint for
							Infrastructure Investment" indispensable.
						</p>
					</div>

					{/* Slides 2-7: Individual Insights */}
					{insights.map((insight) => (
						<div
							className="flex h-screen w-screen shrink-0 items-center justify-center p-6 text-center"
							key={`mobile-${insight.title}`}
						>
							<div className="flex w-full max-w-xs flex-col items-center justify-center sm:max-w-sm">
								<insight.icon className="mb-5 h-10 w-10 stroke-[1.5] text-primary/80" />
								<h3 className="mb-3 font-heading font-light text-3xl text-heading uppercase leading-snug tracking-wide sm:text-4xl">
									{insight.title}
								</h3>
								<p className="font-light text-foreground/80 text-lg leading-relaxed sm:text-xl">
									{insight.description}
								</p>
							</div>
						</div>
					))}
				</motion.div>

				{/* Desktop Horizontal Scroll Track (2 items per slide) */}
				<motion.div className="hidden h-full md:flex" style={{ x: xDesktop }}>
					{/* Slide 1: Massive Centered Heading */}
					<div className="flex h-screen w-screen shrink-0 flex-col items-center justify-center p-8 text-center">
						<p className="mb-6 font-medium text-primary/80 uppercase tracking-[0.2em]">
							Why it's an
						</p>
						<h2 className="font-heading font-light text-5xl text-heading uppercase tracking-wide md:text-8xl lg:text-[9vw]">
							Essential Read
						</h2>
						<p className="mt-8 max-w-2xl text-foreground/70 text-lg leading-relaxed md:text-2xl">
							What makes "The Urban Evolution of Dubai: A Blueprint for
							Infrastructure Investment" indispensable.
						</p>
					</div>

					{/* Slides 2-4: Paired Insight Texts */}
					{Array.from({ length: Math.ceil(insights.length / 2) }).map(
						(_, i) => (
							<div
								className="flex h-screen w-screen shrink-0 items-center justify-center p-8 px-12 md:px-24"
								key={insights[i * 2].title}
							>
								<div className="grid w-full max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
									{insights.slice(i * 2, i * 2 + 2).map((insight) => (
										<div
											className="flex flex-col items-center text-center"
											key={insight.title}
										>
											<insight.icon className="mb-6 h-12 w-12 stroke-[1] text-primary/60" />
											<h3 className="mb-4 font-heading font-light text-4xl text-heading uppercase tracking-wide md:text-5xl lg:text-6xl">
												{insight.title}
											</h3>
											<p className="font-light text-foreground/80 text-lg leading-relaxed md:text-2xl">
												{insight.description}
											</p>
										</div>
									))}
								</div>
							</div>
						)
					)}
				</motion.div>
			</div>
		</section>
	);
};
