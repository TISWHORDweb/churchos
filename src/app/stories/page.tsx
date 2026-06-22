import { MarketingPageShell } from "@/components/layout/marketing-page-shell";
import { PageHeroBanner } from "@/components/landing/page-hero-banner";
import { LandingTestimonials } from "@/components/landing/sections";
import { images } from "@/lib/images";
import {
  StoriesImpactStats,
  StoriesCaseStudies,
  StoriesByChurchSize,
  StoriesCTA,
} from "@/components/landing/stories-sections";

export const dynamic = "force-static";

export const metadata = {
  title: "Stories",
  description:
    "How churches use ChurchOS to track attendance, manage branches, and replace spreadsheet workflows.",
};

export default function StoriesPage() {
  return (
    <MarketingPageShell heroOverlay>
      <PageHeroBanner
        title="Stories"
        description="Real churches, real numbers — how admin teams replaced registers and spreadsheet merges with ChurchOS."
        image={images.storiesHero}
      />
      <LandingTestimonials />
      <StoriesImpactStats />
      <StoriesCaseStudies />
      <StoriesByChurchSize />
      <StoriesCTA />
    </MarketingPageShell>
  );
}
