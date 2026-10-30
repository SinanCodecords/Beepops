"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
import { CATEGORY_TAGS } from "@/lib/shopify/helpers";
import { SORT_OPTIONS, parseShopParams } from "./params";

const CATEGORIES = ["All Categories", ...CATEGORY_TAGS];

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

// Every change rewrites the URL; the server then re-renders the product grid.
function FiltersPanel() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const { categories, min, max, sort } = parseShopParams(Object.fromEntries(
    [...searchParams.keys()].map((key) => [key, searchParams.getAll(key)]),
  ));

  function update(change: (params: URLSearchParams) => void) {
    const params = new URLSearchParams(searchParams);
    change(params);
    const query = params.toString();
    startTransition(() => router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false }));
  }

  function toggleCategory(label: string, checked: boolean) {
    update((params) => {
      const next = label === CATEGORIES[0] ? [] : checked
        ? [...categories, label]
        : categories.filter((c) => c !== label);
      params.delete("category");
      next.forEach((c) => params.append("category", c));
    });
  }

  function setPrice(form: HTMLFormElement) {
    const data = new FormData(form);
    update((params) => {
      for (const key of ["min", "max"]) {
        const value = String(data.get(key) ?? "");
        if (Number(value) > 0) params.set(key, value);
        else params.delete(key);
      }
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setPrice(e.currentTarget);
      }}
      aria-busy={pending}
      className="rounded-xl border border-[#dee2e6] bg-white p-5 transition-opacity aria-busy:opacity-60"
    >
      <FilterBlock title="Product Categories">
        <div className="space-y-1">
          {CATEGORIES.map((label, i) => (
            <Label
              key={label}
              className="cursor-pointer gap-2.5 py-1 text-[13.5px] text-[#5c5749] has-data-checked:font-bold has-data-checked:text-forest"
            >
              <Checkbox
                checked={i === 0 ? categories.length === 0 : categories.includes(label)}
                onCheckedChange={(checked) => toggleCategory(label, checked)}
                className="rounded-[4px] border-[#dee2e6]"
              />
              {label}
            </Label>
          ))}
        </div>
      </FilterBlock>
      <FilterBlock title="Price Range">
        <div key={`${min}-${max}`} className="grid grid-cols-2 gap-3">
          <Input
            type="number" name="min" min={0} defaultValue={min} placeholder="Min (₹)" aria-label="Minimum price"
            onBlur={(e) => e.currentTarget.form?.requestSubmit()} className={priceInput}
          />
          <Input
            type="number" name="max" min={0} defaultValue={max} placeholder="Max (₹)" aria-label="Maximum price"
            onBlur={(e) => e.currentTarget.form?.requestSubmit()} className={priceInput}
          />
        </div>
        <button type="submit" className="sr-only">Apply price</button>
        <div className="mt-3 h-1.5 rounded-full bg-amber" />
      </FilterBlock>
      <FilterBlock title="Sort Products">
        <Select
          items={SORT_OPTIONS.map(({ value, label }) => ({ value, label }))}
          value={sort.value}
          onValueChange={(value) => update((params) => {
            if (value && value !== SORT_OPTIONS[0].value) params.set("sort", value);
            else params.delete("sort");
          })}
        >
          <SelectTrigger
            aria-label="Sort products"
            className="h-10 w-full rounded-lg border-[#dee2e6] bg-white px-3 text-[12.6px] font-semibold text-[#5c5749]"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
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
