import Link from "next/link";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

type Props = { href: string; label: string; icon: IconSvgElement };

export function IconButtonLink({ href, label, icon }: Props) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-full hover:bg-muted"
    >
      <HugeiconsIcon icon={icon} size={18} />
    </Link>
  );
}
