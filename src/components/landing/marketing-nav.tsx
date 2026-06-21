"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/stories", label: "Stories" },
];

export function MarketingNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[12px] bg-white hairline border-neutral-200/80 px-4 sm:px-5">
          <div className="flex h-14 items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <Wordmark className="text-xl" />
            </Link>

            {/* Desktop nav — pill group */}
            <nav className="hidden items-center rounded-[8px] bg-canvas p-1 md:flex">
              {links.map((link) => {
                const active =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-[6px] px-4 py-1.5 text-sm font-medium transition-all duration-150 ease-out",
                      active
                        ? "bg-white text-gold-700 hairline border-neutral-200/60"
                        : "text-neutral-600 hover:text-neutral-900"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register" className="gap-1.5">
                  Start Free
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-[6px] text-neutral-600 hover:bg-canvas md:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="border-t border-neutral-200/60 py-3 md:hidden">
              <nav className="flex flex-col gap-1">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-[6px] px-3 py-2.5 text-sm font-medium",
                        active
                          ? "bg-gold-50 text-gold-700"
                          : "text-neutral-600"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-3 flex flex-col gap-2 border-t border-neutral-200/60 pt-3">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button size="sm" asChild className="w-full">
                  <Link href="/register" onClick={() => setOpen(false)}>
                    Start Free
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
