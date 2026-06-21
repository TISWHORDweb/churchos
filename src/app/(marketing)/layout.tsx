import { MarketingNav } from "@/components/landing/marketing-nav";
import { LandingFooter } from "@/components/landing/sections";

export default function MarketingLayout({
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
