"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export const BannerSection = () => {
	return (
		<section className="w-full overflow-hidden bg-background py-8">
			<div className="w-full sm:container sm:mx-auto sm:px-4">
				<motion.div
					className="relative aspect-21/9 w-full overflow-hidden rounded-none border-primary/20 border-x-0 border-y shadow-2xl sm:aspect-4/1 sm:rounded-2xl sm:border"
					initial={{ opacity: 0, y: 40 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<Image
						alt="Promotional Banner"
						className="object-cover transition-transform duration-700 hover:scale-105"
						fill
						src="/images/banner-home.png"
					/>
				</motion.div>
			</div>
		</section>
	);
};
