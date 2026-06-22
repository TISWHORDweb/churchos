import { MarketingPageShell } from "@/components/layout/marketing-page-shell";
import { PageHeroBanner } from "@/components/landing/page-hero-banner";
import { LandingPricing } from "@/components/landing/sections";
import { images } from "@/lib/images";
import { getModulesForPage } from "@/lib/modules";
import {
  PricingHowItWorks,
  PricingBundles,
  PricingIncluded,
  PricingFAQ,
  PricingCTA,
} from "@/components/landing/pricing-sections";

export const dynamic = "force-static";

export const metadata = {
  title: "Pricing",
  description:
    "Pick the ChurchOS modules your church needs. Annual billing with a transparent running total.",
};

export default async function PricingPage() {
  const modules = await getModulesForPage();

  return (
    <MarketingPageShell heroOverlay>
      <PageHeroBanner
        title="Pricing"
        description="Module-based annual billing — pick what you need, see your total upfront, pay through Paystack."
        image={images.pricingHero}
      />
      <LandingPricing modules={modules} />
      <PricingHowItWorks />
      <PricingBundles />
      <PricingIncluded />
      <PricingFAQ />
      <PricingCTA />
    </MarketingPageShell>
  );
}
