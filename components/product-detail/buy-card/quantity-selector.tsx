"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-ink">Quantity</span>
      <div className="flex h-[30px] items-center rounded-lg border border-[#e5e2d9]">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-3 text-ink disabled:opacity-40"
          disabled={quantity === 1}
        >
          <HugeiconsIcon icon={MinusSignIcon} size={13} />
        </button>
        <span className="w-4 text-center text-[13.5px] font-bold text-ink">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQuantity((q) => q + 1)}
          className="px-3 text-ink"
        >
          <HugeiconsIcon icon={PlusSignIcon} size={13} />
        </button>
      </div>
    </div>
  );
}
