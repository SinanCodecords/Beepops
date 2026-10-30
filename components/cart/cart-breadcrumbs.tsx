import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function CartBreadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm md:text-lg">
      <ol className="flex items-center gap-2 font-medium">
        <li className="flex items-center gap-2 text-[#706f6f]">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
        </li>
        <li aria-current="page" className="font-semibold text-forest">
          Your Shopping Cart
        </li>
      </ol>
    </nav>
  );
}
