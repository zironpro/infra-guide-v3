import type { Metadata } from "next";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
	title: "Privacy Policy | Shashi S. Piptan",
	description:
		"Privacy Policy for Shashi Piptan and Dubai's Urban Evolution infrastructure investment guide.",
};

export default function PrivacyPolicyPage() {
	return (
		<main className="min-h-screen w-full bg-background pt-12 pb-24 text-foreground">
			<div className="container mx-auto max-w-4xl px-4">
				{/* Back to Home Link */}
				<Link
					className="mb-8 inline-flex items-center gap-2 font-medium text-primary text-sm transition-colors hover:underline"
					href="/"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to Home
				</Link>

				<header className="mb-12 border-primary/20 border-b pb-8">
					<h1 className="mb-4 font-heading text-4xl text-heading uppercase tracking-wide sm:text-5xl lg:text-6xl">
						Privacy Policy
					</h1>
					<p className="text-base text-foreground/70 sm:text-lg">
						At Shashi Piptan (&quot;we,&quot; &quot;our,&quot; or
						&quot;us&quot;), we value your privacy and are committed to
						protecting your personal information.
					</p>
				</header>

				<div className="space-y-10 font-light text-base text-foreground/80 leading-relaxed">
					<section>
						<h2 className="mb-4 font-heading text-2xl text-heading uppercase tracking-wide sm:text-3xl">
							1. Information We Collect
						</h2>
						<p className="mb-3">We only collect the following information:</p>
						<ul className="list-disc space-y-2 pl-6">
							<li>
								<strong className="font-semibold text-foreground">
									Email Address
								</strong>{" "}
								— provided voluntarily through our notification form.
							</li>
						</ul>
						<p className="mt-3 text-foreground/70">
							No payment, address, or sensitive personal information is
							collected on this site.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-heading text-2xl text-heading uppercase tracking-wide sm:text-3xl">
							2. How We Use Your Information
						</h2>
						<p className="mb-3">Your email address will be used solely for:</p>
						<ul className="list-disc space-y-2 pl-6">
							<li>
								Sending notifications about the launch of Dubai&apos;s Urban
								Evolution by Shashi S. Piptan.
							</li>
							<li>Providing occasional updates related to the book release.</li>
						</ul>
						<p className="mt-3 text-foreground/70">
							We do not send promotional emails unrelated to this book.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-heading text-2xl text-heading uppercase tracking-wide sm:text-3xl">
							3. How We Protect Your Information
						</h2>
						<p className="mb-3">
							We implement reasonable technical and organizational measures to
							protect your information from unauthorized access, alteration,
							disclosure, or destruction.
						</p>
						<p>
							Your information is stored securely and is accessible only to
							authorized personnel.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-heading text-2xl text-heading uppercase tracking-wide sm:text-3xl">
							4. Sharing of Information
						</h2>
						<p>
							We do not sell, trade, or rent your personal information to third
							parties. We may use trusted service providers (such as email
							marketing tools) solely to assist us in delivering notifications
							to you.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-heading text-2xl text-heading uppercase tracking-wide sm:text-3xl">
							5. Your Rights
						</h2>
						<ul className="list-disc space-y-2 pl-6">
							<li>
								Unsubscribe at any time by clicking the unsubscribe link in any
								notification email or by contacting us directly.
							</li>
							<li>Request deletion of your email address from our records.</li>
						</ul>
						<p className="mt-3">
							To exercise these rights, please contact us at{" "}
							<a
								className="font-medium text-primary hover:underline"
								href="mailto:info@piptan.com"
							>
								info@piptan.com
							</a>
							.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-heading text-2xl text-heading uppercase tracking-wide sm:text-3xl">
							6. Third-Party Links
						</h2>
						<p>
							Our website may contain links to external sites (such as Amazon)
							where the book can be purchased. We are not responsible for the
							privacy practices or content of third-party websites.
						</p>
					</section>

					<section>
						<h2 className="mb-4 font-heading text-2xl text-heading uppercase tracking-wide sm:text-3xl">
							7. Changes to This Privacy Policy
						</h2>
						<p>
							We may update this Privacy Policy occasionally. Changes will be
							posted on this page with a revised effective date. We encourage
							you to review this Privacy Policy periodically.
						</p>
					</section>

					<section className="border-primary/20 border-t pt-8">
						<h2 className="mb-4 font-heading text-2xl text-heading uppercase tracking-wide sm:text-3xl">
							8. Contact Us
						</h2>
						<p className="mb-4">
							If you have any questions about this Privacy Policy or how we
							handle your information, please contact:
						</p>
						<div className="space-y-2 rounded-xl border border-primary/20 bg-card p-6 text-foreground">
							<p>
								<strong className="text-primary">Email:</strong>{" "}
								<a className="hover:underline" href="mailto:info@piptan.com">
									info@piptan.com
								</a>
							</p>
							<p>
								<strong className="text-primary">Business Address:</strong>{" "}
								Suite 1108, Ocean Centre, Harbour City, Kowloon, Hong Kong
							</p>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
