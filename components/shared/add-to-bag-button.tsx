"use client";

import { useEffect, useState, useTransition } from "react";
import { addItem } from "@/components/cart/actions";
import { Button } from "@/components/ui/button";

type Props = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  variantId: string;
  quantity?: number;
};

// Adds a product to the Shopify cart; the header bag count updates on its own.
export function AddToBagButton({ variantId, quantity = 1, children, disabled, ...props }: Props) {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "added" | "error">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  const label = pending ? "Adding…" : status === "added" ? "Added ✓" : status === "error" ? "Try again" : children;

  return (
    <Button
      {...props}
      disabled={disabled || pending}
      aria-live="polite"
      onClick={() =>
        startTransition(async () => {
          const result = await addItem(variantId, quantity);
          setStatus(result.error ? "error" : "added");
        })
      }
    >
      {label}
    </Button>
  );
}
