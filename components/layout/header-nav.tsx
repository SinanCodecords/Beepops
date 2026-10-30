"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "./data";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden items-center gap-7 md:flex">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-xs font-semibold tracking-wide uppercase transition-colors",
            isActive(pathname, link.href)
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

// Reads the URL, so the header wraps it in <Suspense> (needed on dynamic routes).
export function NavLinks() {
  return <DesktopNav pathname={usePathname()} />;
}

export function MobileMenu() {
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
      {open && <MobileNav onNavigate={() => setOpen(false)} />}
    </div>
  );
}

// Only rendered once the menu is opened, so the URL is never read during prerender.
function MobileNav({ onNavigate }: { onNavigate: () => void }) {
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
