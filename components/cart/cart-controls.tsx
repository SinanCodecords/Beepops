"use client";

import { useActionState, useTransition } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon, MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { applyCoupon, updateQuantity } from "./actions";

// Quantity +/- and remove for one bag line. The page re-renders with Shopify's totals after each change.
export function LineControls({ lineId, quantity }: { lineId: string; quantity: number }) {
  const [pending, startTransition] = useTransition();
  const set = (next: number) => startTransition(async () => void (await updateQuantity(lineId, next)));

  return (
    <div className="flex items-center gap-2" aria-busy={pending}>
      <div className="flex h-9 w-[100px] items-center justify-between rounded-full border border-border p-1">
        <Button
          size="icon-xs"
          variant="secondary"
          aria-label="Decrease quantity"
          onClick={() => set(quantity - 1)}
          disabled={pending || quantity === 1}
          className="size-7 bg-[#f5f1e8] text-ink"
        >
          <HugeiconsIcon icon={MinusSignIcon} size={12} />
        </Button>
        <span className="text-[13px] font-bold text-ink">{pending ? "…" : quantity}</span>
        <Button
          size="icon-xs"
          aria-label="Increase quantity"
          onClick={() => set(quantity + 1)}
          disabled={pending}
          className="size-7"
        >
          <HugeiconsIcon icon={PlusSignIcon} size={12} />
        </Button>
      </div>
      <Button
        size="icon-sm"
        variant="ghost"
        aria-label="Remove from bag"
        onClick={() => set(0)}
        disabled={pending}
        className="text-stone hover:text-destructive"
      >
        <HugeiconsIcon icon={Delete02Icon} size={16} />
      </Button>
    </div>
  );
}

export function CouponForm({ applied }: { applied?: string }) {
  const [state, formAction, pending] = useActionState(applyCoupon, {});

  return (
    <form action={formAction} className="rounded-xl border border-border bg-white p-5">
      <Label htmlFor="coupon" className="text-xs font-bold tracking-wide text-stone uppercase">
        Have a coupon code?
      </Label>
      <div className="mt-3 flex gap-2">
        <Input
          id="coupon"
          name="coupon"
          defaultValue={applied}
          placeholder="Enter coupon code (e.g. ABOVE2000)"
          className="h-11 flex-1 rounded-lg border-border bg-white px-4 text-[13px] md:text-[13px] text-ink placeholder:text-stone"
        />
        <Button
          type="submit"
          disabled={pending}
          className="h-11 rounded-lg px-5 text-[13px] font-bold uppercase hover:bg-forest-deep"
        >
          {pending ? "…" : "Apply"}
        </Button>
      </div>
      {state.error ? (
        <p className="mt-2 text-xs text-destructive">{state.error}</p>
      ) : (
        applied && <p className="mt-2 text-xs font-semibold text-forest">Code {applied} applied ✓</p>
      )}
    </form>
  );
}
