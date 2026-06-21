import { redirect } from "next/navigation";
import { requireRole } from "@/lib/tenant";
import { getPlatformStats } from "@/actions/auth";
import { MetricCard } from "@/components/dashboard/metric-card";
import { Building2, CheckCircle, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Wordmark } from "@/components/brand/wordmark";
import Link from "next/link";

export default async function AdminPage() {
  try {
    await requireRole(["SUPER_ADMIN"]);
  } catch {
    redirect("/dashboard");
  }

  let stats = { totalChurches: 0, activeChurches: 0, totalRevenue: 0 };
  try {
    stats = await getPlatformStats();
  } catch {
    // DB not connected
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="flex h-14 items-center justify-between px-6 hairline-b border-neutral-200">
        <Wordmark className="text-xl" />
        <nav className="flex items-center gap-6">
          {[
            { href: "/admin", label: "Overview" },
            { href: "/admin/churches", label: "Churches" },
            { href: "/admin/modules", label: "Modules" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="p-6">
        <h1 className="mb-8 text-2xl font-semibold tracking-tight text-neutral-900">
          Platform Overview
        </h1>

        <div className="grid gap-4 sm:grid-cols-3">
          <MetricCard
            title="Total Churches"
            value={stats.totalChurches}
            accent="neutral"
            icon={Building2}
          />
          <MetricCard
            title="Active Churches"
            value={stats.activeChurches}
            accent="teal"
            icon={CheckCircle}
          />
          <MetricCard
            title="Total Revenue"
            value={formatCurrency(stats.totalRevenue)}
            accent="gold"
            icon={DollarSign}
          />
        </div>
      </main>
    </div>
  );
}
