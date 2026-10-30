import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export function FooterCta() {
  return (
    <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-start md:justify-between md:py-16">
      <div>
        <h2 className="text-5xl text-white md:text-6xl">Snack smarter?</h2>
        <p className="mt-4 max-w-md text-sm text-white/75">
          Clean, all-natural nutrition for kids, adults and families. Enjoy honest ingredients
          without a sugar crash.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/shop"
          className="flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-forest transition-colors hover:bg-white/90"
        >
          Shop Our Bars
          <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
        </Link>
        <Link
          href="/about"
          className="flex h-11 items-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium transition-colors hover:bg-white/10"
        >
          Read Our Story
        </Link>
      </div>
    </div>
  );
}
