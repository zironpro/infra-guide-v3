import { AboutSection } from "./sections/AboutSection";
import { AuthorSection } from "./sections/AuthorSection";
import { BannerSection } from "./sections/BannerSection";
import { BlogsSection } from "./sections/BlogsSection";
import { CtaSection } from "./sections/CtaSection";
import { HeroSection } from "./sections/HeroSection";
import { InsightsSection } from "./sections/InsightsSection";

export const HomePage = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<HeroSection />
			<AboutSection />
			<AuthorSection />
			<BannerSection />
			<InsightsSection />
			<BlogsSection />
			<CtaSection />
		</div>
	);
};
