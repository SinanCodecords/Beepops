import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, FilterHorizontalIcon, Tick02Icon } from "@hugeicons/core-free-icons";

// Matches the Shopify category tags; filtering is wired up later.
const CATEGORIES = [
  "All Categories",
  "Millet Protein Bars",
  "Himalayan Honey",
  "Cookies & Snacks",
  "Peanut Butter",
  "Combo Packs",
];

const SORT_OPTIONS = ["Popularity", "Newest first", "Price: low to high", "Price: high to low"];

const priceInput =
  "h-[33px] w-full min-w-0 rounded-md border border-[#dee2e6] px-2 text-[12.6px] text-ink outline-none placeholder:text-[#b0a894] focus:border-forest";

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

function FiltersPanel() {
  return (
    <form className="rounded-xl border border-[#dee2e6] bg-white p-5">
      <FilterBlock title="Product Categories">
        <div className="space-y-1">
          {CATEGORIES.map((label, i) => (
            <label
              key={label}
              className="flex cursor-pointer items-center gap-2.5 py-1 text-[13.5px] font-medium text-[#5c5749] has-checked:font-bold has-checked:text-forest"
            >
              <input type="checkbox" name="category" value={label} defaultChecked={i === 0} className="peer sr-only" />
              <span className="grid size-4 place-items-center rounded-[4px] border border-[#dee2e6] text-transparent peer-checked:border-forest peer-checked:bg-forest peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-forest/40">
                <HugeiconsIcon icon={Tick02Icon} size={11} strokeWidth={3} />
              </span>
              {label}
            </label>
          ))}
        </div>
      </FilterBlock>
      <FilterBlock title="Price Range">
        <div className="grid grid-cols-2 gap-3">
          <input type="number" name="min" placeholder="Min (₹)" aria-label="Minimum price" className={priceInput} />
          <input type="number" name="max" placeholder="Max (₹)" aria-label="Maximum price" className={priceInput} />
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-amber" />
      </FilterBlock>
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
    </form>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      role="group"
      aria-label={title}
      className="border-b border-[#dee2e6] py-6 first:pt-0 last:border-0 last:pb-0"
    >
      <p className="mb-3 text-[13.5px] font-extrabold text-ink uppercase">{title}</p>
      {children}
    </div>
  );
}
