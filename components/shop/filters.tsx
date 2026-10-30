import { HugeiconsIcon } from "@hugeicons/react";
import { FilterHorizontalIcon } from "@hugeicons/core-free-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  "h-[33px] rounded-md border-[#dee2e6] bg-white px-2 text-[12.6px] md:text-[12.6px] text-ink placeholder:text-[#b0a894]";

// Phones: filters fold away behind a button. Desktop: always-visible sidebar.
export function ShopFilters() {
  return (
    <>
      <Collapsible className="lg:hidden">
        <CollapsibleTrigger className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[#dee2e6] py-3 text-sm font-semibold text-forest">
          <HugeiconsIcon icon={FilterHorizontalIcon} size={16} />
          <span className="group-data-panel-open:hidden">Filter & sort</span>
          <span className="hidden group-data-panel-open:inline">Hide filters</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3">
          <FiltersPanel />
        </CollapsibleContent>
      </Collapsible>
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
            <Label
              key={label}
              className="cursor-pointer gap-2.5 py-1 text-[13.5px] text-[#5c5749] has-data-checked:font-bold has-data-checked:text-forest"
            >
              <Checkbox name="category" value={label} defaultChecked={i === 0} className="rounded-[4px] border-[#dee2e6]" />
              {label}
            </Label>
          ))}
        </div>
      </FilterBlock>
      <FilterBlock title="Price Range">
        <div className="grid grid-cols-2 gap-3">
          <Input type="number" name="min" placeholder="Min (₹)" aria-label="Minimum price" className={priceInput} />
          <Input type="number" name="max" placeholder="Max (₹)" aria-label="Maximum price" className={priceInput} />
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-amber" />
      </FilterBlock>
      <FilterBlock title="Sort Products">
        <Select name="sort" defaultValue={SORT_OPTIONS[0]}>
          <SelectTrigger
            aria-label="Sort products"
            className="h-10 w-full rounded-lg border-[#dee2e6] bg-white px-3 text-[12.6px] font-semibold text-[#5c5749]"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
