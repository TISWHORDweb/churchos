import { MarketingPageShell } from "@/components/layout/marketing-page-shell";
import { HeroSlider } from "@/components/landing/hero-slider";
import { HomeExploreLinks } from "@/components/landing/sections";
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
    <MarketingPageShell heroOverlay>
      <HeroSlider />
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
