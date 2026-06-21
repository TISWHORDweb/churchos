import { MarketingPageShell } from "@/components/layout/marketing-page-shell";
import {
  LandingHero,
  HomeExploreLinks,
} from "@/components/landing/sections";
import {
  HomeStatsStrip,
  HomeWeeklyWorkflow,
  HomeFeatureHighlights,
  HomeStoryTeaser,
  HomeModulesPreview,
  HomeFAQ,
  HomeCTA,
} from "@/components/landing/home-sections";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <MarketingPageShell>
      <LandingHero />
      <HomeStatsStrip />
      <HomeWeeklyWorkflow />
      <HomeFeatureHighlights />
      <HomeStoryTeaser />
      <HomeModulesPreview />
      <HomeExploreLinks />
      <HomeFAQ />
      <HomeCTA />
    </MarketingPageShell>
  );
}
