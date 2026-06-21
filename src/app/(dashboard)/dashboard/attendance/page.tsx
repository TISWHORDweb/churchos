import { DashboardStubPage } from "@/components/dashboard/stub-page";
import { ClipboardList } from "lucide-react";

export default function AttendancePage() {
  return (
    <DashboardStubPage
      title="Attendance"
      description="Create QR campaigns and track visitor check-ins"
      icon={ClipboardList}
      actionLabel="Create Campaign"
      actionHref="/dashboard/attendance/new"
    />
  );
}
