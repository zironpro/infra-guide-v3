"use client";

import { motion, Variants } from "framer-motion";
import { Building2, Sprout, TrendingUp } from "lucide-react";

export const InsightsSection = () => {
	const insights = [
		{
			title: "Smart Cities & Tech",
			description:
				"How IoT and AI are integrated into Dubai's infrastructure to create sustainable and connected urban environments.",
			icon: Building2,
		},
		{
			title: "Sustainable Growth",
			description:
				"The economic models and environmental policies driving long-term sustainability in desert metropolises.",
			icon: Sprout,
		},
		{
			title: "Infrastructure Investment",
			description:
				"A guide for global investors navigating the lucrative UAE real estate and public infrastructure sectors.",
			icon: TrendingUp,
		},
	];

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	return (
		<section
			className="relative w-full overflow-hidden bg-background py-24 md:py-32"
			id="insights"
		>
			{/* Subtle background glow */}
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

			<div className="container relative z-10 mx-auto px-4">
				<div className="mb-20 text-center">
					<motion.h2
						className="font-heading font-light text-4xl text-heading md:text-5xl lg:text-6xl"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ once: true, margin: "-100px" }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Core Insights
					</motion.h2>
					<motion.div
						className="mx-auto mt-6 h-px w-24 bg-linear-to-r from-transparent via-primary/50 to-transparent"
						initial={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						viewport={{ once: true, margin: "-100px" }}
						whileInView={{ opacity: 1, scale: 1 }}
					/>
				</div>

				<motion.div
					className="grid grid-cols-1 gap-8 md:grid-cols-3"
					initial="hidden"
					variants={containerVariants}
					viewport={{ once: true, margin: "-100px" }}
					whileInView="visible"
				>
					{insights.map((insight) => (
						<motion.div
							className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-background/40 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
							key={insight.title}
							variants={itemVariants}
						>
							<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110">
								<insight.icon className="h-6 w-6 stroke-[1.5]" />
							</div>

							<h3 className="mb-4 font-heading font-medium text-2xl text-heading">
								{insight.title}
							</h3>

							<p className="text-foreground/70 leading-relaxed">
								{insight.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
