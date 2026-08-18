"use client";

import { useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

export const AboutSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const slides = [
		{
			type: "video",
			src: "/video/video-about.mp4",
			content:
				"Dubai's rise from a desert port to a global metropolis is the result of unprecedented urban planning, visionary infrastructure investment, and a relentless pursuit of the future.",
			subtitle: "Designed as a Blueprint, Not Just A Book",
		},
		{
			type: "image",
			src: "/images/about-image.png",
			content:
				"From groundbreaking public transport systems to visionary smart city initiatives, explore the exact frameworks that attract billions in global capital.",
			subtitle: "A Deep Dive Into Sustainable Infrastructure",
		},
	];

	const nextSlide = () => setActiveIndex((prev) => (prev === 0 ? 1 : 0));
	const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? 1 : 0));

	return (
		<section className="relative w-full overflow-visible" id="about">
			{/* Era Residence Style Arch Transition */}
			<div className="relative z-20 -mt-[25vw] w-full drop-shadow-2xl md:-mt-[15vw]">
				<svg
					className="block h-auto w-full"
					preserveAspectRatio="xMidYMax meet"
					viewBox="0 0 1440 300"
				>
					{/* Background Arch */}
					<path className="fill-background" d="M-100,300 Q720,-50 1540,300 Z" />
					{/* Text Path */}
					<path d="M-100,300 Q720,-50 1540,300" fill="none" id="text-path" />
					<text
						className="fill-foreground/70 font-heading uppercase tracking-[0.2em]"
						style={{ fontSize: "24px" }}
					>
						<textPath href="#text-path" startOffset="50%" textAnchor="middle">
							<tspan dy="70">A Masterclass in Infrastructure</tspan>
						</textPath>
					</text>
				</svg>
			</div>

			{/* Main Content Area */}
			<div className="relative z-20 w-full bg-background pt-4 pb-12 md:pb-16">
				<div className="container">
					<motion.div
						className="flex flex-col items-center text-center"
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true, margin: "-100px" }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{/* Centered Heading */}
						<h2 className="mb-8 font-heading font-light text-4xl text-heading uppercase tracking-wide md:text-5xl lg:text-6xl">
							Urban Evolution
						</h2>

						{/* Centered Graphic Carousel (Video/Image) */}
						<div className="relative mx-auto aspect-[16/9] w-full max-w-2xl overflow-hidden bg-primary/5 shadow-xl">
							<AnimatePresence mode="wait">
								{slides[activeIndex].type === "video" ? (
									<motion.video
										animate={{ opacity: 1 }}
										autoPlay
										className="h-full w-full object-cover"
										exit={{ opacity: 0 }}
										initial={{ opacity: 0 }}
										key="video-slide"
										loop
										muted
										playsInline
										src={slides[activeIndex].src}
										transition={{ duration: 0.5 }}
									/>
								) : (
									<motion.div
										animate={{ opacity: 1 }}
										className="relative h-full w-full"
										exit={{ opacity: 0 }}
										initial={{ opacity: 0 }}
										key="image-slide"
										transition={{ duration: 0.5 }}
									>
										<Image
											alt="About Graphic"
											className="object-cover"
											fill
											src={slides[activeIndex].src}
										/>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Carousel Controls */}
						<div className="mt-8 flex items-center gap-6 font-medium text-foreground/50 text-sm uppercase tracking-widest">
							<button
								className="transition-colors hover:text-foreground"
								onClick={prevSlide}
							>
								&lt;
							</button>
							<span>{slides.length}</span>
							<div className="h-px w-24 bg-foreground/20" />
							<span>{activeIndex + 1}</span>
							<button
								className="transition-colors hover:text-foreground"
								onClick={nextSlide}
							>
								&gt;
							</button>
						</div>

						{/* Text Content */}
						<div className="mt-14 flex min-h-[140px] flex-col items-center justify-start">
							<AnimatePresence mode="wait">
								<motion.p
									animate={{ opacity: 1, y: 0 }}
									className="max-w-2xl font-medium text-foreground/80 text-xl leading-relaxed md:text-2xl"
									exit={{ opacity: 0, y: -10 }}
									initial={{ opacity: 0, y: 10 }}
									key={`desc-${activeIndex}`}
									transition={{ duration: 0.3 }}
								>
									{slides[activeIndex].content}
								</motion.p>
							</AnimatePresence>

							<AnimatePresence mode="wait">
								<motion.p
									animate={{ opacity: 1, y: 0 }}
									className="mt-14 font-bold text-foreground/50 text-xs uppercase tracking-[0.2em]"
									exit={{ opacity: 0, y: -10 }}
									initial={{ opacity: 0, y: 10 }}
									key={`sub-${activeIndex}`}
									transition={{ duration: 0.3, delay: 0.1 }}
								>
									{slides[activeIndex].subtitle}
								</motion.p>
							</AnimatePresence>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
