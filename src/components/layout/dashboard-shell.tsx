import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { SubscriptionBanner } from "@/components/dashboard/subscription-banner";

interface DashboardShellProps {
  children: React.ReactNode;
  userName?: string;
  churchName?: string;
  showSubscriptionWarning?: boolean;
}

export function DashboardShell({
  children,
  userName,
  churchName,
  showSubscriptionWarning,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="pl-[240px] transition-all duration-250 ease-out">
        <TopBar userName={userName} churchName={churchName} />
        {showSubscriptionWarning && <SubscriptionBanner />}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
