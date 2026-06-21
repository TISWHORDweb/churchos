import { MarketingNav } from "@/components/landing/marketing-nav";
import { LandingFooter } from "@/components/landing/sections";

export function MarketingPageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-canvas">
      <MarketingNav />
      <main>{children}</main>
      <LandingFooter />
    </div>
  );
}
