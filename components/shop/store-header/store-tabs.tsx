"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { STORE_TABS } from "./data";

export function StoreTabs() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-3 overflow-x-auto border-b border-[#dee2e6] [scrollbar-width:none]">
      {STORE_TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={cn(
            "shrink-0 rounded-t-md px-4 py-3 text-sm md:px-6 md:text-[15px] whitespace-nowrap transition-colors",
            pathname.startsWith(tab.href)
              ? "bg-forest font-bold text-white"
              : "font-medium text-[#706f6f] hover:text-forest",
          )}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
