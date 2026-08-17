import type { Metadata } from "next";

import { HomePage } from "@/feature/home/HomePage";

export const metadata: Metadata = {
	title: "Dubai Infrastructure Investment | Urban Development Book",
	description:
		"Explore Dubai's infrastructure, urban development and investment opportunities with The Urban Evolution of Dubai by Shashi S. Piptan.",
	keywords: [
		"Dubai infrastructure investment",
		"Dubai infrastructure",
		"Dubai urban development",
		"Dubai infrastructure development",
		"Dubai investment opportunities",
		"Dubai urban planning",
	],
	robots: {
		index: true,
		follow: true,
	},
};

export default function Home() {
	return <HomePage />;
}
