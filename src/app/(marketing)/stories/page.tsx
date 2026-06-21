import { PageHero } from "@/components/landing/page-hero";
import { LandingTestimonials } from "@/components/landing/sections";
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
    <>
      <PageHero
        kicker="Stories"
        title="Real churches, real numbers, real admin teams"
        description="These aren't marketing hypotheticals. They're reported outcomes from ministries that replaced registers, WhatsApp chains, and Monday spreadsheet merges with ChurchOS."
      />
      <LandingTestimonials />
      <StoriesImpactStats />
      <StoriesCaseStudies />
      <StoriesByChurchSize />
      <StoriesCTA />
    </>
  );
}
