import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { PRODUCT } from "./data";

export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm md:text-base">
      <ol className="flex flex-wrap items-center gap-2">
        {PRODUCT.breadcrumbs.map((crumb) => (
          <li key={crumb.label} className="flex items-center gap-2 text-[#706f6f]">
            <Link href={crumb.href} className="hover:text-ink">
              {crumb.label}
            </Link>
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </li>
        ))}
        <li aria-current="page" className="font-semibold text-ink">
          {PRODUCT.title}
        </li>
      </ol>
    </nav>
  );
}
