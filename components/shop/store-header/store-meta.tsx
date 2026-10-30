import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import { STORE } from "./data";

const divider = <span aria-hidden className="hidden h-3.5 w-px bg-[#dee2e6] sm:block" />;

export function StoreMeta() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px]">
      <p className="flex items-center gap-1.5">
        <HugeiconsIcon icon={StarIcon} size={14} className="text-amber" />
        <span className="font-bold text-ink">{STORE.rating}</span>
        <span className="text-xs text-[#b0a894]">{STORE.reviews}</span>
      </p>
      {divider}
      <p className="font-semibold text-[#5c5749]">{STORE.license}</p>
      {divider}
      <p className="font-semibold text-[#5c5749]">{STORE.city}</p>
    </div>
  );
}
