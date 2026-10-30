"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, isActive } from "./data";

// Only rendered once the menu is opened, so the URL is never read during prerender.
export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="absolute inset-x-0 top-full z-40 flex flex-col border-b bg-background px-4 py-2 shadow-sm">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className={cn(
            "py-3 text-sm font-semibold uppercase",
            isActive(pathname, link.href) ? "text-forest" : "text-muted-foreground",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
