import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

type Props = { href: string; children: React.ReactNode; className?: string };

export function ArrowButton({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-14 items-center justify-between gap-3 rounded-full bg-forest pr-3 pl-6 text-[15px] font-semibold text-white uppercase transition-colors hover:bg-forest-deep",
        className,
      )}
    >
      {children}
      <span className="flex size-8 items-center justify-center rounded-full bg-white text-forest">
        <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
      </span>
    </Link>
  );
}
