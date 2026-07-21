"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export const AboutSection = () => {
	return (
		<section className="w-full overflow-hidden bg-background py-24" id="about">
			<div className="container mx-auto px-4">
				<motion.div
					className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
					initial={{ opacity: 0, y: 40 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					{/* Left Content */}
					<div className="max-w-2xl">
						<h2 className="mb-8 font-heading font-light text-4xl text-heading leading-tight md:text-5xl">
							A Masterclass in Infrastructure & Growth
						</h2>
						<div className="space-y-6 text-foreground/90 text-lg">
							<p>
								Dubai's rise from a desert port to a global metropolis is not a
								miracle; it is the result of unprecedented urban planning and
								visionary infrastructure investment.
							</p>
							<p>
								In <strong>Dubai's Urban Evolution</strong>, Shashi S. Piptan
								deconstructs the strategies that built the city of the future.
								From the creation of smart cities to sustainable growth models,
								this book offers a blueprint for developers, investors, and
								policymakers worldwide.
							</p>
						</div>
						<div className="mt-10 flex gap-4">
							<Button
								className="border-primary/20 hover:bg-primary/10"
								size="lg"
								variant="outline"
							>
								View Chapter List
							</Button>
						</div>
					</div>

					{/* Right Graphic: Promotional Video */}
					<div className="group relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl border border-primary/20 shadow-2xl">
						{/* Glow Effect */}
						{/* <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 to-accent/10 transition-opacity duration-500 group-hover:opacity-0" /> */}

						<video
							autoPlay
							className="h-full w-full object-cover"
							loop
							muted
							playsInline
							src="/video/home-video.mp4"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
