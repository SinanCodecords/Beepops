"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";

// Design stage: local state only. Will update the Shopify cart later.
export function QuantityStepper({ initial }: { initial: number }) {
  const [quantity, setQuantity] = useState(initial);

  return (
    <div className="flex h-9 w-[100px] items-center justify-between rounded-full border border-border p-1">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        disabled={quantity === 1}
        className="flex size-7 items-center justify-center rounded-full bg-[#f5f1e8] text-ink disabled:opacity-50"
      >
        <HugeiconsIcon icon={MinusSignIcon} size={12} />
      </button>
      <span className="text-[13px] font-bold text-ink">{quantity}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => setQuantity((q) => q + 1)}
        className="flex size-7 items-center justify-center rounded-full bg-forest text-white"
      >
        <HugeiconsIcon icon={PlusSignIcon} size={12} />
      </button>
    </div>
  );
}
