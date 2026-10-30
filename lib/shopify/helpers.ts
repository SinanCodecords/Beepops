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

// Product tags that act as shop categories; other tags (e.g. "Jaipur Crafted") are badges.
export const CATEGORY_TAGS = [
  "Millet Protein Bars",
  "Himalayan Honey",
  "Cookies & Snacks",
  "Peanut Butter",
];

export function getCategory(tags: string[], fallback: string) {
  return tags.find((t) => CATEGORY_TAGS.includes(t)) ?? fallback;
}

// Descriptions start with a short line like "Box of 6 · Energy & Immunity." used as the card subtitle.
export function getSubtitle(description: string) {
  return description.split(". ")[0].replace(/\.$/, "");
}
