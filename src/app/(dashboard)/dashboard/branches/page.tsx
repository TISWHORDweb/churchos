import { DashboardShell } from "@/components/layout/dashboard-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { Building2 } from "lucide-react";

export default function BranchesPage() {
  return (
    <DashboardShell>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Branches
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Manage church locations and branch managers
        </p>
      </div>
      <EmptyState
        icon={Building2}
        title="No branches yet"
        description="Create your first branch to start managing services and attendance."
        action={{ label: "Add Branch", href: "/dashboard/branches/new" }}
      />
    </DashboardShell>
  );
}
