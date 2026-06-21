import { DashboardStubPage } from "@/components/dashboard/stub-page";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardStubPage
      title="Settings"
      description="Configure church branding, colors, and welcome messages"
      icon={Settings}
      actionLabel="Edit Settings"
      actionHref="/dashboard/settings/edit"
    />
  );
}
