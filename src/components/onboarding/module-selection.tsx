"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  ClipboardList,
  Users,
  Megaphone,
  BarChart3,
  Calendar,
  Wallet,
  Music,
  BookOpen,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/brand/wordmark";
import { selectModules } from "@/actions/onboarding";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  church: Building2,
  building: Building2,
  clipboard: ClipboardList,
  users: Users,
  megaphone: Megaphone,
  chart: BarChart3,
  calendar: Calendar,
  wallet: Wallet,
  music: Music,
  book: BookOpen,
  mail: Mail,
  message: MessageSquare,
};

interface Module {
  id: string;
  name: string;
  description: string;
  icon: string;
  annualPrice: number;
}

interface ModuleSelectionProps {
  modules: Module[];
}

export function ModuleSelection({ modules }: ModuleSelectionProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const total = modules
    .filter((m) => selected.includes(m.id))
    .reduce((sum, m) => sum + m.annualPrice, 0);

  function toggleModule(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function handleContinue(skipPayment = false) {
    if (selected.length === 0) {
      toast.error("Please select at least one module");
      return;
    }

    startTransition(async () => {
      const result = await selectModules(selected, skipPayment);
      if (!result.success) {
        toast.error(result.error ?? "Something went wrong");
        return;
      }
      if (result.redirect) {
        router.push(result.redirect);
      }
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="hairline-b border-neutral-200 px-6 py-4">
        <Wordmark className="text-xl" />
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Choose your modules
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Select the tools your church needs. Annual billing only.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((mod) => {
            const Icon = iconMap[mod.icon] ?? Building2;
            const isSelected = selected.includes(mod.id);

            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => toggleModule(mod.id)}
                className={cn(
                  "rounded-[8px] p-5 text-left transition-all duration-150 ease-out hairline",
                  isSelected
                    ? "border-gold-400 bg-gold-50"
                    : "border-neutral-200 bg-white hover:border-neutral-300"
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-gold-50">
                    <Icon className="h-5 w-5 text-gold-500" />
                  </div>
                  <div
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full hairline",
                      isSelected
                        ? "border-gold-400 bg-gold-400"
                        : "border-neutral-300"
                    )}
                  >
                    {isSelected && (
                      <svg className="h-3 w-3 text-gold-900" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M10.28 2.28a1 1 0 00-1.42 0L4.5 6.64 3.14 5.28a1 1 0 00-1.42 1.42l2 2a1 1 0 001.42 0l5.5-5.5a1 1 0 000-1.42z" />
                      </svg>
                    )}
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-900">
                  {mod.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{mod.description}</p>
                <p className="mt-3 text-lg font-semibold tabular-nums text-neutral-900">
                  {formatCurrency(mod.annualPrice)}
                  <span className="text-xs font-normal text-neutral-400">/year</span>
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-[8px] bg-neutral-50 p-6 hairline border-neutral-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Annual total</p>
              <p className="text-2xl font-semibold tabular-nums text-neutral-900">
                {formatCurrency(total)}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => handleContinue(true)}
                disabled={isPending || selected.length === 0}
              >
                Skip for now
              </Button>
              <Button
                onClick={() => handleContinue(false)}
                disabled={isPending || selected.length === 0}
              >
                {isPending ? "Processing..." : "Continue to Payment"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
