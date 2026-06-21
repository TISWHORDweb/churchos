import { redirect } from "next/navigation";
import { getTenantContext } from "@/lib/tenant";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { MetricCard } from "@/components/dashboard/metric-card";
import { getDashboardMetrics } from "@/actions/auth";
import { Users, UserPlus, Building2, TrendingUp } from "lucide-react";
import { AttendanceChart } from "@/components/dashboard/attendance-chart";

export default async function DashboardPage() {
  let context;
  try {
    context = await getTenantContext();
  } catch {
    redirect("/login");
  }

  const { user, church, subscriptionSkipped } = context;

  if (!church?.onboardingComplete && !subscriptionSkipped) {
    redirect("/onboarding/modules");
  }

  let metrics = {
    totalAttendance: 0,
    firstTimers: 0,
    branches: 0,
    recentSubmissions: [] as Awaited<
      ReturnType<typeof getDashboardMetrics>
    >["recentSubmissions"],
  };

  try {
    metrics = await getDashboardMetrics(user.tenantId!);
  } catch {
    // DB may not be connected yet
  }

  return (
    <DashboardShell
      userName={user.name}
      churchName={church?.name}
      showSubscriptionWarning={subscriptionSkipped}
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Overview
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Welcome back, {user.name.split(" ")[0]}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Attendance"
          value={metrics.totalAttendance.toLocaleString()}
          change="+12% from last month"
          changeType="positive"
          accent="gold"
          icon={Users}
        />
        <MetricCard
          title="First Timers"
          value={metrics.firstTimers.toLocaleString()}
          change="+8 this week"
          changeType="positive"
          accent="teal"
          icon={UserPlus}
        />
        <MetricCard
          title="Active Branches"
          value={metrics.branches}
          accent="neutral"
          icon={Building2}
        />
        <MetricCard
          title="Growth Rate"
          value="18%"
          change="Year over year"
          changeType="positive"
          accent="teal"
          icon={TrendingUp}
        />
      </div>

      <div className="mt-8">
        <AttendanceChart />
      </div>
    </DashboardShell>
  );
}
