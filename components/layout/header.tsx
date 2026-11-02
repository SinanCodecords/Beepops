import Link from "next/link";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  Location01Icon,
  Search01Icon,
  ShoppingBag01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { CART_COOKIE, getCartQuantity, isLoggedIn } from "@/lib/shopify";
import { Container } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { ANNOUNCEMENT } from "./data";
import { AccountMenu } from "./account-menu";
import { DesktopNav, MobileMenu, NavLinks } from "./header-nav";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-30">
      <div className="bg-forest px-4 py-2 text-center text-[11px] font-medium text-white/90">
        {ANNOUNCEMENT}
      </div>
      <div className="relative border-b border-border/60 bg-background">
        <Container className="flex h-16 items-center gap-6">
          <MobileMenu />
          <Logo />
          <Suspense fallback={<DesktopNav pathname="" />}>
            <NavLinks />
          </Suspense>
          <div className="ml-auto flex items-center gap-1 md:gap-3">
            {/* Location picker is a design placeholder for now. */}
            <Button
              variant="ghost"
              className="hidden w-64 justify-start gap-2 bg-muted px-3 text-xs text-foreground/80 lg:flex"
            >
              <HugeiconsIcon icon={Location01Icon} size={16} />
              Select Location
            </Button>
            <IconLink href="/shop" label="Search products" icon={Search01Icon} />
            <Suspense fallback={<LoginLink />}>
              <AccountButton />
            </Suspense>
            <BagLink />
          </div>
        </Container>
      </div>
    </header>
  );
}

function IconLink({ href, label, icon }: { href: string; label: string; icon: IconSvgElement }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-full hover:bg-muted"
    >
      <HugeiconsIcon icon={icon} size={18} />
    </Link>
  );
}

// Guests go straight to Shopify's login page; a route handler, so a plain <a>.
function LoginLink() {
  return (
    <a
      href="/account/login"
      aria-label="Log in"
      className="flex size-9 items-center justify-center rounded-full hover:bg-muted"
    >
      <HugeiconsIcon icon={UserIcon} size={18} />
    </a>
  );
}

async function AccountButton() {
  return (await isLoggedIn()) ? <AccountMenu /> : <LoginLink />;
}

function BagLink() {
  return (
    <Link
      href="/cart"
      className="flex h-9 items-center gap-1.5 rounded-full px-2 text-xs font-medium whitespace-nowrap hover:bg-muted"
    >
      <HugeiconsIcon icon={ShoppingBag01Icon} size={18} />
      <Suspense fallback={<>Bag</>}>
        <BagCount />
      </Suspense>
    </Link>
  );
}

async function BagCount() {
  const cartId = (await cookies()).get(CART_COOKIE)?.value;
  const quantity = cartId ? await getCartQuantity(cartId).catch(() => 0) : 0;
  return <>Bag ({quantity})</>;
}
