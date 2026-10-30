import { HugeiconsIcon } from "@hugeicons/react";
import { FilterHorizontalIcon } from "@hugeicons/core-free-icons";
import { FiltersPanel } from "./filters-panel";

// Phones: filters fold away behind a button. Desktop: always-visible sidebar.
export function ShopFilters() {
  return (
    <>
      <details className="group lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-center gap-2 rounded-xl border border-[#dee2e6] py-3 text-sm font-semibold text-forest">
          <HugeiconsIcon icon={FilterHorizontalIcon} size={16} />
          <span className="group-open:hidden">Filter & sort</span>
          <span className="hidden group-open:inline">Hide filters</span>
        </summary>
        <div className="mt-3">
          <FiltersPanel />
        </div>
      </details>
      <aside className="hidden lg:block">
        <FiltersPanel />
      </aside>
    </>
  );
}
