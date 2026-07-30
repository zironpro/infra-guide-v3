"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export const AuthorSection = () => {
	return (
		<section className="relative w-full bg-background pt-0" id="author">
			{/* Main Container - Auto height on mobile, fixed viewport height on desktop */}
			<div className="relative z-0 w-full overflow-hidden py-16 md:h-[80vh] md:min-h-[700px] md:py-0 lg:h-[90vh]">
				{/* Background Image - Hidden on mobile */}
				<Image
					alt="Author Background"
					className="hidden object-cover md:block"
					fill
					priority
					src="/images/bg-author.png"
				/>
				{/* Dark gradient overlay - Hidden on mobile */}
				<div className="absolute inset-0 hidden bg-gradient-to-t from-black/80 via-black/20 to-transparent md:block" />

				{/* Text Content */}
				<div className="relative z-10 w-full md:absolute md:bottom-0 md:left-0">
					<div className="container mx-auto px-4 md:pb-16 lg:pb-24">
						<motion.div
							className="w-full max-w-3xl md:ml-auto md:w-2/3 lg:w-1/2"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							{/* Giant Quotation Mark */}
							<span className="mb-2 block font-heading text-5xl text-primary leading-none md:mb-4 md:text-8xl md:text-white/90">
								“
							</span>

							{/* Uppercase Quote */}
							<p className="font-heading font-light text-heading text-xl uppercase leading-snug tracking-wider sm:text-2xl md:text-3xl md:text-white lg:text-4xl">
								INFRASTRUCTURE IS NOT JUST ABOUT BUILDING ROADS AND SKYSCRAPERS;
								IT'S ABOUT ENGINEERING THE FUTURE OF HUMAN CONNECTIVITY AND
								SUSTAINABLE GROWTH.
							</p>

							{/* Subtitle / Author Info */}
							<div className="mt-8 space-y-1 font-bold text-foreground/80 text-xs uppercase tracking-[0.2em] md:mt-16 md:text-white/80">
								<p>Shashi S. Piptan</p>
								<p className="text-primary/90 md:text-white/80">
									The Piptan Group
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
