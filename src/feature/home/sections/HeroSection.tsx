"use client";

import { useRef } from "react";

import Image from "next/image";

import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	Variants,
} from "framer-motion";

export const HeroSection = () => {
	const ref = useRef<HTMLElement>(null);

	// Track scroll progress within a taller section for extended parallax distance
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	// Smooth out the scroll progress for a buttery GSAP-like Apple feel
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 40,
		damping: 20,
		mass: 0.5,
		restDelta: 0.001,
	});

	// Layer 1: Background - Slow upward translate and subtle scale (distant camera move)
	const bgY = useTransform(smoothProgress, [0, 1], ["0vh", "-15vh"]);
	const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

	// Layer 2: Foreground - Upward translate approx twice as fast as background
	const layerY = useTransform(smoothProgress, [0, 1], ["0vh", "-30vh"]);

	const textY = useTransform(smoothProgress, [0, 0.8], ["0%", "-50%"]);
	const textOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 1.0,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<>
			{/* Fixed Parallax Container - Stays pinned behind the document */}
			<div
				className="fixed top-0 left-0 -z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-black"
				style={{ perspective: "1000px" }}
			>
				{/* Layer 1: Background (Dubai skyline) */}
				<motion.div
					className="absolute top-0 left-0 z-0 h-[120vh] w-full"
					style={{ y: bgY, scale: bgScale, transformOrigin: "center top" }}
				>
					<motion.div
						animate={{ opacity: 1 }}
						className="relative h-full w-full"
						initial={{ opacity: 0 }}
						transition={{ duration: 2, ease: "easeOut" }}
					>
						<Image
							alt="Dubai Skyline Background"
							className="object-cover object-top"
							fill
							priority
							src="/parallex/hero-bg.png"
						/>
						{/* Subtle gradient overlay to enhance depth and cinematic lighting */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
					</motion.div>
				</motion.div>

				{/* Layer 2: Foreground (Architectural elements) */}
				<motion.div
					className="absolute top-0 left-0 z-10 h-[135vh] w-full"
					style={{ y: layerY }}
				>
					<motion.div
						animate={{ y: "0%", opacity: 1 }}
						className="relative h-full w-full"
						initial={{ y: "10%", opacity: 0 }}
						transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
					>
						<Image
							alt="Foreground Architecture"
							className="object-cover object-bottom"
							fill
							priority
							src="/parallex/bg-layer.png"
						/>
					</motion.div>
				</motion.div>

				{/* Overlay for cinematic lighting and text readability */}
				<div className="absolute inset-0 z-20 bg-black/20" />

				{/* Content */}
				<motion.div
					className="container relative z-30 mx-auto flex flex-col items-center px-4 text-center"
					style={{ y: textY, opacity: textOpacity }}
				>
					<motion.div
						animate="visible"
						className="flex flex-col items-center"
						initial="hidden"
						variants={containerVariants}
					>
						<h1 className="sr-only">
							Dubai's Urban Evolution: A Blueprint for Infrastructure Investment
						</h1>
						<motion.p
							aria-hidden
							className="mb-6 font-medium text-foreground/90 text-sm uppercase tracking-[0.3em] drop-shadow-md md:text-base"
							variants={itemVariants}
						>
							A Blueprint for Infrastructure Investment
						</motion.p>
						<motion.div
							aria-hidden
							className="font-heading font-light text-5xl text-heading uppercase tracking-wide drop-shadow-lg md:text-7xl lg:text-8xl"
							variants={itemVariants}
						>
							Dubai's Urban Evolution
						</motion.div>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Spacer to drive animations and push the next section down */}
			<section
				className="pointer-events-none relative h-[250vh] w-full"
				ref={ref}
			/>
		</>
	);
};
