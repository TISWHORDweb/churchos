import { PageHero } from "@/components/landing/page-hero";
import { LandingFeatures } from "@/components/landing/sections";
import {
  FeaturesWorkflowDeepDives,
  FeaturesModuleDirectory,
  FeaturesRolesSection,
  FeaturesIntegrations,
  FeaturesCTA,
} from "@/components/landing/features-sections";

export const dynamic = "force-static";

export const metadata = {
  title: "Features",
  description:
    "ChurchOS modules for attendance, branches, pastors, campaigns, and reports — built around real church workflows.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        kicker="Features"
        title="Every module maps to a workflow your team already runs"
        description="Attendance on Sunday, reports on Monday, pastor invitations on Tuesday — ChurchOS is structured around the church week, not abstract software categories."
      />
      <LandingFeatures />
      <FeaturesWorkflowDeepDives />
      <FeaturesModuleDirectory />
      <FeaturesRolesSection />
      <FeaturesIntegrations />
      <FeaturesCTA />
    </>
  );
}
