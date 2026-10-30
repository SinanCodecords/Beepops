import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS, isActive } from "./data";

export function NavList({ pathname }: { pathname: string }) {
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
