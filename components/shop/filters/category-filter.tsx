import { CategoryOption } from "./category-option";
import { FILTER_CATEGORIES } from "./data";
import { FilterBlock } from "./filter-block";

export function CategoryFilter() {
  return (
    <FilterBlock title="Product Categories">
      <div className="space-y-1">
        {FILTER_CATEGORIES.map((label, i) => (
          <CategoryOption key={label} label={label} checked={i === 0} />
        ))}
      </div>
    </FilterBlock>
  );
}
