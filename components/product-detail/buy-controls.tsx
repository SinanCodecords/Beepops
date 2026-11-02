"use client";

import { useState, useTransition } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { buyNow } from "@/components/cart/actions";
import { AddToBagButton } from "@/components/shared/add-to-bag-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { discountPercent, formatPrice } from "@/lib/shopify/helpers";
import type { ProductVariant } from "@/lib/shopify/types";

// Price, pack-size choice, quantity and buy buttons: everything that changes with the chosen variant.
export function BuyControls({ variants }: { variants: ProductVariant[] }) {
  const [variantId, setVariantId] = useState(
    (variants.find((v) => v.availableForSale) ?? variants[0]).id,
  );
  const [quantity, setQuantity] = useState(1);
  const [buying, startBuying] = useTransition();
  const [error, setError] = useState<string>();
  const variant = variants.find((v) => v.id === variantId) ?? variants[0];
  const discount = discountPercent(variant.price, variant.compareAtPrice);

  return (
    <>
      <div className="mt-3 flex items-center gap-3">
        <span className="font-heading text-[31px] leading-[1.9] text-ink">{formatPrice(variant.price)}</span>
        {variant.compareAtPrice && discount > 0 && (
          <>
            <span className="text-[15px] text-[#706f6f] line-through">MRP {formatPrice(variant.compareAtPrice)}</span>
            <span className="rounded-md bg-[#ebf7ed] px-2 py-0.5 text-[11.5px] font-bold text-[#1e6b2a]">
              {discount}% OFF
            </span>
          </>
        )}
      </div>
      {variants.length > 1 && (
        <RadioGroup
          value={variantId}
          onValueChange={(value) => setVariantId(value as string)}
          aria-label="Pack size"
          className="mt-3"
        >
          {variants.map((option) => (
            <Label
              key={option.id}
              className="cursor-pointer gap-3 rounded-xl border border-[#e5e2d9] bg-[#fdfdfb] px-4 py-3.5 transition-colors has-data-checked:border-amber has-data-checked:bg-[#fff9e6] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
            >
              <RadioGroupItem
                value={option.id}
                disabled={!option.availableForSale}
                className="data-checked:border-amber data-checked:bg-amber"
              />
              <span className="flex-1">
                <span className="block text-[13.5px] font-semibold text-ink">{option.title}</span>
                {!option.availableForSale && (
                  <span className="mt-1 block text-[11.5px] font-normal text-[#706f6f]">Sold out</span>
                )}
              </span>
              <span className="text-[13.5px] font-bold text-ink">{formatPrice(option.price)}</span>
            </Label>
          ))}
        </RadioGroup>
      )}
      <div className="mt-7">
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
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Button
            disabled={!variant.availableForSale || buying}
            onClick={() =>
              startBuying(async () => {
                const result = await buyNow(variant.id, quantity);
                if (result?.error) setError(result.error);
              })
            }
            className="h-[51px] rounded-xl bg-amber text-[15px] font-bold text-ink uppercase hover:bg-honey"
          >
            {!variant.availableForSale ? "Sold out" : buying ? "Please wait…" : "Buy now"}
          </Button>
          <AddToBagButton
            variantId={variant.id}
            quantity={quantity}
            variant="outline"
            disabled={!variant.availableForSale}
            className="h-[51px] rounded-xl border-forest bg-white text-[15px] font-bold text-forest uppercase hover:bg-forest hover:text-white"
          >
            Add to cart
          </AddToBagButton>
        </div>
        {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
      </div>
    </>
  );
}
