import type { Metadata } from "next";

import { PrivacyPolicyPage as PrivacyPolicyFeature } from "@/feature/privacy-policy/PrivacyPolicyPage";

export const metadata: Metadata = {
	title: "Privacy Policy | InfraGuide UAE",
	description:
		"Read the InfraGuide UAE Privacy Policy to understand how personal information and email data are collected and used.",
	keywords: ["InfraGuide UAE", "privacy policy", "data privacy"],
	robots: {
		index: false,
		follow: true,
	},
};

export default function PrivacyPolicyPage() {
	return <PrivacyPolicyFeature />;
}
