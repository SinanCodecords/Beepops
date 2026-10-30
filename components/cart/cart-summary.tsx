import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Design stage: static totals. Replaced by the Shopify cart later.
const SUMMARY_ROWS = [
  { label: "Subtotal", value: "₹180" },
  { label: "Shipping, Packaging & Taxes", value: "₹55" },
];
const TOTAL = "₹235";

export function CartSummary() {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-6">
      <form className="rounded-xl border border-border bg-white p-5">
        <Label htmlFor="coupon" className="text-xs font-bold tracking-wide text-stone uppercase">
          Have a coupon code?
        </Label>
        <div className="mt-3 flex gap-2">
          <Input
            id="coupon"
            name="coupon"
            placeholder="Enter coupon code (e.g. ABOVE2000)"
            className="h-11 flex-1 rounded-lg border-border bg-white px-4 text-[13px] md:text-[13px] text-ink placeholder:text-stone"
          />
          <Button className="h-11 rounded-lg px-5 text-[13px] font-bold uppercase hover:bg-forest-deep">
            Apply
          </Button>
        </div>
      </form>
      <section className="rounded-xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <h2 className="font-sans text-xl font-bold tracking-normal text-ink normal-case">
          Order Summary
        </h2>
        <dl className="mt-5 space-y-3 border-y border-border py-5">
          {SUMMARY_ROWS.map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <dt className="text-[13px] text-stone">{row.label}</dt>
              <dd className="text-sm font-semibold text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between py-5">
          <span className="text-[15px] font-semibold text-ink">Order Total</span>
          <span className="text-[22px] font-bold text-forest">{TOTAL}</span>
        </div>
        {/* Design stage: will send the shopper to Shopify checkout later. */}
        <Button className="h-[58px] w-full justify-between pr-3 pl-5 text-[15px] font-semibold uppercase hover:bg-forest-deep">
          Place Order
          <span className="flex size-8 items-center justify-center rounded-full bg-white text-ink">
            <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
          </span>
        </Button>
      </section>
    </aside>
  );
}
