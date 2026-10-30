export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
];

export const ANNOUNCEMENT =
  "\u201cABOVE2000SHIPPINGFREE\u201d to get shipping free for an order above \u20b92000 \u00b7 Doctor-led clean label";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
