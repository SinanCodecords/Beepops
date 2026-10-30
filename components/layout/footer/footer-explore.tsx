import Link from "next/link";
import { ColumnTitle } from "./column-title";
import { EXPLORE_LINKS } from "./data";

export function FooterExplore() {
  return (
    <div>
      <ColumnTitle>Explore</ColumnTitle>
      <ul className="space-y-3 text-sm text-white/75">
        {EXPLORE_LINKS.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
