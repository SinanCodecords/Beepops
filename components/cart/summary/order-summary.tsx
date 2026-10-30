import { CART } from "../data";
import { PlaceOrderButton } from "./place-order-button";
import { SummaryRow } from "./summary-row";

export function OrderSummary() {
  const { rows, total } = CART.summary;

  return (
    <section className="rounded-xl border border-border bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <h2 className="font-sans text-xl font-bold tracking-normal text-ink normal-case">
        Order Summary
      </h2>
      <dl className="mt-5 space-y-3 border-y border-border py-5">
        {rows.map((row) => (
          <SummaryRow key={row.label} {...row} />
        ))}
      </dl>
      <div className="flex items-center justify-between py-5">
        <span className="text-[15px] font-semibold text-ink">Order Total</span>
        <span className="text-[22px] font-bold text-forest">{total}</span>
      </div>
      <PlaceOrderButton />
    </section>
  );
}
