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

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <HomeStatsStrip />
      <HomeWeeklyWorkflow />
      <HomeFeatureHighlights />
      <HomeStoryTeaser />
      <HomeModulesPreview />
      <HomeExploreLinks />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
