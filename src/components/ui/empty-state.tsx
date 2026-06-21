import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-[8px] bg-white hairline border-neutral-200 px-6 py-16 text-center",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-neutral-100">
        <Icon className="h-6 w-6 text-neutral-400" />
      </div>
      <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-neutral-500">{description}</p>
      )}
      {action && (
        <Button className="mt-6" asChild={!!action.href}>
          {action.href ? (
            <a href={action.href}>{action.label}</a>
          ) : (
            <button type="button" onClick={action.onClick}>
              {action.label}
            </button>
          )}
        </Button>
      )}
    </div>
  );
}
