import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";

export function BackLink() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#101010] hover:text-forest"
    >
      <HugeiconsIcon icon={ArrowLeft02Icon} size={20} />
      Return to Blogs
    </Link>
  );
}
