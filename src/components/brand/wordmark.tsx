import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  variant?: "light" | "dark" | "hero";
}

export function Wordmark({ className, variant = "light" }: WordmarkProps) {
  return (
    <span className={cn("font-serif font-semibold tracking-tight", className)}>
      <span
        className={cn(
          variant === "hero" && "text-white",
          variant === "light" && "text-neutral-900",
          variant === "dark" && "text-neutral-50"
        )}
      >
        Church
      </span>
      <span
        className={cn(
          variant === "hero" && "text-gold-400",
          variant === "light" && "text-gold-500",
          variant === "dark" && "text-gold-400"
        )}
      >
        OS
      </span>
    </span>
  );
}
