import type { Money } from "./types";

export function formatPrice({ amount, currencyCode }: Money) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(Number(amount));
}

export function discountPercent(price: Money, compareAt: Money | null) {
  if (!compareAt) return 0;
  const p = Number(price.amount);
  const c = Number(compareAt.amount);
  return c > p ? Math.round(((c - p) / c) * 100) : 0;
}
