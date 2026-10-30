import { cn } from "@/lib/utils";
import type { PURCHASE_OPTIONS } from "../data";

type Props = {
  option: (typeof PURCHASE_OPTIONS)[number];
  checked: boolean;
  onSelect: () => void;
};

export function PurchaseOption({ option, checked, onSelect }: Props) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 transition-colors",
        checked ? "border-amber bg-[#fff9e6]" : "border-[#e5e2d9] bg-[#fdfdfb]",
      )}
    >
      <input
        type="radio"
        name="purchase-type"
        checked={checked}
        onChange={onSelect}
        className="size-4 accent-amber"
      />
      <span className="flex-1">
        <span className="block text-[13.5px] font-semibold text-ink">{option.label}</span>
        <span className="block text-[11.5px] text-[#706f6f]">{option.note}</span>
      </span>
      <span className="text-[13.5px] font-bold text-ink">{option.price}</span>
    </label>
  );
}
