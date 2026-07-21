"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import logoSrc from "@/assets/logo/logo.svg";

export const AuthorSection = () => {
	return (
		<section className="w-full overflow-hidden border-primary/10 border-y bg-section py-24">
			<div className="container mx-auto px-4">
				<motion.div
					className="flex flex-col items-center gap-16 md:flex-row"
					initial={{ opacity: 0, y: 40 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<div className="flex w-full justify-center md:w-1/2">
						<Image
							alt="Shashi S. Piptan Logo"
							className="object-contain opacity-90 drop-shadow-2xl transition-opacity duration-500 hover:opacity-100"
							height={360}
							src={logoSrc}
							width={450}
						/>
					</div>
					<div className="w-full md:w-1/2">
						<h2 className="mb-6 font-heading font-light text-4xl text-heading md:text-5xl">
							Shashi S. Piptan
						</h2>
						<p className="mb-6 text-foreground/90 text-lg leading-relaxed">
							As the founder of The Piptan Group, Shashi S. Piptan has been at
							the forefront of urban development and infrastructure investment.
							With a unique vantage point on the rapid evolution of the UAE, he
							distills decades of experience into actionable strategies for the
							modern investor and urban planner.
						</p>
						<p className="border-primary border-l-2 pl-4 text-foreground/80 text-lg italic leading-relaxed">
							"Infrastructure is not just about building roads and skyscrapers;
							it's about engineering the future of human connectivity and
							sustainable growth."
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
