"use client";

import Image from "next/image";

import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";

export const HeroSection = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
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
		<section className="relative flex min-h-screen w-full items-center overflow-hidden py-24 lg:py-32">
			<Image
				alt="Hero Background"
				className="-z-10 object-cover"
				fill
				priority
				src="/images/bg-hero.png"
			/>
			{/* Add an optional overlay to ensure text remains readable against the background */}
			<div className="absolute inset-0 -z-10 bg-section/30" />

			<div className="container relative z-10 mx-auto px-4">
				<motion.div
					animate="visible"
					className="max-w-3xl"
					initial="hidden"
					variants={containerVariants}
				>
					<motion.h1
						className="mb-6 font-heading font-light text-5xl text-heading md:text-7xl"
						variants={itemVariants}
					>
						Dubai's Urban Evolution
					</motion.h1>
					<motion.p
						className="mb-8 max-w-2xl text-foreground text-xl leading-relaxed md:text-2xl"
						variants={itemVariants}
					>
						Discover the visionary strategies behind one of the world's most
						iconic and dynamic cities.
					</motion.p>
					<motion.div className="flex gap-4" variants={itemVariants}>
						<Button
							className="border-none bg-linear-to-r from-primary to-accent px-8 text-primary-foreground shadow-xl transition-all duration-300 hover:from-primary-hover hover:to-primary"
							size="lg"
						>
							Pre-Order Now
						</Button>
						<Button
							className="border-primary/20 px-8 text-foreground hover:bg-primary/10"
							size="lg"
							variant="outline"
						>
							Read Chapter 1
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
