import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { CART } from "../data";

export function TrustBanner() {
  return (
    <p className="flex items-start gap-2 bg-honey/10 px-4 py-4 text-xs font-medium text-ink">
      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={18} className="shrink-0 text-amber" />
      {CART.pledge}
    </p>
  );
}
