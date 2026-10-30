"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

// Design stage: local state only. Will update the Shopify cart later.
export function QuantityStepper({ initial }: { initial: number }) {
  const [quantity, setQuantity] = useState(initial);

  return (
    <div className="flex h-9 w-[100px] items-center justify-between rounded-full border border-border p-1">
      <Button
        size="icon-xs"
        variant="secondary"
        aria-label="Decrease quantity"
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        disabled={quantity === 1}
        className="size-7 bg-[#f5f1e8] text-ink"
      >
        <HugeiconsIcon icon={MinusSignIcon} size={12} />
      </Button>
      <span className="text-[13px] font-bold text-ink">{quantity}</span>
      <Button
        size="icon-xs"
        aria-label="Increase quantity"
        onClick={() => setQuantity((q) => q + 1)}
        className="size-7"
      >
        <HugeiconsIcon icon={PlusSignIcon} size={12} />
      </Button>
    </div>
  );
}
