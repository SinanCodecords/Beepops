import { CouponBox } from "./coupon-box";
import { OrderSummary } from "./order-summary";

export function CartSummary() {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-6">
      <CouponBox />
      <OrderSummary />
    </aside>
  );
}
