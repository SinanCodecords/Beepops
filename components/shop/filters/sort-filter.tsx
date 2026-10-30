import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { SORT_OPTIONS } from "./data";
import { FilterBlock } from "./filter-block";

export function SortFilter() {
  return (
    <FilterBlock title="Sort Products">
      <div className="relative">
        <select
          name="sort"
          aria-label="Sort products"
          className="h-10 w-full appearance-none rounded-lg border border-[#dee2e6] bg-white px-3 text-[12.6px] font-semibold text-[#5c5749] outline-none focus:border-forest"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={14}
          className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#5c5749]"
        />
      </div>
    </FilterBlock>
  );
}
