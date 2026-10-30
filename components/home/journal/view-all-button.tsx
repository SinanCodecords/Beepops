import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export function ViewAllButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-13 items-center gap-2 self-start rounded-full border-2 border-forest px-6 font-bold text-forest transition-colors hover:bg-forest hover:text-white md:self-auto"
    >
      View All
      <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
    </Link>
  );
}
