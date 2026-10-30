import { QuantitySelector } from "./quantity-selector";

export function BuyActions() {
  return (
    <div className="mt-7">
      <QuantitySelector />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="h-[51px] rounded-xl bg-amber text-[15px] font-bold text-ink uppercase transition-colors hover:bg-honey"
        >
          Subscribe now
        </button>
        <button
          type="button"
          className="h-[51px] rounded-xl border border-forest bg-white text-[15px] font-bold text-forest uppercase transition-colors hover:bg-forest hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
