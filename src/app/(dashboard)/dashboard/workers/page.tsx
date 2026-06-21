import { DashboardStubPage } from "@/components/dashboard/stub-page";
import { Users } from "lucide-react";

export default function WorkersPage() {
  return (
    <DashboardStubPage
      title="Workers"
      description="Manage ushers, choir, protocol, and technical teams"
      icon={Users}
      actionLabel="Add Worker"
      actionHref="/dashboard/workers/new"
    />
  );
}
