import { DashboardShell } from "@/components/layout/dashboard-shell";
import { EmptyState } from "@/components/ui/empty-state";
import type { LucideIcon } from "lucide-react";

interface StubPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionLabel?: string;
  actionHref?: string;
}

export function DashboardStubPage({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
}: StubPageProps) {
  return (
    <DashboardShell>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h1>
        <p className="mt-1 text-sm text-neutral-500">{description}</p>
      </div>
      <EmptyState
        icon={icon}
        title={`No ${title.toLowerCase()} yet`}
        description={`Get started by creating your first ${title.toLowerCase().replace(/s$/, "")}.`}
        action={
          actionLabel && actionHref
            ? { label: actionLabel, href: actionHref }
            : undefined
        }
      />
    </DashboardShell>
  );
}
