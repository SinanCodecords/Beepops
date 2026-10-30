import { CART } from "../data";
import { CartItemRow } from "./cart-item-row";
import { StoreHeading } from "./store-heading";
import { TrustBanner } from "./trust-banner";

export function CartItems() {
  return (
    <section
      aria-label="Items in your bag"
      className="overflow-hidden rounded-xl border border-border bg-white"
    >
      <StoreHeading />
      <ul>
        {CART.items.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}
      </ul>
      <TrustBanner />
    </section>
  );
}
