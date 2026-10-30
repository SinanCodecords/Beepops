import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export function FaqContact() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/25 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-medium text-white">Still have a question in mind?</p>
        <p className="mt-1 text-sm text-[#f3f3f3]">Contact us if you have any other questions.</p>
      </div>
      <Link
        href="mailto:hello@beepops.in"
        className="inline-flex h-11 items-center gap-2 self-start rounded-full bg-white pr-1.5 pl-4 text-[13px] font-medium text-forest uppercase sm:self-auto"
      >
        Contact us
        <span className="flex size-8 items-center justify-center rounded-full bg-forest text-white">
          <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
        </span>
      </Link>
    </div>
  );
}
