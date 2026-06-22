import { MarketingNav } from "@/components/landing/marketing-nav";
import { LandingFooter } from "@/components/landing/sections";

export function MarketingPageShell({
  children,
  heroOverlay = false,
}: {
  children: React.ReactNode;
  heroOverlay?: boolean;
}) {
  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <MarketingNav heroOverlay={heroOverlay} />
      <main>{children}</main>
      <LandingFooter />
    </div>
  );
}
