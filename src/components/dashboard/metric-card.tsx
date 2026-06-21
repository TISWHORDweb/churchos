import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type MetricAccent = "gold" | "teal" | "neutral";

const accentStyles: Record<
  MetricAccent,
  { border: string; chip: string; icon: string }
> = {
  gold: {
    border: "border-l-gold-400",
    chip: "bg-gold-50",
    icon: "text-gold-500",
  },
  teal: {
    border: "border-l-teal-400",
    chip: "bg-teal-50",
    icon: "text-teal-400",
  },
  neutral: {
    border: "border-l-neutral-300",
    chip: "bg-neutral-100",
    icon: "text-neutral-500",
  },
};

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  accent?: MetricAccent;
  icon: LucideIcon;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  accent = "neutral",
  icon: Icon,
  className,
}: MetricCardProps) {
  const styles = accentStyles[accent];

  return (
    <div
      className={cn(
        "relative rounded-[8px] bg-white hairline border-neutral-200 border-l-[3px] p-5",
        styles.border,
        className
      )}
    >
      <div
        className={cn(
          "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-[6px]",
          styles.chip
        )}
      >
        <Icon className={cn("h-4 w-4", styles.icon)} />
      </div>
      <p className="text-sm text-neutral-500">{title}</p>
      <p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight">
        {value}
      </p>
      {change && (
        <p
          className={cn(
            "mt-1 text-xs tabular-nums",
            changeType === "positive" && "text-teal-700",
            changeType === "negative" && "text-danger-700",
            changeType === "neutral" && "text-neutral-500"
          )}
        >
          {change}
        </p>
      )}
    </div>
  );
}
