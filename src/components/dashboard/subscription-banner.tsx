import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SubscriptionBanner() {
  return (
    <div className="flex items-center justify-between gap-4 bg-warning-50 px-6 py-3 hairline-b border-neutral-200">
      <div className="flex items-center gap-3">
        <AlertTriangle className="h-4 w-4 shrink-0 text-warning-700" />
        <p className="text-sm text-warning-700">
          Your subscription payment is pending. Some features may be restricted
          until payment is complete.
        </p>
      </div>
      <Button size="sm" asChild>
        <Link href="/onboarding/modules">Complete Payment</Link>
      </Button>
    </div>
  );
}
