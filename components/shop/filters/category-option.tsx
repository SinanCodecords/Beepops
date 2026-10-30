import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

export function CategoryOption({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1 text-[13.5px] font-medium text-[#5c5749] has-checked:font-bold has-checked:text-forest">
      <input type="checkbox" name="category" value={label} defaultChecked={checked} className="peer sr-only" />
      <span className="grid size-4 place-items-center rounded-[4px] border border-[#dee2e6] text-transparent peer-checked:border-forest peer-checked:bg-forest peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-forest/40">
        <HugeiconsIcon icon={Tick02Icon} size={11} strokeWidth={3} />
      </span>
      {label}
    </label>
  );
}
