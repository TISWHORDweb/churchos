import { DashboardStubPage } from "@/components/dashboard/stub-page";
import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
  return (
    <DashboardStubPage
      title="Reports"
      description="Generate branded PDF and CSV reports"
      icon={BarChart3}
      actionLabel="Generate Report"
      actionHref="/dashboard/reports/new"
    />
  );
}
