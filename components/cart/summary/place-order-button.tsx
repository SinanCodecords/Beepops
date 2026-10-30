import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

// Design stage: will send the shopper to Shopify checkout later.
export function PlaceOrderButton() {
  return (
    <button
      type="button"
      className="flex h-[58px] w-full items-center justify-between rounded-full bg-forest pr-3 pl-5 text-[15px] font-semibold text-white uppercase transition-colors hover:bg-forest-deep"
    >
      Place Order
      <span className="flex size-8 items-center justify-center rounded-full bg-white text-ink">
        <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
      </span>
    </button>
  );
}
