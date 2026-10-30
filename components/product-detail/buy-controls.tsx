"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PURCHASE_OPTIONS } from "./data";

export function PurchaseOptions() {
  return (
    <RadioGroup name="purchase-type" defaultValue="subscribe" aria-label="Purchase type" className="mt-3">
      {PURCHASE_OPTIONS.map((option) => (
        <Label
          key={option.id}
          className="cursor-pointer gap-3 rounded-xl border border-[#e5e2d9] bg-[#fdfdfb] px-4 py-3.5 transition-colors has-data-checked:border-amber has-data-checked:bg-[#fff9e6]"
        >
          <RadioGroupItem value={option.id} className="data-checked:border-amber data-checked:bg-amber" />
          <span className="flex-1">
            <span className="block text-[13.5px] font-semibold text-ink">{option.label}</span>
            <span className="mt-1 block text-[11.5px] font-normal text-[#706f6f]">{option.note}</span>
          </span>
          <span className="text-[13.5px] font-bold text-ink">{option.price}</span>
        </Label>
      ))}
    </RadioGroup>
  );
}

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-ink">Quantity</span>
      <div className="flex h-[30px] items-center rounded-lg border border-[#e5e2d9]">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Decrease quantity"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          disabled={quantity === 1}
          className="h-full w-10 rounded-lg text-ink"
        >
          <HugeiconsIcon icon={MinusSignIcon} size={13} />
        </Button>
        <span className="w-4 text-center text-[13.5px] font-bold text-ink">{quantity}</span>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Increase quantity"
          onClick={() => setQuantity((q) => q + 1)}
          className="h-full w-10 rounded-lg text-ink"
        >
          <HugeiconsIcon icon={PlusSignIcon} size={13} />
        </Button>
      </div>
    </div>
  );
}
