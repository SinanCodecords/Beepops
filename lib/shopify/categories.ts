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
