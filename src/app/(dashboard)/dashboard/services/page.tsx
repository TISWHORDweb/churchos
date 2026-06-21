import { DashboardStubPage } from "@/components/dashboard/stub-page";
import { Calendar } from "lucide-react";

export default function ServicesPage() {
  return (
    <DashboardStubPage
      title="Services"
      description="Manage recurring church services"
      icon={Calendar}
      actionLabel="Add Service"
      actionHref="/dashboard/services/new"
    />
  );
}
