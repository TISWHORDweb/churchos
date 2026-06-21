import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
}

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn("font-serif font-semibold tracking-tight", className)}>
      <span className="text-neutral-900">Church</span>
      <span className="text-gold-500">OS</span>
    </span>
  );
}
