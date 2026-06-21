import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[8px] bg-neutral-100",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
