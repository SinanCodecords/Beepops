import { FilterBlock } from "./filter-block";

const input =
  "h-[33px] w-full min-w-0 rounded-md border border-[#dee2e6] px-2 text-[12.6px] text-ink outline-none placeholder:text-[#b0a894] focus:border-forest";

export function PriceFilter() {
  return (
    <FilterBlock title="Price Range">
      <div className="grid grid-cols-2 gap-3">
        <input type="number" name="min" placeholder="Min (₹)" aria-label="Minimum price" className={input} />
        <input type="number" name="max" placeholder="Max (₹)" aria-label="Maximum price" className={input} />
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-amber" />
    </FilterBlock>
  );
}
