import Link from "next/link";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location01Icon,
  Search01Icon,
  ShoppingBag01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { CART_COOKIE, getCartQuantity } from "@/lib/shopify";
import { Logo } from "./logo";
import { MobileMenu, NavLinks } from "./nav-links";

async function BagCount() {
  const cartId = (await cookies()).get(CART_COOKIE)?.value;
  if (!cartId) return <>Bag (0)</>;
  const quantity = await getCartQuantity(cartId).catch(() => 0);
  return <>Bag ({quantity})</>;
}

export function Header() {
  return (
    <header className="sticky top-0 z-30">
      <div className="bg-forest px-4 py-2 text-center text-[11px] font-medium text-white/90">
        &ldquo;ABOVE2000SHIPPINGFREE&rdquo; to get shipping free for an order above ₹2000 ·
        Doctor-led clean label
      </div>

      <div className="relative border-b border-border/60 bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 md:px-8">
          <MobileMenu />
          <Logo />
          <NavLinks />

          <div className="ml-auto flex items-center gap-1 md:gap-3">
            {/* Location picker is a design placeholder for now. */}
            <button
              type="button"
              className="hidden h-9 w-64 items-center gap-2 rounded-full bg-muted px-3 text-xs font-medium text-foreground/80 lg:flex"
            >
              <HugeiconsIcon icon={Location01Icon} size={16} />
              Select Location
            </button>

            <Link
              href="/shop"
              aria-label="Search products"
              className="flex size-9 items-center justify-center rounded-full hover:bg-muted"
            >
              <HugeiconsIcon icon={Search01Icon} size={18} />
            </Link>
            <Link
              href="/account"
              aria-label="My account"
              className="flex size-9 items-center justify-center rounded-full hover:bg-muted"
            >
              <HugeiconsIcon icon={UserIcon} size={18} />
            </Link>
            <Link
              href="/cart"
              className="flex h-9 items-center gap-1.5 rounded-full px-2 text-xs font-medium whitespace-nowrap hover:bg-muted"
            >
              <HugeiconsIcon icon={ShoppingBag01Icon} size={18} />
              <Suspense fallback={<>Bag</>}>
                <BagCount />
              </Suspense>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
