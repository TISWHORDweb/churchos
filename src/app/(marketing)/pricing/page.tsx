import { PageHero } from "@/components/landing/page-hero";
import { LandingPricing } from "@/components/landing/sections";
import { getModulesForPage } from "@/lib/modules";
import {
  PricingHowItWorks,
  PricingBundles,
  PricingIncluded,
  PricingFAQ,
  PricingCTA,
} from "@/components/landing/pricing-sections";

export const metadata = {
  title: "Pricing",
  description:
    "Pick the ChurchOS modules your church needs. Annual billing with a transparent running total.",
};

export default async function PricingPage() {
  const modules = await getModulesForPage();

  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Module-based annual billing — no per-seat surprises"
        description="Select exactly what your church needs. The picker below is the same one you'll use at onboarding — check modules, watch the total update, and pay annually through Paystack."
      />
      <LandingPricing modules={modules} />
      <PricingHowItWorks />
      <PricingBundles />
      <PricingIncluded />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}
