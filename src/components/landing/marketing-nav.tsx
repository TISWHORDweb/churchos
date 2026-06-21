"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none sticky top-0 z-50 bg-transparent px-4 pt-4 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-6xl">
        <div
          className={cn(
            "rounded-[12px] border border-gold-400/15 px-4 transition-all duration-200 ease-out sm:px-5",
            "bg-canvas/40 backdrop-blur-2xl backdrop-saturate-150",
            "shadow-[0_4px_24px_-6px_rgba(186,117,23,0.08)]",
            scrolled && "border-gold-400/25 bg-canvas/55"
          )}
        >
          <div className="flex h-14 items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <Wordmark className="text-xl" />
            </Link>

            <nav className="hidden items-center rounded-[8px] border border-gold-400/10 bg-canvas/30 p-1 backdrop-blur-md md:flex">
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
                        ? "bg-gold-50/90 text-gold-700 hairline border-gold-400/20"
                        : "text-neutral-600 hover:bg-gold-50/40 hover:text-neutral-900"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-gold-50/50"
              >
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
              className="flex h-9 w-9 items-center justify-center rounded-[6px] text-neutral-600 hover:bg-gold-50/50 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-gold-400/10 py-3 md:hidden">
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
                          ? "bg-gold-50/90 text-gold-700"
                          : "text-neutral-600 hover:bg-gold-50/40"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-3 flex flex-col gap-2 border-t border-gold-400/10 pt-3">
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
