import { DashboardStubPage } from "@/components/dashboard/stub-page";
import { Users } from "lucide-react";

export default function PastorsPage() {
  return (
    <DashboardStubPage
      title="Pastors"
      description="Invite and manage pastors across branches"
      icon={Users}
      actionLabel="Invite Pastor"
      actionHref="/dashboard/pastors/invite"
    />
  );
}
