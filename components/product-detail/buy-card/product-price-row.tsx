import { PRODUCT } from "../data";

export function ProductPriceRow() {
  return (
    <div className="mt-3 flex items-center gap-3">
      <span className="font-heading text-[31px] leading-[1.9] text-ink">{PRODUCT.price}</span>
      <span className="text-[15px] text-[#706f6f] line-through">MRP {PRODUCT.mrp}</span>
      <span className="rounded-md bg-[#ebf7ed] px-2 py-0.5 text-[11.5px] font-bold text-[#1e6b2a]">
        {PRODUCT.discount}
      </span>
    </div>
  );
}
