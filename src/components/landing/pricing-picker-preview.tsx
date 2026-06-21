"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Building2,
  ClipboardList,
  Users,
  Megaphone,
  BarChart3,
  Calendar,
  Wallet,
  Mail,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency, cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  church: Building2,
  building: Building2,
  clipboard: ClipboardList,
  users: Users,
  megaphone: Megaphone,
  chart: BarChart3,
  calendar: Calendar,
  wallet: Wallet,
  mail: Mail,
  message: MessageSquare,
};

interface PricingModule {
  id: string;
  name: string;
  slug?: string;
  description: string;
  icon: string;
  annualPrice: number;
}

interface PricingPickerPreviewProps {
  modules: PricingModule[];
}

const SLUG_BUNDLE: Record<string, "Core" | "Growth" | "Scale"> = {
  "church-management": "Core",
  "branch-management": "Core",
  "member-management": "Core",
  "attendance-management": "Growth",
  "pastor-management": "Growth",
  "worker-management": "Growth",
  "program-management": "Growth",
  "finance-management": "Scale",
  "media-management": "Scale",
  "announcement-management": "Scale",
  "email-marketing": "Scale",
  "sms-marketing": "Scale",
};

function getBundle(mod: PricingModule): "Core" | "Growth" | "Scale" {
  if (mod.slug && SLUG_BUNDLE[mod.slug]) return SLUG_BUNDLE[mod.slug];
  const name = mod.name.toLowerCase();
  if (name.includes("attendance") || name.includes("pastor") || name.includes("worker") || name.includes("program"))
    return "Growth";
  if (name.includes("finance") || name.includes("email") || name.includes("sms") || name.includes("media") || name.includes("announcement"))
    return "Scale";
  return "Core";
}

export function PricingPickerPreview({ modules }: PricingPickerPreviewProps) {
  const displayModules = modules.slice(0, 8);
  const remaining = Math.max(0, modules.length - displayModules.length);

  const defaultSelected = displayModules.slice(0, 3).map((m) => m.id);
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const total = displayModules
    .filter((m) => selected.includes(m.id))
    .reduce((sum, m) => sum + m.annualPrice, 0);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const grouped = displayModules.reduce(
    (acc, mod) => {
      const bundle = getBundle(mod);
      if (!acc[bundle]) acc[bundle] = [];
      acc[bundle].push(mod);
      return acc;
    },
    {} as Record<string, PricingModule[]>
  );

  const bundleOrder: Array<"Core" | "Growth" | "Scale"> = ["Core", "Growth", "Scale"];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-12">
      <div className="space-y-6">
        {bundleOrder.map((bundle) => {
          const items = grouped[bundle];
          if (!items?.length) return null;

          return (
            <div key={bundle}>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
                {bundle}
              </p>
              <div className="space-y-2">
                {items.map((mod) => {
                  const Icon = iconMap[mod.icon] ?? Building2;
                  const isSelected = selected.includes(mod.id);

                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => toggle(mod.id)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-[8px] p-4 text-left transition-all duration-150 ease-out hairline",
                        isSelected
                          ? "border-gold-400 bg-white"
                          : "border-neutral-200 bg-white hover:border-neutral-300"
                      )}
                    >
                      <div
                        className={cn(
                          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded hairline",
                          isSelected
                            ? "border-gold-400 bg-gold-400"
                            : "border-neutral-300 bg-white"
                        )}
                      >
                        {isSelected && (
                          <svg
                            className="h-2.5 w-2.5 text-gold-900"
                            viewBox="0 0 12 12"
                            fill="currentColor"
                          >
                            <path d="M10.28 2.28a1 1 0 00-1.42 0L4.5 6.64 3.14 5.28a1 1 0 00-1.42 1.42l2 2a1 1 0 001.42 0l5.5-5.5a1 1 0 000-1.42z" />
                          </svg>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5 shrink-0 text-gold-500" />
                          <span className="text-sm font-medium text-neutral-900">
                            {mod.name}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-neutral-500 line-clamp-1">
                          {mod.description}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm font-medium tabular-nums text-neutral-700">
                        {formatCurrency(mod.annualPrice)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {remaining > 0 && (
          <p className="text-sm text-neutral-400">
            + {remaining} more modules available after registration
          </p>
        )}
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-[8px] bg-white p-6 hairline border-neutral-200">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Your annual total
          </p>
          <p className="mt-2 text-3xl font-semibold tabular-nums text-neutral-900">
            {formatCurrency(total)}
          </p>
          <p className="mt-1 text-xs text-neutral-500">
            {selected.length} module{selected.length !== 1 ? "s" : ""} selected ·
            billed yearly
          </p>

          <div className="mt-4 space-y-1.5 hairline-t border-neutral-200 pt-4">
            {displayModules
              .filter((m) => selected.includes(m.id))
              .map((m) => (
                <div
                  key={m.id}
                  className="flex justify-between text-xs text-neutral-500"
                >
                  <span>{m.name}</span>
                  <span className="tabular-nums">
                    {formatCurrency(m.annualPrice)}
                  </span>
                </div>
              ))}
          </div>

          <Button className="mt-6 w-full" asChild>
            <Link href="/register">Start with these modules</Link>
          </Button>
          <p className="mt-3 text-center text-[11px] text-neutral-400">
            Same picker you&apos;ll see after registration
          </p>
        </div>
      </div>
    </div>
  );
}
