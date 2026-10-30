"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { PURCHASE_OPTIONS } from "./data";

export function PurchaseOptions() {
  const [selected, setSelected] = useState("subscribe");

  return (
    <fieldset className="mt-3 space-y-3">
      <legend className="sr-only">Purchase type</legend>
      {PURCHASE_OPTIONS.map((option) => (
        <label
          key={option.id}
          className={cn(
            "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 transition-colors",
            selected === option.id ? "border-amber bg-[#fff9e6]" : "border-[#e5e2d9] bg-[#fdfdfb]",
          )}
        >
          <input
            type="radio"
            name="purchase-type"
            checked={selected === option.id}
            onChange={() => setSelected(option.id)}
            className="size-4 accent-amber"
          />
          <span className="flex-1">
            <span className="block text-[13.5px] font-semibold text-ink">{option.label}</span>
            <span className="block text-[11.5px] text-[#706f6f]">{option.note}</span>
          </span>
          <span className="text-[13.5px] font-bold text-ink">{option.price}</span>
        </label>
      ))}
    </fieldset>
  );
}

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
