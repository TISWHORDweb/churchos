"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Calendar,
  Users,
  ClipboardList,
  Megaphone,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Wordmark } from "@/components/brand/wordmark";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/branches", label: "Branches", icon: Building2 },
  { href: "/dashboard/services", label: "Services", icon: Calendar },
  { href: "/dashboard/attendance", label: "Attendance", icon: ClipboardList },
  { href: "/dashboard/pastors", label: "Pastors", icon: Users },
  { href: "/dashboard/workers", label: "Workers", icon: Users },
  { href: "/dashboard/announcements", label: "Announcements", icon: Megaphone },
  { href: "/dashboard/reports", label: "Reports", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 flex flex-col bg-white hairline-r border-neutral-200 transition-all duration-250 ease-out",
        collapsed ? "w-[64px]" : "w-[240px]"
      )}
    >
      <div className="flex h-14 items-center px-4 hairline-b border-neutral-200">
        {!collapsed && <Wordmark className="text-lg" />}
        {collapsed && (
          <span className="mx-auto font-serif text-lg font-semibold text-gold-500">
            C
          </span>
        )}
      </div>

      <nav className="flex-1 space-y-0.5 p-3">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-[6px] px-3 py-2 text-sm font-medium transition-colors duration-150 ease-out",
                isActive
                  ? "bg-gold-50 text-gold-700"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="flex h-10 items-center justify-center hairline-t border-neutral-200 text-neutral-400 transition-colors hover:text-neutral-600"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
    </aside>
  );
}
