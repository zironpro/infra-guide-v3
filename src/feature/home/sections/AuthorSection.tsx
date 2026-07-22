"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export const AuthorSection = () => {
	return (
		<section className="relative w-full bg-background pt-0" id="author">
			{/* Background Image Container - Massive height prevents heavy cropping */}
			<div className="relative z-0 h-[80vh] min-h-[700px] w-full overflow-hidden lg:h-[90vh]">
				<Image
					alt="Author Background"
					className="object-cover"
					fill
					priority
					src="/images/bg-author.png"
				/>
				{/* Dark gradient overlay to ensure text readability at the bottom */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

				{/* Text Content */}
				<div className="absolute bottom-0 left-0 z-10 w-full">
					<div className="container mx-auto px-4 pb-16 md:pb-24">
						<motion.div
							className="ml-auto w-full max-w-3xl md:w-2/3 lg:w-1/2"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							{/* Giant Quotation Mark */}
							<span className="mb-4 block font-heading text-6xl text-white/90 leading-none md:text-8xl">
								“
							</span>

							{/* Uppercase Quote */}
							<p className="font-heading font-light text-2xl text-white uppercase leading-snug tracking-wider md:text-3xl lg:text-4xl">
								INFRASTRUCTURE IS NOT JUST ABOUT BUILDING ROADS AND SKYSCRAPERS;
								IT'S ABOUT ENGINEERING THE FUTURE OF HUMAN CONNECTIVITY AND
								SUSTAINABLE GROWTH.
							</p>

							{/* Subtitle / Author Info */}
							<div className="mt-10 space-y-1 font-bold text-white/80 text-xs uppercase tracking-[0.2em] md:mt-16">
								<p>Shashi S. Piptan</p>
								<p>The Piptan Group</p>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
