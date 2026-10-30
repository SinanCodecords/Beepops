import { CATEGORIES } from "../data";

const pill = "flex h-8 items-center justify-between gap-3 rounded-full px-4 text-xs font-medium";

export function SidebarCategories() {
  return (
    <div>
      <p className="font-heading text-xs uppercase">Categories</p>
      <ul className="mt-5 space-y-3.5">
        <li>
          <button type="button" className={`${pill} w-full bg-forest font-semibold text-white`}>
            All posts
          </button>
        </li>
        {CATEGORIES.map((c) => (
          <li key={c.label}>
            <button type="button" className={`${pill} w-full border border-[#e5e5e5] text-[#4d4d44] hover:border-forest`}>
              <span className="truncate">{c.label}</span>
              <span>{c.count}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
