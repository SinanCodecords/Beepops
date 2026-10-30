import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import type { Snack } from "./data";

export function SnackCardBody({ snack }: { snack: Snack }) {
  return (
    <div className="px-1.5 pt-4">
      <p className="flex items-center gap-1 text-[10px]">
        <HugeiconsIcon icon={StarIcon} size={11} className="fill-amber text-amber" />
        <span className="font-bold text-[#5c5749]">{snack.rating}</span>
        <span className="font-medium text-[#b0a894]">· {snack.tag}</span>
      </p>
      <h3 className="mt-1.5 text-sm leading-snug text-ink">{snack.title}</h3>
      <p className="mt-1 text-[11px] font-medium text-stone">{snack.subtitle}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="flex items-baseline gap-1.5">
          <span className="text-[15px] font-bold text-ink">{snack.price}</span>
          <span className="text-sm font-bold text-[#9b9e9e] line-through">{snack.compareAt}</span>
        </p>
        <button
          type="button"
          className="h-7 w-[105px] rounded-full bg-forest text-[11px] font-medium text-white hover:bg-forest-deep"
        >
          Add
        </button>
      </div>
    </div>
  );
}
