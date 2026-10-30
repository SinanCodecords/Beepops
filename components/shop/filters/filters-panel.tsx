import { CategoryFilter } from "./category-filter";
import { PriceFilter } from "./price-filter";
import { SortFilter } from "./sort-filter";

export function FiltersPanel() {
  return (
    <form className="rounded-xl border border-[#dee2e6] bg-white p-5">
      <CategoryFilter />
      <PriceFilter />
      <SortFilter />
    </form>
  );
}
