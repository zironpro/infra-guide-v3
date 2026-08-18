import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Manrope } from "next/font/google";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import { Footer } from "@/components/layout/Footer";
import { SideProgress } from "@/components/layout/SideProgress";
import "./globals.css";

const fontHeading = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-heading",
});

const fontSans = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontButton = Manrope({
	subsets: ["latin"],
	variable: "--font-button",
});

export const metadata: Metadata = {
	title: "Infraguide",
	description: "Your complete guide to infrastructure excellence.",
	icons: {
		icon: "/icon.svg",
		apple: "/icon.svg",
	},
	openGraph: {
		images: [
			{
				url: "/images/dubai-infrastructure-boom.webp",
				width: 1200,
				height: 630,
				alt: "Dubai Infrastructure Boom",
			},
		],
	},
	verification: {
		google: "rc10UpQtP5iDbSLsHSVkzcq9hGItv_qUt4cE4mBTqMg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={`${fontHeading.variable} ${fontSans.variable} ${fontButton.variable} h-full font-sans antialiased`}
			lang="en"
		>
			<body className="flex min-h-full flex-col">
				<SideProgress />
				{/* <Navbar /> */}
				{children}
				<Footer />
				<GoogleAnalytics gaId="G-JHKVBY5F8C" />
				<GoogleTagManager gtmId="GTM-WCZCMJCB" />
			</body>
		</html>
	);
}
