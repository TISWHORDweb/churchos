import { MarketingPageShell } from "@/components/layout/marketing-page-shell";
import { PageHeroBanner } from "@/components/landing/page-hero-banner";
import { LandingFeatures } from "@/components/landing/sections";
import { images } from "@/lib/images";
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
    <MarketingPageShell heroOverlay>
      <PageHeroBanner
        title="Features"
        description="Every module maps to a workflow your team already runs — attendance on Sunday, reports on Monday, pastor invitations on Tuesday."
        image={images.featuresHero}
      />
      <LandingFeatures />
      <FeaturesWorkflowDeepDives />
      <FeaturesModuleDirectory />
      <FeaturesRolesSection />
      <FeaturesIntegrations />
      <FeaturesCTA />
    </MarketingPageShell>
  );
}
