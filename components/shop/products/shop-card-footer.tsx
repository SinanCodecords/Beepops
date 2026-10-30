import type { ShopProduct } from "./data";

export function ShopCardFooter({ product }: { product: ShopProduct }) {
  return (
    <div className="mt-auto flex items-center justify-between gap-2 px-1 pt-4">
      <p className="flex items-baseline gap-1.5">
        <span className="text-[17.5px] font-extrabold text-ink">{product.price}</span>
        <span className="text-xs text-[#706f6f] line-through">{product.compareAt}</span>
      </p>
      <button
        type="button"
        className="h-8 shrink-0 rounded-full bg-forest px-4 text-xs font-bold text-white transition-colors hover:bg-forest-deep"
      >
        Add To Bag
      </button>
    </div>
  );
}
