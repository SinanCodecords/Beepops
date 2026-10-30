import { CART } from "../data";

export function StoreHeading() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-5">
      <p className="text-base font-bold text-ink md:text-lg">Seller Store: {CART.seller}</p>
      <span className="rounded-md bg-forest/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#344f37] uppercase">
        {CART.sellerBadge}
      </span>
    </div>
  );
}
