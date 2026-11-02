import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { formatPrice, type Cart } from "@/lib/shopify";
import { checkout } from "./actions";
import { CouponForm } from "./cart-controls";

export function CartSummary({ cart }: { cart: Cart }) {
  const { subtotalAmount, totalAmount } = cart.cost;
  const savings = Number(subtotalAmount.amount) - Number(totalAmount.amount);
  const applied = cart.discountCodes.find((d) => d.applicable)?.code;

  const rows = [
    { label: "Subtotal", value: formatPrice(subtotalAmount) },
    ...(savings > 0
      ? [{ label: "Discount", value: `− ${formatPrice({ ...totalAmount, amount: String(savings) })}` }]
      : []),
    { label: "Shipping & Taxes", value: "Calculated at checkout" },
  ];

  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-6">
      <CouponForm applied={applied} />
      <section className="rounded-xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <h2 className="font-sans text-xl font-bold tracking-normal text-ink normal-case">
          Order Summary
        </h2>
        <dl className="mt-5 space-y-3 border-y border-border py-5">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <dt className="text-[13px] text-stone">{row.label}</dt>
              <dd className="text-sm font-semibold text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between py-5">
          <span className="text-[15px] font-semibold text-ink">Order Total</span>
          <span className="text-[22px] font-bold text-forest">{formatPrice(totalAmount)}</span>
        </div>
        {/* Shopify hosts checkout: address, shipping, payment. */}
        <form action={checkout}>
          <Button
            type="submit"
            className="h-[58px] w-full justify-between pr-3 pl-5 text-[15px] font-semibold uppercase hover:bg-forest-deep"
          >
            Place Order
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-ink">
              <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
            </span>
          </Button>
        </form>
      </section>
    </aside>
  );
}
