import { SHOP_CHIPS, SHOP_PRODUCTS } from "./data";

export function ResultsBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-[15.5px] text-ink">
        Showing <strong className="font-semibold">{SHOP_PRODUCTS.length}</strong> signature BeePops
        products
      </p>
      <ul className="flex gap-2">
        {SHOP_CHIPS.map((chip) => (
          <li key={chip} className="rounded-full bg-forest px-3 py-1.5 text-[10.7px] font-semibold text-white">
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}
