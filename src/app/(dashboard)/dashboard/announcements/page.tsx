import { DashboardStubPage } from "@/components/dashboard/stub-page";
import { Megaphone } from "lucide-react";

export default function AnnouncementsPage() {
  return (
    <DashboardStubPage
      title="Announcements"
      description="Email and SMS campaigns for your congregation"
      icon={Megaphone}
      actionLabel="New Campaign"
      actionHref="/dashboard/announcements/new"
    />
  );
}
