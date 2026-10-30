import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { LEGAL_LINKS, SOCIALS } from "./data";

export function FooterBottom() {
  return (
    <div className="flex flex-col items-center gap-5 py-8 text-xs text-white/75 md:flex-row md:justify-between">
      <p>© 2025 BeePops. MN Essentials LLP. All rights reserved.</p>
      <div className="flex gap-2">
        {SOCIALS.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-white/15 hover:bg-white/10"
          >
            <HugeiconsIcon icon={icon} size={16} />
          </a>
        ))}
      </div>
      <div className="flex gap-5">
        {LEGAL_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
