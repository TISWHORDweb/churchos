"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, ArrowRight } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/stories", label: "Stories" },
];

export function MarketingNav({ heroOverlay = false }: { heroOverlay?: boolean }) {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = heroOverlay && !scrolled;
  const isDark = mounted && resolvedTheme === "dark";

  const navLinkClass = (active: boolean) => {
    if (overHero) {
      return active
        ? "text-white"
        : "text-white/80 hover:text-white";
    }
    if (isDark) {
      return active
        ? "text-gold-400"
        : "text-white hover:text-white/90";
    }
    return active
      ? "text-gold-700"
      : "!text-neutral-900 hover:!text-gold-700";
  };

  const actionClass = navLinkClass(false);

  return (
    <header className="pointer-events-none sticky top-0 z-50 bg-transparent px-4 pt-4 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-6xl">
        <div
          className={cn(
            "rounded-[12px] border px-4 transition-all duration-200 ease-out sm:px-5",
            overHero
              ? "border-white/25 bg-black/20 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.15)] backdrop-blur-xl backdrop-saturate-150"
              : cn(
                  "border-gold-400/15 bg-white/70 shadow-[0_4px_24px_-6px_rgba(186,117,23,0.08)] backdrop-blur-2xl backdrop-saturate-150",
                  "dark:border-gold-400/20 dark:bg-canvas/60",
                  scrolled && "border-gold-400/20 bg-white/80 dark:bg-canvas/70"
                )
          )}
        >
          <div className="flex h-14 items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <Wordmark
                variant={overHero ? "hero" : isDark ? "dark" : "light"}
                className="text-xl"
              />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((link) => {
                const active =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium transition-colors duration-150",
                      navLinkClass(active)
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-1 md:flex">
              <ThemeToggle className={actionClass} />
              <Link
                href="/login"
                className={cn(
                  "rounded-[6px] px-3 py-1.5 text-sm font-medium transition-colors duration-150",
                  actionClass
                )}
              >
                Sign in
              </Link>
              <Button size="sm" asChild>
                <Link href="/register" className="gap-1.5">
                  Start Free
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-1 md:hidden">
              <ThemeToggle className={actionClass} />
              <button
                type="button"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-[6px] text-sm font-medium transition-colors duration-150",
                  actionClass
                )}
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div
              className={cn(
                "border-t py-3 md:hidden",
                overHero ? "border-white/20" : "border-gold-400/10"
              )}
            >
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
                        navLinkClass(active)
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div
                className={cn(
                  "mt-3 flex flex-col gap-2 border-t pt-3",
                  overHero ? "border-white/20" : "border-gold-400/10"
                )}
              >
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
