"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { NAV_LINKS, isActive } from "./data";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex size-9 items-center justify-center rounded-full hover:bg-muted"
      >
        <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={20} />
      </button>
      {open && (
        <nav className="absolute inset-x-0 top-full z-40 flex flex-col border-b bg-background px-4 py-2 shadow-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "py-3 text-sm font-semibold uppercase",
                isActive(pathname, link.href) ? "text-forest" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
