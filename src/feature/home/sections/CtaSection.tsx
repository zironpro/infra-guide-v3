"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CtaSection = () => {
	return (
		<section
			className="relative w-full overflow-hidden border-primary/20 border-t bg-background py-16 md:py-20"
			id="contact"
		>
			<div className="container relative z-10 mx-auto px-4">
				<motion.div
					className="mx-auto grid max-w-6xl items-center gap-12 text-center md:grid-cols-2 md:text-left"
					initial={{ opacity: 0, y: 40 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<div>
						<h2 className="mb-4 font-heading font-light text-3xl text-heading md:text-5xl">
							Pre-Order{" "}
							<span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text font-bold text-transparent">
								Today
							</span>
						</h2>
						<p className="text-base text-foreground/80 md:text-lg">
							Sign up for early access to Dubai's Urban Evolution. Get launch
							updates, exclusive bonuses, and the first chapter sent directly to
							your inbox.
						</p>
					</div>

					<div className="mx-auto w-full max-w-md md:mr-0 md:ml-auto">
						<form
							className="flex flex-col gap-4 sm:flex-row"
							onSubmit={(e) => e.preventDefault()}
						>
							<Input
								className="h-12 flex-1 border-primary/30 bg-section text-foreground focus-visible:ring-primary"
								placeholder="Enter your email address"
								required
								type="email"
							/>
							<Button
								className="h-12 shrink-0 border-none bg-linear-to-r from-primary to-accent px-8 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/20"
								size="lg"
								type="submit"
							>
								Get Early Access
							</Button>
						</form>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
