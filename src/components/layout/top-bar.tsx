"use client";

import { ChevronDown, Bell, LogOut } from "lucide-react";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface TopBarProps {
  breadcrumbs?: { label: string; href?: string }[];
  userName?: string;
  churchName?: string;
}

export function TopBar({
  breadcrumbs = [{ label: "Dashboard" }],
  userName = "Admin",
  churchName,
}: TopBarProps) {
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between bg-white px-6 hairline-b border-neutral-200">
      <nav className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.label} className="flex items-center gap-2">
            {i > 0 && <span className="text-neutral-300">/</span>}
            <span
              className={
                i === breadcrumbs.length - 1
                  ? "font-medium text-neutral-900"
                  : "text-neutral-500"
              }
            >
              {crumb.label}
            </span>
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {churchName && (
          <button
            type="button"
            className="flex items-center gap-2 rounded-[6px] px-3 py-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-50"
          >
            <span className="max-w-[160px] truncate">{churchName}</span>
            <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
          </button>
        )}

        <button
          type="button"
          className="relative flex h-8 w-8 items-center justify-center rounded-[6px] text-neutral-500 transition-colors hover:bg-neutral-50"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 hairline-l border-neutral-200 pl-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-50 text-xs font-medium text-gold-700">
            {userName.charAt(0).toUpperCase()}
          </div>
          <span className="hidden text-sm text-neutral-700 sm:inline">
            {userName}
          </span>
          <button
            type="button"
            onClick={handleSignOut}
            className="flex h-8 w-8 items-center justify-center rounded-[6px] text-neutral-400 transition-colors hover:bg-neutral-50 hover:text-neutral-600"
            aria-label="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
